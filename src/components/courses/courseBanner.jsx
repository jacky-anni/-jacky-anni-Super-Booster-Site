import Author from "./author";
const CourseBanner = ({ course, profile_ }) => {
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
                      front-end libraries in web development gimport Author from
                      './Author'; ets a complete overhaul. Keep your skills
                      relevant and up-to-date with this comprehensive
                      introduction to Google’s popular community project.
                    </p>
                    <div className='d-flex flex-column flex-sm-row mb-10 align-items-center justify-content-start'>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Author author={profile_} />
        </div>
      </div>
    </>
  );
};

export default CourseBanner;
