import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {toast} from "react-toastify";
import Sidebar from "../common/components/Sidebar/Sidebar.tsx";
import styles from './PrivateRoutes.module.scss';


const PrivateRoutes = () => {
    const navigate = useNavigate();
    const isActive = localStorage.getItem('isActive');
    useEffect(() => {
        if(localStorage.getItem('token') === null){
            toast.error('Invalid Session,Logging Out');
            setTimeout(() => {
                navigate('/login');
            }, 1000);
        }else{
            if(isActive==='false'){
                navigate('activate/');
            }
        }
    }, [isActive, navigate]);

    return(
        <div className={styles.PrivateWrapper}>
            {isActive==='true'&&<Sidebar/>}
            <div style={isActive?{width:'100%'}:{}} className={styles.OutletContainer}>
                <Outlet/>
            </div>
        </div>
    )
}

export default PrivateRoutes;