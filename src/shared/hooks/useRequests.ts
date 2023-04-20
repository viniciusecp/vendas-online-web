import axios from 'axios';
import { useState } from 'react';

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

  const postResquest = async (url: string, body: any) => {
    setLoading(true);

    return await axios({
      method: 'post',
      url,
      data: body,
    })
      .then((result) => {
        setNotification('Entrando...', 'success');
        return result.data;
      })
      .catch(() => {
        setNotification('Senha inválida', 'error');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { loading, getResquest, postResquest };
};
