<template>
  <nav :class="{ 'nav--scrolled': isScrolled }">
    <a
      class="nav-logo"
      :class="{ 'nav-logo--hidden': !isScrolled }"
      href="/"
      :tabindex="isScrolled ? 0 : -1"
      :aria-hidden="!isScrolled"
    >
      <div class="nav-logo__image">
        <img
          src="../assets/logo/blue.png"
          alt="digisalad logo in blue"
        />
      </div>
    </a>

    <div class="nav-actions">
      <a
        class="nav-cta"
        href="/"
      >
        START YOUR PROJECT
      </a>

      <button
        class="menu-button"
        type="button"
        aria-label="Open menu"
        aria-haspopup="dialog"
        :aria-expanded="showMenu"
        @click="$emit('open-menu')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="22"
          viewBox="0 0 30 22"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.36036 2.58621C0.24024 2.42529 0.15015 2.25862 0.0900901 2.08621C0.0300297 1.91379 0 1.71264 0 1.48276C0 1.27586 0.0300297 1.08046 0.0900901 0.896552C0.15015 0.712643 0.24024 0.551725 0.36036 0.413793C0.480481 0.275861 0.62062 0.172414 0.780781 0.103448C0.940942 0.0344824 1.11111 0 1.29129 0H28.7087C28.8889 0 29.0591 0.0344824 29.2192 0.103448C29.3794 0.172414 29.5195 0.275861 29.6396 0.413793C29.7598 0.551725 29.8498 0.712643 29.9099 0.896552C29.97 1.08046 30 1.27586 30 1.48276C30 1.71264 29.97 1.91379 29.9099 2.08621C29.8498 2.25862 29.7598 2.42529 29.6396 2.58621C29.5195 2.72414 29.3794 2.82759 29.2192 2.89655C29.0591 2.96552 28.8889 3 28.7087 3H1.29129C1.11111 3 0.940942 2.96552 0.780781 2.89655C0.62062 2.82759 0.480481 2.72414 0.36036 2.58621ZM29.6396 10.4186C29.7598 10.5581 29.8498 10.7209 29.9099 10.907C29.97 11.093 30 11.2907 30 11.5C30 11.7093 29.97 11.907 29.9099 12.093C29.8498 12.2791 29.7598 12.4419 29.6396 12.5814C29.5195 12.7209 29.3794 12.8256 29.2192 12.8953C29.0591 12.9651 28.8889 13 28.7087 13H1.29129C1.11111 13 0.940942 12.9651 0.780781 12.8953C0.62062 12.8256 0.480481 12.7209 0.36036 12.5814C0.24024 12.4419 0.15015 12.2791 0.0900901 12.093C0.0300297 11.907 0 11.7093 0 11.5C0 11.2907 0.0300297 11.093 0.0900901 10.907C0.15015 10.7209 0.24024 10.5581 0.36036 10.4186C0.480481 10.2791 0.62062 10.1744 0.780781 10.1047C0.940942 10.0349 1.11111 10 1.29129 10H28.7087C28.8889 10 29.0591 10.0349 29.2192 10.1047C29.3794 10.1744 29.5195 10.2791 29.6396 10.4186ZM29.6326 19.4138C29.7551 19.5517 29.8469 19.7126 29.9081 19.8966C29.9694 20.0805 30 20.2759 30 20.4828C30 20.7126 29.9694 20.9138 29.9081 21.0862C29.8469 21.2586 29.7551 21.4253 29.6326 21.5862C29.5101 21.7241 29.3672 21.8276 29.2039 21.8966C29.0406 21.9655 28.8671 22 28.6834 22H5.31661C5.1329 22 4.95939 21.9655 4.79609 21.8966C4.63279 21.8276 4.4899 21.7241 4.36743 21.5862C4.24495 21.4253 4.15309 21.2586 4.09186 21.0862C4.03062 20.9138 4 20.7126 4 20.4828C4 20.2759 4.03062 20.0805 4.09186 19.8966C4.15309 19.7126 4.24495 19.5517 4.36743 19.4138C4.4899 19.2759 4.63279 19.1724 4.79609 19.1034C4.95939 19.0345 5.1329 19 5.31661 19H28.6834C28.8671 19 29.0406 19.0345 29.2039 19.1034C29.3672 19.1724 29.5101 19.2759 29.6326 19.4138Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

defineProps<{
  showMenu: boolean;
}>();

defineEmits<{
  (event: 'open-menu'): void;
}>();

const isScrolled = ref(false);
const threshold = 100;

const updateScrollState = () => {
  isScrolled.value = window.scrollY > threshold;
};

onMounted(() => {
  updateScrollState();
  window.addEventListener('scroll', updateScrollState, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScrollState);
});
</script>

<style scoped lang="scss">
@use '../styles/mixins' as *;

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  z-index: var(--z-nav);
  transition: background 0.25s ease;
}

.nav--scrolled {
  background: rgba(255, 255, 255, 0.9);
}

.nav-logo {
  display: inline-flex;
  border-radius: var(--radius-small);
  opacity: 1;
  transition:
    opacity var(--duration-interactive) ease,
    transform var(--duration-interactive) ease,
    filter var(--duration-interactive) ease;
  margin-left: 40px;
}

.nav-logo:hover,
.nav-logo:focus-visible {
  transform: translateY(-2px);
  filter: brightness(1.05);
}

.nav-logo__image {
  position: relative;
  width: 120px;
  aspect-ratio: 120 / 54;
}

.nav-logo__image img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.nav-logo--hidden {
  opacity: 0;
  pointer-events: none;
}

.menu-button {
  appearance: none;
  padding: 0;
  border: 0;
  background: transparent;
  color: #fff;
  cursor: pointer;
  @include transition-lift-filter;
}

.nav--scrolled .menu-button {
  color: #585880;
}

.menu-button:hover,
.menu-button:focus-visible {
  transform: translateY(-2px);
  filter: brightness(1.1);
}

.menu-button svg {
  display: block;
}

.nav-actions {
  display: flex;
  gap: 44px;
}

.nav-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: clamp(200px, 14vw, 200px);
  height: 41.026px;
  border: 0;
  border-radius: var(--radius-control);
  background: linear-gradient(90deg, #4ee5ea 3.94%, #26d0a8 94.73%);
  color: #fff;
  cursor: pointer;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1.143px;
  text-decoration: none;
  box-shadow: 0 0 0 0 rgba(255, 188, 88, 0);
  @include transition-surface;

  @include hover-surface(
    $transform: translateY(-2px),
    $background: #fff,
    $color: var(--color-primary),
    $border-color: var(--color-primary)
  );

  &:hover,
  &:focus-visible {
    box-shadow:
      inset 0 0 0 2px var(--color-primary),
      var(--shadow-nav-hover);
  }
}

@media (max-width: 960px) {
  nav {
    height: 84px;
    padding: 0 24px;
  }

  .nav-logo {
    margin-left: 0;
  }

  .nav-actions {
    gap: 40px;
  }

  .nav-cta {
    width: 200px;
  }
}

@media (max-width: 480px) {
  nav {
    height: 72px;
    padding: 0 16px;
  }

  .nav-actions {
    gap: 20px;
  }

  .nav-logo__image {
    width: 85px;
  }

  .nav-cta {
    font-size: 12px;
  }

  .menu-button svg {
    width: 26px;
    height: 18px;
  }
}
</style>
