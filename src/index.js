import React from 'react';
import ReactDOM from 'react-dom';
import { ProviderContext } from 'context/context';
import { MainPage } from 'ui/templates/MainPage/MainPage';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <ProviderContext>
      <MainPage/>
    </ProviderContext>
  </React.StrictMode>,
  document.getElementById('root')
);
