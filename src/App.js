import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
    return (
        <>
            <ToastContainer autoClose={1000} />
            <div className="App">Welcome to the React App</div>
        </>
    );
}

export default App;
