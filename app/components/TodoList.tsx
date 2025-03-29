import { ITask } from "@/types/tasks";
import React from "react";
import Task from "./Task";

interface ITodoListProps {
  tasks: ITask[];
}

const TodoList = (props: ITodoListProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.tasks.map((task) => {
            return <Task key={task.id} task={task} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
