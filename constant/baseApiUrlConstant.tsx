export const routing =
  process.env.NODE_ENV === "production" ? "/dashboard/" : "/";
export const baseNextAuthUrlApi = process.env.BASE_URL
  ? process.env.BASE_URL + routing + "api/auth"
  : routing + "api/auth";