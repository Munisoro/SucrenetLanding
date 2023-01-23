import { createBrowserRouter } from 'react-router-dom';
import Layout from 'components/Layout';
import Home from './Home';
import Nosotros from './Nosotros';
import Contactanos from './Contactanos';
import Servicios from './Servicios';
import ErrorFound from './ErrorFound';

const routeConfig = createBrowserRouter([{
    element: <Layout />,
    errorElement: <ErrorFound />,
    children: [
        {
            index: true,
            element: <Home />
        },
        {
            path: 'nosotros',
            element: <Nosotros />
        },
        {
            path: 'planes',
            element: <Servicios />
        },
        {
            path: 'contactanos',
            element: <Contactanos />
        }
    ]
}]);

export default routeConfig;