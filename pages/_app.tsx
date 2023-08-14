import store from "@redux/store";
import "@styles/global.css";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    // Add the class when the component mounts
    document.body.classList.add('demo-2');

    // Return a cleanup function to remove the class when the component unmounts
    return () => {
        document.body.classList.remove('demo-2');
    };
}, []); // Empty dependency array ensures this effect runs once when component mounts and once when it unmounts

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
