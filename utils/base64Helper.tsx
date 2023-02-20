const convertBase64 = (file: any, type: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        const fileData = {
          fileName: file.name,
          originalName: file.name,
          path: "",
          extension: type.split("/")[1],
          contentType: type,
          size: file.size,
          imageBase64: fileReader.result
             ?.toString().replace("data:application/pdf;base64,", "")
            .replace("data:image/png;base64,", "")
            .replace("data:image/jpeg;base64,", "")
            // .replace("data:image/webp;base64,", ""),
        };
        resolve(fileData);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
};
export default convertBase64;