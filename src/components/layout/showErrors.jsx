import { Fragment } from "react";
import { toast } from "react-toastify";

const ShowErrors = ({ errors, type }) => {
  return Array.isArray(errors) ? (
    errors.map(function(error) {
      return (
        <p className={`alert alert-custom alert-${type} fade show`}>
          {" "}
          {error.msg}
        </p>
      );
    })
  ) : (
    <p className={`alert alert-custom alert-${type} fade show`}> {errors}</p>
  );
};

export default ShowErrors;
