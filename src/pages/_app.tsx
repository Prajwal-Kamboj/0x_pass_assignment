import type { AppProps } from 'next/app'
import { ModalProvider } from "../context/ModalContext";

function MyApp({Component, pageProps}:AppProps) {
    return (
        <ModalProvider>
            <Component {...pageProps} val="aa"/>
        </ModalProvider>
    )
}

export default MyApp;