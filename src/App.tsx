import { AlertProvider } from "./contexts/AlertContext"
import { AuthProvider } from "./contexts/AuthContext"
import { LoaderProvider } from "./contexts/LoaderContext"
import { LocalizationProvider } from "./contexts/LocalizationContext"
import { ThemeProvider } from "./contexts/ThemeContext"
import AppRoutes from "./routes"
import { useLocalStorage } from 'usehooks-ts';
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter, Navigate } from "react-router-dom"
import { ErrorBoundary } from "react-error-boundary"
import { ROUTES } from "./models/consts/routes"


const App = () => {
  const [locale, setLocale] = useLocalStorage<'id-ID' | 'en-EN'>('lang', 'id-ID')
  const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>('dark', false)
  const queryClient = new QueryClient()

  return (
    <BrowserRouter>
      <ErrorBoundary fallback={<Navigate to={ROUTES.EXTERNAL.LANDING} state={{errorMessage: 'Unexpected Error'}} />}>
        <ThemeProvider isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}>
          <LoaderProvider>
            <AlertProvider>
              <LocalizationProvider locale={locale} setLocale={setLocale}>
                <QueryClientProvider client={queryClient}>
                  <AuthProvider>
                    <AppRoutes />
                  </AuthProvider>
                </QueryClientProvider>
              </LocalizationProvider>
            </AlertProvider>
          </LoaderProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>

  )
}

export default App
