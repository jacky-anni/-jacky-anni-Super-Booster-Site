const Banner = ({ title, loading = false }) => {
  return (
    <>
      <section className='page-title'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <div className='breadcrumbs-wrap'>
                <h3 className='breadcrumb-title'>{title}</h3>
                {!loading && (
                  <nav aria-label='breadcrumb'>
                    {/* <ol className='breadcrumb'>
                      <li className='breadcrumb-item'>
                        <a href='#'>Home</a>
                      </li>
                      <li
                        className='breadcrumb-item active'
                        aria-current='page'
                      >
                        Blogs
                      </li>
                    </ol> */}
                  </nav>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
