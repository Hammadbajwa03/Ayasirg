"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import "./create-profile.css";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import "react-toastify/dist/ReactToastify.css";
import { FaEdit, FaMicrophone, FaPause, FaFileAudio } from "react-icons/fa";
import { MdPlayArrow, MdPause, MdDelete } from "react-icons/md";
import Link from "next/link";
import { UserContext } from "../userContext";
import { MultiSelect } from "react-multi-select-component";

export default function CreateProfilePage() {
    const router = useRouter();
    const { cities, getLocations, locations } = useContext(UserContext);
    const [selectedCityId, setSelectedCityId] = useState("");
    const [selectedCurrentLocationId, setSelectedCurrentLocationId] = useState("");
    const [selectedLocation, setSelectedLocation] = useState([]);
    const [selectedLocationIds, setSelectedLocationIds] = useState([]);
    const fileInputRef = useRef(null);

    const [loader, setLoader] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

    useEffect(() => {
        if (selectedCityId) {
            getLocations(selectedCityId);
        }
    }, [selectedCityId]);

    const optionsLocation = locations.map((loc) => ({
        label: loc.name,
        value: loc.id
    }));

    const handleChangefieldsLocation = (selectedOptions) => {
        const safeOptions = selectedOptions || [];

        setSelectedLocation(safeOptions);

        const ids = safeOptions.map(opt => opt.value);

        setFormData((prev) => ({
            ...prev,
            interested_locations: ids,
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
        username: "",
        contact_number: "",
        interested_locations: [],
        area_name: "",
        city_id: "",
        experience: "",
        cnic: "",
        disability_status: "",
        profile_image: null,
        audio_sample_blob: null,
    });

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
    // IMAGE CHANGE
    // =========================
    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            toast.error("Only image files allowed");
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            toast.error("Image must be less than 2MB");
            return;
        }

        const previewUrl = URL.createObjectURL(file);
        setImagePreview(previewUrl);

        setFormData((prev) => ({
            ...prev,
            profile_image: file,
        }));
    };

    // =========================
    // REMOVE IMAGE
    // =========================
    const handleRemoveImage = (e) => {
        e.stopPropagation();

        setImagePreview(null);
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

        if (!formData.username) errors.username = "Username is required";
        if (!formData.contact_number) errors.contact_number = "Phone number is required";
        if (!formData.city_id) errors.city_id = "City is required";
        if (!formData.area_name) errors.area_name = "Current location is required";
        if (!formData.interested_locations.length) errors.interested_locations = "Select at least one location";
        if (!formData.profile_image) errors.profile_image = "Profile image is required";
        if (!formData.audio_sample_blob) errors.audio_sample_blob = "Audio is required";

        // ❌ STOP if errors
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setFormErrors({});

        setLoader(true);

        try {
            const data = new FormData();

            // append normal fields
            for (const [key, value] of Object.entries(formData)) {
                if (value === null || value === undefined || value === "") continue;

                // ✅ ARRAY
                if (Array.isArray(value)) {
                    value.forEach((v) => data.append(`${key}[]`, v));
                }

                // ✅ AUDIO → convert to base64
                else if (key === "audio_sample_blob" && value) {
                    const base64 = await toBase64(value);
                    data.append("audio_sample_blob", base64);
                }

                // ✅ NORMAL
                else {
                    data.append(key, value);
                }
            }

            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/create`, {
                method: "POST",
                body: data,
            });

            const json = await res.json().catch(() => ({}));

            if (!res.ok) {
                toast.error(json.error || "Failed to create profile");
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
                            <div
                                className="image_div cursor-pointer relative w-32 h-32 mx-auto"
                                onClick={() => fileInputRef.current?.click()}
                            >
                                <img
                                    src={imagePreview || "/assets/person_img.png"}
                                    alt="Profile"
                                    className="w-32 h-32 rounded-full object-cover border"
                                />

                                {!imagePreview && (
                                    <FaEdit className="edit_icon absolute bottom-2 right-2 text-white bg-black p-1 rounded-full text-sm" />
                                )}

                                {imagePreview && (
                                    <IoMdClose
                                        className="edit_icon absolute top-2 right-2 text-white bg-red-600 p-1 rounded-full text-sm"
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

                        {/* CITY */}
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="select-wrapper">
                                <select
                                    className="input_auth pad"
                                    name="city_id"
                                    value={selectedCityId || ""}
                                    required
                                    onChange={(e) => {
                                        const selectedCityId = e.target.value;

                                        setSelectedCityId(selectedCityId);

                                        // reset everything when city changes
                                        setSelectedLocation([]);
                                        setSelectedCurrentLocationId("");

                                        setFormData((prev) => ({
                                            ...prev,
                                            city_id: selectedCityId,
                                            interested_locations: [],
                                            area_name: "",
                                        }));
                                    }}
                                >
                                    <option value="" disabled>
                                        Select City
                                    </option>

                                    {cities?.map((city) => (
                                        <option key={city.id} value={city.id}>
                                            {city.name}
                                        </option>
                                    ))}
                                </select>
                                {formErrors.city_id && <small style={{ color: "red" }}>{formErrors.city_id}</small>}
                            </div>
                        </div>

                        {/* INTERESTED LOCATION */}
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <MultiSelect
                                className="input_auth"
                                options={optionsLocation}
                                value={selectedLocation}
                                onChange={handleChangefieldsLocation}
                                labelledBy="Interested Locations"
                                hasSelectAll={true}
                                isDisabled={!locations.length}
                                overrideStrings={{
                                    selectSomeItems: "Interested Locations",
                                    allItemsAreSelected: "All Locations Selected",
                                    selectAll: "Select All",
                                    search: "Search"
                                }}
                            />
                            {formErrors.interested_locations && <small style={{ color: "red" }}>{formErrors.interested_locations}</small>}
                        </div>

                        {/* CURRENT LOCATION */}
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="select-wrapper">
                                <select
                                    className="input_auth pad"
                                    style={{ color: !selectedCurrentLocationId ? "#999" : "#000" }}
                                    value={selectedCurrentLocationId || ""}
                                    onChange={(e) => {
                                        const id = e.target.value;
                                        const loc = locations.find(l => l.id === parseInt(id));

                                        setSelectedCurrentLocationId(id);

                                        setFormData((prev) => ({
                                            ...prev,
                                            area_name: loc?.name || "",
                                        }));
                                    }}
                                >
                                    <option value="" disabled>
                                        Current Location
                                    </option>

                                    {locations?.map((location) => (
                                        <option key={location.id} value={location.id}>
                                            {location.name}
                                        </option>
                                    ))}
                                </select>
                                {formErrors.area_name && <small style={{ color: "red" }}>{formErrors.area_name}</small>}
                            </div>
                        </div>

                        {/* EXPERIENCE */}
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <input
                                type="text"
                                className="input_auth"
                                placeholder="Experience"
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                            />
                            {formErrors.experience && <small style={{ color: "red" }}>{formErrors.experience}</small>}
                        </div>

                        {/* CNIC */}
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <input
                                type="text"
                                className="input_auth"
                                placeholder="CNIC"
                                name="cnic"
                                value={formData.cnic}
                                onChange={handleChange}
                            />
                        </div>

                        {/* DISABILITY */}
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <input
                                type="text"
                                className="input_auth"
                                placeholder="Disability"
                                name="disability_status"
                                value={formData.disability_status}
                                onChange={handleChange}
                            />
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