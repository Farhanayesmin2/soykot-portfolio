import Education from "../Education/Education";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";

const { createBrowserRouter } = require("react-router-dom");

 export  const router = createBrowserRouter([

     {
         path: '/',
         element: <Home></Home>,
    children: [
            {
                path: '/education',
                element: <Education></Education>
            },
           
         ]   
        
    },
    {
        path: '*',
        element: <NotFound ></NotFound>
    }


 ])

export default router;