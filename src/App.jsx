import { RouterProvider } from "react-router-dom";
import router from "./Components/Router";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className='items-center h-screen w-screen max-h-screen'>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
