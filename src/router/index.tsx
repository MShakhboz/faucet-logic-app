import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";

import { MainLayout } from "layouts";

import { FaucetPage, NotFoundPage } from "pages";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            {/* main */}
            <Route path="/" element={<MainLayout />}>
                <Route index element={<FaucetPage />} />
            </Route>
            {/* auth */}
            <Route></Route>
            <Route path="*" element={<NotFoundPage />} />
        </Route>
    )
);

const MainRouter = () => {
    return <RouterProvider router={router} />;
};

export default MainRouter;
