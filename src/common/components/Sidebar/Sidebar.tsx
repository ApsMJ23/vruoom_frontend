import styles from './Sidebar.module.scss';
import {Link, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {profile} from "../../../store/User/actions.ts";
import {useAppDispatch, useAppSelector} from "../../hooks.ts";

const Sidebar = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user.userData);
    useEffect(() => {
        if (!user.username) {
            dispatch(profile())
        }
    }, []);
    const logoutUser = () => {
        localStorage.clear();
        navigate('/login');
    }
    return (
        <div className={styles.Sidebar}>
            <div className={styles.SidebarTop}>
                VRUOOM
            </div>
            <div className={styles.NavLinkContainer}>
                <Link className={styles.NavLink} to={'/app/dashboard'}>Dashboard</Link>
                <Link className={styles.NavLink} to={'/app/client/add'}>Client</Link>

            </div>
            <div className={styles.SidebarFooter}>
                <div className={styles.FooterContainer}>
                    <p style={{marginBottom: '0.25rem'}}>Hi, {user.username}!</p>
                </div>
                <div className={styles.FooterContainer}>
                    <button onClick={logoutUser}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;