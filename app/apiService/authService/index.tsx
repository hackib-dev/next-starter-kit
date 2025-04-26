import axios from '@/app/utils/axios';

export const loginUser = async (data) => {
  const response = await axios().post(`/user/login`, data);
  return response;
};

export const verify2fa = async (totp: string) => {
  const response = await axios().post(`/user/verify2fa`, { totp: totp });
  return response;
};

export const getTwoFa = async () => {
  const response = await axios().get('/user/2-fa');
  return response;
};
