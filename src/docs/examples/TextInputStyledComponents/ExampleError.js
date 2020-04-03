import React from "react";
import TextInputStyledComponents from "../../../components/TextInputStyledComponents";

const ExampleError = () => {
  return (
    <TextInputStyledComponents
      htmlId="example-optional"
      label="First Name"
      name="firstname"
      onChange={() => {}}
      error="First name is required."
    />
  );
};

export default ExampleError;
