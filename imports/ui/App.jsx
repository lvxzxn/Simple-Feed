import './css/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import { Feed } from './components/Feed/FeedComponent';
import { Credits } from './components/Footer/CreditsComponent';
import { Form } from './components/Form/FormComponent';

export const App = () => {
  return (
  <div>
    <Form/>    
    <Feed/>
    <Credits/>
  </div>
  );
};