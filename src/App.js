import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Courses from "./components/Courses/Courses";
import CoursesDetails from "./components/CoursesDetails/CoursesDetails";
import Error from "./components/Error/Error";
import Faq from "./components/Faq/Faq";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import Main from "./layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/courses",
          loader: () => fetch("http://localhost:5000/details"),
          element: <Courses></Courses>,
        },
        {
          path: "/coursesDetails/:id",
          loader: async ({ params }) =>
            fetch(`http://localhost:5000/details/${params.id}`),
          element: <CoursesDetails></CoursesDetails>,
        },

        {
          path: "/faq",
          element: <Faq></Faq>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/login",
          element: <LogIn></LogIn>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
      ],
    },
    {
      path: "*",
      element: <Error></Error>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
