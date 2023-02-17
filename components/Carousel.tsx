import React, { useEffect, useMemo, useState } from "react";

interface IProps {
  carouselData: Array<any>;
}

export default function Carousel({ carouselData }: IProps) {
  const [nextImage, setNextImage] = useState(1);
  const [previousImage, setPreviousImage] = useState(carouselData.length - 1);
  const [image, setImage] = useState(carouselData[0].image);
  const onClickNext = () => {
    if(carouselData.length - 1 > nextImage){
      setNextImage(prevState => prevState + 1)
      
    }else{
      setNextImage(0)
    }
    if(carouselData.find(x => x.id == nextImage)){
      setImage(carouselData.find(x => x.id == nextImage).image)
    }
    
  }
  const onClickPrevious = () => {
      if(previousImage > 0){

        setPreviousImage(prevState => prevState - 1)

      }else{
        setPreviousImage(carouselData.length - 1)
      }
    if(carouselData.find(x => x.id == previousImage)){
      setImage(carouselData.find(x => x.id == previousImage).image)
    }
  }
  return (
    <>
      {carouselData && carouselData.length > 0 ? (
        <div className="relative w-[300px]">
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                <div className="duration-700 ease-in-out">
                  <img
                    src={image}
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-xl"
                    alt="..."
                  />
                </div>
          </div>
          <div className="absolute z-30  flex space-x-3 -translate-x-1/2 bottom-[7rem] left-1/2">
            {carouselData.map((x,i) =>{
              return <button
              type="button"
              key={i}
              className={image == x.image ? "w-3 h-3 rounded-full bg-white" : "w-3 h-3 rounded-full bg-white/50"}
            ></button>
            
            } )}
          </div>
          <button
            type="button"
            onClick={() => {onClickPrevious()}}
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            onClick={() => onClickNext()}
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
