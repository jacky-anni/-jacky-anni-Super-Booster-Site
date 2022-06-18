import { Button } from "antd";
import EditModule from "./editModule";
import DeleteModule from "./deleteModule";
import { Link } from "react-router-dom";

const ModulesList = ({ modules, course }) => {
  return (
    <>
      <div className='accordion accordion-solid accordion-panel  mb-2'>
        <div className='card'>
          <>
            <div className='card-header mb-0' id='headingOne8'>
              <div className='card-title'>
                <div className='card-label font-weight-bolder text-black'>
                  {modules.titre}
                </div>
              </div>
            </div>
            <div id='collapseOne8' className='collapse show'>
              <div className='card-body'>
                {modules.description}
                <p className='mt-2'>
                  <span className='mr-4 text-success'>
                    <i className='fa fa-file'></i> 34 Document
                  </span>

                  <span className='text-primary mr-4'>
                    <i className='fa fa-play'></i> 190 videos
                  </span>

                  <span className='text-danger mr-4'>
                    <i className='fa fa-comment'></i> 9 quiz
                  </span>
                </p>
                <hr />

                <Link to={`/module/${course.id_}/${modules.id_}`}>
                  <Button
                    type='success'
                    className='mr-2 alert alert-success font-weight-bolder'
                  >
                    <i className='fa fa-eye'></i>&nbsp; Voir plus
                  </Button>
                </Link>

                <EditModule module_={modules} />
                <DeleteModule module_={modules} />
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default ModulesList;
