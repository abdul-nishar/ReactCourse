/* eslint-disable */
import { useContext } from "react";
import { ManagementContext } from "../store/management-context";
import image from "../src/assets/no-projects.png";
import Button from "./Button";

export default function EmptyContentArea() {
  const { ShowCreatePage } = useContext(ManagementContext);
  return (
    <div className="basis-3/4 text-center min-h-screen mt-10 flex items-start justify-center pt-28">
      <div className="">
        <p>
          <img className="h-24 mx-auto" src={image} />
        </p>
        <h2 className="my-8 text-2xl  text-stone-700 font-semibold">
          No Project Selected
        </h2>
        <p className="mt-8 mb-12 text-xl text-stone-400">
          Select a project or get started with a new one
        </p>
        <Button
          onClick={ShowCreatePage}
          additionalClasses="bg-stone-700 text-stone-400 hover:text-stone-300"
          text="Create new project"
        >
          Create new project
        </Button>
      </div>
    </div>
  );
}
