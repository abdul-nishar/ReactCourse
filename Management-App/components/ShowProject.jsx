/* eslint-disable */
import { UniqueNumber } from "unique-string-generator";
import { useContext } from "react";
import { ManagementContext } from "../store/management-context";

import { useRef } from "react";
import Button from "./Button";
import Task from "./Tasks";

export default function ShowProject({}) {
  const { FindProject, DeleteProject, CreateTask, DeleteTask } =
    useContext(ManagementContext);
  const taskRef = useRef();

  const project = FindProject();

  const formattedDescription = project.description.replace(/\n/g, "\n");
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="basis-3/4 min-h-screen">
      <div className=" w-4/5 ml-12 mt-28">
        <div className="flex justify-between ">
          <h1 className="text-zinc-600 text-5xl font-bold">{project.title}</h1>
          <Button
            additionalClasses="text-2xl text-stone-600 hover:text-red-600"
            text="Delete"
            onClick={() => DeleteProject(project)}
          />
        </div>
        <p className="text-xl text-stone-400 my-4">{formattedDate}</p>
        <pre className="text-lg text-stone-600 my-6 whitespace-pre-wrap">
          {formattedDescription}
        </pre>
        <hr className="bg-stone-300 h-0.5" />
        <h1 className="text-zinc-800 text-4xl font-bold my-6">Tasks</h1>
        <input
          type="text"
          className="bg-stone-200 rounded-sm w-1/2 h-12 text-xl text-stone-800 focus:bg-zinc-800 focus:text-amber-100 font-medium px-3 mb-4"
          ref={taskRef}
        ></input>
        <button
          onClick={() => {
            if (taskRef.current.value !== "")
              CreateTask(
                { task: taskRef.current.value, id: UniqueNumber() },
                project
              );
            taskRef.current.value = "";
          }}
          className="mx-8 text-2xl text-stone-600 hover:text-zinc-900"
        >
          Add Task
        </button>
        {project.tasks.length > 0 ? (
          <div className="mt-8 mb-16 bg-zinc-100 px-10 py-6 rounded-md">
            {project.tasks.map((taskObj) => (
              <Task
                key={taskObj.id}
                clearTask={() => DeleteTask(taskObj.id, project.id)}
              >
                {taskObj.task}
              </Task>
            ))}
          </div>
        ) : (
          <p className="text-2xl my-4">
            This project does not have any tasks yet.
          </p>
        )}
      </div>
    </div>
  );
}
