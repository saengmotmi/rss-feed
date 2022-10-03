import { toast } from "react-toastify";
import type { ToastOptions } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

const toastDefaultSetting: ToastOptions = {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
};

export const successToast = (message: React.ReactNode) =>
  toast.success(message, toastDefaultSetting);

export const errorToast = (message: React.ReactNode) =>
  toast.error(message, toastDefaultSetting);
