import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./context/AuthContext";
import OrderContextProvider from "./context/OrderContext";
// import Header from "./layout/Header";
import Router from "./route";

function App() {
  return (
    <>
      <AuthContextProvider>
        <OrderContextProvider>
          <Router />
          <ToastContainer position="bottom-right" autoClose={3000} />
        </OrderContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
