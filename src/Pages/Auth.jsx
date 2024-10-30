import Login from "@Components/Auth/login";
import Signup from "@Components/Auth/signup";
import { useLocation } from 'react-router-dom';
const Auth = () => {
  const location = useLocation();
  return (

    // Comprobamos si la URL es /signin o /signup para renderizar el componente adecuado
    <>
      {location.pathname === "/signin" && <Login />}
      {location.pathname === "/signup" && <Signup />}
    </>
  )
};

export default Auth;
