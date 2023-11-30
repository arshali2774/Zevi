import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
