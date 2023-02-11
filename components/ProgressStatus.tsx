import React from "react";
import { Check, InfoCircle } from "tabler-icons-react";

interface IProps {
  order?: any;
  changeclassName?: string;
}

export default function ProgressStep({ changeclassName}: IProps) {
  const ObjItem = [
    {
      id: 0,
      isPayment: true,
      header: "1.Adım",
      value: "Ön Ödeme",
      isPaymentText: "Ön Ödeme Yapıldı",
      isInformation: false,
    },
    {
      id: 1,
      isPayment: false,
      header: "2.Adım",
      value: "Kalan Ödeme",
      isPaymentText: "Kalan Ödeme Yapıldı",
      isInformation: true,
      isInformationText: "Kalan Ödeme Bekleniyor",
    },
    {
      id: 2,
      isPayment: false,
      header: "3.Adım",
      value: "Vekalet",
      isInformation: true,
      isInformationText: "Vekalet Onayı Bekleniyor",
      isPaymentText: "Vekalet Onaylandı",
    },
    {
      id: 3,
      isPayment: false,
      header: "3.Adım",
      value: "Devir İşlemi",
      isInformation: false,
      isPaymentText: "Devir İşlemi Yapıldı",
    },
    {
      id: 4,
      isPayment: false,
      header: "4.Adım",
      value: "Araba Teslimat",
      isPaymentText: "Araba Teslimat Yapıldı",
    },
  ];
  return (
    <>
      <ol className="ml-5 pl-3 mt-3 lg:hidden block relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {ObjItem
          ? ObjItem.map((x) => {
              return (
                <li className="mb-10 ml-6">
                  <span
                    className={
                      x.isPayment
                        ? "absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900"
                        : "absolute flex items-center justify-center w-8 h-8 bg-slate-50 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-white"
                    }
                  >
                    {x.isPayment ? (
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    ) : (
                      <InfoCircle className="w-5 h-5 text-black dark:text-black" />
                    )}
                  </span>
                  <h3 className="font-medium leading-tight">{x.header}</h3>
                  <p className="text-sm">{x.value}</p>
                </li>
              );
            })
          : ""}
      </ol>
      <ol className="lg:flex hidden items-center w-full">
        {ObjItem
          ? ObjItem.map((x) => {
              return (
                <li
                  className={
                    x.isPayment
                      ? "flex w-full items-center  text-green-600 dark:text-green-500 after:content-[''] after:w-full after:h-1 last-of-type:after:border-none last-of-type:after:border-0 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800"
                      : "flex w-full items-center text-black dark:text-black last-of-type:after:border-none last-of-type:after:border-0 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800"
                  }
                >
                  <span
                    className={
                      x.isPayment
                        ? " flex items-center justify-center w-10 h-10 bg-green-200  rounded-full lg:h-10 lg:w-10 dark:bg-blue-800 shrink-0"
                        : "flex items-center justify-center w-10 h-10 bg-gray-200  rounded-full lg:h-10 lg:w-10 dark:bg-blue-800 shrink-0"
                    }
                  >
                    {x.isPayment ? (
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-green-600 lg:w-6 lg:h-6 dark:text-green-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    ) : (
                      <InfoCircle className="w-5 h-5 text-black dark:text-black" />
                    )}
                  </span>
                  <span className="text-center pl-2">
                    <h3 className="font-medium leading-tight">{x.header}</h3>
                    <p className="text-sm">{x.value}</p>
                  </span>
                </li>
              );
            })
          : ""}
      </ol>
    </>
  );
}
