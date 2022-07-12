const Slide = () => {
  return (
    <>
      <div
        className='image-cover half_banner'
        style={{ background: "#0b2248 url(assets/img/banner-3.jpg) no-repeat" }}
      >
        <div className='container'>
          {/* Type */}
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
              <div className='banner-search-2'>
                <h1 className='cl_2 f_2 mb-1'>
                  Start Learning daily
                  <br />
                  <span className='theme-cl'>new thing</span>
                </h1>
                <p>
                  Search &amp; Study any topics, anytime. Choose from thousands
                  of expert-led courses now.
                </p>
                <div className='input-group mt-3'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='What do you want to learn?'
                  />
                  <div className='input-group-append'>
                    <button className='btn btn-outline-secondary' type='button'>
                      <img
                        src='assets/img/search.svg'
                        className='search-icon'
                        alt=''
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide;
