<template>
  <article class="service-card scroll-reveal">
    <div
      v-if="imgSrc"
      class="service-card__image-wrapper"
    >
      <img
        :src="imgSrc"
        :alt="imgAlt"
      />
    </div>

    <h3 class="service-card__title">
      {{ title }}
    </h3>

    <p class="service-card__content">
      {{ content }}
    </p>

    <button
      v-if="ctaLabel"
      class="service-card__cta"
      type="button"
    >
      {{ ctaLabel }}
    </button>
  </article>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    ctaLabel?: string;
    content: string;
    imgAlt?: string;
    imgSrc?: string;
    revealDelay?: number;
    title: string;
  }>(),
  {
    ctaLabel: '',
    imgAlt: '',
    imgSrc: '',
    revealDelay: 0,
  },
);
</script>

<style scoped lang="scss">
.service-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  gap: 15px;
  justify-self: center;
  color: #fff;
}

.service-card__content {
  text-align: center;
  font-size: 16px;
  font-weight: 200;
  padding: 5px;
  width: clamp(0px, 100%, 345px);
  letter-spacing: 1px;
  line-height: 28px;
  display: block;
  min-height: 0;
  overflow: visible;
}

.service-card__title {
  color: #fff;
  text-align: center;
  width: clamp(0px, 100%, 270px);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  line-height: 1;
  height: 40px;
  overflow: hidden;
  white-space: pre-line;
}

.service-card__image-wrapper {
  position: relative;
  width: 108px;
  height: 108px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    transform 0.32s ease,
    box-shadow 0.32s ease;

  img {
    width: 50%;
    height: 50%;
    object-fit: contain;
  }
}

@supports selector(.service-card:has(.service-card__cta:hover)) {
  .service-card:has(.service-card__cta:hover) .service-card__image-wrapper,
  .service-card:has(.service-card__cta:focus-visible) .service-card__image-wrapper {
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.14);
  }
}

@supports not selector(.service-card:has(.service-card__cta:hover)) {
  .service-card:hover .service-card__image-wrapper,
  .service-card:focus-within .service-card__image-wrapper {
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.14);
  }
}

.service-card__cta {
  color: #fff;
  border-radius: 30px;
  border: 2px solid #fff;
  background-color: transparent;
  appearance: none;
  cursor: pointer;
  text-transform: uppercase;
  padding: 20px 35px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2.222px;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  transition:
    transform 0.32s ease,
    box-shadow 0.32s ease,
    background-color 0.32s ease,
    color 0.32s ease;
}

.service-card__cta:hover,
.service-card__cta:focus-visible {
  transform: translateY(-2px);
  background-color: #fff;
  color: #26c6d0;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.16);
}

@media (max-width: 960px) {
  .service-card__content {
    width: 100%;
    max-width: 345px;
    min-height: 0;
    overflow: visible;
    display: block;
    -webkit-line-clamp: unset;
    line-clamp: unset;
    -webkit-box-orient: initial;
  }

  .service-card__title {
    width: 100%;
    max-width: 270px;
  }
}

@media (max-width: 480px) {
  .service-card {
    gap: 12px;
  }

  .service-card__content {
    font-size: 14px;
    line-height: 24px;
  }

  .service-card__title {
    font-size: 18px;
    height: auto;
  }

  .service-card__image-wrapper {
    width: 88px;
    height: 88px;
  }

  .service-card__cta {
    padding: 16px 24px;
  }
}
</style>
