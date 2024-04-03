import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {FormUser} from './UniversalForm';
import {setUser} from '../../../redux/userInfo/slice';
import { useAppDispatch } from '../../../redux/store';

const SignUp = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleRegister = (email:string, password:string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                const users = {
                    //@ts-ignore
                    email: user.email,
                    token: user.refreshToken,
                    id:user.uid,
                }
                //@ts-ignore
                dispatch(setUser(users));
                navigate('/');
                //нужно сделать сохранение данных через локал стораге0)))))
            })
            .catch(console.error)
    }

    return (
        <FormUser
            title="register"
            handleClick={handleRegister}
        />
    )
}

export {SignUp}