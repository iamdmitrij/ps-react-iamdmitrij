import TextInput from "ps-react/TextInput";
import React from "react";

const ExampleOptional = () => {
  return (
    <TextInput
      htmlId="example-optional"
      label="First Name"
      name="firstname"
      onChange={() => {}}
      error="First name is required."
    />
  );
};

export default ExampleOptional;
