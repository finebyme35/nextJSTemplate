export const routing =
  process.env.NODE_ENV === "production" ? "/dashboard/" : "/";
  export const baseNextAuthUrl = process.env.BASE_URL
  ? process.env.BASE_URL + routing
  : routing;