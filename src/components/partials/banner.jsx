const Banner = ({ title, subTitle = "" }) => {
  return (
    <>
      <section className='page-title bg--facebook '>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <div className='breadcrumbs-wrap'>
                <h1 className='breadcrumb-title float-left'>{title}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
