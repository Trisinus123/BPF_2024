import "@/style/globals.css";
import { useEffect } from "react";
import { Provider } from "react-redux";
import {store} from "@/redux/store/store.js";


function MyApp({Component, pageProps}: any) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps}/>
    </Provider>
  )
}

export default MyApp;