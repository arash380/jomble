import { toast } from "react-toastify";

export const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const _catchAPIError = (err) => {
  const msg = err.response.data.errors[0];
  if (err.response.status === 400 && msg) {
    toast.error(msg);
  } else {
    toast.error("Something went wrong!");
  }

  throw new Error("Failed!");
};
