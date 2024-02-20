import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {toast} from "react-toastify";


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
        <>
        {/*<Sidebar/>*/}
            <div>
                <Outlet/>
            </div>
        </>
    )
}

export default PrivateRoutes;