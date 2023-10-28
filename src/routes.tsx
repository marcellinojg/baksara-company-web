import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RedirectAuth, RequireAuth } from './utils/auth';
import { ROUTES } from "./models/consts/routes";
import LandingPage from "./pages/external/Landing";
import { NotFoundPage } from "./components/errors/NotFoundPage";


const AppRoutes = () => {
    return <>
        <BrowserRouter>
            <Routes>

                {/* External Routes */}
                <Route element={<RedirectAuth />}>
                    <Route
                        path={ROUTES.EXTERNAL.LANDING}
                        element={<LandingPage />}
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