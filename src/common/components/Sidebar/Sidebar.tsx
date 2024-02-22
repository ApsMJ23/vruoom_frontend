import styles from './Sidebar.module.scss';
import {useNavigate} from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();
    const logoutUser = () => {
        localStorage.clear();
        navigate('/login');
    }
    return(
        <div className={styles.Sidebar}>
            <div className={styles.SidebarTop}>
                VRUOOM
            </div>
            <div className={styles.SidebarFooter}>
                <button onClick={logoutUser}>Logout</button>
            </div>
        </div>
    )
}

export default Sidebar;