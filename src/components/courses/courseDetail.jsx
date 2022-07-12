import BarRightInformation from "./barRightInformation";
import BarLeftInformation from "./barLeftInformation";

const CourseDetail = ({ course }) => {
  return (
    <>
      <section className='bg-light pt-0'>
        <div className='container'>
          <div className='row flex-column-reverse flex-lg-row'>
            <BarLeftInformation course={course} />
            <BarRightInformation course={course} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetail;
