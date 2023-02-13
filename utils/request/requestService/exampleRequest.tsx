import IResponseData from "types/IResponseData";
import useRequest from "../useRequest";
export const ExampleService = {
  exampleGetList: () => useRequest.requests.post<any>("url gelecek", {}),
  createExample: (create: any) =>
    useRequest.requests.post<IResponseData>("url gelecek", create),
  updateExample: (update: any) =>
    useRequest.requests.post<IResponseData>("url gelecek", update),
  deleteExample: (id: number) =>
    useRequest.requests.post<IResponseData>("url gelecek", {
      id: id,
    }),
  getExampleById: (id: number) =>
    useRequest.requests.post<any>("url gelecek", {
      id: id,
    }),
};
