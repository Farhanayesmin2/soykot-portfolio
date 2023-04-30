
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from ".././src/Component/Route/Route";
import { motion, useScroll } from "framer-motion"
function App() {

   const { scrollYProgress } = useScroll();
  return (
    <div className="App">
        <motion.div style={{ scaleX: scrollYProgress }} />  
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
