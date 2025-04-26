import { loginUser, verify2fa } from '@/app/apiService/authService';
import { useHandledMutation } from '@/hooks/useHandledMutation';

export const useLoginMutation = () => {
  return useHandledMutation(loginUser, 'You have successfully logged in!');
};

export const useVerify2FaMutation = () => {
  return useHandledMutation((totp: string) => verify2fa(totp), 'You have successfully logged in!');
};
