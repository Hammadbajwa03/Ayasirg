import { getServiceChooseContent } from "@/app/lib/serviceChooseContent";
import { getServiceThemePrefix } from "@/app/lib/servicePageThemes";

export default function ServiceChooseSection({ slug }) {
  const prefix = getServiceThemePrefix(slug);
  const content = getServiceChooseContent(slug);

  if (!prefix || !content) return null;

  return (
    <section className={`${prefix}_content_block`}>
      <div className="container">
        <div className={`${prefix}_content_wrapper`}>
          <h2 className={`${prefix}_section_heading`}>
            How to Choose the Right{" "}
            <span className="red_title">{content.highlight}</span>
          </h2>
          {content.paragraphs.map((text, index) => (
            <p
              key={text.slice(0, 48)}
              className={`${prefix}_content_text${
                index === content.paragraphs.length - 1 ? " mb-0" : ""
              }`}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
