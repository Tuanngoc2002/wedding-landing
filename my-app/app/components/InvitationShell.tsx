"use client";

import { ReactNode, useEffect, useMemo, useState } from "react";
import MusicPlayer from "./MusicPlayer";

type InvitationShellProps = {
  groomName: string;
  brideName: string;
  nameFontClassName: string;
  musicSrc: string;
  musicTitle?: string;
  children: ReactNode;
};

const STORAGE_KEY = "wedding_invitation_opened_v1";

export default function InvitationShell({
  groomName,
  brideName,
  nameFontClassName,
  musicSrc,
  musicTitle,
  children,
}: InvitationShellProps) {
  const [opened, setOpened] = useState(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    // Lock scroll while cover is shown.
    const prev = document.documentElement.style.overflow;
    if (!opened) document.documentElement.style.overflow = "hidden";
    else document.documentElement.style.overflow = prev || "";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [opened]);

  const subtitle = useMemo(() => {
    const g = groomName.trim();
    const b = brideName.trim();
    return `${g} & ${b}`.trim();
  }, [groomName, brideName]);

  const openInvitation = () => {
    setOpened(true);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }

    // Snap to top for best reveal.
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div data-invitation-opened={opened ? "true" : "false"}>
      {/* Cover */}
      <div
        className={[
          "fixed inset-0 z-[60] flex items-center justify-center wedding-bg",
          "transition-all duration-700 ease-out",
          opened
            ? "pointer-events-none opacity-0 blur-sm"
            : "pointer-events-auto opacity-100 blur-0",
        ].join(" ")}
      >
        <div className="mx-auto w-full max-w-xl px-5">
          <div className="wedding-card float-slow relative overflow-hidden p-7 text-center sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(180,138,90,0.18),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(231,212,192,0.38),transparent_55%)]" />

            <div className="relative">
              <p className="text-xs font-semibold tracking-[0.32em] text-zinc-600 dark:text-zinc-300">
                THIỆP CƯỚI
              </p>

              <h1
                className={[
                  "mt-5 text-5xl font-bold leading-[1.05] text-zinc-950 dark:text-white sm:text-6xl",
                  nameFontClassName,
                ].join(" ")}
              >
                <span className="block">{groomName}</span>
                <span className="mt-1 block wedding-accent">&</span>
                <span className="block">{brideName}</span>
              </h1>

              <p className="mt-5 text-sm text-zinc-600 dark:text-zinc-300">{subtitle}</p>

              <button
                type="button"
                onClick={openInvitation}
                className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-7 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                Mở thiệp
              </button>

              <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
                (Nhạc sẽ bắt đầu khi bạn mở thiệp)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      {opened && (
        <>
          <MusicPlayer
            src={musicSrc}
            title={musicTitle ?? "Bài hát"}
            enabled={opened}
          />
          <div className="reveal-page">{children}</div>
        </>
      )}
    </div>
  );
}

