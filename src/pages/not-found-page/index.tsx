import { Button } from "components";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();

    const goToHome = useCallback(() => {
        navigate("/");
    }, [navigate]);

    return (
        <div className="w-full h-[100vh] flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <p className="text-6xl text-white">Oops! Page Not Found</p>
                <Button
                    onClick={goToHome}
                    title={"Go to Home"}
                    className="mt-10"
                />
            </div>
        </div>
    );
};

export default NotFoundPage;
