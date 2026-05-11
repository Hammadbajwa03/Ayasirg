"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import "./create-profile.css";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import "react-toastify/dist/ReactToastify.css";
import { FaEdit, FaMicrophone, FaPause, FaFileAudio, FaEye, FaEyeSlash, FaPlus } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdPlayArrow, MdPause, MdDelete } from "react-icons/md";
import Link from "next/link";
import { UserContext } from "../userContext";
import { MultiSelect } from "react-multi-select-component";
import Select from "react-select";
import imageCompression from "browser-image-compression";

const DEFAULT_PROFILE_AVATAR =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <defs>
                <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#ffe5e5"/>
                    <stop offset="100%" stop-color="#fff4f4"/>
                </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="100" fill="url(#bg)"/>
            <circle cx="100" cy="80" r="34" fill="#B50000"/>
            <path d="M40,178 C40,138 70,120 100,120 C130,120 160,138 160,178 Z" fill="#B50000"/>
        </svg>`
    );

/** react-select: no blue glow / focus ring on the control */
const reactSelectStyles = {
    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
    control: (base, state) => ({
        ...base,
        boxShadow: "none",
        outline: "none",
        border: "none",
        borderRadius: "32px",
        borderColor: state.isFocused ? "#ced4da" : "#ced4da",
    }),
};

export default function CreateProfilePage() {
    const router = useRouter();
    const {
        cities,
        getLocations,
        locations,
        apiCategory2,
        area,
        getAreas,
    } = useContext(UserContext);

    const fileInputRef = useRef(null);
    const cnicScanRef = useRef(null);
    const pictureRef = useRef(null);
    const billingScanRef = useRef(null);

    const [loader, setLoader] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    // single-select dropdowns
    const [selectedAreaId, setSelectedAreaId] = useState("");

    // multi-selects
    const [selectedFields, setSelectedFields] = useState([]);

    // dynamic city + areas rows (match MyFormPage pattern)
    const [rows, setRows] = useState([{ id: Date.now(), city: null, areas: [] }]);

    // load areas once
    useEffect(() => {
        if (typeof getAreas === "function") getAreas();
    }, []);

    // when any row's city changes, fetch its locations so areaOptions populate
    useEffect(() => {
        const cityIds = rows.map((r) => r.city?.value).filter(Boolean);
        cityIds.forEach((id) => getLocations(id));
    }, [rows.map((r) => r.city?.value).join(",")]);

    const optionsCategory = (apiCategory2 || []).map((cat) => ({
        label: cat.name,
        value: cat.id,
    }));

    const optionsAreas = (area || []).map((a) => ({
        label: a.name,
        value: a.id,
    }));

    const handleFieldsChange = (selected) => {
        const safe = selected || [];
        setSelectedFields(safe);
        setFormData((prev) => ({
            ...prev,
            fields_of_interest: safe.map((o) => o.value),
        }));
    };

    const handleCityChange = (selectedCity, rowId) => {
        const updatedRows = rows.map((r) =>
            r.id === rowId ? { ...r, city: selectedCity, areas: [] } : r
        );
        setRows(updatedRows);

        setFormData((prev) => ({
            ...prev,
            interested_cities: [
                ...new Set(updatedRows.map((r) => r.city?.value).filter(Boolean)),
            ],
            interested_locations: [
                ...new Set(updatedRows.flatMap((r) => r.areas.map((a) => a.value))),
            ],
        }));
    };

    const handleAreaChange = (selectedAreas, rowId) => {
        const safe = selectedAreas || [];
        const updatedRows = rows.map((r) =>
            r.id === rowId ? { ...r, areas: safe } : r
        );
        setRows(updatedRows);

        setFormData((prev) => ({
            ...prev,
            interested_locations: [
                ...new Set(updatedRows.flatMap((r) => r.areas.map((a) => a.value))),
            ],
        }));
    };

    const addRow = () => {
        setRows((prev) => [
            ...prev,
            { id: Date.now(), city: null, areas: [] },
        ]);
    };

    const handleDeleteRow = (rowId) => {
        const remaining = rows.filter((r) => r.id !== rowId);
        setRows(remaining);

        setFormData((prev) => ({
            ...prev,
            interested_cities: [
                ...new Set(remaining.map((r) => r.city?.value).filter(Boolean)),
            ],
            interested_locations: [
                ...new Set(remaining.flatMap((r) => r.areas.map((a) => a.value))),
            ],
        }));
    };

    // audio
    const audioRef = useRef(null);
    const streamRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const timerIntervalRef = useRef(null);
    const chunksRef = useRef([]);

    const [audioURL, setAudioURL] = useState(null);
    const [audioBlob, setAudioBlob] = useState(null);

    const [isRecording, setIsRecording] = useState(false);
    const [timer, setTimer] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    // ✅ formErrors was missing in your code
    const [formErrors, setFormErrors] = useState({});

    const [formData, setFormData] = useState({
        profile_image: null,
        username: "",
        contact_number: "",
        gender: "",
        // cnic: "",
        age: "",
        password: "",
        fields_of_interest: [],
        interested_cities: [],
        interested_locations: [],
        area_id: "",
        experience: "",
        disability_status: "",
        audio_sample_blob: null,
    });

    const cnicRegex = /^[0-9]{5}-[0-9]{7}-[0-9]$/;

    const formatCNIC = (value) => {
        const cleaned = (value || "").replace(/\D/g, "");
        const part1 = cleaned.slice(0, 5);
        const part2 = cleaned.slice(5, 12);
        const part3 = cleaned.slice(12, 13);
        return [part1, part2, part3].filter(Boolean).join("-");
    };

    const handleChangeCnic = (e) => {
        setFormData((prev) => ({ ...prev, cnic: formatCNIC(e.target.value) }));
    };

    const handleFileInputChange = (e) => {
        const { name, files } = e.target;
        const file = files?.[0];
        if (!file) return;
        if (!file.type.startsWith("image/")) {
            toast.error("Only image files allowed");
            return;
        }
        setFormData((prev) => ({ ...prev, [name]: file }));
    };


    const formatTime = (sec) => {
        const m = String(Math.floor(sec / 60)).padStart(2, "0");
        const s = String(sec % 60).padStart(2, "0");
        return `${m}:${s}`;
    };

    // =========================
    // INPUT CHANGE
    // =========================
    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (files) {
            setFormData((prev) => ({
                ...prev,
                [name]: files[0],
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    // =========================
    // IMAGE CHANGE (profile image with compression)
    // =========================
    const handleFileChange = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            toast.error("Only image files allowed");
            return;
        }

        try {
            const compressed = await imageCompression(file, {
                maxSizeMB: 1,
                maxWidthOrHeight: 1024,
                useWebWorker: true,
            });
            const fixedFile = new File([compressed], file.name, {
                type: compressed.type || file.type,
            });

            setImagePreview(URL.createObjectURL(fixedFile));
            setFormData((prev) => ({ ...prev, profile_image: fixedFile }));
        } catch {
            setImagePreview(URL.createObjectURL(file));
            setFormData((prev) => ({ ...prev, profile_image: file }));
        }
    };

    // =========================
    // REMOVE IMAGE
    // =========================
    const handleRemoveImage = (e) => {
        e?.preventDefault?.();
        e?.stopPropagation?.();

        setImagePreview((prev) => {
            if (prev) URL.revokeObjectURL(prev);
            return null;
        });
        setFormData((prev) => ({
            ...prev,
            profile_image: null,
        }));

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    // =========================
    // AUDIO: START RECORDING
    // =========================
    const handleStartRecording = async () => {
        try {
            // reset any previous errors
            setFormErrors((p) => ({ ...p, audio_sample_blob: "" }));

            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            streamRef.current = stream;

            // Pick a supported mimeType (helps on some browsers)
            let options = {};
            if (window.MediaRecorder) {
                const preferred = "audio/webm;codecs=opus";
                if (MediaRecorder.isTypeSupported?.(preferred)) {
                    options = { mimeType: preferred };
                }
            }

            const recorder = new MediaRecorder(stream, options);
            mediaRecorderRef.current = recorder;

            chunksRef.current = [];

            recorder.ondataavailable = (e) => {
                if (e.data && e.data.size > 0) chunksRef.current.push(e.data);
            };

            recorder.onstop = () => {
                try {
                    const blob = new Blob(chunksRef.current, { type: recorder.mimeType || "audio/webm" });
                    const url = URL.createObjectURL(blob);

                    setAudioBlob(blob);
                    setAudioURL(url);
                    setIsPlaying(false);

                    // store in formData
                    setFormData((prev) => ({
                        ...prev,
                        audio_sample_blob: blob,
                    }));
                } finally {
                    // stop mic tracks
                    if (streamRef.current) {
                        streamRef.current.getTracks().forEach((t) => t.stop());
                        streamRef.current = null;
                    }
                }
            };

            recorder.start();

            setIsRecording(true);
            setTimer(0);

            timerIntervalRef.current = setInterval(() => {
                setTimer((t) => t + 1);
            }, 1000);
        } catch (err) {
            toast.error("Microphone permission denied");
        }
    };

    // =========================
    // AUDIO: STOP RECORDING
    // =========================
    const handleStopRecording = () => {
        const rec = mediaRecorderRef.current;

        if (timerIntervalRef.current) {
            clearInterval(timerIntervalRef.current);
            timerIntervalRef.current = null;
        }

        setIsRecording(false);
        setTimer(0);

        if (rec && rec.state !== "inactive") {
            rec.stop();
        } else {
            // fallback: stop stream if recorder not active
            if (streamRef.current) {
                streamRef.current.getTracks().forEach((t) => t.stop());
                streamRef.current = null;
            }
        }
    };

    // =========================
    // AUDIO UPLOAD
    // =========================
    const handleAudioUpload = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith("audio/")) {
            toast.error("Only audio files allowed");
            return;
        }

        const url = URL.createObjectURL(file);

        setAudioURL(url);
        setAudioBlob(file);
        setIsPlaying(false);

        setFormData((prev) => ({
            ...prev,
            audio_sample_blob: file,
        }));
    };

    // =========================
    // DELETE AUDIO
    // =========================
    const handleDeleteAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }

        setIsPlaying(false);

        setAudioBlob(null);
        setFormData((prev) => ({ ...prev, audio_sample_blob: null }));

        // revoke old URL to avoid memory leaks
        if (audioURL) URL.revokeObjectURL(audioURL);
        setAudioURL(null);
    };

    // =========================
    // PLAY / PAUSE AUDIO
    // =========================
    const togglePlay = async () => {
        const el = audioRef.current;
        if (!el) return;

        if (el.paused) {
            try {
                await el.play();
                setIsPlaying(true);
            } catch {
                // play can fail if browser blocks autoplay without gesture
                setIsPlaying(false);
            }
        } else {
            el.pause();
            setIsPlaying(false);
        }
    };

    // =========================
    // CLEANUP MEMORY
    // =========================
    useEffect(() => {
        return () => {
            if (imagePreview) URL.revokeObjectURL(imagePreview);
        };
    }, [imagePreview]);

    useEffect(() => {
        return () => {
            if (audioURL) URL.revokeObjectURL(audioURL);
        };
    }, [audioURL]);

    useEffect(() => {
        return () => {
            // stop recorder + mic if component unmounts
            if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);

            const rec = mediaRecorderRef.current;
            if (rec && rec.state !== "inactive") rec.stop();

            if (streamRef.current) {
                streamRef.current.getTracks().forEach((t) => t.stop());
                streamRef.current = null;
            }
        };
    }, []);

    const toBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
        });

    // =========================
    // SUBMIT
    // =========================
    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = {};

        if (!formData.profile_image) errors.profile_image = "Profile image is required";
        if (!formData.username) errors.username = "Username is required";
        if (!formData.contact_number) errors.contact_number = "Phone number is required";
        if (!formData.gender) errors.gender = "Gender is required";
        if (!formData.age) errors.age = "Age is required";
        if (!formData.interested_cities.length)
            errors.interested_cities = "Select at least one interested city";
        if (!formData.interested_locations.length)
            errors.interested_locations = "Select at least one interested location";
        if (!formData.fields_of_interest.length)
            errors.fields_of_interest = "Select fields of interest";
        if (!formData.audio_sample_blob) errors.audio_sample_blob = "Audio is required";
        if (!formData.password) errors.password = "Password is required";

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            toast.error("Please fill all required fields.");
            return;
        }

        setFormErrors({});
        setLoader(true);

        try {
            const data = new FormData();

            // simple text fields
            const textFields = [
                "username",
                "contact_number",
                "gender",
                "age",
                "experience",
                "password",
            ];
            textFields.forEach((k) => {
                const v = formData[k];
                if (v !== null && v !== undefined && String(v).trim() !== "") {
                    data.append(k, v);
                }
            });

            // disability_status: always send (even empty) so API gets the key
            data.append(
                "disability_status",
                formData.disability_status ?? ""
            );

            // current area (single id)
            if (formData.area_id) data.append("area_id", formData.area_id);

            // array fields ([])
            const arrayFields = [
                "interested_cities",
                "interested_locations",
                "fields_of_interest",
            ];
            arrayFields.forEach((k) => {
                (formData[k] || []).forEach((v) => data.append(`${k}[]`, v));
            });

            // file fields
            const fileFields = [
                "profile_image",
            ];
            fileFields.forEach((k) => {
                if (formData[k] instanceof File || formData[k] instanceof Blob) {
                    data.append(k, formData[k]);
                }
            });

            // audio (base64)
            if (formData.audio_sample_blob) {
                const base64 = await toBase64(formData.audio_sample_blob);
                data.append("audio_sample_blob", base64);
            }

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/individual-user/store`,
                {
                    method: "POST",
                    body: data,
                }
            );

            const json = await res.json().catch(() => ({}));

            if (!res.ok) {
                if (json?.errors) {
                    const mapped = {};
                    Object.keys(json.errors).forEach((k) => {
                        mapped[k] = json.errors[k][0];
                    });
                    setFormErrors(mapped);
                    const firstKey = Object.keys(json.errors)[0];
                    toast.error(json.errors[firstKey][0]);
                } else {
                    toast.error(json.error || json.message || "Failed to create profile");
                }
                return;
            }

            toast.success("Profile created successfully");
            router.push("/");
        } catch (err) {
            toast.error("Something went wrong");
        } finally {
            setLoader(false);
        }
    };

    return (
        <div className="create_profile auth_bg_Profile">
            <div className="container p-2 bg_white">

                {/* <p style={{ direction: "rtl" }}>
        Aya-Sir-G! میں خوش آمدید! اگر آپ گھر بیٹھے بغیر کسی سے مانگے اور بغیر کسی
        reference کے کمانا چاہتے ہیں تو اپنا پروفائل بنائیں۔
        فارم مکمل کرنے کے بعد آپ کا پروفائل ہماری ویب سائٹ پر نظر آئے گا۔
        Aya-Sir-G! آپ سے کوئی فیس نہیں لیتا۔
      </p> */}
                <h1 className="auth_heading margin_bottom">Create Profile</h1>
                <p className="px-3">
                    <strong>Welcome to Aya-Sir-G!</strong> Create your profile if you want to earn while sitting at home,
                    without asking anyone and without needing any reference.
                    After filling out this form, your profile will be visible on our website.
                    Aya-Sir-G! does not charge any money from you.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="row">
                        {/* IMAGE UPLOAD */}
                        <div className="col-12 text-center mb-3">
                            <div className="image_div relative mx-auto inline-block h-32 w-32 shrink-0">
                                <img
                                    src={imagePreview || DEFAULT_PROFILE_AVATAR}
                                    alt="Profile"
                                    className="h-32 w-32 rounded-full border object-cover"
                                />

                                {!imagePreview && (
                                    <FaEdit
                                        className="edit_icon absolute bottom-2 right-2 cursor-pointer rounded-full bg-black p-1 text-sm text-white"
                                        onClick={() => fileInputRef.current?.click()}
                                    />
                                )}

                                {imagePreview && (
                                    <IoMdClose
                                        className="edit_icon absolute bottom-2 right-2 cursor-pointer rounded-full bg-black p-1 text-sm text-white"
                                        onClick={handleRemoveImage}
                                    />
                                )}

                                <input
                                    type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    hidden
                                />
                            </div>
                            {formErrors.profile_image && <small style={{ color: "red" }}>{formErrors.profile_image}</small>}
                        </div>

                        {/* NAME */}
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <input
                                type="text"
                                className="input_auth"
                                placeholder="Username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                            {formErrors.username && <small style={{ color: "red" }}>{formErrors.username}</small>}
                        </div>

                        {/* PHONE */}
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <input
                                type="text"
                                className="input_auth"
                                placeholder="Phone Number"
                                name="contact_number"
                                value={formData.contact_number}
                                onChange={handleChange}
                                required
                            />
                            {formErrors.contact_number && <small style={{ color: "red" }}>{formErrors.contact_number}</small>}
                        </div>

                        {/* PASSWORD */}
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <input
                                type="password"
                                className="input_auth"
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            {formErrors.password && <small style={{ color: "red" }}>{formErrors.password}</small>}
                        </div>

                        {/* GENDER */}
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <select
                                className="input_auth pad"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>
                                    Select Gender
                                </option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            {formErrors.gender && (
                                <small style={{ color: "red" }}>{formErrors.gender}</small>
                            )}
                        </div>

                        {/* CNIC */}
                        {/* <div className="col-lg-6 col-md-6 col-sm-12">
                            <input
                                type="text"
                                className="input_auth"
                                placeholder="CNIC e.g. 12345-1234567-1"
                                name="cnic"
                                value={formData.cnic}
                                onChange={handleChangeCnic}
                            />
                            {formErrors.cnic && (
                                <small style={{ color: "red" }}>{formErrors.cnic}</small>
                            )}
                        </div> */}

                        {/* INTERESTED CITIES + LOCATIONS (dynamic rows) */}
                        <div className="col-12 text-start">
                            {rows.map((row) => {
                                const areaOptions = row.city
                                    ? (locations || [])
                                        .filter(
                                            (loc) =>
                                                String(loc.city_id) === String(row.city?.value)
                                        )
                                        .map((loc) => ({ value: loc.id, label: loc.name }))
                                    : [];

                                return (
                                    <div className="row" key={row.id}>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <Select
                                                classNamePrefix="cp_rs_select"
                                                options={(cities || []).map((c) => ({
                                                    label: c.name,
                                                    value: c.id,
                                                }))}
                                                className="input_auth"
                                                value={row.city}
                                                onChange={(city) => handleCityChange(city, row.id)}
                                                placeholder="Interested City"
                                                isClearable
                                                isSearchable
                                                menuPortalTarget={
                                                    typeof document !== "undefined" ? document.body : null
                                                }
                                                styles={reactSelectStyles}
                                            />
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="location_row_flex">
                                                <div className="location_row_multiselect">
                                                    <MultiSelect
                                                        className="input_auth"
                                                        options={areaOptions}
                                                        value={row.areas}
                                                        onChange={(areas) =>
                                                            handleAreaChange(areas, row.id)
                                                        }
                                                        labelledBy="Interested Locations"
                                                        hasSelectAll={false}
                                                        overrideStrings={{
                                                            selectSomeItems: "Interested Locations",
                                                            search: "Search",
                                                        }}
                                                    />
                                                </div>
                                                <div className="location_row_actions">
                                                    <button
                                                        className="row_btn"
                                                        type="button"
                                                        onClick={addRow}
                                                        aria-label="Add row"
                                                    >
                                                        <FaPlus />
                                                    </button>
                                                    {rows.length > 1 && (
                                                        <button
                                                            className="row_btn row_btn_delete"
                                                            type="button"
                                                            onClick={() => handleDeleteRow(row.id)}
                                                            aria-label="Delete row"
                                                        >
                                                            <IoMdClose />
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            {formErrors.interested_cities && (
                                <small style={{ color: "red" }}>
                                    {formErrors.interested_cities}
                                </small>
                            )}
                            {formErrors.interested_locations && (
                                <small style={{ color: "red", display: "block" }}>
                                    {formErrors.interested_locations}
                                </small>
                            )}
                        </div>

                        {/* CURRENT AREA */}
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <Select
                                classNamePrefix="cp_rs_select"
                                className="input_auth"
                                options={optionsAreas}
                                value={
                                    optionsAreas.find(
                                        (o) => o.value === parseInt(selectedAreaId)
                                    ) || null
                                }
                                onChange={(opt) => {
                                    const id = opt ? opt.value : "";
                                    setSelectedAreaId(id);
                                    setFormData((prev) => ({ ...prev, area_id: id }));
                                }}
                                placeholder="Current Area"
                                isClearable
                                isSearchable
                                menuPortalTarget={
                                    typeof document !== "undefined" ? document.body : null
                                }
                                styles={reactSelectStyles}
                            />
                            {formErrors.area_id && (
                                <small style={{ color: "red" }}>{formErrors.area_id}</small>
                            )}
                        </div>


                        {/* FIELDS OF INTEREST */}
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <MultiSelect
                                className="input_auth"
                                options={optionsCategory}
                                value={selectedFields}
                                onChange={handleFieldsChange}
                                labelledBy="Select Fields"
                                hasSelectAll={false}
                                overrideStrings={{
                                    selectSomeItems: "Fields of Interest",
                                    search: "Search",
                                }}
                            />
                            {formErrors.fields_of_interest && (
                                <small style={{ color: "red" }}>
                                    {formErrors.fields_of_interest}
                                </small>
                            )}
                        </div>


                        {/* AGE */}
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <input
                                type="number"
                                className="input_auth"
                                placeholder="Age"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                            />
                            {formErrors.age && (
                                <small style={{ color: "red" }}>{formErrors.age}</small>
                            )}
                        </div>

                        {/* DISABILITY */}
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <input
                                type="text"
                                className="input_auth"
                                placeholder="Disability Status"
                                name="disability_status"
                                value={formData.disability_status}
                                onChange={handleChange}
                            />
                        </div>

                        {/* EXPERIENCE */}
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <input
                                type="number"
                                className="input_auth"
                                placeholder="Experience (years)"
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                            />
                            {formErrors.experience && (
                                <small style={{ color: "red" }}>{formErrors.experience}</small>
                            )}
                        </div>

                        {/* Audio Sample */}
                        <div className="w-100 my-2 text-start px-2 py-3">
                            <div className="audio-recorder-container">
                                {/* Recorder Section */}
                                {!audioURL && (
                                    <div className="recorder-box">
                                        <div
                                            className={`mic-button ${isRecording ? "recording" : ""}`}
                                            onClick={isRecording ? handleStopRecording : handleStartRecording}
                                        >
                                            {!isRecording ? <FaMicrophone /> : <FaPause />}
                                        </div>

                                        {!isRecording && (
                                            <div>
                                                <p style={{ fontWeight: "600", marginRight: "10px" }}>Record Voice</p>
                                            </div>
                                        )}

                                        {/* Audio File Upload */}
                                        {!audioURL && !isRecording && (
                                            <div className="p-2">
                                                <input
                                                    type="file"
                                                    accept="audio/*"
                                                    id="audioUpload"
                                                    onChange={handleAudioUpload}
                                                    style={{ display: "none" }}
                                                />
                                                <label htmlFor="audioUpload" className="upload-label">
                                                    <FaFileAudio size={22} style={{ color: "gray" }} />
                                                    <span className="tooltip-text">Upload audio file</span>
                                                </label>
                                            </div>
                                        )}

                                        {isRecording && (
                                            <div className="bars-animation">
                                                {Array.from({ length: 25 }).map((_, index) => (
                                                    <div key={index} style={{ animationDelay: `${index * 0.05}s` }} />
                                                ))}
                                            </div>
                                        )}

                                        {isRecording && <div className="timer">{formatTime(timer)}</div>}
                                    </div>
                                )}

                                {/* Playback Section */}
                                {audioURL && (
                                    <div className="audio-bubble-container right">
                                        <div className="play-icon-with-bars" onClick={togglePlay}>
                                            {isPlaying ? (
                                                <div className="play-icon">
                                                    <MdPause />
                                                </div>
                                            ) : (
                                                <div className="play-icon">
                                                    <MdPlayArrow />
                                                </div>
                                            )}

                                            <div className={`bars-animation-m ${isPlaying ? "playing" : ""}`}>
                                                {[...Array(16)].map((_, i) => (
                                                    <span key={i} />
                                                ))}
                                            </div>
                                        </div>

                                        <MdDelete className="delete-icon" onClick={handleDeleteAudio} />

                                        <audio
                                            ref={audioRef}
                                            src={audioURL}
                                            onEnded={() => setIsPlaying(false)}
                                            className="custom-audio-player"
                                        />
                                    </div>
                                )}

                            </div>

                            {formErrors.audio_sample_blob && (
                                <small style={{ color: "red" }}>{formErrors.audio_sample_blob}</small>
                            )}
                        </div>
                    </div>

                    {/* SUBMIT */}
                    <button className="sign_in mt-3" type="submit" disabled={loader}>
                        {loader ? "Creating..." : "Create Profile"}
                    </button>

                    {/* FOOTER */}
                    <div className="d-flex increase_w">
                        <div className="logo_div hide_logo" style={{ width: "fit-content", zIndex: 99 }}>
                            <Link href={'/'}><Image src="/assets/ayasirglogo.png" width={100} height={100} alt="" className="logo" /></Link>
                        </div>
                        <div className="increase_w">
                            <Link href="/login" id="sign_p" className="term" style={{ textDecoration: "none", textAlign: "center" }}>
                                <p className="text-center mt-2 term" style={{ color: "#B50000", marginLeft: "-170px" }}>Back to sign In</p>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}