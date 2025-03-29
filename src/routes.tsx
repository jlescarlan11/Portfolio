import Hero from "./components/Hero";
import ErrorPage from "./components/ErrorPage";

const routes = [
    {
        path: "/",
        element: <Hero/>,
        errorElement: <ErrorPage/>
    }
]

export default routes;