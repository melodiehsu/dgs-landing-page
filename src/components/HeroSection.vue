<template>
  <section class="hero">
    <div class="hero-video">
      <img
        class="hero-cover"
        :class="{ 'hero-cover--hidden': coverHidden }"
        :src="heroCover"
        alt=""
        aria-hidden="true"
      />

      <iframe
        id="hero-video-player"
        :src="youtubeSrc"
        allowfullscreen
        tabindex="-1"
        allow="
          accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture;
          web-share;
        "
        title="DigiSalad Landing Page Background Video TW"
      ></iframe>
    </div>

    <div
      class="hero-decoration"
      aria-hidden="true"
    >
      <span class="hero-decoration-line"></span>
      <span class="hero-decoration-text">DIGITAL AGENCY</span>
    </div>

    <div class="hero-content">
      <a
        class="digisalad-logo-white"
        href="/"
      >
        <img
          src="../assets/logo/white.png"
          alt="digisalad logo in white"
        />
      </a>

      <h1>
        WE CREATE<br />
        AMAZING<br />
        <span>DIGITAL EXPERIENCES</span>
      </h1>
    </div>

    <a
      class="hero-cta"
      href="#about"
      aria-label="Go to about section"
    >
      <img
        src="../assets/salad-image.png"
        alt=""
        width="65"
        height="65"
        aria-hidden="true"
      />
      <span>TASTE US NOW!</span>
    </a>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import heroCover from '../assets/video/cover.png';
import type { YouTubePlayer } from '@/types/youtube';

let fadeTimer: ReturnType<typeof setTimeout> | undefined;
let player: YouTubePlayer | undefined;
const videoId = '8_4JRK4QkqU';
const apiScriptId = 'youtube-iframe-api';
const youtubeSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&disablekb=1&fs=0&playsinline=1&rel=0&controls=0&enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}`;

const coverHidden = ref(false);

const handleVideoLoad = () => {
  if (fadeTimer) {
    clearTimeout(fadeTimer);
  }

  fadeTimer = setTimeout(() => {
    coverHidden.value = true;
  }, 1500);
};

const createPlayer = () => {
  if (!window.YT || player) {
    return;
  }

  player = new window.YT.Player('hero-video-player', {
    videoId,
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      fs: 0,
      origin: window.location.origin,
      playsinline: 1,
      rel: 0,
      mute: 1,
    },
    events: {
      onReady: (event) => {
        event.target.mute();
        event.target.playVideo();
        handleVideoLoad();
      },
      onStateChange: (event) => {
        if (event.data === window.YT?.PlayerState.ENDED) {
          event.target.seekTo(0, true);
          event.target.playVideo();
        }
      },
    },
  });
};

const loadYouTubeApi = () => {
  if (window.YT?.Player) {
    createPlayer();
    return;
  }

  window.onYouTubeIframeAPIReady = () => {
    createPlayer();
  };

  if (document.getElementById(apiScriptId)) {
    return;
  }

  const script = document.createElement('script');
  script.id = apiScriptId;
  script.src = 'https://www.youtube.com/iframe_api';
  document.head.appendChild(script);
};

onMounted(() => {
  loadYouTubeApi();
});

onBeforeUnmount(() => {
  if (fadeTimer) {
    clearTimeout(fadeTimer);
  }

  if (player) {
    player.destroy();
    player = undefined;
  }
});
</script>

<style scoped lang="scss">
#hero-video-player {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 0;
  border: 0;
  width: max(112vw, 200vh);
  height: max(63vw, 112vh);
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.hero {
  position: relative;
  width: 100%;
  height: min(940px, 100vh);
  color: #fff;
  letter-spacing: 2px;
  overflow: hidden;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}

.hero::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 1px;
  height: 44.044px;
  background: #fff;
  transform: translateX(-50%);
}

.hero-video {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-cover {
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  opacity: 1;
  transition: opacity 3s ease;
  will-change: opacity;
}

.hero-cover--hidden {
  opacity: 0;
}

.hero-decoration {
  position: absolute;
  left: clamp(24px, 4.34vw, 83px);
  top: 55%;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 20px;
  transform: rotate(-90deg) translateX(-25%);
  transform-origin: left top;
  white-space: nowrap;
}

.hero-decoration-line {
  width: 113px;
  height: 2px;
  background: #fff;
  flex: none;
}

.hero-decoration-text {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 2.222px;
}

.hero-cta {
  position: absolute;
  left: 50%;
  bottom: 103px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11px;
  color: inherit;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-decoration: none;
  cursor: pointer;
  transform: translateX(-50%);
}

.digisalad-logo-white {
  display: block;
  margin-bottom: 32px;
}

.hero-content {
  position: absolute;
  top: 19.255%;
  left: clamp(120px, 15.278vw, 280px);
  z-index: 1;
  width: fit-content;

  h1 {
    position: relative;
    font-size: 38px;
    font-weight: 700;
    line-height: 70px; /* 184.211% */
    letter-spacing: 9.167px;

    span {
      position: relative;
      z-index: 0;
      display: inline-block;

      &::before {
        content: '';
        position: absolute;
        top: 55%;
        right: -11px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #ee6c8a;
      }

      &::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: 18px;
        left: 0;
        height: 8px;
        background: #26c6d0;
        z-index: -1;
        transform: translateX(-6px);
      }
    }
  }
}
</style>
