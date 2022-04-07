import axios, { AxiosError } from "axios";
import { useCallback, useState } from "react";

interface IUseAxiosGet<ParamType> {
  url: string;
  params: ParamType;
}

interface IStatus {
  code?: string;
  isError: boolean;
}

interface ICustomError {
  message?: string;
  status: IStatus;
}

const useAxiosGet = <ParamType, ResponseType>({
  url,
  params,
}: IUseAxiosGet<ParamType>) => {
  const [loading, setLoading] = useState<boolean>(true);

  const [error, setError] = useState<ICustomError>({
    status: { isError: false },
  });

  const [data, setData] = useState<ResponseType>();

  const getCall = useCallback(async () => {
    setLoading(true);

    try {
      const { data } = await axios.get(url, { params: { ...params } });
      setData(data);
      setLoading(false);
    } catch (err) {
      const error = err as AxiosError;
      setError({
        message: error.message,
        status: {
          code: error.code,
          isError: true,
        },
      });
      setLoading(false);
    }
  }, [params, url]);

  return [loading, error, data, setData, getCall] as const;
};

export default useAxiosGet;
