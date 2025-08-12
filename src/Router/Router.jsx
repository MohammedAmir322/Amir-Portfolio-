import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Hero";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Education from "../Pages/Education";
import Experience from "../Pages/Experience";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";
// import About from "../Pages/About";

export const router = createBrowserRouter([
    {
        path: "/",
        // errorElement: <Error />,
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path:"/about",
                Component: About,
            },
            {
                path: "/skills",
                Component:Skills
            },
            {
                path:"/education",
                Component:Education
            },
            {
                path:"/experience",
                Component:Experience
            },
            {
                path:"/projects",
                Component:Projects
            },
            {
                path:"/contact",
                Component:Contact
            },

        ],
    },
]);