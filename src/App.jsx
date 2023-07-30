import { RouterProvider } from "react-router-dom";
import router from "./Components/Router";
import AppContext from "./Context/AppContext";

function App() {
  return (
    <AppContext>
      <div className='items-center h-screen max-h-screen'>
        <RouterProvider router={router} />
      </div>
    </AppContext>
  );
}

export default App;
