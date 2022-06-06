import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useLocation, useParams } from "react-router-dom";

const CourseCreator = ({ profile, photo, course_ }) => {
  const searchParams = useLocation();
  const courseLink = new URLSearchParams(searchParams.search).get("course");

  return (
    <>
      <div className='col-md-12' style={{ marginBottom: "-20px" }}>
        {/*begin::Engage Widget 1*/}
        <div className='card card-custom gutter-b'>
          <div
            className='card-body d-flex align-items-center py-5 py-lg-10'
            style={{ marginBottom: "-20px" }}
          >
            <div className>
              <h6 className=' text-dark-75 text-success font-weight-bolder '>
                <i className='flaticon2-correct text-success'></i> La formation
                sera ajouté sur ce compte
              </h6>

              <div className='d-flex align-items-center'>
                <div className='symbol symbol-35 flex-shrink-0 mr-3'>
                  <Avatar
                    shape='square'
                    src={photo}
                    size={40}
                    icon={<UserOutlined />}
                  />
                </div>
                {/*end::Symbol*/}
                {/*begin::Content*/}
                <div className='d-flex align-items-center flex-wrap flex-row-fluid'>
                  {/*begin::Text*/}
                  <div className='d-flex flex-column pr-5 flex-grow-1'>
                    <span
                      href='#'
                      className='text-dark text-hover-primary mb-0 font-weight-bolder font-size-lg'
                    >
                      {profile.prenom} {profile.nom}
                    </span>
                    <span className='text-muted font-weight-bold'>
                      Createur
                    </span>
                  </div>
                  {/*begin::Label*/}
                </div>
                {/*end::Content*/}
              </div>
            </div>
            {/*end::Description*/}
          </div>
          {course_ && courseLink ? (
            <div className='navbar navbar-expand-sm bg-info border-bottom-2 navbar-list p-0 mb-2 align-items-center'>
              <div className='col-md-12'>
                <p className='text-white font-size-h4 mr-4 mb-0 font-weight-bolder'>
                  {course_.titre}
                </p>
              </div>
            </div>
          ) : null}
        </div>
        {/*end::Engage Widget 1*/}
      </div>
    </>
  );
};

export default CourseCreator;
