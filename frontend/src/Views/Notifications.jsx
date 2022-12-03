import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


//This page is the notification page for real time notifications which was removed due to time constraints
export default function Notifications() {
  const notify = () =>
    toast("🔔 Notification!", {
      position: "bottom-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  return (
    <div>
      <h1>This is the Notifications page</h1>
      <p>Welcome to my notifications page wohoo!</p>
      <button onClick={notify}>Notify!</button>
    </div>
  );
}
