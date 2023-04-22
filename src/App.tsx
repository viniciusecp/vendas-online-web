import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
  useNavigate,
} from 'react-router-dom';

import { firstScreenRoutes } from './modules/firstScreen/routes';
import { loginRoutes } from './modules/login/routes';
import { productRoutes } from './modules/product/routes';
import { verifyLoggedIn } from './shared/functions/connection/auth';
import { useGlobalContext } from './shared/hooks/useGlobalContext';
import { useNotification } from './shared/hooks/useNotification';

const routes: RouteObject[] = [...firstScreenRoutes, ...loginRoutes];
const routesLoggedIn: RouteObject[] = [...productRoutes];

function App() {
  const { contextHolder } = useNotification();
  const { user, setUser } = useGlobalContext();

  const router = createBrowserRouter([
    ...routes,
    ...routesLoggedIn.map((route) => ({
      ...route,
      loader: () => verifyLoggedIn(setUser, user),
    })),
  ]);

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
