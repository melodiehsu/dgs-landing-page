<template>
  <section
    id="about"
    class="about-section"
  >
    <div class="about-section-title">
      <SectionTitle
        title="ABOUT DIGISALAD"
        wave-color="#26C6D0"
        dot-color="#EE6C8A"
      />
    </div>

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

    <div class="awards">
      <div class="left-col">
        <div class="awards-section-title">
          <SectionTitle
            title="AWARDS"
            wave-color="#26C6D0"
            dot-color="#EE6C8A"
            :first-wave-width="191"
            :second-wave-width="0"
            :wave-offset-x="8"
            :wave-offset-y="10"
            :dot-offset-x="7"
          />
        </div>

        <p class="awards-content">
          Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum
          bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.
          Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae
          sagittis orci. Donec id dignissim nunc.
        </p>
      </div>

      <div class="right-col">
        <img
          src="../assets/award.png"
          alt="Award"
        />
        <img
          src="../assets/award.png"
          alt="Award"
        />
        <img
          src="../assets/award.png"
          alt="Award"
        />
        <img
          src="../assets/award.png"
          alt="Award"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/SectionTitle.vue';
import { computed, ref } from 'vue';
import playSymbol from '../assets/media-play-symbol.png';

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
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about-section-title {
  margin: 40px 0;
}

.video-wrapper {
  position: relative;
  width: 960px;
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
}

.video-overlay-icon {
  display: grid;
  place-items: center;
  width: 112.514px;
  height: 113.181px;
}

.about-content {
  width: 70%;
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
}

.decoration-line {
  width: 52.033px;
  height: 2px;
  background: #fff;
  margin-left: 14px;
}

.awards {
  background: #fff;
  width: 93%;
  margin: 70px 0 0 auto;
  padding: 65px 70px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  overflow: hidden;
  display: flex;
  gap: 35px;
}

.awards-section-title {
  width: 200px;
}

.left-col {
  width: 30%;
}

.awards-content {
  margin-top: 30px;
  color: #262626;
  font-size: 16px;
  font-weight: 200;
  line-height: 28px; /* 175% */
  letter-spacing: 1px;
}

.right-col {
  width: auto;
  display: grid;
  padding-top: 30px;
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: repeat(2, max-content);
  justify-items: center;
  align-items: center;
  gap: 37px 19px;
}
</style>
