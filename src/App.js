import { useRoutes } from 'react-router-dom';
import Home from 'pages/Home';
import Details from 'pages/Details';

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
        }
      ]
    }
  ]);
  return element;
};

export default App;
