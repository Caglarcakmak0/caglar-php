import Image from "next/image";
import { useTranslations } from "next-intl";

export const useTimelineData = () => {
  const t = useTranslations("Timeline");

  return [
    {
      title: "2025",
      content: (
        <div>
          <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
            {t("job1Title")}
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm font-normal mb-4">
            {t("job1Description")}
          </p>
          <div className="mb-6">
            <Image
              src="/odoo-logo.png"
              alt="Odoo Logo"
              width={200}
              height={60}
              className="object-contain mb-2"
            />
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs">
              Python
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs">
              React 19+
            </span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs">
              Odoo
            </span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs">
              TypeScript
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "2024 - 2025",
      content: (
        <div>
          <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
            {t("job2Title")}
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm font-normal mb-4">
            {t("job2Description")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Image
              src="/pixa-wms.png"
              alt="Pixa WMS Dashboard"
              width={500}
              height={300}
              className="rounded-lg object-cover shadow-md border border-neutral-200 dark:border-neutral-800"
            />
            <Image
              src="/pixa-lab.png"
              alt="Pixa Lab Dashboard"
              width={500}
              height={300}
              className="rounded-lg object-cover shadow-md border border-neutral-200 dark:border-neutral-800"
            />
          </div>
          <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
            {t("job3Title")}
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm font-normal mb-4">
            {t("job3Description")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Image
              src="/pixa-website.png"
              alt="Pixa Software Website"
              width={500}
              height={300}
              className="rounded-lg object-cover shadow-md border border-neutral-200 dark:border-neutral-800"
            />
            <Image
              src="/armek.png"
              alt="Armek Website"
              width={500}
              height={300}
              className="rounded-lg object-cover shadow-md border border-neutral-200 dark:border-neutral-800"
            />
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-xs">
              Vue 3
            </span>
            <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-xs">
              SCSS
            </span>
            <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-xs">
              Agile
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
            {t("job4Title")}
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm font-normal mb-4">
            {t("job4Description")}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-xs">
              Python
            </span>
            <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-xs">
              OpenCV
            </span>
            <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-xs">
              TensorFlow
            </span>
            <span className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-xs">
              IoT
            </span>
          </div>
        </div>
      ),
    },
  ];
};
