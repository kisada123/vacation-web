import { ToastContainer } from "react-toastify";
import Router from "./routes/Router";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
