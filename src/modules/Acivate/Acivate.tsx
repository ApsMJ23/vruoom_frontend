import styles from './Activate.module.scss';
import {useEffect} from "react";
import {profile} from "../../store/User/actions.ts";
import {VRUOOM_CALL_CENTER} from "../../utils/constants/GeneralConstants.ts";
import {useNavigate} from "react-router-dom";
import PageLoader from "../../common/components/PageLoader/PageLoader.tsx";
import {useAppDispatch, useAppSelector} from "../../common/hooks.ts";

const Acivate = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const user = useAppSelector((state) => state.user.userData);
    const loading = useAppSelector((state) => state.user.isFetching)
    useEffect(() => {
        if (!user.email) {
            dispatch(profile())
        }
    }, [dispatch, user]);

    useEffect(() => {
        if (user.is_staff) {
            navigate('/app/dashboard')
        }
    }, [user, navigate]);
    const logoutUser = () => {
        localStorage.clear();
        navigate('/login');
    }


    return (
        <>
            <div className={styles.ActivateWrapper}>
                {loading ? <PageLoader/> :
                    <div className={styles.ActivateContainer}>
                        <h2>Hi, {user.first_name}</h2>
                        <p>Please Contact Admin to gain access to the portal!!</p>
                        <p>Call Us at: <a href="tel:18003456512">{VRUOOM_CALL_CENTER}</a></p>
                        <button onClick={logoutUser}>Logout</button>
                    </div>}
            </div>
        </>
    )
}

export default Acivate;