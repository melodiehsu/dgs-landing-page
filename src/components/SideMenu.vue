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
            <div class="digisalad-logo-white__image">
              <img
                src="../assets/logo/white.png"
                alt="Digisalad"
              />
            </div>
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

          <nav aria-label="Site sections">
            <ul class="menu-grid">
              <li>
                <a
                  class="menu-card-link"
                  href="#about"
                  @click="$emit('close')"
                >
                  <div class="menu-card menu-card--about">
                    <div class="row-card-content">
                      <div class="menu-icon-wrap menu-icon-wrap--lettuce">
                        <img
                          class="menu-icon menu-icon--lettuce"
                          src="../assets/side-menu/food/lettuce.png"
                          alt=""
                        />
                      </div>

                      <div>
                        <div class="menu-card__eyebrow">EMPOWERING BRANDS</div>
                        <div class="menu-card__title">ABOUT US</div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>

              <li>
                <a
                  class="menu-card-link"
                  href="#careers"
                  @click="$emit('close')"
                >
                  <div class="menu-card menu-card--careers">
                    <div class="column-card-content">
                      <div class="menu-icon-wrap menu-icon-wrap--cheese">
                        <img
                          class="menu-icon menu-icon--cheese"
                          src="../assets/side-menu/food/cheese.png"
                          alt=""
                        />
                      </div>

                      <div>
                        <div class="menu-card__eyebrow">BE COOL WITH US</div>
                        <div class="menu-card__title">CAREERS</div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>

              <li>
                <a
                  class="menu-card-link"
                  href="#services"
                  @click="$emit('close')"
                >
                  <div class="menu-card menu-card--services">
                    <div class="column-card-content">
                      <div class="menu-icon-wrap menu-icon-wrap--carrot">
                        <img
                          class="menu-icon menu-icon--carrot"
                          src="../assets/side-menu/food/carrot.png"
                          alt=""
                        />
                      </div>

                      <div>
                        <div class="menu-card__eyebrow">AREAS OF EXPERTISE</div>
                        <div class="menu-card__title">SERVICES</div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>

              <li>
                <a
                  class="menu-card-link"
                  href="#showcase"
                  @click="$emit('close')"
                >
                  <div class="menu-card menu-card--works">
                    <div class="row-card-content">
                      <div class="menu-icon-wrap menu-icon-wrap--tomato">
                        <img
                          class="menu-icon menu-icon--tomato"
                          src="../assets/side-menu/food/tomato.png"
                          alt=""
                        />
                      </div>

                      <div>
                        <div class="menu-card__eyebrow">CASE STUDIES</div>
                        <div class="menu-card__title">WORKS</div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>

              <li>
                <a
                  class="menu-card-link"
                  href="#insights"
                  @click="$emit('close')"
                >
                  <div class="menu-card menu-card--insights">
                    <div class="column-card-content">
                      <div class="menu-icon-wrap menu-icon-wrap--pickle">
                        <img
                          class="menu-icon menu-icon--pickle"
                          src="../assets/side-menu/food/pickle.png"
                          alt=""
                        />
                      </div>

                      <div>
                        <div class="menu-card__eyebrow">OUR STRATEGIES</div>
                        <div class="menu-card__title">INSIGHTS</div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>

              <li>
                <a
                  class="menu-card-link"
                  href="#contact"
                  @click="$emit('close')"
                >
                  <div class="menu-card menu-card--contact">
                    <div class="column-card-content">
                      <div class="contact-card">
                        <div class="menu-card__eyebrow">START YOUR JOURNEY WITH US</div>
                        <div class="menu-card__title">CONTACT</div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </nav>
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
  max-width: 1440px;
  margin: 0 auto;
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
  margin-left: 14px;
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

.menu-grid {
  width: clamp(960px, 92vw, 1440px);
  margin: 0 auto;
  padding: 0;
  list-style: none;
  height: clamp(540px, calc(100svh - 86px), 854px);
  display: grid;
  grid-template-columns: 1.05fr 0.78fr 1fr;
  grid-template-rows: auto auto;
  row-gap: 3vh;
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
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
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
  background-image: url('../assets/side-menu/about-bg.png');
}

.menu-card--careers::before {
  background-image: url('../assets/side-menu/career-bg.png');
}

.menu-card--services::before {
  background-image: url('../assets/side-menu/services-bg.png');
}

.menu-card--works::before {
  background-image: url('../assets/side-menu/works-bg.png');
}

.menu-card--insights::before {
  background-image: url('../assets/side-menu/insights-bg.png');
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
    left: calc(100% + 1vw);
    bottom: 0;
    width: clamp(6px, 0.72vw, 10px);
    height: clamp(6px, 0.72vw, 10px);
    border-radius: 50%;
    background: #ee6c8a;
    transform: translateY(-100%);
  }
}

.menu-card--works .menu-card__title::after {
  background: #26c6d0;
}

.menu-card__eyebrow {
  font-size: clamp(13px, 1.11vw, 16px);
  font-weight: 200;
  letter-spacing: 1.8px;
}

.menu-card__title {
  font-size: clamp(20px, 2.22vw, 32px);
  font-weight: 700;
  letter-spacing: 3.636px;
}

.menu-icon {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.menu-icon-wrap {
  position: relative;
  flex: 0 0 auto;
}

.menu-icon--lettuce {
  width: 40px;
  height: 60px;
}

.menu-icon-wrap--lettuce {
  width: 40px;
  height: 60px;
  margin-left: 15px;
}

.menu-icon-wrap--cheese {
  width: 91.95px;
  height: 46.742px;
}

.menu-icon-wrap--carrot {
  width: 36px;
  height: 67px;
}

.menu-icon--tomato {
  width: 56px;
  height: 56px;
}

.menu-icon-wrap--tomato {
  width: 56px;
  height: 56px;
}

.menu-icon-wrap--pickle {
  width: 24.889px;
  height: 79px;
}

.menu-card--about {
  --card-height: clamp(180px, 24vh, 210px);
  grid-column: 1;
  grid-row: 1;
  background: rgba(44, 217, 221, 0.82);
  transform: translateY(10vh);
  justify-content: center;
  align-items: start;
}

.menu-card--careers {
  --card-height: clamp(320px, 52vh, 480px);
  grid-column: 2;
  grid-row: 1;
  background: rgba(248, 176, 69, 0.9);
}

.menu-card--services {
  --card-height: clamp(260px, 34vh, 320px);
  grid-column: 3;
  grid-row: 1;
  background: rgba(102, 96, 165, 0.9);
  transform: translateY(10vh);
}

.menu-card--works {
  --card-height: clamp(260px, 34vh, 320px);
  grid-column: 1;
  grid-row: 2;
  background: rgba(236, 123, 164, 0.82);
  transform: translateY(-18vh);
}

.menu-card--insights {
  --card-height: clamp(220px, 30vh, 282px);
  grid-column: 2;
  grid-row: 2;
  background: rgba(42, 212, 167, 0.84);
  transform: translateY(clamp(0px, 1vh, 5px));
}

.menu-card--contact {
  --card-height: clamp(180px, 24vh, 210px);
  grid-column: 3;
  grid-row: 2;
  background: rgba(255, 255, 255, 0.94);
  color: #3e526d;
  transform: translateY(-7vh);
  justify-content: center;
  align-items: center;
}

.menu-card--contact .menu-card__eyebrow {
  color: #3e526d;
}

.menu-card--contact .menu-card__title {
  color: #26c6d0;
}

.row-card-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2vw;
}

.column-card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
}

@media (max-width: 960px) {
  .menu-shell {
    padding: 24px 24px 24px;
  }

  .menu-grid {
    width: 100%;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: auto;
    gap: 18px;
    height: auto;
    padding-top: 40px;
  }

  .menu-card {
    height: clamp(160px, 24vh, 220px);
    min-height: clamp(160px, 24vh, 220px);
    padding: clamp(16px, 2.2vh, 22px) 24px;
    justify-content: center;
    align-items: center;
  }

  .contact-card {
    text-align: center;
  }

  .menu-card--about,
  .menu-card--careers,
  .menu-card--services,
  .menu-card--works,
  .menu-card--insights,
  .menu-card--contact {
    grid-column: auto;
    grid-row: auto;
    transform: none;
  }

  .menu-card__title {
    font-size: clamp(14px, 2vw, 24px);
  }

  .column-card-content {
    flex-direction: row;
    gap: 2vw;
    align-items: center;
    justify-content: center;
  }

  .menu-card--contact .menu-card__title {
    align-self: center;
  }

  .menu-icon-wrap--cheese {
    width: clamp(68px, 7vw, 78px);
    height: clamp(34px, 3.5vw, 40px);
  }
}

@media (max-width: 480px) {
  .wrapper {
    overflow-y: auto;
  }

  .menu-shell {
    padding: 20px 16px 28px;
  }

  .close-button {
    top: 18px;
    right: 16px;
    width: 36px;
    height: 36px;
  }

  .digisalad-logo-white {
    margin-left: 0;
  }

  .digisalad-logo-white__image {
    width: 112px;
  }

  .menu-grid {
    grid-template-columns: 1fr;
    gap: 14px;
    padding-top: 16px;
  }

  .menu-card {
    height: 105px;
    min-height: 105px;
    padding: 14px 16px;
    border-radius: 24px;
    justify-content: center;
  }

  .menu-card__eyebrow {
    font-size: clamp(12px, 2.6vw, 13px);
    letter-spacing: 1px;
  }

  .menu-card__title {
    font-size: clamp(16px, 4.2vw, 20px);
    letter-spacing: 2px;
  }

  .row-card-content,
  .column-card-content {
    gap: 14px;
    justify-content: center;
  }

  .menu-icon--lettuce,
  .menu-icon--carrot,
  .menu-icon--tomato,
  .menu-icon--pickle,
  .menu-icon--cheese {
    transform: scale(0.82);
    transform-origin: center;
  }
}
</style>
