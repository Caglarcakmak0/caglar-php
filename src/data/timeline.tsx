import Image from "next/image";
import { useTranslations } from "next-intl";

const chipColors = [
  "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300",
  "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300",
  "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300",
  "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
  "bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300",
  "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300",
];

const Chips = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-2 mt-4">
    {items.map((item, i) => (
      <span
        key={item}
        className={`px-3 py-1 rounded-full text-xs ${chipColors[i % chipColors.length]}`}
      >
        {item}
      </span>
    ))}
  </div>
);

const imageClass =
  "h-auto w-full rounded-lg object-cover shadow-md border border-neutral-200 dark:border-neutral-800";

export const useTimelineData = () => {
  const t = useTranslations("Timeline");

  const header = (n: number) => (
    <>
      <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-1">
        {t(`job${n}Title`)}
      </h3>
      <p className="text-neutral-500 dark:text-neutral-400 text-xs mb-3">
        {t(`job${n}Period`)}
      </p>
      <p className="text-neutral-800 dark:text-neutral-200 text-sm font-normal mb-3">
        {t(`job${n}Description`)}
      </p>
      <ul className="list-disc space-y-2 pl-5 mb-4 text-sm text-neutral-700 dark:text-neutral-300 marker:text-neutral-400">
        {(t.raw(`job${n}Bullets`) as string[]).map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </>
  );

  return [
    {
      title: "2026",
      content: (
        <div>
          {header(1)}
          <Chips
            items={[
              "Ray",
              "NCCL/HSDP",
              "Kubernetes",
              "W&B",
              "PostgreSQL",
              "S3",
              "Python",
            ]}
          />
        </div>
      ),
    },
    {
      title: "2025 - 2026",
      content: (
        <div>
          {header(2)}
          <div className="mb-6">
            <Image
              src="/odoo-erp.webp"
              alt="Odoo ERP"
              width={500}
              height={300}
              className={imageClass}
            />
          </div>
          <Chips
            items={["Odoo", "Python", "PostgreSQL", "Business Analysis"]}
          />
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          {header(3)}
          <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-4 mb-6">
            <Image
              src="/pixa-wms-app.webp"
              alt="Pixa WMS Dashboard"
              width={500}
              height={300}
              className={imageClass}
            />
            <Image
              src="/pixa-lab.webp"
              alt="Pixa Lab Dashboard"
              width={500}
              height={300}
              className={imageClass}
            />
          </div>
          <Chips items={["Vue 3", "TypeScript"]} />
        </div>
      ),
    },
    {
      title: "2023 - 2025",
      content: (
        <div>
          {header(4)}
          <Chips items={["Python", "Computer Vision", "IoT"]} />
        </div>
      ),
    },
  ];
};
