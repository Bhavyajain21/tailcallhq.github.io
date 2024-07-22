import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@material-ui/core";

// Static options for the dropdown
const options = [
  { label: "Option 1" },
  { label: "Option 2" },
  { label: "Option 3" },
];

const TailcallConfigForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    option: Yup.string().required("Option is required"),
  });

  const handleSubmit = (values: any) => {
    // Handle form submission
    console.log("Form values:", values);
    // Convert to desired format (JSON, YML, GraphQL) and download
  };

  return (
    <Formik
      initialValues={{
        name: "",
        option: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }: any) => (
        <Form>
          <div className="form-group">
            <Field name="name">
              {({ field }: any) => (
                <TextField
                  {...field}
                  label="Name"
                  variant="outlined"
                  fullWidth
                />
              )}
            </Field>
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div className="form-group">
            {/* <Autocomplete
              options={options}
              getOptionLabel={(option:any) => option.label}
              onChange={(event:any, value:any) => setFieldValue("option", value?.label || "")}
              renderInput={(params:any) => (
                <TextField
                  {...params}
                  label="Option"
                  variant="outlined"
                  fullWidth
                />
              )}
            /> */}
            <ErrorMessage name="option" component="div" className="error" />
          </div>

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default TailcallConfigForm;
