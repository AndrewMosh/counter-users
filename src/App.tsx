import React from "react";
import MyComponent from "./Components/MyComponent";
import Counter from "./Components/Counter";
import UserList from "./Components/UserList";

const App: React.FC = () => (
  <div>
    <MyComponent name="world" />
    <Counter />
    <UserList />
  </div>
);

export default App;
