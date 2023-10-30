import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RedirectAuth, RequireAuth } from './utils/auth';
import { ROUTES } from "./models/consts/routes";
import LandingPage from "./pages/external/Landing";
import { NotFoundPage } from "./components/errors/NotFoundPage";
import AboutUsPage from "./pages/external/AboutUs";
import NewsPage from "./pages/external/News";
import FaqPage from "./pages/external/Faq";
import ScrollToTop from "./utils/scrollToTop";
import LoginPage from "./pages/external/Login";


const AppRoutes = () => {
    return <>
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                {/* External Routes */}
                <Route element={<RedirectAuth />}>
                    <Route
                        path={ROUTES.EXTERNAL.LANDING}
                        element={<LandingPage />}
                    />
                    <Route
                        path={ROUTES.EXTERNAL.ABOUT_US}
                        element={<AboutUsPage />}
                    />
                    <Route
                        path={ROUTES.EXTERNAL.NEWS}
                        element={<NewsPage />}
                    />
                    <Route
                        path={ROUTES.EXTERNAL.FAQ}
                        element={<FaqPage />}
                    />
                    <Route
                        path={ROUTES.EXTERNAL.LOGIN}
                        element={<LoginPage />}
                    />
                </Route>

                {/* Internal Routes */}
                <Route element={<RequireAuth />}>


                </Route>

                {/* Not found */}
                <Route
                    path="*"
                    element={<NotFoundPage />}
                />
            </Routes>
        </BrowserRouter>
    </>

}

export default AppRoutes