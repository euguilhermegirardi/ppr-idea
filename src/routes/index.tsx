import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const RoutesComponent: FC = () => (
    <Routes>
        <Route path="/" element={Dashboard} />
        <Route path="/repositories/:repository+" element={Repository} />
    </Routes>
);

export default RoutesComponent;