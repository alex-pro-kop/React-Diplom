import { UserSelectors } from "../Redux/reducers/users";
import { useSelector } from "react-redux";

const useAuth = () => {
    const user = useSelector(UserSelectors.getUser);

    return {
    isAuth: !!user.email,
    email: user.email,
    token: user.token,
    id: user.id,
    };
};

export default useAuth;

