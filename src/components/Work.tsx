import { ProjectCase } from "./ProjectCase";

export async function Work() {
  return (
    <div id="work">
      <ProjectCase
        namespace="Project"
        sectionId="timecode-sites"
        className="section-pad border-t border-line py-24 md:py-32 scroll-mt-24"
      />
      <ProjectCase
        namespace="ProjectGutenberg"
        sectionId="gutenberg-block-system"
        className="section-pad border-t border-line py-24 md:py-32 scroll-mt-24"
      />
    </div>
  );
}
