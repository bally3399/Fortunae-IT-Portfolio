import Layout from "../components/layout";
import Home from "../pages/home/home";

export const ROUTE = [
    {
        path:"/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Home/>,
            }
        ]
    }
]