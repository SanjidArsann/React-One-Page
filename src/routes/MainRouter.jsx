
import { createBrowserRouter} from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Demos from "../Components/Demos/Demos";
import Services from "../Components/Services/Services";
import Blog from "../Components/Blog/Blog";
import Portfolio from "../Components/Portfolio/Portfolio";
import About from "../Components/About/About";
import Team from "../Components/Team/Team";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Demos />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/team",
          element: <Team />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);

  export default router;