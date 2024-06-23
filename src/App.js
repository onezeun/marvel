import { useRoutes } from 'react-router-dom';

import Home from 'pages/Home';
import Details from 'pages/Details';
import NotFound from 'pages/NotFound';

import Layout from 'components/Layout';

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: '/character/:id',
          element: <Details />
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    }
  ]);
  return element;
};

export default App;
