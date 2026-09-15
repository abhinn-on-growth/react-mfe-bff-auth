import { Link } from 'react-router-dom';
import { APP_ROUTES } from '@app/shared';

const HomePage = () => (
  <div className="page-shell">
    <div className="page-card">
      <h1>Home Page</h1>
      <p>Welcome to your home dashboard. You can navigate to the dashboard or sign out.</p>
      <div className="nav-row">
        <Link to={APP_ROUTES.dashboard} className="secondary-button" style={{ textDecoration: 'none' }}>
          Go to Dashboard
        </Link>
        <Link to={APP_ROUTES.login} className="ghost-button" style={{ textDecoration: 'none' }}>
          Log out
        </Link>
      </div>
    </div>
  </div>
);

export default HomePage;
