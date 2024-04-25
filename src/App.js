import { RouterProvider } from 'react-router-dom';
import pagesRoute from './Routes/pagesRoute';
import Footer from './Components/Footer/Footer';
import automaticScrollUp from './Utils/ScrollUp';

function App() {
  automaticScrollUp()
  return (
    <>
      <RouterProvider router={pagesRoute} />
      <Footer/>
    </>
  );
}

export default App;
