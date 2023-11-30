import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import SearchResult, { searchLoader } from './pages/SearchResult/SearchResult';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useDispatch } from 'react-redux';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

function App() {
  const dispatch = useDispatch();
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage />,
    },
    {
      path: '/result',
      element: <SearchResult />,
      loader: searchLoader(queryClient, dispatch),
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
