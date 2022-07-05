import React from "react";
import { Typography } from "@material-ui/core";

function CheckoutSuccess() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Thank you.
      </Typography>
      <Typography variant="subtitle1">The End!</Typography>
    </React.Fragment>
  );
}

export default CheckoutSuccess;
