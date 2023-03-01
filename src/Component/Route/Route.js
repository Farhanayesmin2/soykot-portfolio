import Header from "../Header/Header";
import Home from "../Home/Home";
import Main from "../Main/Main";
import NotFound from "../NotFound/NotFound";

const { createBrowserRouter } = require("react-router-dom");

 export  const router = createBrowserRouter([

     {
         path: '/',
         element: <Home></Home>,
    children: [
            {
                path: '/',
                element: <Home></Home>
            },
           
         ]   
        
    },
    {
        path: '*',
        element: <NotFound ></NotFound>
    }


 ])

export default router;