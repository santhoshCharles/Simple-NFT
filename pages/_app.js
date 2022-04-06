import "../styles/globals.css";
import { useStore } from "../store";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import App from "./App";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  let timerId = null;
 
  Function.prototype.debounce = function () {
    clearTimeout(timerId);
    timerId = setTimeout(this, 200);
  };
  return (
    <Provider store={store}>
      <App>
      <Component {...pageProps} />
      </App>
    </Provider>
  );
}

export default MyApp;
