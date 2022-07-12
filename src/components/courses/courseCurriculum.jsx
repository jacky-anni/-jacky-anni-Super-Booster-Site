import { Collapse } from "antd";
const CourseCourriculum = () => {
  const { Panel } = Collapse;
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  return (
    <>
      <div className='edu_wraper border'>
        <h4 className='edu_title'>Course Circullum</h4>
        <Collapse defaultActiveKey={["1"]}>
          <Panel
            className='accordion_title font-bold'
            header='This is panel header 1'
            key='1'
          >
            <ul
              className='lectures_lists'
              style={{ fontWeight: 500, fontSize: "14px" }}
            >
              <li>
                <div className='lectures_lists_title mr-1'>
                  <i className='ti-control-play' />
                </div>
                Web Designing Beginner Web Designing BeginnerWeb Designing
                Beginner
              </li>
            </ul>
          </Panel>
          <Panel header='This is panel header 2' key='2'>
            <p>{text}</p>
          </Panel>
          <Panel header='This is panel header 3' key='3'>
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>
    </>
  );
};

export default CourseCourriculum;
