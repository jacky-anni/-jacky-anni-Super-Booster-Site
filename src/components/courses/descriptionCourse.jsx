import parse from "html-react-parser";
import ShowMoreText from "react-show-more-text";
const DescriptionCourse = ({ course }) => {
  return (
    <>
      <div className='edu_wraper border'>
        <h4 className='edu_title'>Descriptions</h4>
        {course.detaille ? (
          <ShowMoreText
            lines={7}
            more='Voir  plus'
            less='Voir moins'
            anchorClass='read-more'
            expanded={false}
            //   width={280}
            truncatedEndingComponent={"... "}
          >
            {parse(course.detaille)}
          </ShowMoreText>
        ) : (
          "Details indisponible"
        )}

        <br />
        {/* <div>
          <h6>Requirements</h6>
          <ul>
            <li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
            <li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
            <li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
            <li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
            <li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default DescriptionCourse;
