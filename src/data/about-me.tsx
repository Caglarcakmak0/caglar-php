import { useTranslations } from "next-intl";

export const useAboutMeData = () => {
  const t = useTranslations("AboutMe");

  return {
    subtitle: t("subtitle"),
    title: (
      <>
        {t("title")}{" "}
        <span className="italic font-light bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
          {t("titleHighlight")}
        </span>
      </>
    ),
    description: [t("description1"), t("description2")],
    quote: t("quote"),
    socialLinks: {
      linkedin: "https://linkedin.com/in/caglarcakmak",
      github: "https://github.com/caglarcakmak",
      twitter: "https://twitter.com/caglarcakmak",
    },
    images: [
      {
        src: "/kod.jpeg",
        alt: "Coding",
        caption: t("iCode"),
      },
      {
        src: "/spor.jpeg",
        alt: "Sports",
        caption: t("iExercise"),
      },
      {
        src: "/motor.jpeg",
        alt: "Motorcycle",
        caption: t("iRide"),
      },
    ],
  };
};

import { getTranslations } from "next-intl/server";

export const getAboutMeData = async (locale: string) => {
  const t = await getTranslations({ locale, namespace: "AboutMe" });

  return {
    subtitle: t("subtitle"),
    title: (
      <>
        {t("title")}{" "}
        <span className="italic font-light bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
          {t("titleHighlight")}
        </span>
      </>
    ),
    description: [t("description1"), t("description2")],
    quote: t("quote"),
    socialLinks: {
      linkedin: "https://linkedin.com/in/caglarcakmak",
      github: "https://github.com/caglarcakmak",
      twitter: "https://twitter.com/caglarcakmak",
    },
    images: [
      {
        src: "/kod.jpeg",
        alt: "Coding",
        caption: t("iCode"),
      },
      {
        src: "/spor.jpeg",
        alt: "Sports",
        caption: t("iExercise"),
      },
      {
        src: "/motor.jpeg",
        alt: "Motorcycle",
        caption: t("iRide"),
      },
    ],
  };
};
