import EditQuiz from "./editQuiz";
import DeleteQuiz from "./deleteQuiz";
import { Button } from "antd";
import { Link } from "react-router-dom";

const QuizItemList = ({ quiz }) => {
  return (
    <>
      <div className='accordion accordion-solid accordion-panel  mb-2'>
        <div className='card'>
          <>
            <div className='card-header mb-0' id='headingOne8'>
              <div className='card-title'>
                <div className='card-label font-weight-bolder text-black'>
                  {quiz.nom}
                </div>
              </div>
            </div>
            <div id='collapseOne8' className='collapse show'>
              <div className='card-body'>
                <hr />
                <Link to=''>
                  <Button
                    type='success'
                    className='mr-2 alert alert-success font-weight-bolder btn-sm'
                  >
                    <i className='fa fa-comment'></i>&nbsp; Question (4)
                  </Button>
                </Link>
                <EditQuiz quiz_={quiz} />
                &nbsp;
                <DeleteQuiz quiz_={quiz} />
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default QuizItemList;
