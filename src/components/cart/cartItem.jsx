import { PictureOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { getCourse, clear } from "../../actions/coursesActions";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { useEffect, useLayoutEffect } from "react";
const CartItem = ({
  course: { courses, loadingCourse, course, errorsCourse },
  getCourse,
  item
}) => {
  useLayoutEffect(() => {
    // getCourse(item.slug);
    // console.log(course.id);
  }, []);
  return (
    <>
      <div className='product_item'>
        <div className='thumbnail mr-2'>
          <Avatar
            shape='square'
            src={item.photo}
            size={50}
            icon={<PictureOutlined />}
          />
        </div>
        <div className='info'>
          <h6 className='product-title'>
            <a href='#'>{item.name.substring(0, 38) + "..."}</a>
          </h6>
          <span className='price mt-0'>
            <p className='price_ver'>
              {item.price} HTG
              <del>$149.00</del>
            </p>
          </span>
        </div>
      </div>
    </>
  );
};

CartItem.propTypes = { course: PropTypes.object.isRequired };
const mapStateToProps = state => ({
  course: state.course
});

export default connect(
  mapStateToProps,
  { getCourse }
)(CartItem);
