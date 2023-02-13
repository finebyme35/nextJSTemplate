interface IResponseData {
  message: string;
  status: number;
  data?: string[] | undefined;
}

export default IResponseData;
