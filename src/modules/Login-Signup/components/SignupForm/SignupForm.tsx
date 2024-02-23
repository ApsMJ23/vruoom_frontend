import ButtonSpinner from "../../../../common/components/ButtonSpinner/ButtonSpinner.tsx";
import styles from './SignupForm.module.scss'
import {Link} from "react-router-dom";


type SignupFormProps = {
    signupUserData: {
        email: string;
        password: string;
        first_name: string;
        username: string;
        last_name: string;
    }
    setSignupUserData: React.Dispatch<React.SetStateAction<{
        email: string;
        password: string;
        first_name: string;
        username: string;
        last_name: string;
    }>>;
    loading: boolean;
    handleSubmit: () => void;
}


const SignupForm = (props: SignupFormProps) => {
    const {signupUserData, setSignupUserData, loading,handleSubmit} = props;
    return (
        <div className={styles.SignupFormContainer}>
            <h1>Register</h1>
            <div className={styles.InputContainer}>
                <label htmlFor="email">User Name</label>
                <input
                    id={'username'}
                    type="text"
                    value={signupUserData.username}
                    onChange={(e) => setSignupUserData({...signupUserData, username: e.target.value})}
                />
            </div>
            <div className={styles.SplitInputContainer}>
                <div className={styles.InputContainer}>
                    <label htmlFor="email">First Name</label>
                    <input
                        id={'first_name'}
                        type="text"
                        value={signupUserData.first_name}
                        onChange={(e) => setSignupUserData({...signupUserData, first_name: e.target.value})}
                    />
                </div>
                <div className={styles.InputContainer}>
                    <label htmlFor="email">Last Name</label>
                    <input
                        id={'last_name'}
                        type="text"
                        value={signupUserData.last_name}
                        onChange={(e) => setSignupUserData({...signupUserData, last_name: e.target.value})}
                    />
                </div>

            </div>
            <div className={styles.InputContainer}>
                <label htmlFor="email">Email</label>
                <input
                    id={'email'}
                    type="text"
                    value={signupUserData.email}
                    onChange={(e) => setSignupUserData({...signupUserData, email: e.target.value})}
                />
            </div>
            <div className={styles.InputContainer}>

                <label htmlFor="password">Password</label>
                <input
                    id={'password'}
                    type="password"
                    value={signupUserData.password}
                    onChange={(e) => setSignupUserData({...signupUserData, password: e.target.value})}
                />
            </div>
            <button onClick={handleSubmit}>
                {loading && <ButtonSpinner height={'1rem'} width={'1rem'}/>}
                Register
            </button>
            <div style={{alignSelf: 'center', justifySelf: 'center'}}>OR</div>
            <Link style={{justifySelf: 'end'}} to={'/login'}>Already have an account? Login</Link>
        </div>
    )
}

export default SignupForm;