import React from "react";
import { useProps } from "../context/VizPropsProvider";

const ExampleComponent = () => {
  const vizProps = useProps();
  const { greeting } = vizProps;
  return (
        <div>{greeting}</div>
  );
};

export default ExampleComponent;