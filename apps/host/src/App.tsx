import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { APP_ROUTES } from '@app/shared';

const LoginPage = lazy(() => import('auth/LoginPage'));
const HomePage = lazy(() => import('homeDashboard/HomePage'));
const DashboardPage = lazy(() => import('homeDashboard/DashboardPage'));

const pageFallback = <div className="page-shell"><div className="page-card">Loading...</div></div>;

const App = () => (
  <Suspense fallback={pageFallback}>
    <Routes>
      <Route path="/" element={<Navigate to={APP_ROUTES.login} replace />} />
      <Route path={APP_ROUTES.login} element={<LoginPage />} />
      <Route path={APP_ROUTES.home} element={<HomePage />} />
      <Route path={APP_ROUTES.dashboard} element={<DashboardPage />} />
      <Route path="*" element={<Navigate to={APP_ROUTES.login} replace />} />
    </Routes>
  </Suspense>
);

export default App;
