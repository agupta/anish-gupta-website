import React from 'react';
import { Helmet } from 'react-helmet';
import { headData } from '../mock/data';

export default () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>kr$h</title>
        <html lang={lang || 'en'} />
        <meta
          name="description"
          content="kr$h"
        />
      </Helmet>
    </>
  );
};
