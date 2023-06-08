import React from "react";

interface Props {
  name: string;
}

const MyComponent: React.FC<Props> = ({ name }) => <div>Hello {name}!</div>;

export default MyComponent;
