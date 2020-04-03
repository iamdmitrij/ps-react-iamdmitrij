import TextInputBEM from "ps-react/TextInputBEM";
import React from "react";

const ExampleErrorBEM = () => {
  return (
    <TextInputBEM
      htmlId="example-optional"
      label="First Name"
      name="firstname"
      onChange={() => {}}
      error="First name is required."
    />
  );
};

export default ExampleErrorBEM;
