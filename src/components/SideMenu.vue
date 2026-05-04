<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="side-menu-modal"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      @click.self="$emit('close')"
    >
      <aside
        ref="panelRef"
        class="wrapper"
        tabindex="-1"
      >
        <div class="menu-shell">
          <a
            class="digisalad-logo-white"
            href="/"
          >
            <img
              src="../assets/logo/white.png"
              alt="digisalad logo in white"
            />
          </a>

          <button
            ref="closeButtonRef"
            class="close-button"
            type="button"
            aria-label="Close menu"
            @click="$emit('close')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path
                d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"
              />
            </svg>
          </button>

          <div class="menu-grid">
            <a
              class="menu-card-link"
              href="#about"
              @click="$emit('close')"
            >
              <div class="menu-card menu-card--about">
              <div class="about-wrapper">
                <img
                  class="menu-icon menu-icon--lettuce"
                  src="../assets/sidemenu/food/lettuce.png"
                  alt=""
                />

                <div>
                  <div class="menu-card__eyebrow">EMPOWERING BRANDS</div>
                  <div class="menu-card__title">ABOUT US</div>
                </div>
              </div>
            </div>
            </a>

            <a
              class="menu-card-link"
              href="#careers"
              @click="$emit('close')"
            >
              <div class="menu-card menu-card--careers">
              <img
                class="menu-icon menu-icon--cheese"
                src="../assets/sidemenu/food/cheese.png"
                alt=""
              />
              <div class="menu-card__eyebrow">BE COOL WITH US</div>
              <div class="menu-card__title">CAREERS</div>
            </div>
            </a>

            <a
              class="menu-card-link"
              href="#services"
              @click="$emit('close')"
            >
              <div class="menu-card menu-card--services">
              <img
                class="menu-icon menu-icon--carrot"
                src="../assets/sidemenu/food/carrot.png"
                alt=""
              />
              <div class="menu-card__eyebrow">AREAS OF EXPERTISE</div>
              <div class="menu-card__title">SERVICES</div>
            </div>
            </a>

            <a
              class="menu-card-link"
              href="#showcase"
              @click="$emit('close')"
            >
              <div class="menu-card menu-card--works">
              <div class="works-wrapper">
                <img
                  class="menu-icon menu-icon--tomato"
                  src="../assets/sidemenu/food/tomato.png"
                  alt=""
                />
                <div>
                  <div class="menu-card__eyebrow">CASE STUDIES</div>
                  <div class="menu-card__title">WORKS</div>
                </div>
              </div>
            </div>
            </a>

            <a
              class="menu-card-link"
              href="#insights"
              @click="$emit('close')"
            >
              <div class="menu-card menu-card--insights">
              <img
                class="menu-icon menu-icon--pickle"
                src="../assets/sidemenu/food/pickle.png"
                alt=""
              />
              <div class="menu-card__eyebrow">OUR STRATEGIES</div>
              <div class="menu-card__title">INSIGHTS</div>
            </div>
            </a>

            <a
              class="menu-card-link"
              href="#contact"
              @click="$emit('close')"
            >
              <div class="menu-card menu-card--contact">
              <div class="menu-card__eyebrow">START YOUR JOURNEY WITH US</div>
              <div class="menu-card__title">CONTACT</div>
            </div>
            </a>
          </div>
        </div>
      </aside>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue';

const props = defineProps<{
  open: boolean;
}>();

const emit = defineEmits<{
  (event: 'close'): void;
}>();

const panelRef = ref<HTMLElement | null>(null);
const closeButtonRef = ref<HTMLButtonElement | null>(null);
let previousActiveElement: HTMLElement | null = null;
let previousBodyOverflow = '';

const getFocusableElements = () => {
  const panel = panelRef.value;

  if (!panel) {
    return [];
  }

  return Array.from(
    panel.querySelectorAll<HTMLElement>(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  );
};

const focusFirstElement = () => {
  const [firstFocusable] = getFocusableElements();
  (firstFocusable ?? closeButtonRef.value ?? panelRef.value)?.focus();
};

const lockBodyScroll = () => {
  previousBodyOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
};

const unlockBodyScroll = () => {
  document.body.style.overflow = previousBodyOverflow;
};

const handleKeydown = (event: KeyboardEvent) => {
  if (!props.open) {
    return;
  }

  if (event.key === 'Escape') {
    emit('close');
    return;
  }

  if (event.key !== 'Tab') {
    return;
  }

  const focusableElements = getFocusableElements();

  if (focusableElements.length === 0) {
    event.preventDefault();
    return;
  }

  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];
  const activeElement = document.activeElement as HTMLElement | null;

  if (event.shiftKey && activeElement === firstFocusable) {
    event.preventDefault();
    lastFocusable!.focus();
    return;
  }

  if (!event.shiftKey && activeElement === lastFocusable) {
    event.preventDefault();
    firstFocusable!.focus();
  }
};

watch(
  () => props.open,
  async (isOpen) => {
    if (isOpen) {
      previousActiveElement = document.activeElement as HTMLElement | null;
      lockBodyScroll();
      document.addEventListener('keydown', handleKeydown);
      await nextTick();
      focusFirstElement();
      return;
    }

    unlockBodyScroll();
    document.removeEventListener('keydown', handleKeydown);
    previousActiveElement?.focus();
    previousActiveElement = null;
  },
  { immediate: true },
);

onBeforeUnmount(() => {
  unlockBodyScroll();
  document.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped lang="scss">
.side-menu-modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  overflow: hidden;
}

.wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  background:
    linear-gradient(180deg, rgba(30, 46, 84, 0.48), rgba(38, 198, 208, 0.72)),
    linear-gradient(180deg, #585880 3.61%, #26c6d0 95.7%);
  overflow: hidden;
  color: #fff;
}

.wrapper::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 16% 18%, rgba(255, 255, 255, 0.16), transparent 26%),
    radial-gradient(circle at 84% 22%, rgba(255, 255, 255, 0.12), transparent 28%),
    radial-gradient(circle at 52% 76%, rgba(255, 255, 255, 0.08), transparent 26%);
  pointer-events: none;
}

.menu-shell {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 28px 30px 28px 30px;
  z-index: 1;
}

.close-button {
  position: absolute;
  top: 30px;
  right: 36px;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
}

.close-button svg {
  display: block;
  color: #fff;
  fill: currentColor;
  stroke: currentColor;
}

.close-button svg * {
  fill: currentColor;
  stroke: currentColor;
}

.digisalad-logo-white {
  position: relative;
  display: inline-block;
  width: 140px;
  height: 62px;
  margin-left: 14px;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
}

.menu-grid {
  width: 100%;
  height: calc(100% - 86px);
  display: grid;
  grid-template-columns: 1.05fr 0.78fr 1fr;
  grid-template-rows: auto auto;
  row-gap: 30px;
  column-gap: 40px;
  padding-top: 12px;
  align-items: start;
}

.menu-card-link {
  display: block;
  color: inherit;
  text-decoration: none;
}

.menu-card {
  position: relative;
  height: var(--card-height, 220px);
  align-self: start;
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 28px 34px;
  color: #fff;
  text-transform: uppercase;
}

.menu-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.72;
}

.menu-card--about::before {
  background-image: url('../assets/sidemenu/about-bg.png');
}

.menu-card--careers::before {
  background-image: url('../assets/sidemenu/career-bg.png');
}

.menu-card--services::before {
  background-image: url('../assets/sidemenu/services-bg.png');
}

.menu-card--works::before {
  background-image: url('../assets/sidemenu/works-bg.png');
}

.menu-card--insights::before {
  background-image: url('../assets/sidemenu/insights-bg.png');
}

.menu-card--contact::before {
  background-image: none;
  background-color: rgba(255, 255, 255, 0.94);
  opacity: 1;
}

.menu-card__eyebrow,
.menu-card__title {
  position: relative;
  z-index: 1;
}

.menu-card__title {
  position: relative;
  width: fit-content;
  align-self: flex-start;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    left: calc(100% + 10px);
    top: 50%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ee6c8a;
  }
}

.menu-card--works .menu-card__title::after {
  background: #26c6d0;
}

.menu-card__eyebrow {
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1.8px;
}

.menu-card__title {
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 3.636px;
}

.menu-icon {
  flex: 0 0 auto;
  object-fit: contain;
  display: block;
}

.menu-icon--lettuce {
  width: 40px;
  height: 60px;
}

.menu-icon--cheese {
  width: 58px;
  height: 30px;
}

.menu-icon--carrot {
  width: 30px;
  height: 58px;
}

.menu-icon--tomato {
  width: 56px;
  height: 56px;
}

.menu-icon--pickle {
  width: 18px;
  height: 60px;
}

.menu-card--about {
  --card-height: 210px;
  grid-column: 1;
  grid-row: 1;
  background: rgba(44, 217, 221, 0.82);
  transform: translateY(100px);
}

.menu-card--careers {
  --card-height: 480px;
  grid-column: 2;
  grid-row: 1;
  background: rgba(248, 176, 69, 0.9);
}

.menu-card--services {
  --card-height: 320px;
  grid-column: 3;
  grid-row: 1;
  background: rgba(102, 96, 165, 0.9);
  transform: translateY(100px);
}

.menu-card--works {
  --card-height: 320px;
  grid-column: 1;
  grid-row: 2;
  background: rgba(236, 123, 164, 0.82);
  transform: translateY(-160px);
}

.menu-card--insights {
  --card-height: 282px;
  grid-column: 2;
  grid-row: 2;
  background: rgba(42, 212, 167, 0.84);
  transform: translateY(5px);
}

.menu-card--contact {
  --card-height: 210px;
  grid-column: 3;
  grid-row: 2;
  background: rgba(255, 255, 255, 0.94);
  color: #3e526d;
  transform: translateY(-50px);
}

.menu-card--contact .menu-card__eyebrow {
  color: #3e526d;
}

.menu-card--contact .menu-card__title {
  color: #26c6d0;
}

.about-wrapper {
  display: flex;
  gap: 27px;
}

.works-wrapper {
  display: flex;
  gap: 17px;
}
</style>
