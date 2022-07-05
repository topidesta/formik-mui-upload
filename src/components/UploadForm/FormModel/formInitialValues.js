import formModel from "./formModel";
const {
  formField: { image }
} = formModel;

export default {
  [image.name]: {
    file: null,
    src: null,
    name: ""
  }
};
