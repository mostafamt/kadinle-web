import Image from "next/image";
import Link from "next/link";
const flashImg = "https://kadinle.com/media/images/flash.png";

const FlashBanner = ({ className, languageId, offer }) => {
  const content = offer?.offer_content?.find(
    (c) => c?.language_id === languageId
  );

  return (
    <div className="container">
      <Link
        href="/categories/flash-sale"
        className={`${className} relative rounded-xl overflow-hidden h-[300px] flex items-center justify-center w-full`}
      >
        <Image
          src={
            content?.media
              ? content?.media
              : "https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-color-creative-offer-discount-image_11174.jpg"
          }
          alt="flash sale banner"
          className="w-full object-cover absolute top-0 left-0 h-full"
          height={300}
          width={1550}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src={flashImg}
            alt="flash icon"
            className="w-[120px] h-[150px] mx-auto"
            height={150}
            width={120}
          />
          <h3 className="text-[40px] capitalize mx-auto mt-2 text-white">
            {content?.title}
          </h3>
          <p className="text-sm text-gray-200 italic mx-auto mt-2">
            {content?.description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default FlashBanner;
