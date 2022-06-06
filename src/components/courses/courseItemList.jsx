import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import ActiveCourse from "./activeCourse";
import DisableCourse from "./disableCourse";
import DeleteCourse from "./deleteCourse";
const CoursesItemList = ({ course }) => {
  return (
    <>
      <div className='posts-cards mb-24pt'>
        <div className='card posts-card' style={{ padding: "5px" }}>
          <div className='posts-card__content d-flex align-items-center flex-wrap'>
            <div className='avatar avatar-lg mr-3'>
              <Avatar shape='square' size={50} icon={<UserOutlined />} />
            </div>
            <div className='posts-card__title flex d-flex flex-column'>
              <Link
                to={`/dashboard/course/${course.id_}`}
                className='card-title mr-3 mb-0 font-size-h6 font-weight-bolder '
              >
                {course.titre}
              </Link>
              <small className='text-50'>78 views last week</small>
            </div>
            <div className='d-flex align-items-center flex-column flex-sm-row posts-card__meta'>
              <div className='mr-10 text-50 posts-card__tag text-primary d-flex align-items-center'>
                {/* <i className='material-icons text-muted-light mr-1'>
                  folder_open
                </i>{" "}
                {course.Categorie.nom} */}
              </div>{" "}
              <hr />
              <div className='media mr-2 ml-sm-auto align-items-center'>
                <div className='media-body'>
                  <span className='label bg-black text-white label-inline font-weight-bolder mr-2'>
                    <i className='fa fa-globe'></i> &nbsp; {course.langue}
                  </span>

                  <span className='label label-info label-inline font-weight-bolder mr-2'>
                    <i className='fa fa-money'></i> &nbsp; {course.type}
                  </span>

                  <span
                    className={`label ${
                      course.active == 1 ? "label-success" : "label-danger"
                    } label-inline font-weight-bolder mr-2`}
                  >
                    <i className='fa fa-eye'></i> &nbsp;
                    {course.active == 1 ? "public" : "Privé"}
                  </span>
                </div>
              </div>
            </div>

            <div className='dropdown ml-auto'>
              <a
                href='#'
                data-toggle='dropdown'
                data-caret='false'
                className='text-muted'
              >
                <i className='material-icons'>more_vert</i>
              </a>
              <div className='dropdown-menu dropdown-menu-right'>
                {course.active == 1 ? (
                  <DisableCourse course_={course} />
                ) : (
                  <ActiveCourse course_={course} />
                )}

                <DeleteCourse course_={course} />

                {/* <div className='dropdown-divider' />
                <a href='javascript:void(0)' className='dropdown-item'>
                  Some Other Action
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesItemList;
