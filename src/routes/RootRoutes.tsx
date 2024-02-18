import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import BaseRoute from "./BaseRoute.tsx";
import {PRIVATE_ROUTES, PUBLIC_ROUTES} from "../utils/constants/RoutesConstants.ts";
import PrivateRoutes from "./PrivateRoutes.tsx";
import Login from "../modules/Login/Login.tsx";


const RootRoutes =()=>{
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path='*' element={<div>404 Page Not Found</div>}/>
                <Route path={PUBLIC_ROUTES.BASE_PATH} element={<BaseRoute/>}/>
                <Route path={PUBLIC_ROUTES.LOGIN} element={<Login/>}/>
                <Route path={PUBLIC_ROUTES.REGISTER} element={<div>Signup Page</div>}/>
                <Route path={PRIVATE_ROUTES.BASE_PATH} element={<PrivateRoutes/>}>
                    <Route path={PRIVATE_ROUTES.DASHBOARD} element={<div>Dashboard Page</div>}/>
                    <Route path={PRIVATE_ROUTES.CLIENT} element={<div>Profile Page</div>}/>
                </Route>

            </Routes>
        </Suspense>
    )

}
export default RootRoutes;