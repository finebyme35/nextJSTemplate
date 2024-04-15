import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000"
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
