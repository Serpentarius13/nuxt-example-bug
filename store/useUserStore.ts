import { defineStore } from "pinia";

const AUTH_COOKIE_KEY = "auth";

type IAccount = any;
type TLoginData = any;
type TRegisterData = any;
import useAuth from "./useAuth";
import setCookieClient from "./setCookie";

interface IUserStoreState {
  user: IAccount | null;
  isLoading: boolean;
  timeout: NodeJS.Timeout | null;
}

export const useUserStore = defineStore("user-store", {
  state: (): IUserStoreState => ({
    user: null,
    isLoading: false,
    timeout: null,
  }),
  actions: {
    async login(data: TLoginData) {
      try {
        this.load();
        const { apiLogin } = useAuth();

        const user = await apiLogin(data);
        3;
        console.log(user);

        if (typeof user === "object") {
          console.log("here");
          setCookieClient(AUTH_COOKIE_KEY, "12321");

          this.user = user;
        }
      } catch (error) {
        throw new Error(error as any);
      } finally {
        this.unload();
      }
    },

    async loginWithToken(triggerLoading: boolean = true) {
      try {
        if (triggerLoading) this.load();

        const { apiLoginWithToken } = useAuth();

        const token = useCookie(AUTH_COOKIE_KEY);

        if (typeof token.value !== "string") return;

        const user = await apiLoginWithToken(token.value);
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.user = null;

          this.loginWithToken(false);
        }, 20000);

        if (typeof user === "object") this.user = user;
        else throw new Error("Error getting user");
      } catch (error) {
        throw new Error(error as any);
      } finally {
        this.unload();
      }
    },

    async register(data: TRegisterData) {
      try {
        this.load();
        const { apiRegister } = useAuth();

        const user = await apiRegister(data);

        if (typeof user === "object") {
          setCookieClient(AUTH_COOKIE_KEY, user.token);

          this.user = user.account;
        }
      } catch (error) {
        throw new Error(error as any);
      } finally {
        this.unload();
      }
    },

    async logout() {
      this.user = null;

      setCookieClient(AUTH_COOKIE_KEY, null);

      location.reload();
    },
    load() {
      this.isLoading = true;
    },
    unload() {
      this.isLoading = false;
    },
  },
  getters: {
    isAuthPossible() {
      const token = useCookie(AUTH_COOKIE_KEY);
      return !!token;
    },
  },
});
