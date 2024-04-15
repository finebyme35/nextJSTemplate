import IResponseData from "types/IResponseData";
import useRequest from "../useRequest";
import { baseHeuristicUrlApi, baseUploadFileApi } from "constant/baseApiUrlConstant";
export const HeuristicNetImageService = {
  getHeuristicImage: () => useRequest.requests.post<IResponseData>(baseHeuristicUrlApi, {}),
  postFile: (file: FormData) => useRequest.requests.post<any>(baseUploadFileApi, file),
  
};
