import DescriptionCourse from "./descriptionCourse";
import CourseCourriculum from "./courseCurriculum";

const BarLeftInformation = ({ course }) => {
  return (
    <>
      <div className='col-lg-8 pt-2'>
        <DescriptionCourse course={course} />
        <CourseCourriculum />
      </div>
    </>
  );
};

export default BarLeftInformation;
