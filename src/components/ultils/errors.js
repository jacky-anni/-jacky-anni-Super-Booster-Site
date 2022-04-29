export const errors = errors => {
  switch (errors.response.status) {
    case 500:
      return "Erreur serveur";
    case 406:
      return errors.response.data.errors;

    case 404:
      return errors.response.data.msg;
      break;

    default:
      break;
  }
};
