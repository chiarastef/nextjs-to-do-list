"use client";

import React from "react";
import { ITask } from "@/types/tasks";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";

interface ITaskProps {
  task: ITask;
}

const Task = (props: ITaskProps) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = React.useState<boolean>(false);
  const [textToEdit, setTextToEdit] = React.useState<string>(props.task.text);
  const [openModalDelete, setOpenModalDelete] = React.useState<boolean>(false);

  const handleSubmitEditTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    await editTodo({
      id: props.task.id,
      text: textToEdit,
    });
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteTask = async () => {
    await deleteTodo(props.task.id);
    setOpenModalDelete(false);
    router.refresh();
  };

  return (
    <tr>
      <td className="w-full">{props.task.text}</td>
      <td className="flex gap-5">
        <FiEdit
          cursor="pointer"
          className="text-blue-500"
          onClick={() => setOpenModalEdit(true)}
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="font-bold text-lg">Edit task</h3>
            <div className="modal-action">
              <input
                type="text"
                value={textToEdit}
                onChange={(e) => setTextToEdit(e.target.value)}
                placeholder="Type here"
                className="input w-full"
              />
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </Modal>
        <FiTrash2
          cursor="pointer"
          className="text-red-500"
          onClick={() => setOpenModalDelete(true)}
        />
        <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
          <h3 className="text-lg">Are you sure you wna to delete this task?</h3>
          <div className="modal-action">
            <button className="btn" onClick={handleDeleteTask}>
              Yes
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
