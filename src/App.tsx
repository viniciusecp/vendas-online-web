import { useEffect } from 'react';
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';

import { firstScreenRoutes } from './modules/firstScreen/routes';
import { loginRoutes } from './modules/login/routes';
import { productRoutes } from './modules/product/routes';
import { URL_USER } from './shared/constants/urls';
import { MethodsEnum } from './shared/enums/methods.enum';
import { verifyLoggedIn } from './shared/functions/connection/auth';
import { useGlobalContext } from './shared/hooks/useGlobalContext';
import { useNotification } from './shared/hooks/useNotification';
import { useRequests } from './shared/hooks/useRequests';

const routes: RouteObject[] = [...loginRoutes];
const routesLoggedIn: RouteObject[] = [...productRoutes, ...firstScreenRoutes];

const router = createBrowserRouter([
  ...routes,
  ...routesLoggedIn.map((route) => ({
    ...route,
    loader: verifyLoggedIn,
  })),
]);

function App() {
  const { contextHolder } = useNotification();
  const { setUser } = useGlobalContext();
  const { request } = useRequests();

  useEffect(() => {
    request(URL_USER, MethodsEnum.GET, setUser);
  }, []);

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
