"use client";

import { useTranslations } from "next-intl";
import React, { Fragment, useContext, useMemo } from "react";
import { SizeInfoBtn } from "./SizeInfoBtn";

const MEASUREMENTS_LIST_1 = [
  "shoulderMeasurements",
  "chestMeasurements",
  "waistMeasurements",
  "armLengthMeasurements",
  "lengthMeasurements",
];
const MEASUREMENTS_LIST_2 = [
  "shoulderMeasurements",
  "chestMeasurements",
  "waistMeasurements",
  "armLengthMeasurements",
  "lengthMeasurements",
  "hipMeasurements",
  "thighMeasurements",
  "legMeasurements",
];

const MEASUREMENTS_LIST_3 = [
  "waistMeasurements",
  "hipMeasurements",
  "thighMeasurements",
  "legMeasurements",
];
const MEASUREMENTS_LIST_4 = [
  "waistMeasurements",
  "hipMeasurements",
  "thighMeasurements",
  "legMeasurements",
];
const MEASUREMENTS_LIST_5 = ["chestMeasurements", "underChestMeasurements"];

const MEASUREMENTS = {
  1: MEASUREMENTS_LIST_1,
  2: MEASUREMENTS_LIST_2,
  3: MEASUREMENTS_LIST_3,
  4: MEASUREMENTS_LIST_4,
  5: MEASUREMENTS_LIST_5,
};

const MeasurementsDescription = ({ text, t, index }) => (
  <p className="text-[13px] text-[#707070] mb-1 text-indent">
    {index}- {t(text)}
  </p>
);

const SizeChart = ({
  chartNumbers,
  productChart,
  regions,
  selectedRegion,
  setSelectedRegion,
  languageId,
  setOpenSizeInfo,
  CACHE_SIZES
}) => {
  const t = useTranslations();

  let measurementsList = useMemo(() => {
    let hashNumbers = {};
    if (chartNumbers?.length) {
      for (const number of chartNumbers) {
        let roles = MEASUREMENTS?.[number];
        if (roles?.length)
          hashNumbers = {
            ...hashNumbers,
            ...roles,
          };
      }
      return Object.values(hashNumbers);
    }
  }, [chartNumbers]);

  return (
    <Fragment>
      <SizeInfoBtn selectedRegion={selectedRegion} setOpenSizeInfo={setOpenSizeInfo} sizes={CACHE_SIZES} productChart={productChart}/>
      <div className="flex flex-col mt-2 mb-8" id="sizeChart">

        {!!productChart?.length && (
          <div className="flex gap-9 text-[14px] md:text-[16px] ltr:ml-4 rtl:mr-4">
            {regions?.map((region) => (
              <button
                onClick={() => setSelectedRegion(region)}
                key={region?.name}
                className={`flex flex-col items-center cursor-pointer px-2 pb-1 ${
                  selectedRegion?.id === region?.id
                    ? "text-opink border-b-2 border-opink"
                    : ""
                } `}
              >
                {region?.name}
              </button>
            ))}
          </div>
        )}

        {!!productChart?.length ? (
          <>
            {productChart?.map((chart) => {
              // chart headers
              const chartHeaders = chart?.chart_content;
              const selectedChartHeader = chartHeaders?.find(
                (header) => header?.language_id === languageId
              );

              const chartData = chart?.chart_data;

              const sortedChartData = chartData?.sort(
                (a, b) => a.size_sku - b.size_sku
              );

              // sizes
              const allSizes = sortedChartData?.map((data) => data?.size);
              const regionSizes = allSizes?.map((sizeForAllRegions) => {
                return sizeForAllRegions.find(
                  (size) => size?.region_id === selectedRegion?.id
                );
              });

              const chartDataColumns = sortedChartData?.map(
                (chartData) => chartData?.data
              );

              const showHeaderHandler = (header) => {
                return chartDataColumns?.reduce((acc, cur) => {
                  return acc || !!cur[header];
                }, false);
              };

              return (
                <table
                  key={chart?.chart_id}
                  className="border w-fit mt-4 font-normal"
                >
                  <thead>
                    <tr>
                      <th className="border border-gray-300 bg-gray-200 px-4 py-2 text-sm min-w-[50px] text-center">
                        {t("Size")}
                      </th>
                      {Array(8)
                        .fill(0)
                        .map((_, index) => {
                          const shouldShowHeader = showHeaderHandler(
                            `column${index + 1}`
                          );
                          const chartHeader =
                            selectedChartHeader?.[`column${index + 1}`];
                          if (chartHeader && shouldShowHeader)
                            return (
                              <th className="border border-gray-300 bg-gray-200 px-4 py-2 text-sm min-w-[50px]">
                                {chartHeader}
                              </th>
                            );
                        })}
                    </tr>
                  </thead>
                  <tbody>
                    {regionSizes?.map((size, idx) => {
                      return (
                        <tr key={idx}>
                          <td className="min-w-[50px] border px-4 bg-gray-200 border-gray-300 text-center">
                            {size?.name}
                          </td>
                          {Array(8)
                            .fill(0)
                            .map((r, index) => {
                              const shouldShowHeader = showHeaderHandler(
                                `column${index + 1}`
                              );
                              const chartHeader =
                                selectedChartHeader?.[`column${index + 1}`];
                              if (chartHeader && shouldShowHeader)
                                return (
                                  <td
                                    key={index}
                                    className="border border-gray-300 py-1 px-4 min-w-[50px] text-center"
                                  >
                                    {
                                      chartDataColumns?.[idx]?.[
                                        `column${index + 1}`
                                      ]
                                    }
                                  </td>
                                );
                            })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              );
            })}
          </>
        ) : null}
        {measurementsList?.length && (
          <div className="mt-5">
            <p className="text-[#707070] font-medium">
              {t("howToTakeBodyMeasurements")}
            </p>
            {measurementsList?.map((item, idx) => {
              return (
                <div className="mb-3 mt-2" key={item}>
                  <MeasurementsDescription
                    key={item}
                    text={item}
                    t={t}
                    index={idx + 1}
                  />
                </div>
              );
            })}
            <p className="text-[#707070] font-medium text-sm">
              {t("apologizeMeasurementsMessage")}
            </p>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default SizeChart;
