import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Articles from './Articles';
import Twitters from './Twitters';
import Notes from './Notes';

const Root = () => (
  <MainTemplate>
    <BrowserRouter>
      <Articles />
      <Twitters />
      <Notes />
    </BrowserRouter>
  </MainTemplate>
);

export default Root;
