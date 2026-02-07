import { wrapper } from "@/store"
import { AppProps } from "next/app"
import { FC } from "react"
import { Provider } from "react-redux";

export default function App({Component, ...rest}): FC<AppProps> {
  const {store, props} = wrapper.useWrappedStore(rest);
  
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
};