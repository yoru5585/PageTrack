import { useNavigate } from "react-router-dom";
import Logout from "../auth-pages/auth-components/Logout";
import { ROUTES } from "../../constants/Routes";

function SettingsPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    Logout()
      .then(() => {
        navigate(ROUTES.LOGIN);
      })
      .catch(console.error);
  };

  return(
    <button onClick={handleLogout}>ログアウト</button>
  );
}

export default SettingsPage;