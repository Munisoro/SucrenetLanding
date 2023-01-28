import { createBrowserRouter } from 'react-router-dom';
import loadable from '@loadable/component';
import Layout from 'components/Layout';
import ErrorFound from './ErrorFound';
import { FC } from 'react';

/*
const Home = loadable(() => import('./Home'));
const Nosotros = loadable(() => import('./Nosotros'));
const Contactanos = loadable(() => import('./Contactanos'));
const Servicios = loadable(() => import('./Servicios'));
const Pagos = loadable(() => import('./Pagos'));
*/

//interface

const Page = loadable(({page}) => import(`./${page}`));

interface AsyncPageProps {
    page: string
}

const AsyncPage: FC<AsyncPageProps> = ({ page }) => (
    <Layout>
        <Page page={page} />
    </Layout>
);



const routeConfig = createBrowserRouter([{
    index: true,
    element: <AsyncPage page='Home' />
},{
    path: '/nosotros',
    element: <AsyncPage page='Nosotros' />
},{
    path: '/planes',
    element: <AsyncPage page='Servicios' />
},{
    path: '/pagos',
    element: <AsyncPage page='Pagos' />
},{
    path: 'contactanos',
    element: <AsyncPage page='Contactanos' />
},{
    path: '*',
    element: <AsyncPage page='ErrorFound' />
}]);

/*
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
            path: 'pagos',
            element: <Pagos />
        },
        {
            path: 'contactanos',
            element: <Contactanos />
        }
    ]
}]);
*/
export default routeConfig;