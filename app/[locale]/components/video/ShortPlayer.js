"use client";

import {
  addLike,
  addMediaLike,
  addProductLike,
  incrementView,
} from "@/app/api/supabase/videos";
import { useGlobalOptions } from "@/app/context/GlobalOptionsContext";
import ShareProduct from "../product/ShareProduct";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { PauseIcon } from "../Icons/PauseIcon";
import { PlayIcon } from "../Icons/PlayIcon";
import { SpeakerMuteIcon } from "../Icons/SpeakerMuteIcon";
import { SpeakerIcon } from "../Icons/SpeakerIcon";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "../Icons/StarIcon";
import { ThumbsUpIcon } from "../Icons/ThumbsUpIcon";
import { EyeIcon } from "../Icons/EyeIcon";
import { ShareIcon } from "../Icons/ShareIcon";

export const ShortPlayer = ({ video, layout, videoRef, handleNext }) => {
  const { language, user, setShowAuthPopup } = useGlobalOptions();
  const router = useRouter();
  const containerRef = useRef(null);
  const [share, setShare] = useState(false);
  const [isViewed, setIsViewed] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    videoRef?.current?.addEventListener("loadedmetadata", () => {
      setDuration(videoRef?.current?.duration);
      videoRef?.current?.play();
    });
    const intervalId = setInterval(() => {
      setCurrentTime(videoRef?.current?.currentTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [videoRef, video?.url]);

  const togglePlay = () => {
    if (videoRef?.current?.paused) {
      videoRef?.current?.play();
      if (!isViewed) {
        increaseViews();
        setIsViewed(true);
      }
    } else {
      videoRef?.current?.pause();
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
  };

  const handleProgressChange = (e) => {
    const newTime = e.target.value;
    setCurrentTime(newTime);
    videoRef.current.currentTime = newTime;
  };

  const getProgressPercentage = () => {
    return (currentTime / duration) * 100;
  };

  const handleAddLike = async () => {
    if (user?.id) {
      if (layout === "customer-videos") {
        addMediaLike(video?.comment_id || video?.video_id, user?.id).then(
          (res) => {
            if (!res?.error) setIsLiked(true);
          }
        );
      } else if (layout === "our-videos") {
        addProductLike(video?.product_id || video?.video_id, user?.id).then(
          (res) => {
            if (!res?.error) setIsLiked(true);
          }
        );
      } else {
        addLike(video?.video_id, user?.id).then((res) => {
          if (!res?.error) setIsLiked(true);
        });
      }
    } else setShowAuthPopup(true);
  };
  const increaseViews = async () => {
    if (
      (layout === "customer-videos" || layout === "influencer-videos") &&
      video?.comment_id
    )
      incrementView(video?.comment_id, "comment");
    else if (layout === "our-videos")
      incrementView(video?.content?.[0]?.product_id);
  };

  const handleLink = () => {
    router.push(`/product/${video?.product_sku}`);
  };

  const content = video?.content?.find((c) => c?.language_id === language?.id);

  return (
    <>
      {share ? (
        <ShareProduct
          setShare={setShare}
          title={content?.name}
          url={`${window?.location?.origin}/product/${video?.product_sku}`}
        />
      ) : null}
      <div
        className="w-full h-screen flex items-center"
        // ref={videoContainerRef}
      >
        <div
          className="max-w-[400px] h-[94vh] rounded-xl relative mx-auto items-end gap-2 bg-[#101010]"
          ref={containerRef}
        >
          <div className="relative overflow-hidden rounded-xl h-full w-full z-10">
            <div className="absolute top-0 z-10 w-full">
              <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={handleProgressChange}
                className="opacity-0 absolute z-[2] left-0 top-0 w-full"
              />
              <div
                style={{
                  width: "100%",
                  height: "5px",
                  backgroundColor: "gray",
                }}
              >
                <div
                  className="bg-primary"
                  style={{
                    width: `${getProgressPercentage()}%`,
                    height: "100%",
                  }}
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-6 z-10 w-full left-0 px-4 flex justify-between items-center">
                <button onClick={togglePlay}>
                  {!videoRef?.current?.paused ? (
                    <PauseIcon className="w-6 h-6 text-white" />
                  ) : (
                    <PlayIcon className="w-6 h-6 text-white" />
                  )}
                </button>
                <button onClick={toggleMute}>
                  {videoRef?.current?.muted ? (
                    <SpeakerMuteIcon className="w-6 h-6 text-white" />
                  ) : (
                    <SpeakerIcon className="w-6 h-6 text-white" />
                  )}
                </button>
              </div>

              {/* body */}
              <div
                className="h-screen w-ful relative flex items-center"
                onClick={togglePlay}
              >
                <video
                  src={video?.url}
                  ref={videoRef}
                  className="h-full w-full object-contain max-w-none"
                  onEnded={handleNext}
                />
              </div>
              {/* body */}
            </div>
            {/* bars */}
            <div className="flex flex-col gap-2 max-w-[90%] text-gray-200 px-4 text-sm absolute rtl:right-0 ltr:left-0 bottom-8">
              {/* content */}
              <Link
                href={`/product/${video?.product_sku}`}
                className="text-primary underline  overflow-hidden text-ellipsis whitespace-nowrap mb-3 text-sm capitalize"
              >
                {content?.name}
              </Link>

              {/* images */}
              <div className="flex gap-3 mb-6">
                {video?.images?.slice(0, 6)?.map((img) => (
                  <figure
                    key={img}
                    className="h-16 w-12 cursor-pointer"
                    onClick={handleLink}
                  >
                    <Image
                      src={img}
                      alt={content?.image_alt}
                      className="rounded-lg object-contain"
                      height={64}
                      width={48}
                    />
                  </figure>
                ))}
              </div>

              {layout === "influencer-videos" ||
              layout === "customer-videos" ? (
                <div className="flex gap-2 items-center">
                  <Image
                    src={video?.profile_img}
                    alt="user creator"
                    className="h-9 w-9 rounded-full bg-gray-50 flex items-center justify-center"
                    height={36}
                    width={36}
                  />
                  <div className="">
                    <h3>
                      {layout === "influencer-videos"
                        ? video?.first_name + " " + video?.last_name
                        : video?.name}
                    </h3>
                    {layout === "customer-videos" ? (
                      <div className="flex">
                        {Array(5)
                          .fill(0)
                          ?.map((r, index) => (
                            <StarIcon
                              key={index}
                              className={`h-3 w-3 ${
                                index <= video?.rating
                                  ? "text-primary fill-primary"
                                  : "text-gray-200"
                              }`}
                            />
                          ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-black text-gray-200 px-4 text-sm absolute rtl:right-full ltr:left-full bottom-8">
            <button
              onClick={handleAddLike}
              className="flex flex-col items-center justify-center gap-1"
            >
              <span
                className={`${
                  isLiked ? "h-11 w-11 rounded-full bg-[#fff3]" : ""
                } flex items-center justify-center`}
              >
                <ThumbsUpIcon className={`w-8 h-8 text-primary`} />
              </span>
              {video?.likes}
            </button>
            <div className="flex flex-col items-center justify-center gap-1">
              <EyeIcon className="w-8 h-8 text-primary" />
              {video?.views}
            </div>
            <button
              onClick={() => setShare(true)}
              className="flex flex-col items-center justify-center gap-1"
            >
              <ShareIcon className="w-8 h-8 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
