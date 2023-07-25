import { RouterProvider } from "react-router-dom";
import router from "./Components/Router";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import AppContext from "./Context/AppContext";

function App() {
  return (
    <AppContext>
      <div className='items-center h-screen max-h-screen'>
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </div>
    </AppContext>
  );
}

export default App;
