import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Courses from './components/Courses/Courses';
import Error from './components/Error/Error';
import Faq from './components/Faq/Faq';
import Home from './components/Home/Home';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
{
  path:'/',
  element:<Main></Main>,
  children:[
    {
      path:'/',
      element:<Home></Home>
  },
  {
    path:'/courses',
    element:<Courses></Courses>
},
{
  path:'/faq',
  element:<Faq></Faq>
},
  {
    path:'/blog',
    element:<Blog></Blog>
}
]
},
{
  path:'/error',
  element:<Error></Error>
}
  ])
  return (
    <div >
   <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
