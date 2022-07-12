import BasicInformation from "./basicInformation";
const BarRightInformation = ({ course }) => {
  return (
    <>
      <div className='col-lg-4 col-md-4 pt-3'>
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
                src='assets/img/user-5.jpg'
                alt='7.jpg'
              />
            </div>
            <div className='ed_author_box'>
              <h4>Michael Russell</h4>
              <span>Web Designer in Canada</span>
            </div>
          </div>
          <div className='ed_view_price pl-4'>
            <span>Acctual Price</span>
            <h2 className='theme-cl'>$ 149.00</h2>
          </div>
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
          <div className='ed_view_link'>
            <a href='#' className='btn btn-theme enroll-btn'>
              Enroll Now
              <i className='ti-angle-right' />
            </a>
          </div>
        </div>
        <BasicInformation course={course} />
      </div>
    </>
  );
};

export default BarRightInformation;
