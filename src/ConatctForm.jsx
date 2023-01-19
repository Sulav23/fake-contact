import React from "react";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";

const ConatctForm = ({ handleSubmit, isEditing, initialValue }) => {
  const requiredVaildator = (value) => {
    return value ? "" : "This field is required";
  };

  return (
    <Form
      key={Math.random()}
      initialValues={isEditing && initialValue}
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement
          style={{
            width: "80vw",
            margin: "40px auto",
            padding: "10px",
          }}
        >
          <Field
            label="Name"
            name="name"
            component={Input}
            validator={requiredVaildator}
          />
          <Field
            label="Number"
            name="number"
            component={Input}
            validator={requiredVaildator}
          />
          <Button
            themeColor={"primary"}
            type={"submit"}
            style={{ margin: "10px" }}
          >
            {!isEditing ? "Add" : "Edit"}
          </Button>
        </FormElement>
      )}
    />
  );
};

export default ConatctForm;
