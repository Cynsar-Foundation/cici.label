import { ApiStatusProvider } from "@components/context/ApiStatusContext";
import WithAPICheck from "@components/css/withAPICheck/withApiCheck";
import store from "@redux/store";
import "@styles/normalize.css";
import "@styles/global.css";
import { AppProps } from "next/app";
import { Component, useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/reducers";
import { fetchMetaData } from "@redux/directUsActions";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  
  const ComponentWithAPICheck = WithAPICheck(Component, process.env.NEXT_PUBLIC_API_URL);

  useEffect(() => {
    // Add the class when the component mounts
    document.body.classList.add('demo-2');

    // Return a cleanup function to remove the class when the component unmounts
    return () => {
        document.body.classList.remove('demo-2');
    };
}, []); // Empty dependency array ensures this effect runs once when component mounts and once when it unmounts

  return (
<>
    <ApiStatusProvider>
        <Provider store={store}>
        <ComponentWithAPICheck {...pageProps}>
          <Component {...pageProps} />
         </ComponentWithAPICheck>
        </Provider>
        </ApiStatusProvider>

  </>
   
  );
}


export default MyApp;
