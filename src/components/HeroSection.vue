<template>
  <section class="hero">
    <div class="hero-video">
      <div class="hero-cover-wrap">
        <img
          class="hero-cover"
          :class="{ 'hero-cover--hidden': coverHidden }"
          :src="heroCover"
          alt=""
          aria-hidden="true"
        />
      </div>

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
      class="hero-decoration scroll-reveal scroll-reveal--hero-decoration"
      aria-hidden="true"
    >
      <span class="hero-decoration-line"></span>
      <span class="hero-decoration-text">DIGITAL AGENCY</span>
    </div>

    <div class="hero-content scroll-reveal scroll-reveal--hero-content">
      <a
        class="digisalad-logo-white"
        href="/"
      >
        <div class="digisalad-logo-white__image">
          <img
            src="../assets/logo/white.png"
            alt="digisalad logo in white"
          />
        </div>
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
      <span
        class="hero-cta-icon"
        aria-hidden="true"
      >
        <img
          src="../assets/hero/salad-image.png"
          alt=""
          width="65"
          height="65"
          aria-hidden="true"
        />
      </span>
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
const youtubeSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&disablekb=1&fs=0&playsinline=1&rel=0&controls=0&cc_load_policy=0&enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}`;

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
      cc_load_policy: 0,
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
  width: max(124vw, 220vh);
  height: max(70vw, 125vh);
  transform: translate(-50%, -40%);
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

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 1px;
    height: clamp(32px, 3vw, 44.044px);
    background: #fff;
    transform: translateX(-50%);
  }
}

.hero-video {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-cover-wrap {
  position: absolute;
  inset: 0;
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

.hero-decoration.scroll-reveal {
  transform: translateY(-24px) rotate(-90deg) translateX(-25%);
}

.hero-decoration.scroll-reveal.is-revealed {
  transform: rotate(-90deg) translateX(-25%);
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
  bottom: 75px;
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
  transition:
    transform 0.32s ease,
    filter 0.32s ease;
}

.hero-cta:hover,
.hero-cta:focus-visible {
  transform: translateX(-50%) translateY(-4px);
  filter: brightness(1.08);
}

.hero-cta:hover .hero-cta-icon,
.hero-cta:focus-visible .hero-cta-icon {
  transform: scale(1.05);
}

.hero-cta-icon {
  position: relative;
  width: clamp(65px, 4.5vw, 65px);
  aspect-ratio: 1 / 1;
  transition: transform 0.32s ease;
}

.hero-cta-icon img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  transition:
    filter 0.32s ease,
    transform 0.32s ease;
}

.hero-cta:hover .hero-cta-icon img,
.hero-cta:focus-visible .hero-cta-icon img {
  filter: drop-shadow(0 0 8px rgba(255, 188, 88, 0.7))
    drop-shadow(0 0 18px rgba(255, 188, 88, 0.38));
}

.digisalad-logo-white {
  display: block;
  margin-bottom: 32px;
  border-radius: 8px;
  transition:
    transform 0.32s ease,
    filter 0.32s ease;
}

.digisalad-logo-white:hover,
.digisalad-logo-white:focus-visible {
  transform: translateY(-2px);
  filter: brightness(1.08);
}

.digisalad-logo-white__image {
  position: relative;
  width: 140px;
  aspect-ratio: 199 / 88;
}

.digisalad-logo-white__image img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.hero-content {
  position: absolute;
  top: 19.255%;
  left: clamp(120px, 15.278vw, 280px);
  z-index: 1;
  width: fit-content;

  h1 {
    font-size: 38px;
    font-weight: 700;
    line-height: 70px; /* 184.211% */
    letter-spacing: 9.167px;

    span {
      position: relative;
      z-index: 0;
      display: inline-block;
      white-space: nowrap;

      &::before {
        content: '';
        position: absolute;
        top: 55%;
        right: -11px;
        width: clamp(8px, 0.694vw, 10px);
        height: clamp(8px, 0.694vw, 10px);
        border-radius: 50%;
        background: var(--color-secondary);
      }

      &::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: 18px;
        left: 0;
        height: 8px;
        background: var(--color-primary);
        z-index: -1;
        transform: translateX(-6px);
      }
    }
  }
}

.hero-content.scroll-reveal {
  transform: translateY(-24px);
}

.hero-content.scroll-reveal.is-revealed {
  transform: translateY(0);
}

@media (max-width: 960px) {
  .hero {
    height: min(820px, 92vh);
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;

    h1 span::after {
      bottom: clamp(12px, 1.2vw, 16px);
    }
  }

  .hero-decoration-text {
    font-size: 14px;
  }

  #hero-video-player {
    width: max(144vw, 200vh);
    height: max(82vw, 122vh);
  }

  .hero-content {
    left: clamp(72px, 10vw, 150px);
    top: 21%;

    h1 {
      font-size: 30px;
      line-height: 54px;
      letter-spacing: 6px;
    }
  }

  .hero-decoration {
    left: 22px;
    transform: rotate(-90deg) translateX(-20%);
  }

  .hero-cta {
    bottom: 56px;
  }

  .hero-cta-icon {
    width: clamp(54px, 5.7vw, 56px);
  }
}

@media (max-width: 480px) {
  .hero {
    height: min(680px, 88vh);
    border-bottom-left-radius: 28px;
    border-bottom-right-radius: 28px;

    h1 span::after {
      height: 6px;
      bottom: 10px;
    }
  }

  #hero-video-player {
    width: max(200vw, 190vh);
    height: max(114vw, 118vh);
  }

  .hero-decoration {
    display: none;
  }

  .digisalad-logo-white {
    margin-bottom: 20px;
  }

  .digisalad-logo-white__image {
    width: 108px;
  }

  .hero-content {
    left: 24px;
    top: 30%;

    h1 {
      font-size: 22px;
      line-height: 38px;
      letter-spacing: 3.5px;
    }
  }

  .hero-cta {
    bottom: 36px;
    gap: 8px;
    font-size: 12px;
  }

  .hero-cta-icon {
    width: clamp(42px, 4vw, 48px);
  }
}
</style>
