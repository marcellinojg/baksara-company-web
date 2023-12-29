import { AlertProvider } from "./contexts/AlertContext"
import { AuthProvider } from "./contexts/AuthContext"
import { LoaderProvider } from "./contexts/LoaderContext"
import { LocalizationProvider } from "./contexts/LocalizationContext"
import { ThemeProvider } from "./contexts/ThemeContext"
import AppRoutes from "./routes"
import { useLocalStorage } from 'usehooks-ts';
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter } from "react-router-dom"


const App = () => {
  const [locale, setLocale] = useLocalStorage<'id-ID' | 'en-EN'>('lang', 'id-ID')
  const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>('dark', false)
  const queryClient = new QueryClient()

  return (
    <ThemeProvider isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}>
      <LoaderProvider>
        <AlertProvider>
          <LocalizationProvider locale={locale} setLocale={setLocale}>
            <QueryClientProvider client={queryClient}>
              <BrowserRouter>
                <AuthProvider>
                  <AppRoutes />
                </AuthProvider>
              </BrowserRouter>
            </QueryClientProvider>
          </LocalizationProvider>
        </AlertProvider>
      </LoaderProvider>
    </ThemeProvider>
  )
}

export default App
