import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import { MainLayout } from "layouts";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            {/* main */}
            <Route path="/" element={<MainLayout />}>
                <Route
                    index
                    element={
                        <div>
                            <p>Home</p>
                        </div>
                    }
                />
            </Route>
            {/* auth */}
            <Route></Route>
            <Route
                path="*"
                element={
                    <div
                        style={{
                            width: "100%",
                            height: "100vh",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <p>No Access</p>
                    </div>
                }
            />
        </Route>
    )
);

const MainRouter = () => {
    return <RouterProvider router={router} />;
};

export default MainRouter;
