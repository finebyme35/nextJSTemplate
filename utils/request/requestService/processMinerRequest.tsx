import IResponseData from "types/IResponseData";
import useRequest from "../useRequest";
import { baseProcessMinerUrlApi } from "constant/baseApiUrlConstant";
export const processMinerService = {
  allProcessMiner: () => useRequest.requests.post<IResponseData>(baseProcessMinerUrlApi, {}),
  getProcessMinerById: (id: number) =>
    useRequest.requests.post<IResponseData>(baseProcessMinerUrlApi + "/id", {
      id: id,
    }),
    
};
