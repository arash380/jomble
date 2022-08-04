import { DEFAULT_API as axios } from "./AxiosInstance";
import { toast } from "react-toastify";
const AUTH_PREFIX = "/auth";

export const login = async (email, password) => {
  try {
    const r = await axios.post(`${AUTH_PREFIX}/login`, { email, password });
    toast.success("Logged in successfully!");
    return r.data.token;
  } catch (err) {
    if (err.response.status === 401) toast.error(err.response.data);
    else toast.error("Something went wrong!");
  }

  return null;
};

export const createUser = async (user) => {
  try {
    const r = await axios.post(`${AUTH_PREFIX}/register`, { ...user });
    toast.success(`Created user for ${user.firstName} ${user.lastName}`);
    return r.data.token;
  } catch (err) {
    if (err.response.status === 401) toast.error(err.response.data);
    else toast.error("Something went wrong!");
  }

  return null;
};
