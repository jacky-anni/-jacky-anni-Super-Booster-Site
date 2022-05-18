const CategoryItem = ({ categorie }) => {
  return (
    <>
      <div className='col-md-4'>
        <div
          className='card js-overlay card-sm overlay--primary-dodger-blue stack stack--1 '
          data-toggle='popover'
          data-trigger='click'
        >
          <div className='card-body d-flex flex-column'>
            <div className='d-flex align-items-center'>
              <div className='flex'>
                <div className='d-flex align-items-center'>
                  <div className='flex'>
                    <div className='card-title'>
                      <h6 className='font-size-lg font-weight-boldest '>
                        {categorie.nom}
                      </h6>
                    </div>
                    <p className='flex text-57 lh-1 mb-0'>18 courses</p>
                  </div>
                </div>
              </div>
              <div className='btn-group btn-group-toggle' data-toggle='buttons'>
                {/* <label className='btn btn-danger'>
                  <i className='fa fa-lock'></i>
                </label> */}

                <label className='btn btn-primary mr-1'>
                  <i className='fa fa-edit'></i>
                </label>

                <label className='btn btn-danger'>
                  <i className='fa fa-trash'></i>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
