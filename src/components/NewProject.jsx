import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onAdd, onCancel }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const modal = useRef();

  const handleSave = () => {
    const projectInput = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    };

    if (
      projectInput.title === "" ||
      projectInput.description === "" ||
      projectInput.dueDate === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd(projectInput);
  };

  return (
    <>
      <Modal buttonCaption="Close" ref={modal}>
        <h2 className="text-xl text-stone-700 font-bold my-4">Invalid input</h2>
        <p className="text-stone-600 mb-4">
          Please make sure you provide valid values for all input fields.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="rounded-md px-6 py-2 text-stone-800 hover:text-stone-950 border-stone-950 border-2 border-opacity-0 hover:border-opacity-100"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="rounded-md px-6 py-2  bg-stone-800 text-stone-50 hover:bg-stone-950 border-2 border-stone-800"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input label="Title" ref={title} />
          <Input label="Description" textarea ref={description} />
          <Input label="Due date" type="date" ref={dueDate} />
        </div>
      </div>
    </>
  );
};

export default NewProject;
