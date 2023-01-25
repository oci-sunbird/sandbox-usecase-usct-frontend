import { Auth } from "aws-amplify";

export interface IAWSError {
  code: string;
  message: string;
}

export const authentication = {
  signUp: async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    try {
      await Auth.signUp({
        username,
        password: "Somethingtotallyrandom123!@#",
        attributes: {},
      });
    } catch (error) {
      console.error("AUTH001: ", error);
      throw error as IAWSError;
    }
  },
  resendConfirmationCode: async ({ username }: { username: string }) => {
    try {
      await Auth.resendSignUp(username);
    } catch (error) {
      console.error("AUTH002: ", error);
      throw error as IAWSError;
    }
  },
  confirmSignUp: async ({
    username,
    code,
  }: {
    username: string;
    code: string;
  }) => {
    try {
      await Auth.confirmSignUp(username, code);
    } catch (error) {
      console.error("AUTH003: ", error);
      throw error as IAWSError;
    }
  },
  signIn: async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    try {
      await Auth.signIn(username);
      window.dispatchEvent(new CustomEvent("authenticationEvent"));
    } catch (error) {
      console.error("AUTH004: ", error);
      throw error as IAWSError;
    }
  },
  signOut: async () => {
    try {
      await Auth.signOut();
      window.dispatchEvent(new CustomEvent("authenticationEvent"));
    } catch (error) {
      console.error("AUTH005: ", error);
      throw error as IAWSError;
    }
  },
  isLoggedIn: async () => {
    try {
      const session = await Auth.currentSession();
      return session;
    } catch (error) {
      throw error;
    }
  },
};
