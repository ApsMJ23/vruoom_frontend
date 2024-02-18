import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {toast} from "react-toastify";


const PrivateRoutes = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('token') === null){
            toast.error('Invalid Session,Logging Out');
            setTimeout(() => {
                navigate('/login');
            }, 1000);
        }
    }, [navigate]);

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