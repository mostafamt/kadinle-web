import Image from "next/image";
import Link from "next/link";

import { PrimaryArrowIcon } from "../Icons/PrimaryArrowIcon";

// import { PrimaryArrowIcon } from "../Icons/PrimaryArrowIcon";

export const CategoryBanner = async ({
  category,
  homeSectionsOrder,
  languageId,
  t,
}) => {
  const categoryInfo = category?.content?.find(
    (cat) => cat.language_id === languageId
  );

  const categoryOrderName = category?.content?.find(
    (cat) => cat.language_id === "c53d7987-f51a-4b47-9ee0-3215becdce17"
  );

  let sectionSettings = homeSectionsOrder?.[category?.id];

  return (
    <Link
      href={`/categories/${categoryInfo?.category_id}?parent_id=${categoryInfo?.category_id}`}
      className="cursor-pointer block relative w-full mb-2 container min-h-[140px bg-gray-100"
      style={{
        order: sectionSettings?.section_order,
        display: !sectionSettings?.display_home && "none !important",
      }}
    >
      <Image
        alt="circle"
        className={`w-[150px] top-[30%] absolute ${
          sectionSettings?.section_order % 2 === 0 ? "left-0" : "right-0"
        } `}
        src="https://kadinle.com/media/images/circle.png"
        height={150}
        width={120}
      />
      <div className=" relative flex flex-col space-y-3 ">
        <div className="flex flex-col space-y-4 items-center w-full container">
          <div className="relative w-full ">
            <div className="flex bg-gray-50 rounded-2xl overflow-hidden justify-center w-full h-[320px] lg:h-[350px]">
              {categoryInfo?.web_image ? (
                <Image
                  src={categoryInfo?.web_image ? categoryInfo?.web_image : ""}
                  className=" w-full object-cover rounded-2xl !h-auto"
                  alt={categoryInfo?.title}
                  height={250}
                  width={1900}
                />
              ) : null}
            </div>
            <div className="absolute bottom-[15%] -translate-x-2/4  left-1/2 flex flex-col justify-center items-center space-y-4 md:space-y-4">
              <h3 className="text-white text-xl md:text-[30px] font-black categoryShadow ltr:tracking-[3.1px] leading-[20px]">
                {categoryInfo?.title}
              </h3>
              <button
                className={`transition-all duration-[600ms] hover:bg-primary hover:text-[#FFFFFF] hover:scale-[1.1]                    scale-[1] bg-[#FFFFFF] text-[#676767]"
                cursor-pointer flex  items-center w-fit ltr:pr-[2px] rtl:pl-[2px] py-[3px] rounded-3xl justify-between gap-3`}
              >
                <span className="text-sm text-[10px] flex-1 ltr:pl-2 rtl:pr-2 whitespace-nowrap text-center ">
                  {t("SEE_MORE")}
                </span>
                <PrimaryArrowIcon />
                {/* <Image
                  className="cursor-pointer w-[35px] rtl:rotate-180"
                  src={"https://kadinle.com/media/images/arrow.png"}
                  alt="Go to category page"
                /> */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
