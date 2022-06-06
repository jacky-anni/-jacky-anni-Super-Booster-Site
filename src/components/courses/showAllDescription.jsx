import ShowBasicInformation from "./showBasicInformation";
import ShowPreRequis from "./showPreRequis";
import ShowDetails from "./showDetails";
import ShowDescription from "./showDescription";
import { Link } from "react-router-dom";

const showAllDescription = ({ course_, profile_ }) => {
  return (
    <>
      <div className='accordion  accordion-toggle-arrow' id='accordionExample4'>
        <div className='card'>
          <div className='card-header' id='headingOne4'>
            <div
              className='card-title'
              data-toggle='collapse'
              data-target='#collapseOne4'
            >
              <i className='flaticon2-layers-1' /> Informations de bases
            </div>
          </div>
          <div
            id='collapseOne4'
            className='collapse show'
            data-parent='#accordionExample4'
          >
            <div className='card-boddy'>
              <ShowBasicInformation course_={course_} profile_={profile_} />
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-header' id='headingTwo4'>
            <div
              className='card-title collapsed'
              data-toggle='collapse'
              data-target='#collapseTwo4'
            >
              <i className='flaticon2-layers-1' /> Pré requis
            </div>
          </div>
          <div
            id='collapseTwo4'
            className='collapse'
            data-parent='#accordionExample4'
          >
            <div className='card-body'>
              <ShowPreRequis course_={course_} />
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-header' id='headingThree4'>
            <div
              className='card-title collapsed'
              data-toggle='collapse'
              data-target='#collapseThree4'
            >
              <i className='flaticon2-layers-1' /> Application Options
            </div>
          </div>
          <div
            id='collapseThree4'
            className='collapse'
            data-parent='#accordionExample4'
          >
            <div className='card-body'>
              <ShowDetails course_={course_} />
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-header' id='headingThree4'>
            <div
              className='card-title collapsed'
              data-toggle='collapse'
              data-target='#collapseFour4'
            >
              <i className='flaticon2-layers-1' /> Descriptions
            </div>
          </div>
          <div
            id='collapseFour4'
            className='collapse'
            data-parent='#accordionExample4'
          >
            <div className='card-body'>
              <ShowDescription course_={course_} />
            </div>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <Link
          to={`/dashboard/course/create/${profile_.username}?step=2&course=${course_.id_}`}
        >
          <button type='submit' className={`btn btn-primary btn-square btn-sm`}>
            <b>
              <i className='fa fa-edit'></i> Modifier ce block
            </b>
          </button>
        </Link>
      </div>
    </>
  );
};

export default showAllDescription;
