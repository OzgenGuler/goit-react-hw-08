import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div
      style={{
        padding: ' 20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        gap: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '300px',
        margin: '0 auto',
      }}
    >
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
};

export default Login;
