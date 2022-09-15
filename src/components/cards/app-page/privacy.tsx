"use client";

import ChevronLeftIcon from "@/assets/icons/chevron-left";
import cardStyle from "@/shared/styles/card";
import Link from "next/link";
import ThemeSwitcher from "../theme/theme-toggle";
import AppPageType from "./data/page";

export default function Privacy({ page }: { page: AppPageType }) {
  const app = page.app;
  if (!app) return;

  const now = Date.now();
  const legalStyle = "text-sm opacity-30 hover:opacity-100 hover:underline p-2";
  const normalStyle = "text-sm text-black dark:text-white opacity-60";
  const boldStyle = normalStyle + " !text-lg !font-bold !opacity-75 pt-3";
  return (
    <div className={cardStyle + "!p-3"}>
      <div className="w-full flex flex-row items-center">
        <Link
          href={app.path}
          className="flex flex-row justify-start items-center gap-2 opacity-30 hover:opacity-100 hover:underline px-2"
        >
          <div className="hover:animate-scale">
            <ChevronLeftIcon className="w-6 h-6" />
          </div>
          <p className="text-sm">{app.title.toUpperCase()}</p>
        </Link>
        <div className="flex-grow" />
        <ThemeSwitcher
          className="hover:animate-none !w-[80px]"
          thumbClassName="h-7 w-7"
        />
      </div>
      <div className="h-1" />
      <div className="flex flex-col px-3 gap-2.5">
        <p className={boldStyle + " !text-2xl pb-1"}>Privacy Policy</p>
        <p className={normalStyle}>
          This page is used to inform visitors regarding our policies with the
          collection, use, and disclosure of Personal Information if anyone
          decided to use our Service.
        </p>
        <p className={normalStyle}>
          Sample text
        </p>
        <p className={normalStyle}>
          Sample text
        </p>
        <p className={normalStyle}>
          App title: {app.title}, sample text
        </p>
        <p className={boldStyle}>Sample text</p>
        <p className={normalStyle}>
          Sample text
        </p>
        <p className={normalStyle}>
          Sample text
        </p>
        {page.privacyOptions?.thirdParty && (
          <p className={normalStyle}>
            Sample text
          </p>
        )}
        {page.privacyOptions?.thirdParty && (
          <p className={normalStyle}>
            <ul className="list-disc list-inside">
              <li>
                <a
                  href="https://www.google.com/policies/privacy/"
                  target="_blank"
                  className="hover:opacity-50"
                >
                  Google Play Services
                </a>
              </li>
              <li>
                <a
                  href="https://firebase.google.com/policies/analytics"
                  target="_blank"
                  className="hover:opacity-50"
                >
                  Google Analytics
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/about/privacy/update/printable"
                  target="_blank"
                  className="hover:opacity-50"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.revenuecat.com/privacy"
                  target="_blank"
                  className="hover:opacity-50"
                >
                  RevenueCat
                </a>
              </li>
            </ul>
          </p>
        )}
        <p className={normalStyle}>
          This policy is effective as of {new Date(now).toLocaleString()}.
        </p>
        <p className={boldStyle}>Contact Us</p>
        <span className={normalStyle}>
          If you have any questions or suggestions about our Privacy Policy, do
          not hesitate to{" "}
          <a className={"!underline !font-semibold"} href="/contact">
            contact us
          </a>
          .
        </span>
      </div>
      <div className="h-12" />
      <div className="flex flex-row w-full justify-end items-center gap-4 px-2">
        <Link href={app.path} className={legalStyle}>
          {app.title} © {new Date(now).getFullYear()}
        </Link>
      </div>
    </div>
  );
}
