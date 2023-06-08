import React from "react";
import MyComponent from "./Components/MyComponent";
import Counter from "./Components/Counter";
import UserList from "./Components/UserList";
import CounterToolKit from "./Components/CounterToolKit";
import CounterPayload from "./Components/CounterPayload";
const tasks = [
  { id: 234234, title: "bitch" },
  { id: 23443234, title: "ssf" },
  { id: 23434234, title: "vxcvx" },
  { id: 23544234, title: "oui" },
];
const App: React.FC = () => (
  <div>
    <MyComponent name="world" surname="bitch" tasks={tasks} />
    <Counter />
    <UserList />
    <CounterToolKit />
    <CounterPayload />
  </div>
);

export default App;
