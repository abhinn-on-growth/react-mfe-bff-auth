import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '@app/shared';

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-shell">
      <div className="form-card">
        <h1>Login</h1>
        <p>Sign in to access the home dashboard and explore the application.</p>
        <button className="primary-button" onClick={() => navigate(APP_ROUTES.home)}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
