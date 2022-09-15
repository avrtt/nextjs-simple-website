import DevicesIcon from "@/assets/icons/devices";
import CardTitle from "@/shared/components/titles/card-title";
import cardStyle from "@/shared/styles/card";
import tagStyle from "@/shared/styles/tag";
import linkByTag from "../apps/data/link-by-tag";
import { webApps } from "../apps/data/web-apps";
import { mlApps } from "../apps/data/ml-apps";

export const uniqueTags = [...mlApps, ...webApps]
  .map((item) => item.tags || [])
  .flat()
  .filter((item, index, array) => array.indexOf(item) === index)
  .sort();

export default function ExperiencesCard({ className }: { className?: string }) {
  return (
    <div className={cardStyle + className}>
      <CardTitle title="EXPERIENCES" icon={<DevicesIcon />} />
      <div className="h-5" />
      <div className="flex flex-wrap w-full gap-2">
        {uniqueTags.map((tag: any) => {
          const link = linkByTag(tag);
          return (
            <a
              href={link}
              target="_blank"
              key={tag}
              className={tagStyle + "text-2xs opacity-95"}
            >
              {tag}
            </a>
          );
        })}
        <a
          href="/work"
          key="more"
          className={
            tagStyle +
            "text-2xs font-medium opacity-95 !text-white !bg-black dark:!text-black dark:!bg-white after:content-['_→']"
          }
        >
          Show more
        </a>
      </div>
    </div>
  );
}
