import axios, { AxiosResponse } from "axios";

// axios.defaults.baseURL = process.env.BACKEND_URL
//   ? process.env.BACKEND_URL
//   : "http://next-api.otonakit.com/api/";
axios.defaults.baseURL = "http://next-api.otonakit.com/api/";
const responseBody = <T,>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T,>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T,>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  postHeader: <T,>(url: string, body: {}, header: {}) =>
    axios
      .post<T>(url, body, { headers: header })
      .then(responseBody)
      .catch((err) => {
        console.log("use request");
        console.log(err);
        throw new Error(err);
      }),
  put: <T,>(url: string, body: {}) =>
    axios.put<T>(url, body).then(responseBody),
  del: <T,>(url: string) => axios.delete<T>(url).then(responseBody),
};

const useRequest = {
  requests,
};

export default useRequest;
