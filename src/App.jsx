import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { ToastContainer } from "react-toastify";
import ProductProvider from "./context/ProductProvider";

function App() {
  return (
    <>
      <ProductProvider>
        <RouterProvider router={routes}></RouterProvider>
        <ToastContainer />
      </ProductProvider>
    </>
  );
}

export default App;
