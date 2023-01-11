import React, {FC} from 'react';
import {Route, Routes as RoutesSource} from 'react-router-dom';

import {Main} from "../../pages";
import {EventDetails} from "../../pages/EventDetails";

export const Routes: FC = () => {
  return (
    <RoutesSource>
      <Route path='/' element={<Main />}/>
      <Route path='/event/:id' element={<EventDetails />}/>
    </RoutesSource>
  );
};
