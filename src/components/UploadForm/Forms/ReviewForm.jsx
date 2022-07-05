import React from "react";
import { useFormikContext } from "formik";
import { Typography, Grid } from "@material-ui/core";

import formModel from "../FormModel/formModel";
import ReportField from "../Helper/ReportField";

export default function ReviewOrder() {
  const { formField } = formModel;
  const { values: formValues } = useFormikContext();

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Check the values inside the `console`
      </Typography>
      <Grid container spacing={2}>
        <ReportField formValues={formValues} formData={formField} />
      </Grid>
    </React.Fragment>
  );
}
