"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type MusicPlayerProps = {
  src: string;
  title?: string;
  enabled?: boolean;
};

export default function MusicPlayer({
  src,
  title = "Bài hát",
  enabled = true,
}: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [volume, setVolume] = useState(0.65);

  const displayTitle = useMemo(() => title.trim() || "Bài hát", [title]);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;

    a.volume = volume;
    a.loop = true;
    a.preload = "auto";

    const onCanPlay = () => setIsReady(true);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    a.addEventListener("canplay", onCanPlay);
    a.addEventListener("play", onPlay);
    a.addEventListener("pause", onPause);

    return () => {
      a.removeEventListener("canplay", onCanPlay);
      a.removeEventListener("play", onPlay);
      a.removeEventListener("pause", onPause);
    };
  }, [volume]);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;

    if (!enabled) {
      a.pause();
      return;
    }

    const attempt = async () => {
      try {
        await a.play();
        setIsBlocked(false);
      } catch {
        setIsBlocked(true);
      }
    };

    void attempt();
  }, [enabled]);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;

    try {
      if (a.paused) {
        await a.play();
        setIsBlocked(false);
      } else {
        a.pause();
      }
    } catch {
      setIsBlocked(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} />

      <div className="fixed bottom-4 right-4 z-50">
        <div className="reveal-pop flex items-center gap-3 rounded-2xl border border-black/[.10] bg-white/80 px-4 py-3 backdrop-blur shadow-sm dark:border-white/[.12] dark:bg-black/60">
          <button
            type="button"
            onClick={toggle}
            className="inline-flex h-10 items-center justify-center rounded-xl bg-zinc-900 px-4 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            aria-label={isPlaying ? "Tạm dừng nhạc" : "Bật nhạc"}
            title={isPlaying ? "Tạm dừng" : "Phát"}
          >
            {isPlaying ? "Pause" : "Play"}
          </button>

          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-zinc-950 dark:text-white">
              {displayTitle}
            </p>
            <div className="mt-1 flex items-center gap-2">
              <input
                aria-label="Âm lượng"
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) => {
                  const next = Number(e.target.value);
                  setVolume(next);
                  if (audioRef.current) audioRef.current.volume = next;
                }}
                className="w-28 accent-zinc-900 dark:accent-white"
              />
              <span className="w-10 text-right text-xs text-zinc-600 dark:text-zinc-300">
                {Math.round(volume * 100)}%
              </span>
            </div>
            {isBlocked && (
              <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-300">
                Trình duyệt chặn autoplay — bấm Play để bật nhạc.
              </p>
            )}
            {!isReady && (
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">Đang tải…</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

