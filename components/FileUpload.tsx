import { getSession } from "next-auth/react";
import React, { useRef, useState } from "react";
import convertBase64 from "utils/base64Helper";

export default function OrderDetailFileUploadButton({ order }: any) {
  const hiddenFileInputFront = useRef<any>(null);
  const hiddenFileInputBehind = useRef<any>(null);
  const [data, setData] = useState([]);
  const calculateImageBase64 = (base64Image: any) => {
    if (base64Image) {
      const yourBase64String = base64Image.substring(
        base64Image.indexOf(",") + 1
      );
      const bits = yourBase64String.length * 6; // 567146
      const bytes = bits / 8;
      const kb = Math.ceil(bytes / 1000);
      // in one Line
      // const kb = Math.ceil( ( (yourBase64String.length * 6) / 8) / 1000 );
      return kb;
    }
  };
  const handleChange = async (event: any, type: any) => {
    const session = await getSession();
    let response;
    let files: any;
    if (event.target.files && event.target.files) {
      for (let i = 0; i < event.target.files.length; i++) {
        const body = event.target.files[i];
        const serverBody = await convertBase64(
          body,
          event.target.files[i].type
        );
        files = serverBody;
      }
      let bodyFile = {
        base64: files,
        orderId: order.id,
        type: type,
      };
      let calculateKb = calculateImageBase64(
        bodyFile?.base64?.imageBase64?.toString()
      );
      if (calculateKb && calculateKb < 6553) {
        if (
          bodyFile.base64?.fileName?.includes("pdf") ||
          bodyFile.base64?.fileName?.includes("png") ||
          bodyFile.base64?.fileName?.includes("jpeg") ||
          bodyFile.base64?.fileName?.includes("jpg")
        ) {
          const res = await fetch(`/api/orders/add-order-documents`, {
            method: "POST",
            body: JSON.stringify(bodyFile),
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + session?.user.accessToken,
            },
          });
          response = await res.json();
          if (response.status === 0) {
            "success mesajı"

            setData(response.data);
            event.target.value = null;
          } else {
            "error mesajı"
          }
        } else {
          "Sadece pdf,jpeg,png,jpg yükleyebilirsiniz."
        }
      } else {
        "Vekaletinizi 6.5mb altı yükleyebilirsiniz."
        
      }
    }
  };

  const handleClickFront = (event: any) => {
    if(hiddenFileInputFront.current){
        hiddenFileInputFront.current.click();
    }
  };
  const handleClickBehind = (event: any) => {
   if(hiddenFileInputBehind.current){
    hiddenFileInputBehind.current.click();
   }
  };
  const deleteDocument = async (id: string | number) => {
    const session = await getSession();
    
  };
  return (
    <div className="lg:block flex lg:flex-nowrap flex-wrap items-center align-middle   justify-between w-full">
      {data.filter((x: any) => x.type === 1).length > 0 ? (
        <div className=" bg-white border border-onGray-100 rounded-[8px] flex justify-between items-center align-middle px-[13px] py-[9px] lg:mb-[7px]">
          <h1 className="text-onBlack-50 text-[12px] leading-[12px] lg:pr-0 pr-[12px]">
            Önyüz
          </h1>
          <div className="flex justify-between align-middle items-center gap-[5px]">
            <a
              href={data?.find((x: any) => x.type === 1)}
              className="cursor-pointer"
              target="_blank"
            >
              {" "}
              icon gelebilir. filepath
            </a>
            {order.powerOfAttorneyStatusId === 4 ? (
              <></>
            ) : (
                <span onClick={() =>
                    deleteDocument(data?.find((x: any) => x.type === 1)!)
                  }>silme ikonu</span>
              
            )}
          </div>
        </div>
      ) : (
        <div
          className="lg:w-full w-[40%] bg-white border-dashed border border-onOrange-50 rounded-[8px] flex items-center justify-between align-middle px-[13px] py-[9px] mt-[7px] mb-[7px] cursor-pointer"
          onClick={(event) => handleClickFront(event)}
        >
          <h1 className="text-onOrange-50 text-[12px] leading-[12px] lg:hidden">
            Önyüz
          </h1>
          <h1 className="text-onOrange-50 text-[12px] leading-[12px] lg:block hidden">
            Önyüzü ekleyin
          </h1>
          <input
            type="file"
            ref={hiddenFileInputFront}
            onChange={(event) => handleChange(event, 1)}
            accept="application/pdf, image/png, image/jpeg, image/jpg"
            style={{ display: "none" }}
          />
          "ikon"
        </div>
      )}
      {data.filter((x: any) => x.type === 2).length > 0 ? (
        <div className=" bg-white border border-onGray-100 rounded-[8px] flex justify-between items-center align-middle px-[13px] py-[9px]">
          <h1 className="text-onBlack-50 text-[12px] leading-[12px] lg:pr-0 pr-[12px]">
            Arkayüz
          </h1>
          <div className="flex justify-between align-middle items-center gap-[5px]">
            <a
              href={data.find((x: any) => x.type === 2)}
              className="cursor-pointer"
              target="_blank"
            >
                "ikon" file path
            </a>
            {order.powerOfAttorneyStatusId === 4 ? (
              <></>
            ) : (
                <span onClick={() =>
                    deleteDocument(data.find((x: any) => x.type === 2)!)
                  }>silme ikonu</span>
              
            )}
          </div>
        </div>
      ) : (
        <div
          className="lg:w-full w-[58%] bg-white border-dashed border border-onOrange-50 rounded-[8px] flex items-center justify-between align-middle px-[13px] py-[9px] lg:mt-[7px] cursor-pointer"
          onClick={(event) => handleClickBehind(event)}
        >
          <h1 className="text-onOrange-50 text-[12px] leading-[12px] lg:hidden">
            Arkayüz
          </h1>
          <h1 className="text-onOrange-50 text-[12px] leading-[12px] lg:block hidden">
            Arkayüzü ekleyin
          </h1>
          <input
            type="file"
            ref={hiddenFileInputBehind}
            onChange={(event) => handleChange(event, 2)}
            accept="application/pdf,image/png, image/jpeg, image/jpg"
            style={{ display: "none" }}
          />
          "upload ikonu"
        </div>
      )}
    </div>
  );
}
