import Header from "../Header/Header";
import NotFound from "../NotFound/NotFound";

const { createBrowserRouter } = require("react-router-dom");

 export  const router = createBrowserRouter([

     {
         path: '/',
         element: <Header></Header>,
    children: [
            {
                path: '/',
                element: <Header></Header>
            },
           
         ]   
        
    },
    {
        path: '*',
        element: <NotFound ></NotFound>
    }


 ])

export default router;