import { processMinerService } from "utils/request/requestService/processMinerRequest";

export default async function handler(req: any, res: any) {
    
  if (req.method === 'POST') {
    try {
        
      const response = await processMinerService.allProcessMiner();
      if (response.data && response.data.length >= 0) {
        res.status(200).json({
            data: response.data
        });
      } 
      
    } catch (error) {
        console.log(error);

      
    }
  }
};
