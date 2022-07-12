const BasicInformation = ({ course }) => {
  return (
    <>
      <div className='edu_wraper border'>
        <h4 className='edu_title'>Course Features</h4>
        <ul className='edu_list right'>
          <li>
            <i className='ti-user' />
            Participants:<strong>1740</strong>
          </li>
          <li>
            <i className='ti-files' />
            Videos:<strong>10</strong>
          </li>
          <li>
            <i className='ti-game' />
            Quiz:<strong>4</strong>
          </li>
          <li>
            <i className='ti-time' />
            Duration:<strong>60 hours</strong>
          </li>
          <li>
            <i className='ti-tag' />
            Niveau:<strong>{course.niveau_certificat}</strong>
          </li>
          <li>
            <i className='ti-flag-alt' />
            Langues:<strong>{course.langue}</strong>
          </li>
          <li>
            <i className='ti-shine' />
            Assessment:<strong>Yes</strong>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BasicInformation;
