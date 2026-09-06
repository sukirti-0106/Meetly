import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const navigate = useNavigate();

    const isAuthenticated = () => {
      return Boolean(localStorage.getItem("token"));
    };

    useEffect(() => {
      if (!isAuthenticated()) {
        navigate("/auth");
      }
    }, [navigate]);

    // Agar token nahi hai to kuch render na kare (redirect hone tak)
    if (!isAuthenticated()) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;