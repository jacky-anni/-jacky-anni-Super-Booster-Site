import BasicInformation from "./basicInformation";
import ButtomCoursePayment from "./buttomCoursePayment";

const BarRightInformation = ({ course }) => {
  return (
    <>
      <div className='col-lg-4 pt-3'>
        <div className='ed_view_box style_2 overlio'>
          <div className='property_video sm'>
            <div className='thumb'>
              <img
                className='pro_img img-fluid w100'
                src='../assets/img/banner-5.jpg'
                alt='7.jpg'
              />
              <div className='overlay_icon'>
                <div className='bb-video-box'>
                  <div className='bb-video-box-inner'>
                    <div className='bb-video-box-innerup'>
                      <a
                        href='https://www.youtube.com/watch?v=A8EI6JaFbv4'
                        data-toggle='modal'
                        data-target='#popup-video'
                        className='theme-cl'
                      >
                        <i className='ti-control-play' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='ed_author'>
            <div className='ed_author_thumb'>
              <img
                className='img-fluid'
                src='../assets/img/user-5.jpg'
                alt='7.jpg'
              />
            </div>
            <div className='ed_author_box'>
              <h4>
                {course.Utilisateur.prenom} &nbsp;
                {course.Utilisateur.nom}
              </h4>
              <span>Web Designer in Canada</span>
            </div>
          </div>

          {course.type == "Payante" ? (
            <div className='ed_view_price pl-4'>
              <span>Prix actuel</span>
              <h3 className='theme-cl font-bold'>{course.prix} HTG</h3>
            </div>
          ) : (
            <div className='ed_view_price pl-4'>
              <span>Prix actuel</span>
              <h5 className='theme-cl font-bold'>Gratuite</h5>
            </div>
          )}
          <div className='ed_view_features pl-4'>
            <span>Course Features</span>
            <ul>
              <li>
                <i className='ti-angle-right' />
                Fully Programming
              </li>
              <li>
                <i className='ti-angle-right' />
                Help Code to Code
              </li>
              <li>
                <i className='ti-angle-right' />
                Free Trial 7 Days
              </li>
              <li>
                <i className='ti-angle-right' />
                Unlimited Videos
              </li>
              <li>
                <i className='ti-angle-right' />
                24x7 Support
              </li>
            </ul>
          </div>
          <ButtomCoursePayment course={course} />
        </div>
        <BasicInformation course={course} />
      </div>
    </>
  );
};

export default BarRightInformation;
