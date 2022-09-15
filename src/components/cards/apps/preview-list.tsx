import DevicesIcon from "@/assets/icons/devices";
import CardButton from "@/shared/components/buttons/card-button";
import CardTitle from "@/shared/components/titles/card-title";
import cardStyle from "@/shared/styles/card";
import Link from "next/link";

function PreviewAppsList() {
  return (
    <div className={cardStyle}>
      <CardTitle icon={<DevicesIcon />} title="FEATURED" />
      <div className="h-8" />
      <div className="flex flex-wrap content-center gap-7">
        A list of blocks featuring your projects.
      </div>
      <div className="h-5" />
      <div className="w-full">
        <Link href="/work">
          <CardButton
            title="VIEW ALL"
            className="hover:animate-scale float-right px-7"
          />
        </Link>
      </div>
    </div>
  );
}

export default PreviewAppsList;
