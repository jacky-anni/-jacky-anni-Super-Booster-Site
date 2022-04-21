import { Fragment, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { searchUsers, clearFilter } from "./../../actions/userActions";

const SearchUsers = ({
  user: { users, loading, filtered },
  searchUsers,
  clearFilter
}) => {
  const text = useRef();

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  }, []);

  const onChange = e => {
    if (text.current.value !== "") {
      searchUsers(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <>
      <div className='mb-7' style={{ marginBottom: "-300px" }}>
        <div className='row align-items-center'>
          <div className='col-md-12 '>
            <div className='row align-items-center'>
              <div className='col-md-12  my-md-0'>
                <div className='input-icon'>
                  <form>
                    <input
                      type='search'
                      className='form-control'
                      placeholder='Rechercher...'
                      id='kt_datatable_search_query'
                      ref={text}
                      onChange={onChange}
                    />
                  </form>
                  <span>
                    <i className='flaticon2-search-1 text-muted' />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { searchUsers, clearFilter }
)(SearchUsers);
