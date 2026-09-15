import { Link } from 'react-router-dom';
import { APP_ROUTES } from '@app/shared';

const DashboardPage = () => (
  <div className="page-shell">
    <div className="page-card">
      <h1>Dashboard</h1>
      <p>Overview of your application stats, system activity, and quick actions.</p>
      <div className="nav-row">
        <Link to={APP_ROUTES.home} className="primary-button" style={{ textDecoration: 'none' }}>
          Back to Home
        </Link>
        <Link to={APP_ROUTES.login} className="ghost-button" style={{ textDecoration: 'none' }}>
          Logout
        </Link>
      </div>
    </div>
  </div>
);

export default DashboardPage;
