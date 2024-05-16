"use client";
import { getCategoryInfo } from "@/app/api/supabase/products";
import { useGlobalOptions } from "@/app/context/GlobalOptionsContext";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useContext, useEffect, useMemo, useState } from "react";

const ProductDescription = ({
  product,
  setCategoryInfo,
  selectedRegion,
  categoryInfo,
}) => {
  const t = useTranslations();
  const { language } = useGlobalOptions();
  const [availableColors, setAvailableColors] = useState();

  const content = product?.productcontents?.find(
    (p) => p?.language_id === language?.id
  );

  const variants = product?.productvariants;

  useEffect(() => {
    if (!product?.productinfo?.category_id || !language?.id) return;

    getCategoryInfo(product?.productinfo?.category_id).then((res) => {
      let selectedCategoryByLanguage = res?.data?.find(
        (category) => category?.language_id === language?.id
      );
      setCategoryInfo(selectedCategoryByLanguage);
    });
    let colorsContent = {};
    let sizesContent = {};
    if (variants) {
      for (const variant of product?.productvariants) {
        for (const subVariant of variant?.colorContents) {
          if (!colorsContent[subVariant?.id]) {
            colorsContent[subVariant?.id] = subVariant;
          }
        }
        for (const subVariant of variant?.sizeContents) {
          if (!sizesContent[subVariant?.id]) {
            sizesContent[subVariant?.id] = subVariant;
          }
        }
      }
    }

    setAvailableColors(Object.values(colorsContent));
  }, [
    product?.productinfo?.category_id,
    language?.id,
    product?.productvariants,
    variants,
  ]);

  return (
    <div className="flex flex-col text-[#707070] space-y-4 text-[14px]  border-b pb-6 border-[#AEAEAE] ">
      {content?.description ? (
        <div className="flex ">
          <p className="min-w-[200px] font-semibold">
            {t("Product_Description")}:
          </p>
          <p>{content?.description}</p>
        </div>
      ) : null}
      <div className="flex ">
        <p className="w-[200px] font-semibold">{t("productCategory")}:</p>
        <Link
          href={`/categories/${categoryInfo?.category_id}`}
          state={{
            parent_id: categoryInfo?.parent_id || categoryInfo?.category_id,
          }}
          className="text-opink cursor-pointer no-underline"
        >
          {categoryInfo?.title}
        </Link>
      </div>
      {!!availableColors ? (
        <div className="flex ">
          <p className="w-[200px] font-semibold">{t("Color")}:</p>
          <div className="flex gap-2 items-center flex-wrap">
            {availableColors
              ?.filter((s) => s.language_id === language?.id)
              ?.map((currentColor) => {
                return (
                  <div
                    key={currentColor?.id}
                    className={`object-cover rounded-[8px] `}
                  >
                    {/* <img   className='rounded-[8px]' src={ProductImage} /> */}
                    <span className="whitespace-nowrap">
                      {" "}
                      {currentColor?.name}{" "}
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
      ) : null}
      {product?.productinfo?.pattern_content?.length ? (
        <div className="flex ">
          <p className="w-[200px] font-semibold">{t("Product_Pattern")}:</p>
          <p>
            {
              product?.productinfo?.pattern_content?.find(
                (pattern) => pattern?.language_id === language?.id
              )?.name
            }
          </p>
        </div>
      ) : null}
      {product?.productinfo?.material_content?.length ? (
        <div className="flex ">
          <p className="w-[200px] font-semibold">{t("fabricInformation")}:</p>
          <p>
            {
              product?.productinfo?.material_content?.find(
                (material) => material?.language_id === language?.id
              )?.name
            }
          </p>
        </div>
      ) : null}
      {product?.productinfo?.fabric_content?.length ? (
        <div className="flex ">
          <p className="w-[200px] font-semibold">{t("fabricType")}:</p>
          <p>
            {
              product?.productinfo?.fabric_content?.find(
                (fabric) => fabric?.language_id === language?.id
              )?.name
            }
          </p>
        </div>
      ) : null}
      {product?.productinfo?.lining_content?.length ? (
        <div className="flex ">
          <p className="w-[200px] font-semibold">{t("lining")}:</p>
          <p>
            {
              product?.productinfo?.lining_content?.find(
                (lining) => lining?.language_id === language?.id
              )?.name
            }
          </p>
        </div>
      ) : null}
      {product?.productinfo?.collar_content?.length ? (
        <div className="flex ">
          <p className="w-[200px] font-semibold">{t("collarType")}:</p>
          <p>
            {
              product?.productinfo?.collar_content?.find(
                (collar) => collar?.language_id === language?.id
              )?.name
            }
          </p>
        </div>
      ) : null}
      {product?.productinfo?.sleeve_content?.length ? (
        <div className="flex ">
          <p className="w-[200px] font-semibold">{t("sleeveLength")}:</p>
          <p>
            {
              product?.productinfo?.sleeve_content?.find(
                (sleeve) => sleeve?.language_id === language?.id
              )?.name
            }
          </p>
        </div>
      ) : null}
      {product?.productinfo?.season_content?.length ? (
        <div className="flex ">
          <p className="w-[200px] font-semibold">{t("season")}:</p>
          <p>
            {
              product?.productinfo?.season_content?.find(
                (season) => season?.language_id === language?.id
              )?.name
            }
          </p>
        </div>
      ) : null}
      {product?.productinfo?.feature_content?.length ? (
        <div className="flex ">
          <p className="w-[200px] font-semibold">{t("specialFeatures")}:</p>
          <p>
            {
              product?.productinfo?.feature_content?.find(
                (feature) => feature.language_id === language?.id
              )?.name
            }
          </p>
        </div>
      ) : null}
      {/* {!!availableSizes ? (
        <div className="flex ">
          <p className="w-[200px] font-semibold">{t("Size")}:</p>
          <div className="flex gap-1 items-center flex-wrap">
            {availableSizes
              ?.filter((s) => s.region_id === selectedRegion?.id)
              ?.map((currentSize) => (
                <span>{currentSize?.name}</span>
              ))}
          </div>
        </div>
      ) : null} */}
      {/* {!!variants?.[0]?.weight ? (
        <div className="flex ">
          <p className="w-[200px] font-semibold">
            {t("The_Weight")}:
          </p>
          <p>{variants?.[0]?.weight}</p>
        </div>
      ) : null} */}
    </div>
  );
};

export default ProductDescription;
