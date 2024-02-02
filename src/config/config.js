import { Bounce } from "react-toastify";
export const config = {
    API_BASE_URL: process.env.REACT_APP_API_URL,
    APP_BASE_URL: process.env.REACT_APP_BASE_URL,
    TOAST_UI: {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      }
}