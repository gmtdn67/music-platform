import { theme } from "@/settings/theme";
import { wrapper } from "@/store"
import { ThemeProvider } from "@mui/material/styles";
import { AppProps } from "next/app"
import { FC } from "react"
import { Provider } from "react-redux";
import './globals.css'

export default function App({Component, ...rest}): FC<AppProps> {
  const {store, props} = wrapper.useWrappedStore(rest);
  
  return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                    <Component {...props.pageProps} />
            </Provider>
        </ThemeProvider>
);
};