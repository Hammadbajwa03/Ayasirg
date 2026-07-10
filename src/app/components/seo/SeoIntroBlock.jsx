import "./seo-intro.css";

export default function SeoIntroBlock({ paragraphs, className = "seo_intro_block" }) {
  if (!paragraphs?.length) return null;

  return (
    <div className={className}>
      {paragraphs.map((text, index) => (
        <p
          key={text.slice(0, 48)}
          className={`seo_intro_text${
            index === paragraphs.length - 1 ? " mb-0" : ""
          }`}
        >
          {text}
        </p>
      ))}
    </div>
  );
}
