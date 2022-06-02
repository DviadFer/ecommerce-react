import { useEffect } from "react";
import { useLocation } from "react-router";

//Componente para resetear scroll capa vez que se usa un Link de Router

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};

export default ScrollToTop;