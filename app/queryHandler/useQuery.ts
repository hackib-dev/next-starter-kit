import { useQuery } from '@tanstack/react-query';
import { getUserAccountBalance } from '../apiService';

// export const useGetPropertiesQuery = () => {
//   return useQuery({
//     queryKey: ['getProperties'],
//     queryFn: getProperties,
//     refetchOnWindowFocus: false,
//     refetchOnReconnect: false,
//     refetchInterval: false
//   });
// };

export const useGetUserAccountBalance = (accountNumber: string) => {
  return useQuery({
    queryKey: ['getAccountBalance'],
    queryFn: () => getUserAccountBalance(accountNumber),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false
  });
};
