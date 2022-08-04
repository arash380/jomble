import PropTypes from "prop-types";
import { AppLoader } from "arash-react-components";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import rd from "./routeData";

const { default: defaultRoute, login: alterRoute } = rd;

const ProtectedRoute = ({ reverseCheck = false }) => {
  const { user: authenticated, loading } = useUser();

  if (loading) return <AppLoader />;

  if (reverseCheck && authenticated) {
    return <Navigate to={defaultRoute} />;
  }

  if (!reverseCheck && !authenticated) {
    return <Navigate to={alterRoute} />;
  }

  return <Outlet />;
};

ProtectedRoute.propTypes = {
  reverseCheck: PropTypes.bool,
};

export default ProtectedRoute;
