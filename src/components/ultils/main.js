import axios from "axios";
import { headers } from "./hearders";
import { ToastMessage } from "./../layout/tost";

export const pays = async () => {
  try {
    const res = await axios.get("/api/admin/contry");
    return res.data;
  } catch (error) {
    ToastMessage("Erreur serveur", "error");
  }
};

// export const langue = async () => {
//   try {
//     const res = await axios.get("/api/admin/contry");
//     return res.data;
//   } catch (error) {
//     ToastMessage("Erreur serveur", "error");
//   }
// };
