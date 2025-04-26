'use client';

import { Button } from '@/components/ui/button';
import { HandleApiSuccess, HandleApiError } from './apiService/apiResponseHandler';

export default function Home() {
  const refetchApi = () => {
    console.log('Refetching API data...');
  };

  // const { isLoading, refetch, data, isError } = useGetUserAccountBalance('123456789');

  // const accountBalanceData = useMemo(() => {
  //   return data?.data?.data || [];
  // }, []);

  return (
    <div>
      <Button variant="outline" onClick={() => HandleApiSuccess()}>
        Success
      </Button>
      <Button variant="outline" onClick={() => HandleApiError({}, refetchApi)}>
        Error
      </Button>
    </div>
  );
}
