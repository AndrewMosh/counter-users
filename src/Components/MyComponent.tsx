import React from "react";
import { Props } from "../types/props";

const MyComponent: React.FC<Props> = ({ name, tasks, surname }) => (
  <>
    <div>Hello {name}!</div>
    <div>Goodbye {surname}</div>
    {tasks.map((el) => (
      <div>{el.title}</div>
    ))}
  </>
);

export default MyComponent;
