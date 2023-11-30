import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import SearchResult from './pages/SearchResult/SearchResult';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage />,
    },
    {
      path: '/result',
      element: <SearchResult />,
    },
  ]);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
