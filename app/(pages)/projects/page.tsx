import SingleProjectItem from "@/components/pages/projects/single-project-item";
import projectConfig from "@/config/pages/projects";

export default async function ProjectPage() {
  return (
    <div className="grid grid-cols-1 gap-6 md:gap-8">
      {projectConfig.map((item, index) => (
        <SingleProjectItem key={index} project={item} />
      ))}
    </div>
  );
}
