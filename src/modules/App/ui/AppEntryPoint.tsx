import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AppEntryPoint = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    let route: string;
    if (isLogin) {
      route = "/";
    } else {
      route = "/login";
    }

    // if (location.pathname !== '/login') {
    //   if (authStore.isAuthenticated && !isLoggedIn()) {
    //     dispatch(clearState(authStore));
    //     localStorage.clear();
    //     navigate('/login');
    //   } else {
    //     dispatch(setAuthenticated(true));
    //   }
    // }
    navigate(route, { replace: true });
  }, []);

  return <></>;
};

export default AppEntryPoint;
