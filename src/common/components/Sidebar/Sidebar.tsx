import styles from './Sidebar.module.scss';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {profile} from "../../../store/User/actions.ts";

const Sidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user.userData);
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
                <Link className={styles.NavLink} to={'/app/client'}>Client</Link>

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