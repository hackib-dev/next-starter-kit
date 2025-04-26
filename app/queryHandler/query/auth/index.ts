import { getTwoFa } from '@/app/apiService/authService';
import { useHandledQuery } from '@/hooks/useHandledQuery';

export const useGetTwoFa = (enabled: boolean) => useHandledQuery(['2fa'], getTwoFa, { enabled });
