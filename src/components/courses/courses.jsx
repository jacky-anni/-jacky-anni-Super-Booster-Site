import React, { useState, useEffect, useRef } from "react";
import { Table } from "antd";
import { Avatar, Image } from "antd";
import { Skeleton } from "antd";
import { Spin } from "antd";
import { connect } from "react-redux";
import { coursesList } from "./../../actions/coursesActions";
import PropTypes from "prop-types";
import SearchCourses from "./searchCourses";
import NotAccess from "./../layout/notAccess";
import CoursesItemList from "./courseItemList";

const Courses = ({ course: { courses, loading, filtered }, coursesList }) => {
  const [courses_, setCourses_] = useState(courses);

  useEffect(async () => {
    coursesList();
    if (filtered !== null) {
      setCourses_({ filtered });
    }
  }, []);

  const columns = [
    {
      render: courses_ => (
        <>
          {filtered !== null ? (
            <CoursesItemList course={courses_} />
          ) : (
            <CoursesItemList course={courses_} />
          )}
        </>
      )
    }
  ];

  return (
    <>
      <SearchCourses />
      {loading ? (
        <span style={{ padding: 50 }}>
          <Skeleton active avatar paragraph={{ rows: 1 }} />
          <Skeleton active avatar paragraph={{ rows: 1 }} />
          <Skeleton active avatar paragraph={{ rows: 1 }} />
          <Skeleton active avatar paragraph={{ rows: 1 }} />
        </span>
      ) : (
        <Table
          columns={columns}
          loading={false}
          dataSource={filtered !== null ? filtered : courses}
          rowKey='id'
        />
      )}
    </>
  );
};

Courses.propTypes = { course: PropTypes.object.isRequired };
// Courses.defaultPropType({
//   titlw:"ngdfkkgfg"
// })
const mapStateToProps = state => ({
  course: state.course
});

export default connect(
  mapStateToProps,
  { coursesList }
)(Courses);
