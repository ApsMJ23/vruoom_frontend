import {useDispatch} from "react-redux";
import {login, signup} from "../../store/User/actions.ts";
import styles from './Login.module.scss';
import LoginForm from "./components/LoginForm/LoginForm.tsx";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {emailRegex} from "../../utils/utils.ts";
import SignupForm from "./components/SignupForm/SignupForm.tsx";


const Login = ({isSignup}: { isSignup: boolean }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        password: '',
        email: '',
    })
    const [signupUserData, setSignupUserData] = useState({
        email: '',
        password: '',
        first_name: '',
        username:'',
        last_name: '',
    })
    useEffect(() => {
        if(localStorage.getItem('token')){
            localStorage.clear()
        }
    }, []);
    const handleLogin = () => {
        setLoading(true);
        if (!emailRegex.test(formData.email)) {
            setLoading(false);
            return toast.error('Invalid email address');
        }
        if (!formData.password) {
            setLoading(false);
            return toast.error('Please enter a valid password');
        }
        dispatch(
            login({
                email: formData.email.trim(),
                password: formData.password,
                onSuccess: () => setLoading(false),
            })
        )
    }
    const handleSignup = () => {
        setLoading(true);
        if (!emailRegex.test(signupUserData.email)) {
            setLoading(false);
            return toast.error('Invalid email address');
        }
        if (!signupUserData.password) {
            setLoading(false);
            return toast.error('Please enter a valid password');
        }
        dispatch(
            signup({
                email: signupUserData.email.trim(),
                password: signupUserData.password,
                first_name: signupUserData.first_name,
                last_name: signupUserData.last_name,
                username: signupUserData.username,
                onSuccess: () => setLoading(false),
            })
        )
    }
    return (
        <div className={styles.LoginPageWrapper}>
            {
                isSignup ? (
                    <>
                        <SignupForm
                            signupUserData={signupUserData}
                            setSignupUserData={setSignupUserData}
                            loading={loading}
                            handleSubmit={handleSignup}
                        />
                    </>
                ) : (
                    <LoginForm loading={loading} formData={formData} setFormData={setFormData}
                               handleLogin={handleLogin}/>
                )
            }
        </div>
    )
}

export default Login;