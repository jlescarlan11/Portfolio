import ErrorPage from "./components/ErrorPage";
import About from "./components/About";
import profilePic from "./assets/about-me-pic.jpg";
import App from "./App";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About photoUrl={profilePic} />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
