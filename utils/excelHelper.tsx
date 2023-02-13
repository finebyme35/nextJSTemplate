import * as XLSX from 'xlsx';
import moment from "moment";
import { ExcelData } from '../types/IExcelData';

export const exportExcel = (excelData: ExcelData) => {
  const worksheet = XLSX.utils.json_to_sheet(excelData.rowsData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, excelData.rowsSheetName);
  // /* fix headers */
  XLSX.utils.sheet_add_aoa(worksheet, [excelData.rowsHeadersName], { origin: "A1" });

  XLSX.writeFile(workbook, excelData.rowsFileName + "-" + moment.utc().local().format("DD-MM-YYYY HH:mm:ss") + ".xlsx");
}