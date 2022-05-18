import React from "react";
import { Helmet } from "react-helmet";
const Head = () => {
  return (
    <div className='application'>
      <Helmet>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='description'
          content='Web site created using create-react-app'
        />
        <meta charSet='utf-8' />
        <title>Super Booster </title>
        <link rel='canonical' href='http://mysite.com/example' />
      </Helmet>
      ...
    </div>
  );
};

export default Head;
