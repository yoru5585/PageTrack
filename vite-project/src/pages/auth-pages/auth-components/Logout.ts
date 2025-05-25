import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";

export default function Logout() {
  return signOut(auth)
}

