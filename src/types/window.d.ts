import type { YouTubeIframeAPI } from './youtube';

declare global {
  interface Window {
    YT?: YouTubeIframeAPI;
    onYouTubeIframeAPIReady?: () => void;
  }
}

export {};
