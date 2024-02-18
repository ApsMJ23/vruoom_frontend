
import './App.css'
import {ToastContainer} from "react-toastify";
import {BrowserRouter} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import ApplyInterceptor from "./ApplyInterceptor.tsx";
import RootRoutes from "./routes/RootRoutes.tsx";

function App() {
    return (
        <div>
            <BrowserRouter>
                <ApplyInterceptor/>
                <RootRoutes/>
            </BrowserRouter>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}

export default App
