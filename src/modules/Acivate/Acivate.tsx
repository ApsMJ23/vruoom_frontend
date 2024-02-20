import styles from './Activate.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {profile} from "../../store/User/actions.ts";
import {UserState} from "../../store/User/reducer.ts";
import {VRUOOM_CALL_CENTER} from "../../utils/constants/GeneralConstants.ts";
import {useNavigate} from "react-router-dom";


const Acivate = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const user = useSelector((state:UserState) => state.user.userData);
    useEffect(() => {
        setTimeout(()=>{
            dispatch(profile())
        },500)
    }, [dispatch]);

    useEffect(() => {
        if(user.is_staff){
            navigate('/app/dashboard')
        }
    }, [user, navigate]);


    return (
        <div className={styles.ActivateWrapper}>
            <div className={styles.ActivateContainer}>
                <h2>Hi, {user.first_name}</h2>
                <p>Please Contact Admin to gain access to the portal!!</p>
                <p>Call Us at: <a href="tel:18003456512">{VRUOOM_CALL_CENTER}</a></p>

            </div>

        </div>
    )
}

export default Acivate;