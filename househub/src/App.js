import React  from 'react'
import  {TheMainNavBar} from './components/main-nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginCard from './components/login-card'
import RegisterCard from './components/register-card';
import { Button } from 'react-bootstrap';

function App(){
  const [showLogin, setShowLogin] = React.useState(true); // State to toggle between login and registration

  const handleToggle = () => {
    setShowLogin(!showLogin); // Toggle the state to show either login or registration
  };

  return (
    <div>
      <TheMainNavBar />
      {showLogin ? (
        <div>
          <LoginCard onToggle={handleToggle} /> {/* Show LoginCard component */}
        </div>
      ) : (
        <div>
          <RegisterCard onToggle={handleToggle} /> {/* Show RegisterCard component */}
        </div>
      )}
    </div>
  );
}

export default App