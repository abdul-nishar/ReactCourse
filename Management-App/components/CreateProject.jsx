/* eslint-disable */
import { UniqueNumber } from "unique-string-generator";

import { useRef } from "react";
import Input from "./CustomInput";
import Button from "./Button";

export default function CreateProject({ onHide, onSave }) {
  const titleRef = useRef();
  const descRef = useRef();
  const dueDateRef = useRef();

  return (
    <div className="basis-3/4 min-h-screen flex items-start">
      <div className="w-2/3 mx-36 relative mt-32">
        <p className="flex justify-end">
          <Button
            onClick={onHide}
            text="Cancel"
            additionalClasses="text-zinc-950"
          />
          <Button
            onClick={() => {
              const projectTitle = titleRef.current.value;
              const projectDescription = descRef.current.value;
              const projectDueDate = dueDateRef.current.value;

              if (projectTitle && projectDescription && projectDueDate) {
                onSave({
                  title: titleRef.current.value,
                  description: descRef.current.value,
                  dueDate: dueDateRef.current.value,
                  id: UniqueNumber(),
                  tasks: [],
                });
                onHide();
              } else return;
            }}
            text="Save"
            additionalClasses="bg-zinc-950 text-stone-50 hover:bg-zinc-900 px-8"
          />
        </p>
        <Input type="text" label="Title" id="title" namedRef={titleRef} />
        <Input
          type="textarea"
          label="Description"
          id="description"
          namedRef={descRef}
        />
        <Input type="date" label="Due Date" id="date" namedRef={dueDateRef} />
      </div>
    </div>
  );
}
