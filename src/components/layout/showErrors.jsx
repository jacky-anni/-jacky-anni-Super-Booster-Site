import { Fragment } from "react";
import { toast } from "react-toastify";

const ShowErrors = ({ errors, type }) => {
  return (
    <>
      {Array.isArray(errors) ? (
        errors.map(function(error) {
          {
            return (
              <div
                key={error.msg}
                className={`alert alert-custom alert-${type} fade show mb-5`}
                role='alert'
              >
                <div className='alert-text'>{error.msg}</div>
                <div className='alert-close'>
                  <button
                    type='button'
                    className='close'
                    data-dismiss='alert'
                    aria-label='Close'
                  >
                    <span aria-hidden='true'>
                      <i className='ki ki-close'></i>
                    </span>
                  </button>
                </div>
              </div>
            );
          }
        })
      ) : (
        <div
          className={`alert alert-custom alert-${type} fade show mb-5`}
          role='alert'
        >
          <div className='alert-text'>{errors}</div>
          <div className='alert-close'>
            <button
              type='button'
              className='close'
              data-dismiss='alert'
              aria-label='Close'
            >
              <span aria-hidden='true'>
                <i className='ki ki-close'></i>
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowErrors;
