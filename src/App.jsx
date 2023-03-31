import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { ToastContainer } from "react-toastify";
import ProductProvider from "./context/ProductProvider";
import { useEffect, useState } from "react";
import Loader from "./components/loader/Loader";
import BackToTop from "./components/BackToTop/BackToTop";
import { Toaster } from 'react-hot-toast';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, [1500]);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductProvider>
          <RouterProvider router={routes}></RouterProvider>
          <ToastContainer />
          <Toaster/>
          <BackToTop />
        </ProductProvider>
      )}
    </>
  );
}

export default App;
