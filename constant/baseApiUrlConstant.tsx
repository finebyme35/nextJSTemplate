export const routing =
  process.env.NODE_ENV === "production" ? "/dashboard/" : "/";
export const baseNextAuthUrlApi = process.env.BASE_URL
  ? process.env.BASE_URL + routing + "api/auth"
  : routing + "api/auth";

export const baseProcessMinerUrlApi = process.env.BASE_URL ? process.env.BASE_URL + routing + "process" 
  : routing + "process";


  export const baseHeuristicUrlApi = process.env.BASE_URL ? process.env.BASE_URL + routing + "heuristics-net-image" 
  : routing + "heuristics-net-image";

  export const baseUploadFileApi = process.env.BASE_URL ? process.env.BASE_URL + routing + "bulk-import" 
  : routing + "bulk-import";