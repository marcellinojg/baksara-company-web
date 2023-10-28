import { AlertProvider } from "./contexts/AlertContext"
import { AuthProvider } from "./contexts/AuthContext"
import { LoaderProvider } from "./contexts/LoaderContext"
import { LocalizationProvider } from "./contexts/LocalizationContext"
import { ThemeProvider } from "./contexts/ThemeContext"
import AppRoutes from "./routes"
import { useLocalStorage } from 'usehooks-ts';

const App = () => {
  const [locale, setLocale] = useLocalStorage<'id-ID' | 'en-EN'>('lang', 'id-ID')
  const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>('dark', false)


  return (
    <ThemeProvider isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}>
      <LoaderProvider>
        <AlertProvider>
          <LocalizationProvider locale={locale} setLocale={setLocale}>
            <AuthProvider>
              <AppRoutes />
            </AuthProvider>
          </LocalizationProvider>
        </AlertProvider>
      </LoaderProvider>
    </ThemeProvider>
  )
}

export default App
