import styles from './LoginForm.module.scss';
import ButtonSpinner from "../../../../common/components/ButtonSpinner/ButtonSpinner.tsx";
import {Link} from "react-router-dom";

type LoginFormProps = {
    setFormData: React.Dispatch<React.SetStateAction<{
        password: string;
        email: string;
    }>>;
    formData: {
        password: string;
        email: string;
    }
    handleLogin: () => void;
    loading: boolean;
}

const LoginForm = (props: LoginFormProps) => {
    const {formData, setFormData,handleLogin,loading} = props;
    return (
        <div className={styles.LoginFormContainer}>
            <h1>Login</h1>
            <div className={styles.InputContainer}>
            <label htmlFor="email">Email</label>
            <input
                id={'email'}
                type="text"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            </div>
            <div className={styles.InputContainer}>

            <label htmlFor="password">Password</label>
            <input
                id={'password'}
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
            </div>
            <button type='submit' onClick={handleLogin}>
                {loading && <ButtonSpinner height={'1rem'} width={'1rem'} />}
                Login
            </button>

            <div style={{alignSelf:'center',justifySelf:'center'}}>OR</div>
            <Link style={{justifySelf:'end'}} to={'/register'}>Don't have an account? Register</Link>
        </div>
    )
}

export default LoginForm;