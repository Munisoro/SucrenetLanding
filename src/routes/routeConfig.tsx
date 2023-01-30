import { createBrowserRouter } from 'react-router-dom';
import loadable from '@loadable/component';

const Home = loadable(() => import('./Home'));
const Nosotros = loadable(() => import('./Nosotros'));
const Contactanos = loadable(() => import('./Contactanos'));
const Servicios = loadable(() => import('./Servicios'));
const Pagos = loadable(() => import('./Pagos'));
const ErrorFound = loadable(() => import('./ErrorFound'));

const routeConfig = createBrowserRouter([{
    index: true,
    element: <Home />
},{
    path: 'nosotros',
    element: <Nosotros />
},{
    path: 'planes',
    element: <Servicios />
},{
    path: 'pagos',
    element: <Pagos />
},{
    path: 'contactanos',
    element: <Contactanos />
},{
    path: '*',
    element: <ErrorFound />
}]);


export default routeConfig;