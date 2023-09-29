export enum Scope {
  ROLE_PAYMENT_OFFICER = "ROLE_PAYMENT_OFFICER",
  ROLE_ENROLLMENT_OFFICER = "ROLE_ENROLLMENT_OFFICER",
  ROLE_REGISTRY_ADMINISTRATION = "ROLE_REGISTRY_ADMINISTRATION",
}

export interface Role {
  email: string,
  name: string | null,
  roles: string[]
}

export const getToken = () => {
  const token = sessionStorage.getItem("driver-token");
  if (token) {
    return token;
  }
  return null;
};

export const getRole = () => {
  const token = getToken();
  if (token) {
    return (JSON.parse(token) as Role).roles[0];
  }
  return null;
};
