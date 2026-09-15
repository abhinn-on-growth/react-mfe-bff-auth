import { Route, Routes, Navigate } from 'react-router-dom';
import { APP_ROUTES } from '@app/shared';
import LoginPage from './pages/LoginPage';

const App = () => (
  <Routes>
    <Route path="/" element={<Navigate to={APP_ROUTES.login} replace />} />
    <Route path={APP_ROUTES.login} element={<LoginPage />} />
  </Routes>
);

export default App;
