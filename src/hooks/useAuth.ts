
import { useAppSelector } from "../redux/userInfo/reduxhooks";

export function useAuth(){
    const {email,token,id} = useAppSelector((state) => state.user)
    return{
        isAuth: !!email,
        email,
        id,
        token,
    }
}