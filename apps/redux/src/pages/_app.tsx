import "../styles/globals.css";
import "ui/styles.css";

import { Provider } from "react-redux";
import { store } from "../store";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
