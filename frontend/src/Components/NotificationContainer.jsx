import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NotificationContainer() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      theme="light"
    />
  );
}
