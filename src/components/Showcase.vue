<template>
  <section
    id="showcase"
    class="showcase-section"
  >
    <button
      class="left-button"
      type="button"
      @click="prevShowcase"
    >
      <img
        src="../assets/arrow.png"
        alt=""
      />
    </button>

    <button
      class="right-button"
      type="button"
      @click="nextShowcase"
    >
      <img
        src="../assets/arrow.png"
        alt=""
      />
    </button>

    <div class="showcase-page">
      <div class="page">
        {{ String(activeIndex + 1).padStart(2, '0') }}
      </div>
      <div class="total-page">
        {{ String(showcaseItems.length).padStart(2, '0') }}
      </div>
    </div>

    <ShowcaseContent
      :key="activeShowcase!.showcaseName"
      :image-src="activeShowcase!.imageSrc"
      :image-alt="activeShowcase!.imageAlt"
      :title="activeShowcase!.title"
      :showcase-name="activeShowcase!.showcaseName"
      :showcase-description="activeShowcase!.showcaseDescription"
    />
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import highlightedShowcase from '../assets/highlighted-showcase.png';
import ShowcaseContent from './ShowcaseContent.vue';

const showcaseItems = [
  {
    imageSrc: highlightedShowcase,
    imageAlt: 'LP Club mobile app showcase preview',
    title: 'HIGHLIGHTED SHOWCASE',
    showcaseName: 'LP CLUB MOBILE APP',
    showcaseDescription:
      'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.',
  },
  {
    imageSrc: highlightedShowcase,
    imageAlt: 'LP Club mobile app showcase preview',
    title: 'HIGHLIGHTED SHOWCASE',
    showcaseName: 'SERVICE PLATFORM',
    showcaseDescription:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.',
  },
  {
    imageSrc: highlightedShowcase,
    imageAlt: 'LP Club mobile app showcase preview',
    title: 'HIGHLIGHTED SHOWCASE',
    showcaseName: 'BRAND EXPERIENCE',
    showcaseDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Aliquam erat volutpat. Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit amet, euismod in, auctor ut, ligula. Aliquam dapibus tincidunt metus. Praesent justo dolor, lobortis quis, lobortis dignissim, pulvinar ac, lorem. Vestibulum sed ante. Donec sagittis euismod purus.',
  },
  {
    imageSrc: highlightedShowcase,
    imageAlt: 'LP Club mobile app showcase preview',
    title: 'HIGHLIGHTED SHOWCASE',
    showcaseName: 'DIGITAL CAMPAIGN',
    showcaseDescription:
      'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui, praesent commodo cursus magna.',
  },
] as const;

const activeIndex = ref(0);

const activeShowcase = computed(() => showcaseItems[activeIndex.value]);

const prevShowcase = () => {
  activeIndex.value = (activeIndex.value - 1 + showcaseItems.length) % showcaseItems.length;
};

const nextShowcase = () => {
  activeIndex.value = (activeIndex.value + 1) % showcaseItems.length;
};
</script>

<style scoped lang="scss">
.showcase-section {
  position: relative;
  width: 100%;
  padding: 250px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  overflow: hidden;
  color: #fff;
  scroll-margin-top: -90px;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(0deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.75) 100%),
      url('../assets/highlighted-showcase.png') lightgray 50% / cover no-repeat;
    background-blend-mode: normal, multiply;
    filter: blur(10px);
    transform: scale(1.06);
    z-index: -1;
  }
}

.left-button,
.right-button {
  width: 53px;
  height: 53px;
  border-radius: 50%;
  border: none;
  background: #26c6d0;
  cursor: pointer;
}

.left-button {
  position: absolute;
  left: 100px;
  top: 50%;
}

.right-button {
  position: absolute;
  right: 100px;
  top: 50%;
  transform: rotate(180deg);
}

.showcase-page {
  position: absolute;
  right: 100px;
  top: 250px;
  width: 48px;
  height: 48px;
  z-index: 1;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 1px;
    height: 34px;
    background: #26c6d0;
    transform: translate(-50%, -50%) rotate(45deg);
    transform-origin: center;
  }
}

.page,
.total-page {
  position: absolute;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 1;
  white-space: nowrap;
}

.page {
  right: 50%;
  bottom: 50%;
  transform: translate(-4px, -4px);
}

.total-page {
  left: 50%;
  top: 50%;
  transform: translate(4px, 4px);
}
</style>
