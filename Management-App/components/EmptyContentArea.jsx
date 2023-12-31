/* eslint-disable */
import Button from "./Button";

export default function EmptyContentArea({ onShow }) {
  return (
    <div className="basis-3/4 text-center min-h-screen mt-10 flex items-start justify-center pt-28">
      <div className="">
        <p>
          <img className="h-24 mx-auto" src="./src/assets/no-projects.png" />
        </p>
        <h2 className="my-8 text-2xl  text-stone-700 font-semibold">
          No Project Selected
        </h2>
        <p className="mt-8 mb-12 text-xl text-stone-400">
          Select a project or get started with a new one
        </p>
        <Button
          onClick={onShow}
          additionalClasses="bg-stone-700 text-stone-400"
          text="Create new project"
        >
          Create new project
        </Button>
      </div>
    </div>
  );
}
