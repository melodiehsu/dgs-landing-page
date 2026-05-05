<template>
  <section
    id="insights"
    class="insights-section"
  >
    <div
      ref="insightsStackRef"
      class="insights-stack"
    >
      <div
        ref="insightsRef"
        class="insights insights--motion"
        :style="{
          '--insights-shift': `${insightsShift}px`,
          '--insights-opacity': String(insightsOpacity),
        }"
      >
        <div class="insights-profile">
          <div class="insights-avatar">
            <img
              src="../assets/insights/tony-avatar.png"
              alt=""
            />
          </div>
          <div class="insights-name">Tony Ng</div>
          <div class="insights-role">Founder & Creative Director</div>
        </div>

        <div class="insights-quote">
          <div class="insights-quote-mark">
            <img
              src="../assets/insights/left-quote.png"
              alt=""
            />
          </div>

          <p>
            A great digital work isn’t about designing beautiful pages purely. It is about context -
            how do we deliver the right experience to the
            <strong> right person at the right time</strong>. The most important thing is that your
            work can engage customers at anytime, anywhere and let users experience an entire
            amazing digital journey.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const insightsStackRef = ref<HTMLElement | null>(null);
const insightsRef = ref<HTMLElement | null>(null);
const insightsShift = ref(72);
const insightsOpacity = ref(0);

let rafId = 0;

const updateInsightsState = () => {
  const insightsStack = insightsStackRef.value;

  if (!insightsStack) {
    return;
  }

  if (window.scrollY <= 0) {
    insightsShift.value = 0;
    insightsOpacity.value = 1;
    return;
  }

  const { top } = insightsStack.getBoundingClientRect();
  const insights = insightsRef.value;
  const viewportHeight = window.innerHeight;
  const revealStart = viewportHeight * 0.58;
  const revealEnd = viewportHeight / 3;
  const maxShift = insights
    ? Math.max(24, window.innerWidth - insights.getBoundingClientRect().width)
    : 72;
  const clampedTop = Math.min(Math.max(top, revealEnd), revealStart);
  const progress = (clampedTop - revealEnd) / (revealStart - revealEnd);

  insightsShift.value = -(maxShift * progress);
  insightsOpacity.value = 1 - progress;
};

const onScroll = () => {
  if (rafId) {
    return;
  }

  rafId = window.requestAnimationFrame(() => {
    rafId = 0;
    updateInsightsState();
  });
};

onMounted(() => {
  updateInsightsState();
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
.insights-section {
  width: 100%;
  background: #fff;
  scroll-margin-top: 120px;
}

.insights-stack {
  position: relative;
  width: 100%;
  overflow-x: clip;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: calc(50% + 1px);
    top: -1px;
    right: 0;
    background: var(--color-primary);
    z-index: 0;
    border-bottom-right-radius: var(--radius-section);
    border-bottom-left-radius: var(--radius-section);
  }
}

.insights--motion {
  opacity: var(--insights-opacity, 1);
  transform: translateX(var(--insights-shift, 72px));
  transition:
    opacity var(--duration-follow) linear,
    transform var(--duration-follow) linear;
  will-change: opacity, transform;
}

.insights {
  position: relative;
  width: min(92%, 1440px);
  margin: 0 auto 0 0;
  overflow: hidden;
  background: var(--color-primary);
  border-top-right-radius: var(--radius-section);
  border-bottom-right-radius: var(--radius-section);
  border-bottom-left-radius: var(--radius-section);
  display: grid;
  grid-template-columns: 300px minmax(0, 1fr);
  align-items: center;
  gap: 72px;
  padding: 100px 72px;
  box-sizing: border-box;
  color: #fff;
  z-index: 1;
}

.insights::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('../assets/insights/insights-bg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter: blur(6px);
  transform: scale(1.06);
  z-index: 0;
}

.insights > * {
  position: relative;
  z-index: 1;
}

.insights-name {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 40px;
}

.insights-role {
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  letter-spacing: 2px;
  white-space: nowrap;
}

.insights-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  width: clamp(240px, 20vw, 300px);
}

.insights-quote {
  justify-self: start;
  width: 100%;
  max-width: 734px;
  transform: translateY(-10px);
}

.insights-quote-mark {
  position: relative;
  width: clamp(64px, 6vw, 90px);
  aspect-ratio: 1 / 1;
  margin-bottom: 13px;
}

.insights-quote-mark img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
}

.insights-avatar {
  position: relative;
  width: clamp(140px, 14vw, 204px);
  height: clamp(140px, 14vw, 204px);
  border-radius: 50%;
  overflow: hidden;
  margin: 10px 0;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
}

.insights-quote {
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 22px;
    font-style: normal;
    font-weight: 200;
    line-height: 48px;
    letter-spacing: 2px;
  }

  strong {
    color: #ffbc58;
  }
}

@media (max-width: 960px) {
  .insights-stack::after {
    height: 42%;
  }

  .insights {
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    padding: 72px 40px;
    border-top-left-radius: var(--radius-section);
  }

  .insights-profile {
    width: min(100%, 300px);
  }

  .insights-role {
    font-size: 14px;
  }

  .insights-avatar {
    width: 180px;
    height: 180px;
  }

  .insights-quote p {
    font-size: 18px;
    line-height: 34px;
  }
}

@media (max-width: 480px) {
  .insights-stack::after {
    height: 34%;
    border-bottom-right-radius: var(--radius-card-sm);
  }

  .insights {
    gap: 28px;
    padding: 48px 20px;
    border-top-left-radius: var(--radius-card-sm);
    border-top-right-radius: var(--radius-card-sm);
    border-bottom-right-radius: var(--radius-card-sm);
    border-bottom-left-radius: var(--radius-card-sm);
  }

  .insights-profile {
    width: 100%;
  }

  .insights-name {
    font-size: 18px;
    margin-top: 24px;
  }

  .insights-avatar {
    width: 140px;
    height: 140px;
  }

  .insights-quote {
    transform: none;
  }

  .insights-quote p {
    font-size: 15px;
    line-height: 28px;
    letter-spacing: 1px;
  }
}
</style>
