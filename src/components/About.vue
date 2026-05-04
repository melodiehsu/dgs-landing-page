<template>
  <section class="about-section">
    <div class="about-shell">
      <SectionTitle
        id="about"
        title="about digisalad"
        wave-color="#26C6D0"
        dot-color="#EE6C8A"
        :wave-loop-count="2"
        :scroll-margin-top="120"
      />

      <div class="video-wrapper">
        <iframe
          id="about-video"
          :src="youtubeSrc"
          allowfullscreen
          tabindex="-1"
          allow="
            autoplay;
            accelerometer;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture;
            web-share;
          "
          title="About DigiSalad Video"
        ></iframe>

        <button
          v-if="!isPlaying"
          class="video-overlay"
          type="button"
          aria-label="Play About Digisalad video"
          @click="handlePlay"
        >
          <span
            class="video-overlay-icon"
            aria-hidden="true"
          >
            <img
              :src="playSymbol"
              alt=""
              aria-hidden="true"
              width="100%"
              height="100%"
            />
          </span>
        </button>
      </div>

      <p class="about-content">
        Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum
        bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.
        Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis
        orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis
        dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et
        vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis
        molestie faucibus.
      </p>

      <button
        class="about-cta"
        type="button"
      >
        <span>VIEW MORE</span>
        <span
          class="decoration-line"
          aria-hidden="true"
        ></span>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/SectionTitle.vue';
import { computed, ref } from 'vue';
import playSymbol from '../assets/video/media-play-symbol.png';

const videoId = 'IeIRJ9jZ5Ro';
const isPlaying = ref(false);

const youtubeSrc = computed(
  () =>
    `https://www.youtube.com/embed/${videoId}?playsinline=1&rel=0&controls=1&autoplay=${isPlaying.value ? 1 : 0}`,
);

const handlePlay = () => {
  isPlaying.value = true;
};
</script>

<style scoped lang="scss">
.about-section {
  width: 100%;
  scroll-margin-top: 100px;
  box-sizing: border-box;
  background: #f2f2f2;
}

.about-shell {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 150px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.video-wrapper {
  position: relative;
  width: 100%;
  max-width: 960px;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  margin: 30px 0;
}

#about-video {
  position: absolute;
  inset: 0;
  border: 0;
  width: 100%;
  height: 100%;
}

.video-overlay {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  border: 0;
  background: transparent;
  cursor: pointer;
  border: 1px solid #f2f2f2;
  transition:
    background-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.video-overlay:hover,
.video-overlay:focus-visible {
  background: rgba(38, 198, 208, 0.08);
  box-shadow: inset 0 0 0 2px rgba(38, 198, 208, 0.45);
}

.video-overlay:hover .video-overlay-icon,
.video-overlay:focus-visible .video-overlay-icon {
  transform: scale(1.05);
}

.video-overlay-icon {
  display: grid;
  place-items: center;
  width: clamp(72px, 9vw, 112.514px);
  height: clamp(72px, 9vw, 113.181px);
  transition: transform 0.2s ease;
}

.about-content {
  width: 100%;
  max-width: 960px;
  color: #262626;
  text-align: center;
  font-size: 16px;
  font-weight: 200;
  line-height: 28px; /* 175% */
  letter-spacing: 1px;
  margin-bottom: 30px;
}

.about-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  border: 0;
  appearance: none;
  border-radius: 1px;
  background: #26c6d0;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 2.222px;
  text-decoration: none;
  cursor: pointer;
  padding: 33px 24.53px;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    filter 0.2s ease;
}

.about-cta:hover,
.about-cta:focus-visible {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(38, 198, 208, 0.22);
  filter: brightness(1.04);
}

.about-cta:hover .decoration-line,
.about-cta:focus-visible .decoration-line {
  width: clamp(44px, 5.2vw, 58px);
}

.decoration-line {
  width: clamp(40px, 5vw, 52.033px);
  height: 2px;
  background: #fff;
  margin-left: 14px;
}

@media (max-width: 960px) {
  .about-shell {
    padding: 32px 48px 0;
  }

  .about-content {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .about-shell {
    padding: 24px 20px 0;
  }

  .video-wrapper {
    margin: 20px 0;
  }

  .about-content {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.5px;
  }

  .about-cta {
    padding: 24px 18px;
    font-size: 14px;
  }

  .decoration-line {
    width: 40px;
    margin-left: 10px;
  }

  .video-overlay-icon {
    width: 72px;
    height: 72px;
  }
}
</style>
