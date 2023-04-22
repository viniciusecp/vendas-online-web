import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthType } from '../../modules/login/types/AuthType';
import { ProductRoutesEnum } from '../../modules/product/routes';
import { ERROR_INVALID_PASSWORD } from '../constants/errorsStatus';
import { URL_AUTH } from '../constants/urls';
import { setAuthorizationToken } from '../functions/connection/auth';
import ConnectionAPI, {
  connectionAPIPost,
  MethodType,
} from '../functions/connection/connectionAPI';
import { useGlobalContext } from './useGlobalContext';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification, setUser } = useGlobalContext();

  const request = async <T>(
    url: string,
    method: MethodType,
    saveGlobal?: (object: T) => void,
    body?: unknown,
  ): Promise<T | undefined> => {
    setLoading(true);

    const returnObject = await ConnectionAPI.connect<T>(url, method, body)
      .then((result) => {
        saveGlobal?.(result);
        return result;
      })
      .catch((error) => {
        setNotification(error.message, 'error');
        return undefined;
      })
      .finally(() => {
        setLoading(false);
      });

    return returnObject;
  };

  const authRequest = async (body: unknown) => {
    const navigate = useNavigate();

    setLoading(true);

    await connectionAPIPost<AuthType>(URL_AUTH, body)
      .then((result) => {
        setUser(result.user);
        setAuthorizationToken(result.accessToken);
        navigate(ProductRoutesEnum.PRODUCT);
      })
      .catch(() => {
        setNotification(ERROR_INVALID_PASSWORD, 'error');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { loading, request, authRequest };
};
