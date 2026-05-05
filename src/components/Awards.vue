<template>
  <section class="awards-section">
    <div
      ref="awardsStackRef"
      class="awards-stack"
    >
      <div
        class="awards-background"
        aria-hidden="true"
      ></div>

      <div
        ref="awardsRef"
        class="awards awards--motion"
        :style="{
          '--awards-shift': `${awardsShift}px`,
          '--awards-opacity': String(awardsOpacity),
        }"
      >
        <div class="awards-info">
          <div class="awards-section-title">
            <SectionTitle
              title="awards"
              :wave-color="PRIMARY_COLOR"
              :dot-color="SECONDARY_COLOR"
              :wave-loop-count="1"
              :wave-offset-x="8"
              :wave-offset-y="10"
              :dot-offset-x="7"
            />
          </div>

          <p class="awards-description">
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum
            bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel
            ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl,
            vitae sagittis orci. Donec id dignissim nunc.
          </p>
        </div>

        <div class="awards-gallery">
          <div
            v-for="award in awardItems"
            :key="award.id"
            class="award-item scroll-reveal"
            :style="{ '--reveal-delay': `${award.revealDelay}ms` }"
          >
            <img
              src="../assets/awards/award.png"
              alt="Award"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import SectionTitle from './SectionTitle.vue';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '@/styles/theme';

const awardItems = [
  { id: 'award-1', revealDelay: 0 },
  { id: 'award-2', revealDelay: 90 },
  { id: 'award-3', revealDelay: 180 },
  { id: 'award-4', revealDelay: 270 },
];

const awardsStackRef = ref<HTMLElement | null>(null);
const awardsRef = ref<HTMLElement | null>(null);
const awardsShift = ref(72);
const awardsOpacity = ref(0);

let rafId = 0;

const updateAwardsState = () => {
  const awardsStack = awardsStackRef.value;

  if (!awardsStack) {
    return;
  }

  if (window.scrollY <= 0) {
    awardsShift.value = 0;
    awardsOpacity.value = 1;
    return;
  }

  const { top } = awardsStack.getBoundingClientRect();
  const awards = awardsRef.value;
  const viewportHeight = window.innerHeight;
  const revealStart = viewportHeight * 0.58;
  const revealEnd = viewportHeight / 3;
  const maxShift = awards ? Math.max(24, window.innerWidth - awards.getBoundingClientRect().width) : 72;
  const minShift = 0;
  const clampedTop = Math.min(Math.max(top, revealEnd), revealStart);
  const progress = (clampedTop - revealEnd) / (revealStart - revealEnd);
  awardsShift.value = minShift + (maxShift - minShift) * progress;
  awardsOpacity.value = 1 - progress;
};

const onScroll = () => {
  if (rafId) {
    return;
  }

  rafId = window.requestAnimationFrame(() => {
    rafId = 0;
    updateAwardsState();
  });
};

onMounted(() => {
  updateAwardsState();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
  window.removeEventListener('resize', onScroll);

  if (rafId) {
    window.cancelAnimationFrame(rafId);
  }
});
</script>

<style scoped lang="scss">
.awards-section {
  background: #f2f2f2;
}

.awards-stack {
  position: relative;
  width: 100%;
  padding-top: 70px;
  overflow-x: clip;
}

.awards--motion {
  opacity: var(--awards-opacity, 1);
  transform: translateX(var(--awards-shift, 72px));
  transition:
    opacity 0.18s linear,
    transform 0.18s linear;
  will-change: opacity, transform;
}

.awards-background {
  position: absolute;
  inset: 50% 0 0;
  background: var(--color-primary);
  z-index: 0;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}

.awards {
  position: relative;
  z-index: 1;
  background: #fff;
  width: min(93%, 1440px);
  margin: 0 0 0 auto;
  padding: 65px 70px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 35px;
}

.awards-info {
  width: min(30%, 420px);
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.awards-description {
  margin-top: auto;
  color: #262626;
  font-size: 16px;
  font-weight: 200;
  line-height: 28px; /* 175% */
  letter-spacing: 1px;
}

.awards-gallery {
  width: 45%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-template-rows: repeat(2, max-content);
  justify-items: center;
  align-items: center;
  gap: 37px 19px;
  overflow: visible;
}

.award-item {
  position: relative;
  width: clamp(180px, 20vw, 283px);
  aspect-ratio: 283 / 108;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
}

@media (max-width: 960px) {
  .awards-stack {
    width: 100%;
    padding-top: 56px;
  }

  .awards {
    width: 100%;
    padding: 48px 32px;
    gap: 28px;
    border-top-right-radius: 50px;
    flex-direction: column;
    align-items: stretch;
  }

  .awards-info {
    width: 100%;
  }

  .awards-description {
    width: 80%;
    align-self: center;
  }

  .awards-section-title {
    width: auto;
  }

  .awards-gallery {
    width: 80%;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px 16px;
    align-self: center;
  }

  .award-item {
    width: clamp(200px, 24vw, 283px);
  }
}

@media (max-width: 480px) {
  .awards-stack {
    padding-top: 40px;
  }

  .awards {
    padding: 32px 20px;
    border-top-right-radius: 36px;
    border-top-left-radius: 36px;
    border-bottom-left-radius: 36px;
    border-bottom-right-radius: 36px;
    flex-direction: column;
    align-items: stretch;
  }

  .awards-info {
    gap: 18px;
  }

  .awards-description {
    font-size: 14px;
    line-height: 24px;
    width: 100%;
    align-self: stretch;
  }

  .awards-gallery {
    width: 100%;
    grid-template-columns: 1fr;
    gap: 16px;
    justify-items: center;
  }

  .award-item {
    width: min(100%, 283px);
  }
}
</style>
