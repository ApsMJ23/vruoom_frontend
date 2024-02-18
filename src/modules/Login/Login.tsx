import {useDispatch} from "react-redux";
import {login} from "../../store/User/actions.ts";


const Login = () => {
    const dispatch = useDispatch();
    const handleLogin = () => {
        dispatch(
            login({
                username:'admin',
                password:'admin'
            })
        )

    }
    return (
        <div>
            <button onClick={()=>handleLogin()}>Login</button>
        </div>
    )
}

export default Login;