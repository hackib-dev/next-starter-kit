import PersonalLandingPage from './personal/page';

export default function Home() {
  const refetchApi = () => {
    console.log('Refetching API data...');
  };

  // const { isLoading, refetch, data, isError } = useGetUserAccountBalance('123456789');

  // const accountBalanceData = useMemo(() => {
  //   return data?.data?.data || [];
  // }, [data]);

  return (
    <div>
      <PersonalLandingPage />
    </div>
  );
}
