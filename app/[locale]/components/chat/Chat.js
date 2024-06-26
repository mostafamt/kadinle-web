"use client";
import { chat } from "@/app/api/static/chat-data";
import { useGlobalOptions } from "@/app/context/GlobalOptionsContext";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import CloseIcon from "../Icons/CloseIcon";
import Link from "next/link";
import { ChevronIcon } from "../Icons/ChevronIcon";

const LogoIcon = "https://kadinle.com/media/images/logo-icon.png";
const Logo = "https://kadinle.com/media/images/logo.svg";

const Stack = ["intro_screen"];

const Chat = ({ setOpenChat }) => {
  const t = useTranslations();
  const { user, setShowAuthPopup } = useGlobalOptions();
  const [selectedScreen, setSelectedScreen] = useState("intro_screen");
  const [screen, setScreen] = useState();

  const showAuthPopupHandler = () => {
    setOpenChat(false);
    setShowAuthPopup(true);
  };

  const outerActions = {
    login: showAuthPopupHandler,
    signup: showAuthPopupHandler,
  };

  useEffect(() => {
    setScreen(chat?.[selectedScreen]);
  }, [selectedScreen, chat]);

  const onMoveScreen = (screenName) => {
    Stack.push(selectedScreen);
    setSelectedScreen(screenName);
  };

  const handleBack = () => {
    const lastScreen = Stack.pop();
    setSelectedScreen(lastScreen);
  };

  const displayScreen = (screen) => {
    return (
      <>
        <Image
          src={Logo}
          alt="kadinle logo"
          className="h-9 w-44 object-contain mb-6 mx-auto block"
          width={36}
          height={176}
        />
        {user?.id ? (
          <p className=" gap-2">
            {t(screen?.messages?.text1)}{" "}
            <span className=" font-medium text-black">
              {user?.user_metadata?.first_name}
            </span>{" "}
            {t(screen?.messages?.text2)}
          </p>
        ) : (
          <p className="text-center w-full">{t(screen?.messages?.text)}</p>
        )}
        <button
          className="text-opink font-medium mt-6"
          onClick={() => onMoveScreen("help_screen")}
        >
          {t("center_help")}{" "}
        </button>
      </>
    );
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full z-[10000] bg-[#00000090]"
        onClick={() => setOpenChat(false)}
      >
        <div
          className="bg-white rounded-xl md:min-w-[450px] max-w-lg py-8 pt-14 p-4 shadow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setOpenChat(false)}
            className="absolute -bottom-4 flex items-center justify-center h-11 w-11 ltr:-right-4 rtl:-left-4 bg-primary shadow rounded-full p-2"
          >
            <CloseIcon className="h-5 w-5 text-white" />
          </button>
          <div className="flex flex-col gap-4 py-4 text-sm text-gray-600">
            {selectedScreen === "intro_screen" ? (
              displayScreen(screen)
            ) : (
              <>
                {screen?.type === "manual" ? (
                  screen?.component({ onMoveScreen, handleBack })
                ) : (
                  <>
                    {screen?.messages?.title ? (
                      <h4 className="text-center text-opink font-medium text-lg">
                        {t(screen?.messages?.title)}
                      </h4>
                    ) : null}
                    {screen?.messages?.text ? (
                      <p
                        className={`text-center ${
                          screen?.messages?.icon ? "text-center" : ""
                        }`}
                      >
                        {t(screen?.messages?.text)}
                      </p>
                    ) : null}
                    {screen?.messages?.marker ? (
                      <span className="w-fit text-sm mx-auto block p-1 rounded-md bg-opink text-white">
                        {t(screen?.messages?.marker)}
                      </span>
                    ) : null}
                    {screen?.messages?.text1 ? (
                      <p className="text-center">
                        {t(screen?.messages?.text1)}
                      </p>
                    ) : null}
                    {screen?.icon ? (
                      <Link
                        href={{
                          pathname: screen?.icon?.path,
                        }}
                        // state={{ target: screen?.icon?.target }}
                      >
                        {screen?.icon?.img}
                      </Link>
                    ) : null}
                    {screen?.messages?.list?.length ? (
                      <ul className="flex flex-col gap-2 list-disc ltr:pl-4 rtl:pr-4 ">
                        {screen?.messages?.list?.map((item) => (
                          <li key={item} className="w-full">
                            {t(item)}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {screen?.messages?.link1 ? (
                      <Link
                        className="text-xs p-1 rounded-md bg-opink text-white mx-auto block w-fit"
                        href={screen?.messages?.link1?.path}
                      >
                        {t(screen?.messages?.link1?.name)}
                      </Link>
                    ) : null}
                    {screen?.messages?.text3 ? (
                      <p className="text-center">
                        {t(screen?.messages?.text3)}
                      </p>
                    ) : null}
                    {screen?.messages?.link2 ? (
                      <Link
                        className="text-xs p-1 rounded-md bg-opink text-white mx-auto block w-fit"
                        href={screen?.messages?.link2?.path}
                      >
                        {t(screen?.messages?.link2?.name)}
                      </Link>
                    ) : null}
                    {screen?.messages?.text4 ? (
                      <p className="text-center">
                        {t(screen?.messages?.text4)}
                      </p>
                    ) : null}
                    {screen?.actions?.length ? (
                      <div className="flex justify-center flex-wrap gap-4">
                        {screen?.actions?.map((item) => (
                          <>
                            {item?.role === "button" ? (
                              <button
                                key={item?.name}
                                className="bg-opink whitespace-nowrap capitalize text-white text-sm rounded-md p-1 px-3"
                                onClick={() => onMoveScreen(item?.screen_link)}
                              >
                                {t(item?.name)}
                              </button>
                            ) : item?.role === "outerAction" ? (
                              <button
                                key={item?.name}
                                className="bg-opink whitespace-nowrap capitalize text-white text-sm rounded-md p-1 px-3"
                                onClick={outerActions[item?.outerAction]}
                              >
                                {t(item?.name)}
                              </button>
                            ) : (
                              <Link
                                onClick={() => setOpenChat(false)}
                                href={item?.path}
                                className="bg-opink whitespace-nowrap capitalize text-white text-sm rounded-md p-1 px-3"
                              >
                                {t(item?.name)}
                              </Link>
                            )}
                          </>
                        ))}
                      </div>
                    ) : null}
                    {screen?.list?.length ? (
                      <ul className="flex flex-col gap-4 ">
                        {screen?.list?.map((item) => (
                          <li key={item?.name} className="w-full">
                            {item?.screen_link ? (
                              <button
                                className="bg-gray-200 text-sm rounded-md p-2 w-full flex justify-between items-center"
                                onClick={() => onMoveScreen(item?.screen_link)}
                              >
                                {t(item?.name)}
                                <ChevronIcon className="cursor-pointer ltr:-rotate-90 rtl:rotate-90 w-5 h-5" />
                              </button>
                            ) : (
                              <>
                                {" "}
                                {item?.link ? (
                                  <Link
                                    onClick={() => setOpenChat(false)}
                                    href={item?.link}
                                    className="bg-gray-200 text-sm rounded-md p-2 w-full flex justify-between items-center"
                                  >
                                    {t(item?.name)}
                                    <ChevronIcon className="cursor-pointer ltr:-rotate-90 rtl:rotate-90 w-5 h-5" />
                                  </Link>
                                ) : (
                                  <span className="bg-gray-200 block text-sm rounded-md p-2 w-full">
                                    {t(item?.name)}
                                  </span>
                                )}
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {screen?.allowBack === false ? null : (
                      <button
                        className="text-gray-400 font-medium  mt-2"
                        onClick={handleBack}
                      >
                        {t("back")}{" "}
                      </button>
                    )}
                    {screen?.allowHelp === false ? null : (
                      <button
                        className="text-opink font-medium"
                        onClick={() => onMoveScreen("help_screen")}
                      >
                        {t("center_help")}{" "}
                      </button>
                    )}
                  </>
                )}
              </>
            )}
          </div>
          <figure className="absolute -top-8 shadow -mb-6 rtl:-right-4 ltr:-left-4 bg-white h-[80px] w-[80px] rounded-[50px] p-1 flex items-center justify-center">
            <Image
              src={LogoIcon}
              alt="logo icon"
              className="w-12 h-12 object-contain"
              width={48}
              height={48}
            />
          </figure>
        </div>
      </div>
    </>
  );
};

export default Chat;
