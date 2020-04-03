import TextInputCSSModules from "ps-react/TextInputCSSModules";
import React from "react";

const ExampleErrorCSSModules = () => {
  return (
    <TextInputCSSModules
      htmlId="example-optional"
      label="First Name"
      name="firstname"
      onChange={() => {}}
      error="First name is required."
    />
  );
};

export default ExampleErrorCSSModules;
