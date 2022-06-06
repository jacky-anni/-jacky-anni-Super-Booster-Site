import { Fragment, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { searchCourses, clearFilter } from "./../../actions/coursesActions";

const SearchCourses = ({
  course: { courses, loading, filtered },
  searchCourses,
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
      searchCourses(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <>
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
    </>
  );
};

const mapStateToProps = state => ({
  course: state.course
});

export default connect(
  mapStateToProps,
  { searchCourses, clearFilter }
)(SearchCourses);
