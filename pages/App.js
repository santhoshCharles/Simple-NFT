import { useDispatch } from "react-redux";
import { getItem } from "../utils/SessionStorage";
import { getUserDetails } from "../store/action";
import { useEffect } from "react";

function App({ children }) {
  const dispatch = useDispatch();

//   useEffect(() => {
//     //console.log(getItem('token').toke)
//     if (getItem("token").token !== undefined) {
//       dispatch(getUserDetails());
//     } else {
//     }
//   },[]);
useEffect(()=>{
    if (getItem("token")?.token !== undefined) {
        dispatch(getUserDetails());
    } else {

    }
}, [])
  return <>{children}</>;
}

export default App;
