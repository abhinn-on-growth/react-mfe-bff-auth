import { Route, Routes, Navigate } from 'react-router-dom';
import { APP_ROUTES } from '@app/shared';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';

const App = () => (
  <Routes>
    <Route path="/" element={<Navigate to={APP_ROUTES.home} replace />} />
    <Route path={APP_ROUTES.home} element={<HomePage />} />
    <Route path={APP_ROUTES.dashboard} element={<DashboardPage />} />
  </Routes>
);

export default App;
