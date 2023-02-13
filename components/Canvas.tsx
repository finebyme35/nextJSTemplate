import React, { useEffect, useRef, useState } from "react";
import {
    drawCanvas,
} from "utils/canvasHelper";

interface IProps{
    data: any;
}

export default function Canvas({ data }: IProps) {
  const myCanvas = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
//   const handleMouseDown = (e: ) => {
//     if(myCanvas.current){
//         let canvasMouseX = parseInt(e.clientX - myCanvas.current.offsetWidth);
//     let canvasMouseY = parseInt(e.clientY - myCanvas.current.offsetHeight);
//     }
//     if (canvasMouseX && canvasMouseY) { 
//       setIsModalOpen(true);
//     }
//   };
const findData = (id: number) => {
    return data.find((x: any) => x.id === id).color;
  };
  
  useEffect(() => {
    drawCanvas(myCanvas, data, findData);
  }, []);
  return (
    <>
      <canvas
        ref={myCanvas}
        width={300}
        height={300}
        // onMouseDown={(e) => handleMouseDown(e)}
      ></canvas>

      {/* {isModalOpen ? (
        <Modal
          visible={isModalOpen}
          onOk={() => setIsModalOpen(false)}
          onCancel={() => setIsModalOpen(false)}
          footer={null}
          destroyOnClose
          centered
          wrapClassName="ant-modal-wrap-order-detail"
        >
          <div className="md:container md:px-[50px] md:py-[50px] px-6 md:pt-0 pt-6">
            <h2 className="font-bold text-[32px] leading-[37px] text-onBlack-50">
              Düzenleme Gelecektir.
            </h2>
          </div>
        </Modal>
      ) : (
        ""
      )} */}
    </>
  );
}
