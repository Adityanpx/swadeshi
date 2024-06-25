import { ThemeProvider } from "@/components/ThemeToggle/theme-provider";
import i18n from "@/i18n";
import "@/styles/globals.css";
import { I18nextProvider } from "react-i18next";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      disableTransitionOnChange
    >
      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nextProvider>
    </ThemeProvider>
  )
}
