export const drawCanvas = (myCanvas:React.MutableRefObject<any>, data:any, findData:Function) => {
    const context = myCanvas.current.getContext("2d");
    const image = new Image();
    image.src = "/images/vehicle/expertise.svg";
    image.onload = () => {
      context.drawImage(image, 0, 0, 300, 300);
  
      drawCircles(context, data, findData);
    };
  };
  
  export const fillCanvas = (context:any, arcX:number, arcY:number, radius:number, color:string) => {
    context.beginPath();
    context.arc(arcX, arcY, radius, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
  };
  
  const leftCanvas = (context:any, id: number, color:string) => {
    switch (id) {
      case 1:
        fillCanvas(context, 90, 240, 10, color); // sol ön çamurluk appraisalSketchId = 1
        break;
      case 2:
        fillCanvas(context, 142, 240, 10, color); // sol ön kapı appraisalSketchId = 2
        break;
      case 3:
        fillCanvas(context, 203, 240, 10, color); // sol arka kapı appraisalSketchId = 3
        break;
      case 4:
        fillCanvas(context, 255, 230, 10, color); // sol arka çamurluk appraisalSketchId = 4
        break;
      default:
        break;
    }
  };
  const rightCanvas = (context:any, id:number, color:string) => {
    switch (id) {
      case 8:
        fillCanvas(context, 90, 60, 10, color); // sağ ön çamurluk appraisalSketchId = 8
        break;
      case 9:
        fillCanvas(context, 142, 60, 10, color); // sağ ön kapı appraisalSketchId = 9
        break;
      case 10:
        fillCanvas(context, 205, 60, 10, color); // sağ arka kapı appraisalSketchId = 10
        break;
      case 11:
        fillCanvas(context, 255, 70, 10, color); // sağ arka çamurluk appraisalSketchId = 11
        break;
      default:
        break;
    }
  };
  
  const middleCanvas = (context: any, id:number, color:string) => {
    switch (id) {
      case -1:
        fillCanvas(context, 35, 260, 7, color); // sol ön tampon (sağ ile birlikte) appraisalSketchId = 15
        fillCanvas(context, 35, 40, 7, color); // sağ ön tampon (sol ile birlikte)
        break;
      case -2:
        fillCanvas(context, 283, 255, 10, color); // sol arka tampon (sağ ile birlikte) appraisalSketchId = 16
        fillCanvas(context, 285, 40, 10, color); // sağ arka tampon (sol ile birlikte)
        break;
      case 5:
        fillCanvas(context, 65, 150, 10, color); //  kaput appraisalSketchId = 5
        break;
      case -3:
        fillCanvas(context, 65, 150, 10, color); // ön panel  appraisalSketchId = 14
        break;
      case 6:
        fillCanvas(context, 177, 150, 10, color); //tavan appraisalSketchId = 6
        break;
      case 7:
        fillCanvas(context, 270, 150, 10, color); //bagaj kapağı appraisalSketchId = 7
        break;
      default:
        break;
    }
  };
  const workingOnCircle = (context: any, id: number, color:string) => {
    rightCanvas(context, id, color);
    leftCanvas(context, id, color);
    middleCanvas(context, id, color);
  };
  
  const drawCircles = (context: any, data: any, findData: Function) => {
    data.map((x:any) => {
      switch (x.id) {
        case 1:
          workingOnCircle(context, 1, findData(1));
          break;
        case 2:
          workingOnCircle(context, 2, findData(2));
          break;
        case 3:
          workingOnCircle(context, 3, findData(3));
          break;
        case 4:
          workingOnCircle(context, 4, findData(4));
          break;
        case 5:
          workingOnCircle(context, 5, findData(5));
          break;
        case 6:
          workingOnCircle(context, 6, findData(6));
          break;
        case 7:
          workingOnCircle(context, 7, findData(7));
          break;
        case 8:
          workingOnCircle(context, 8, findData(8));
          break;
        case 9:
          workingOnCircle(context, 9, findData(9));
          break;
        case 10:
          workingOnCircle(context, 10, findData(10));
          break;
        case 11:
          workingOnCircle(context, 11, findData(11));
          break;
        case 12:
          workingOnCircle(context, 12, findData(12));
          break;
        case 13:
          workingOnCircle(context, 13, findData(13));
          break;
        // case 14:
        //   workingOnCircle(context, 14, findData(14));
        //   break;
        // case 15:
        //   workingOnCircle(context, 15, findData(15));
        //   break;
        // case 16:
        //   workingOnCircle(context, 16, findData(16));
        //   break;
        default:
          break;
      }
    });
  };
  