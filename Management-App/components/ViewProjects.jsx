/* eslint-disable */
import Button from "./Button";

export default function ViewProjects({ onShow, projects, onSelect }) {
  return (
    <div className="bg-zinc-950 basis-1/4 rounded-tr-xl mt-12 pl-12">
      <h1 className="text-orange-50 text-4xl font-semibold pt-16 mb-12">
        Your Projects
      </h1>
      <Button
        onClick={onShow}
        text="+ Add Project"
        additionalClasses="text-stone-400 bg-stone-700 hover:text-stone-700 hover:bg-stone-400"
      />
      <div className="mt-12">
        {projects.map((project) => (
          <p
            key={project.id}
            id={project.id}
            className="py-3 pl-3 mr-10 text-xl rounded-sm text-stone-400 hover:text-orange-50 hover:bg-zinc-800"
            onClick={() => onSelect(project.id)}
          >
            {project.title}
          </p>
        ))}
      </div>
    </div>
  );
}
