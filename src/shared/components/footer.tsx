import { githubIcon } from "@/assets/icons/all-social";
import linksMetadata, { sourceCode } from "@/metadata/links";
import cardStyle from "../styles/card";

function Footer() {
  const year = new Date().getFullYear();
  const onHoverStyle = "hover:underline hover:text-black dark:hover:text-white";
  const github = (
    <a className={onHoverStyle} target="_blank" href={linksMetadata.github}>
      Vladislav Averett
    </a>
  );
  return (
    <footer
      className={
        cardStyle +
        "!py-3 my-6 flex flex-col sm:flex-row items-center justify-center rounded-3xl sm:justify-between w-full text-sm text-neutral-500 text-center gap-3 h-fit"
      }
    >
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-1" />
          nextjs-simple-website
        <p className="mx-3 hidden 2xs:block">|</p>
        <a className={onHoverStyle + " flex"} target="_blank" href={sourceCode}>
          Source code
          <div className="w-1.5" />
          <div className="w-4 bg-current rounded-full m-auto">{githubIcon}</div>
        </a>
      </div>
      <div className="flex">
        <a className={onHoverStyle + " flex"} target="_blank" href="avrtt.github.io">
          {github}
        </a>
        <p className="w-1" />
        <p>| The Unlicense</p>
      </div>
    </footer>
  );
}

export default Footer;
