import { useDispatch } from "react-redux";
import { getItem } from "../utils/SessionStorage";
import { getUserDetails } from "../store/action";
import { useEffect } from "react";

function App({ children }) {
  const dispatch = useDispatch();

useEffect(()=>{
    if (getItem("token") !== undefined) {
        dispatch(getUserDetails());
    } else {

    }
}, [])
  return <>{children}</>;
}

export default App;
