import { Tooltip } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PictureOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import LoadingCharging from "./../layout/loadingCharging";

const CourseItemListCarousel = ({ course }) => {
  const [img, setImg] = useState();
  useEffect(async () => {
    if (course.photo !== null) {
      const data = await fetch(`/images/courses/${course.photo}`);
      setImg(data.url);
    }
  });

  return (
    <>
      {course ? (
        <div className='col-lg-4 col-md-6'>
          <div className='education_block_grid style_2'>
            <div className='education_block_thumb n-shadow'>
              <a href=''>
                <img
                  src={img}
                  className='img-fluid'
                  style={{ height: "200px", width: "200%" }}
                  alt=''
                />
              </a>
            </div>
            <div className='education_block_body'>
              <h4 className='bl-title'>
                <Link to={`/course/${course.slug}`} style={{ color: "black" }}>
                  {course.titre}
                </Link>
              </h4>
            </div>
            <div className='cources_info_style3'>
              <ul>
                <li>
                  <i className='ti-eye mr-2' />
                  9857 Views
                </li>
                <li>
                  <i className='ti-time mr-2' />
                  7h 45min
                </li>
                <li>
                  <i className='ti-star text-warning mr-2' />
                  4.9 Reviews
                </li>
              </ul>
            </div>
            <div className='education_block_footer'>
              <div className='education_block_author'>
                <div className='path-img'>
                  <a href='instructor-detail.html'>
                    <img
                      src='assets/img/user-5.jpg'
                      className='img-fluid'
                      alt=''
                    />
                  </a>
                </div>
                <h5>
                  <a href='instructor-detail.html'>Shaurya Preet</a>
                </h5>
              </div>
              <div className='foot_lectudre'>
                {course.type == "Payante" ? (
                  <h6 className='theme-cl font-bold size-xs'>
                    {course.prix} HTG
                  </h6>
                ) : (
                  <h6 className='theme-cl font-bold size-xs'>Gratuite</h6>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LoadingCharging />
      )}

      {/* Cource Grid 1 */}
    </>
  );
};

export default CourseItemListCarousel;
