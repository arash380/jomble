import { DEFAULT_API as axios } from "./AxiosInstance";
import { toast } from "react-toastify";
import { _catchAPIError } from "../utils/helpers";

const AUTH_PREFIX = "/auth";

export const login = async (email, password) => {
  try {
    const r = await axios.post(`${AUTH_PREFIX}/login`, { email, password });
    toast.success("Logged in successfully!");
    return r.data.token;
  } catch (err) {
    _catchAPIError(err);
  }

  return null;
};

export const createUser = async (user) => {
  try {
    const r = await axios.post(`${AUTH_PREFIX}/register`, { ...user });
    toast.success(`Created user for ${user.firstName} ${user.lastName}`);
    return r.data.token;
  } catch (err) {
    _catchAPIError(err);
  }

  return null;
};
