<template>
  <div class="showcase">
    <div class="left">
      <div class="image-wrapper">
        <img
          :src="imageSrc"
          :alt="imageAlt"
        />
      </div>

      <button
        class="showcase-cta"
        type="button"
      >
        <span>view project</span>
        <span
          class="decoration-line"
          aria-hidden="true"
        ></span>
      </button>
    </div>

    <div class="right">
      <div class="title">{{ title }}</div>

      <div class="showcase-name">{{ showcaseName }}</div>

      <div class="showcase-description">
        {{ showcaseDescription }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imageSrc: string;
  imageAlt: string;
  title: string;
  showcaseName: string;
  showcaseDescription: string;
}>();
</script>

<style scoped lang="scss">
.showcase {
  position: relative;
  width: min(72%, 1440px);
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 62px;
}

.image-wrapper {
  position: relative;
  width: 554px;
  height: 554px;
  border-radius: 50px;
  overflow: hidden;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
}

.showcase-cta {
  position: absolute;
  right: -68px;
  bottom: -75px;
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
  padding: 60px 33px;
  text-transform: uppercase;
}

.decoration-line {
  width: 70px;
  height: 2px;
  background: #fff;
  margin-left: 26px;
}

.title {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 2.222px;
}

.showcase-name {
  position: relative;
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 3px;
  white-space: nowrap;
  margin: 20px 0;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: 55%;
    right: -27px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ee6c8a;
    z-index: -1;
  }

  &::after {
    content: '';
    width: 100%;
    position: absolute;
    left: -5px;
    bottom: 10px;
    height: 6px;
    background: #26c6d0;
    z-index: -1;
  }
}

.left {
  position: relative;
}

.showcase-description {
  font-size: 16px;
  font-weight: 200;
  line-height: 24px;
  letter-spacing: 1px;
  display: -webkit-box;
  line-clamp: 12;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 12;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 960px) {
  .showcase {
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    padding: 0 32px;
  }

  .left {
    width: 100%;
    max-width: 554px;
  }

  .image-wrapper {
    width: 100%;
    aspect-ratio: 1 / 1;
    height: auto;
  }

  .showcase-cta {
    right: -20px;
    bottom: -28px;
    padding: 28px 20px;
  }

  .right {
    width: 100%;
    max-width: 554px;
  }
}

@media (max-width: 480px) {
  .showcase {
    gap: 24px;
    padding: 0 20px;
  }

  .showcase-cta {
    right: 12px;
    bottom: 12px;
    padding: 18px 16px;
    font-size: 13px;
  }

  .decoration-line {
    width: 42px;
    margin-left: 12px;
  }

  .showcase-name {
    font-size: 22px;
    white-space: normal;
    margin: 16px 0;
  }

  .showcase-description {
    font-size: 14px;
    line-height: 22px;
  }
}
</style>
