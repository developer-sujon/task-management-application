class FormValidation {
  static isEmpty(value) {
    if (value.length > 0) {
      return true;
    } else {
      return null;
    }
  }
}

export default FormValidation;
