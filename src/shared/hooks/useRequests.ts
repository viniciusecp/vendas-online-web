import axios from 'axios';
import { useState } from 'react';

import { connectionAPIPost } from '../functions/connection/connectionAPI';
import { useGlobalContext } from './useGlobalContext';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification } = useGlobalContext();

  const getResquest = async (url: string) => {
    setLoading(true);

    return await axios({
      method: 'get',
      url,
    })
      .then((result) => {
        return result.data;
      })
      .catch(() => {
        alert('Erro');
      });
  };

  const postResquest = async <T>(
    url: string,
    body: unknown,
  ): Promise<T | undefined> => {
    setLoading(true);

    return await connectionAPIPost<T>(url, body)
      .then((result) => {
        setNotification('Entrando...', 'success');
        return result;
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error');
        return undefined;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { loading, getResquest, postResquest };
};
