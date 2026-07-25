import { ProjectCase } from "./ProjectCase";

export async function Work() {
  return (
    <>
      <ProjectCase namespace="Project" sectionId="work" />
      <ProjectCase namespace="ProjectGutenberg" />
    </>
  );
}
