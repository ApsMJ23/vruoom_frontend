/**
 * @Description
 * Base File Rendered for all routes.
 * Use this component to write any logic that needs to exist inside all routes.
 * IMP: to write logic at an app level (above router level), use App.tsx
 */
import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";


const BaseRoute = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/login')
    }, [navigate]);
    return <Outlet/>;
}

export default BaseRoute;