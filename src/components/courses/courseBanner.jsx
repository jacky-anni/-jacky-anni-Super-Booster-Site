import Author from "./author";
const CourseBanner = ({ course }) => {
  return (
    <>
      <div className='row card card-custom'>
        <div className='mdk-header-layout js-mdk-header-layout'>
          <div className='mdk-header-layout__content page-content '>
            <div
              className='mdk-box bg-primary js-mdk-box mb-0'
              data-effects='blend-background'
            >
              <div className='mdk-box__content'>
                <div className='hero py-64 mt-10 text-sm-left'>
                  <div className='col-md-12'>
                    <h4 className='text-white font-weight-bolder'>
                      {course.titre}
                    </h4>
                    <p className='lead text-white-50 measure-hero-lead'>
                      It’s not every day that one of the most important
                    </p>
                    {/* <div className='d-flex flex-column flex-sm-row mb-10 align-items-center justify-content-start'>
                      <a
                        href='student-lesson.html'
                        className='btn btn-outline-white mb-16 mb-sm-0 mr-sm-16'
                      >
                        Watch trailer{" "}
                        <i className='material-icons icon--right'>
                          play_circle_outline
                        </i>
                      </a>
                      <a href='pricing.html' className='btn btn-white'>
                        Start your free trial
                      </a>
                    </div> */}

                    {/* ddddd */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Author author={course.Utilisateur} />
        </div>
      </div>
    </>
  );
};

export default CourseBanner;
