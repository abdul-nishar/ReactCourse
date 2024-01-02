/* eslint-disable */
import { UniqueNumber } from "unique-string-generator";
import { useRef, useContext } from "react";

import { ManagementContext } from "../store/management-context";
import Input from "./CustomInput";
import Button from "./Button";
import Modal from "./Modal";

export default function CreateProject() {
  const { ShowNoProject, SaveProject } = useContext(ManagementContext);
  const modal = useRef();
  const titleRef = useRef();
  const descRef = useRef();
  const dueDateRef = useRef();

  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-amber-100 text-center text-xl font-bold mb-4">
          Invalid Input
        </h2>
        <p className="text-stone-300">
          Oops.. looks like you forgot to enter a value.
        </p>
        <p className="text-stone-300">
          Please make sure you provide all the required fields.
        </p>
      </Modal>
      <div className="basis-3/4 min-h-screen flex items-start">
        <div className="w-2/3 mx-36 relative mt-32">
          <p className="flex justify-end">
            <Button
              onClick={ShowNoProject}
              text="Cancel"
              additionalClasses="text-zinc-950"
            />
            <Button
              onClick={() => {
                const projectTitle = titleRef.current.value;
                const projectDescription = descRef.current.value;
                const projectDueDate = dueDateRef.current.value;

                if (projectTitle && projectDescription && projectDueDate) {
                  SaveProject({
                    title: titleRef.current.value,
                    description: descRef.current.value,
                    dueDate: dueDateRef.current.value,
                    id: UniqueNumber(),
                    tasks: [],
                  });
                  ShowNoProject();
                } else modal.current.open();
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
    </>
  );
}
