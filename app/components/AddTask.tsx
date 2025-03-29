"use client";

import React from "react";
import { FaPlus } from "react-icons/fa6";
import Modal from "./Modal";
import { addTodos } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [newTextValue, setNewTextValue] = React.useState<string>("");

  const handleSubmitNewTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    await addTodos({
      id: uuidv4(),
      text: newTextValue,
    });
    setNewTextValue("");
    setModalOpen(false);
    router.refresh();
  };

  return (
    <>
      <button
        className="btn btn-primary w-full"
        onClick={() => setModalOpen(true)}
      >
        Add new task <FaPlus />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold text-lg">Add new task</h3>
          <div className="modal-action">
            <input
              type="text"
              value={newTextValue}
              onChange={(e) => setNewTextValue(e.target.value)}
              placeholder="Type here"
              className="input w-full"
            />
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddTask;
