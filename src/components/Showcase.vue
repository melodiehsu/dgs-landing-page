<template>
  <section
    id="works"
    class="showcase-section"
  >
    <div class="showcase-stage">
      <button
        class="last-page-button"
        type="button"
        aria-label="Previous showcase"
        @click="prevShowcase"
      >
        <span
          class="button-icon"
          aria-hidden="true"
        >
          <img
            src="../assets/arrow.png"
            alt=""
          />
        </span>
      </button>

      <Transition
        :name="showcaseTransitionName"
        mode="out-in"
        appear
      >
        <ShowcaseContent
          :key="activeShowcase!.showcaseName"
          :image-src="activeShowcase!.imageSrc"
          :image-alt="activeShowcase!.imageAlt"
          :title="activeShowcase!.title"
          :showcase-name="activeShowcase!.showcaseName"
          :showcase-description="activeShowcase!.showcaseDescription"
        />
      </Transition>

      <button
        class="next-page-button"
        type="button"
        aria-label="Next showcase"
        @click="nextShowcase"
      >
        <span
          class="button-icon"
          aria-hidden="true"
        >
          <img
            src="../assets/arrow.png"
            alt=""
          />
        </span>
      </button>

      <div class="showcase-pagination">
        <Transition
          :name="showcasePaginationTransitionName"
          mode="out-in"
          appear
        >
          <span
            :key="activeIndex"
            class="showcase-pagination__current"
          >
            {{ formatPaginationNumber(activeIndex + 1) }}
          </span>
        </Transition>
        <span class="showcase-pagination__total">
          {{ formatPaginationNumber(showcaseItems.length) }}
        </span>
      </div>
    </div>
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
    imageAlt: 'Service platform preview',
    title: 'HIGHLIGHTED SHOWCASE',
    showcaseName: 'SERVICE PLATFORM',
    showcaseDescription:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.',
  },
  {
    imageSrc: highlightedShowcase,
    imageAlt: 'Brand experience preview',
    title: 'HIGHLIGHTED SHOWCASE',
    showcaseName: 'BRAND EXPERIENCE',
    showcaseDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Aliquam erat volutpat. Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit amet, euismod in, auctor ut, ligula. Aliquam dapibus tincidunt metus. Praesent justo dolor, lobortis quis, lobortis dignissim, pulvinar ac, lorem. Vestibulum sed ante. Donec sagittis euismod purus.',
  },
  {
    imageSrc: highlightedShowcase,
    imageAlt: 'Digital campaign preview',
    title: 'HIGHLIGHTED SHOWCASE',
    showcaseName: 'DIGITAL CAMPAIGN',
    showcaseDescription:
      'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui, praesent commodo cursus magna.',
  },
] as const;

const activeIndex = ref(0);
const transitionDirection = ref<'prev' | 'next'>('next');

const activeShowcase = computed(() => showcaseItems[activeIndex.value]);
const showcaseTransitionName = computed(
  () => (transitionDirection.value === 'prev' ? 'showcase-slide-right' : 'showcase-slide-left'),
);
const showcasePaginationTransitionName = computed(
  () =>
    transitionDirection.value === 'prev'
      ? 'showcase-pagination-slide-up'
      : 'showcase-pagination-slide-down',
);

const formatPaginationNumber = (value: number) => String(value).padStart(2, '0');

const prevShowcase = () => {
  transitionDirection.value = 'prev';
  activeIndex.value = (activeIndex.value - 1 + showcaseItems.length) % showcaseItems.length;
};

const nextShowcase = () => {
  transitionDirection.value = 'next';
  activeIndex.value = (activeIndex.value + 1) % showcaseItems.length;
};
</script>

<style scoped lang="scss">
.showcase-section {
  position: relative;
  width: 100%;
  padding: clamp(120px, 13vw, 250px) 0;
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

.showcase-stage {
  position: relative;
  width: min(90%, 1440px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: clamp(20px, 3vw, 48px);
  align-items: center;
}

.last-page-button,
.next-page-button {
  width: clamp(42px, 3.6vw, 53px);
  height: clamp(42px, 3.6vw, 53px);
  border-radius: 50%;
  border: 2px solid transparent;
  background: #26c6d0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  transition:
    transform 0.32s ease,
    box-shadow 0.32s ease,
    filter 0.32s ease;
}

.last-page-button:hover,
.next-page-button:hover,
.last-page-button:focus-visible,
.next-page-button:focus-visible {
  transform: translateY(-2px);
  background: #fff;
  border-color: #26c6d0;
  box-shadow: 0 12px 28px rgba(7, 43, 53, 0.12);
}

.button-icon {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.button-icon img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  transition: filter 0.32s ease;
}

.next-page-button .button-icon {
  transform: rotate(180deg);
}

.last-page-button:hover .button-icon,
.last-page-button:focus-visible .button-icon {
  transform: scale(1.08);
}

.next-page-button:hover .button-icon,
.next-page-button:focus-visible .button-icon {
  transform: rotate(180deg) scale(1.08);
}

.last-page-button:hover .button-icon img,
.last-page-button:focus-visible .button-icon img,
.next-page-button:hover .button-icon img,
.next-page-button:focus-visible .button-icon img {
  filter:
    brightness(0)
    saturate(100%)
    invert(59%)
    sepia(71%)
    saturate(508%)
    hue-rotate(138deg)
    brightness(94%)
    contrast(92%);
}

.last-page-button {
  grid-column: 1;
  grid-row: 2;
}

.next-page-button {
  grid-column: 3;
  grid-row: 2;
}

.showcase-pagination {
  position: relative;
  grid-row: 1;
  grid-column: 3;
  width: clamp(40px, 3vw, 48px);
  height: clamp(40px, 3vw, 48px);
  pointer-events: none;
  margin-right: clamp(2px, 0.5vw, 8px);

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 1px;
    height: 72%;
    background: #26c6d0;
    transform: translate(-50%, -50%) rotate(45deg);
    transform-origin: center;
  }
}

.showcase-pagination__current,
.showcase-pagination__total {
  position: absolute;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 1;
  white-space: nowrap;
}

.showcase-pagination__current {
  right: 50%;
  bottom: 50%;
  transform: translate(-5px, -5px);
  will-change: opacity, transform;
}

.showcase-pagination__total {
  left: 50%;
  top: 50%;
  transform: translate(5px, 5px);
}

.showcase-pagination :deep(.showcase-pagination-slide-up-enter-active),
.showcase-pagination :deep(.showcase-pagination-slide-up-leave-active),
.showcase-pagination :deep(.showcase-pagination-slide-down-enter-active),
.showcase-pagination :deep(.showcase-pagination-slide-down-leave-active) {
  transition:
    opacity 0.32s ease,
    transform 0.32s ease;
}

.showcase-pagination :deep(.showcase-pagination-slide-up-enter-from),
.showcase-pagination :deep(.showcase-pagination-slide-down-leave-to) {
  opacity: 0;
  transform: translate(-5px, -5px) translateY(16px);
}

.showcase-pagination :deep(.showcase-pagination-slide-up-leave-to),
.showcase-pagination :deep(.showcase-pagination-slide-down-enter-from) {
  opacity: 0;
  transform: translate(-5px, -5px) translateY(-16px);
}

.showcase-pagination :deep(.showcase-pagination-slide-up-enter-to),
.showcase-pagination :deep(.showcase-pagination-slide-up-leave-from),
.showcase-pagination :deep(.showcase-pagination-slide-down-enter-to),
.showcase-pagination :deep(.showcase-pagination-slide-down-leave-from) {
  opacity: 1;
  transform: translate(-5px, -5px) translateY(0);
}

.showcase-slide-left-enter-active,
.showcase-slide-left-leave-active,
.showcase-slide-right-enter-active,
.showcase-slide-right-leave-active {
  transition:
    opacity 0.38s ease,
    transform 0.38s ease;
}

.showcase-slide-left-enter-from,
.showcase-slide-right-leave-to {
  opacity: 0;
  transform: translateX(-28px);
}

.showcase-slide-left-leave-to,
.showcase-slide-right-enter-from {
  opacity: 0;
  transform: translateX(28px);
}

.showcase-slide-left-enter-to,
.showcase-slide-left-leave-from,
.showcase-slide-right-enter-to,
.showcase-slide-right-leave-from {
  opacity: 1;
  transform: translateX(0);
}

@media (max-width: 960px) {
  .showcase-section {
    padding: 160px 0 140px;
  }

  .showcase-stage {
    width: min(94%, 1440px);
    grid-template-columns: auto minmax(0, 1fr);
    gap: 24px;
  }

  .next-page-button {
    grid-column: 3;
    grid-row: 2;
    justify-self: end;
    align-self: center;
  }

  .showcase-pagination {
    grid-row: 3;
    grid-column: 2;
    justify-self: center;
  }
}

@media (max-width: 480px) {
  .showcase-section {
    padding: 120px 0 120px;
    border-bottom-left-radius: 28px;
    border-bottom-right-radius: 28px;
  }

  .showcase-stage {
    width: min(92%, 1440px);
    grid-template-columns: auto minmax(0, 1fr);
    gap: 16px;
  }

  .last-page-button,
  .next-page-button,
  .showcase-pagination {
    width: 40px;
    height: 40px;
  }

  .last-page-button,
  .next-page-button {
    grid-row: 3;
    grid-column: 2;
  }

  .last-page-button {
    transform: translateX(30px);
  }

  .next-page-button {
    transform: translateX(-30px);
  }
}
</style>
