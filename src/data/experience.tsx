import { useTranslations } from "next-intl";

export interface ExperienceProject {
  id: string;
  image: string;
  title: string;
  description?: string;
  link?: string;
}

export interface ExperienceFolder {
  company: string;
  position: string;
  period: string;
  location?: string;
  projects: ExperienceProject[];
}

export const useExperienceData = (): ExperienceFolder[] => {
  const t = useTranslations("Experience");

  return [
    {
      company: t("companies.cetintas.name"),
      position: t("companies.cetintas.position"),
      period: t("companies.cetintas.period"),
      location: t("companies.cetintas.location"),
      projects: [
        {
          id: "odoo-erp",
          image: "/odoo-logo.png",
          title: "Odoo ERP - Didoda A.Ş.",
          description: t("companies.cetintas.projects.odoo"),
          link: "https://odoo.com",
        },
        {
          id: "inovapin",
          image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
          title: "Inovapin Marketplace",
          description: t("companies.cetintas.projects.inovapin"),
        },
        {
          id: "workcube-erp",
          image: "/workcube.png",
          title: "Workcube ERP",
          description: t("companies.cetintas.projects.workcube"),
          link: "https://workcube.com",
        },
      ],
    },
    {
      company: t("companies.nikYks.name"),
      position: t("companies.nikYks.position"),
      period: t("companies.nikYks.period"),
      location: t("companies.nikYks.location"),
      projects: [
        {
          id: "nikyksko-edtech",
          image: "/nikyksko.png",
          title: "NIK YKS EdTech",
          description: t("companies.nikYks.projects.edtech"),
          link: "https://nikykskoclugu.com.tr",
        },
      ],
    },
    {
      company: t("companies.pixaWms.name"),
      position: t("companies.pixaWms.position"),
      period: t("companies.pixaWms.period"),
      location: t("companies.pixaWms.location"),
      projects: [
        {
          id: "pixa-wms",
          image: "/pixauygulama fotografı.png",
          title: "Pixa WMS",
          description: t("companies.pixaWms.projects.wms"),
          link: "https://pixasoftware.com",
        },
      ],
    },
    {
      company: t("companies.pixaFreelance.name"),
      position: t("companies.pixaFreelance.position"),
      period: t("companies.pixaFreelance.period"),
      location: t("companies.pixaFreelance.location"),
      projects: [
        {
          id: "pixa-website",
          image: "/pixa-website.png",
          title: "Pixa Website",
          description: t("companies.pixaFreelance.projects.website"),
          link: "https://pixasoftware.com",
        },
      ],
    },
    {
      company: t("companies.armek.name"),
      position: t("companies.armek.position"),
      period: t("companies.armek.period"),
      location: t("companies.armek.location"),
      projects: [
        {
          id: "armek-web",
          image: "/armek.png",
          title: "Armek Mekatronik",
          description: t("companies.armek.projects.website"),
        },
      ],
    },
    {
      company: t("companies.visioncore.name"),
      position: t("companies.visioncore.position"),
      period: t("companies.visioncore.period"),
      location: t("companies.visioncore.location"),
      projects: [
        {
          id: "visioncore-ai",
          image:
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop",
          title: "Visioncore AI",
          description: t("companies.visioncore.projects.ai"),
        },
      ],
    },
  ];
};
