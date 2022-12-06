import React from "react";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";

const ConatctInfo = ({ handleSubmit, isEditing, editFormInput }) => {
  const requiredVaildator = (value) => {
    return value ? "" : "This field is required";
  };

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={editFormInput}
      render={(formRenderProps) => (
        <FormElement>
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
          <Button themeColor={"primary"} type={"submit"}>
            {!isEditing ? "Add" : "Edit"}
          </Button>
        </FormElement>
      )}
    />
  );
};

export default ConatctInfo;
