import { RouterProvider } from "react-router-dom";
import router from "./Components/Router";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className='items-center w-[100%] h-[1111px]'>
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
