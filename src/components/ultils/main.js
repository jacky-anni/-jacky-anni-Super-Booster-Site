import axios from "axios";
import { headers } from "./hearders";
import { ToastMessage } from "./../layout/tost";

export const pays = async () => {
  try {
    const res = await axios.get("/api/admin/contries");
    return res.data;
  } catch (error) {
    ToastMessage("Erreur serveur", "error");
  }
};

export const languages = async () => {
  try {
    const res = await axios.get("/api/admin/languages");
    return res.data;
  } catch (error) {
    ToastMessage("Erreur serveur", "error");
  }
};

// export const langue = async () => {
//   return ISO6391.getName("fr");
// };
