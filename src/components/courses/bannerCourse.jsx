const BannerCourse = ({ course }) => {
  return (
    <>
      <div
        className='image-cover ed_detail_head lg theme-ov'
        style={{ background: "#f4f4f4 url(assets/img/banner-4.jpg)" }}
        data-overlay={9}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7 col-md-9'>
              <div className='ed_detail_wrap light'>
                <ul className='cources_facts_list'>
                  <li className='facts-1'>{course.Categorie.nom}</li>
                </ul>
                <div className='ed_header_caption'>
                  <h2 className='ed_title'> {course.titre}</h2>
                  <ul>
                    <li>
                      <i className='ti-calendar' />
                      10 - 20 weeks
                    </li>
                    <li>
                      <i className='ti-control-forward' />
                      102 Lectures
                    </li>
                    <li>
                      <i className='ti-user' />
                      502 Student Enrolled
                    </li>
                  </ul>
                </div>

                <div class='ed_header_short'>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore. veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo.
                  </p>
                </div>
                <div className='ed_rate_info'>
                  <div className='star_info'>
                    <i className='fas fa-star filled' />
                    <i className='fas fa-star filled' />
                    <i className='fas fa-star filled' />
                    <i className='fas fa-star filled' />
                    <i className='fas fa-star' />
                  </div>
                  <div className='review_counter'>
                    <strong className='good'>4.5</strong> 3572 Reviews
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

export default BannerCourse;
