import { makeAxiosInstance } from "./axios";

type IAccount = any;
type TLoginData = any;
type TRegisterData = any;
type TAuthResponse = {
  token: string;
  account: IAccount;
};

export default function useAuth() {
  const instance = makeAxiosInstance();
  async function apiLogin(data: TLoginData) {
    const {data: users} = await instance.get<any>(
      "/users",
      data
    );

    return users[0];
  }

  async function apiLoginWithToken(token: string) {
    const { data: user } = await instance.get<IAccount>("/auth/account", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return user;
  }

  async function apiRegister(data: TRegisterData) {
    const { data: user } = await instance.post<TAuthResponse>(
      "/auth/register",
      data
    );

    return user;
  }

  return { apiRegister, apiLogin, apiLoginWithToken };
}
