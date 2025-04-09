import axios from '../utils/axios';

// export const loginUser = async (data: LoginFormData) => {
//   const response = await axios().post("/user-login", data);
//   return response;
// };

export const getUserAccountBalance = async (accountNumber: string) => {
  const response = await axios().get(`/get-account-balance?accountNumber=${accountNumber}`);
  return response;
};
