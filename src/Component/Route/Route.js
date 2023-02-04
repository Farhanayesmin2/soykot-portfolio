import Header from "../Header/Header";
import Main from "../Main/Main";
import NotFound from "../NotFound/NotFound";

const { createBrowserRouter } = require("react-router-dom");

 export  const router = createBrowserRouter([

     {
         path: '/',
         element: <Main></Main>,
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