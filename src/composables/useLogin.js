import { projectAuth } from "../firebase/config";
import { ref } from "vue";

const error = ref(null);
const isPending = ref(false);

const login = async (email, password) => {
  error.value = null;
  isPending.value = true;

  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
    error.value = null;
    isPending.value = false;
    return res;
  } catch (err) {
    console.log(err.value);
    error.value = "Incorrect login credentials";
    isPending.value = false;
  }
};

const useLogin = () => {
  return { error, login, isPending };
};

export default useLogin;
