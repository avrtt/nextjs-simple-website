import { sourceCode } from "@/metadata/links";
import GoHomeButton from "@/shared/components/buttons/go-home-button";
import cardStyle from "@/shared/styles/card";

export default function Blog() {
  return (
    <div className={cardStyle + "items-center text-center py-14"}>
      <div className="h-6" />
      <label className="text-lg font-light text-neutral-500 mx-10">
        This is a page for post blocks.
      </label>
      <div className="h-10" />
      <GoHomeButton />
    </div>
  );
}
