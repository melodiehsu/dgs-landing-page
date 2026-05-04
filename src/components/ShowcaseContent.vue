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

      <div class="showcase-name">
        <span class="showcase-name__text">{{ showcaseName }}</span>
      </div>

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
  width: 100%;
  display: grid;
  grid-template-columns: clamp(420px, 38vw, 554px) minmax(0, 1fr);
  gap: clamp(28px, 4vw, 72px);
  grid-row: 2;
  grid-column: 2;
}

.image-wrapper {
  position: relative;
  width: 100%;
  max-width: 554px;
  aspect-ratio: 1 / 1;
  height: auto;
  border-radius: 50px;
  overflow: hidden;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.left,
.right {
  min-width: 0;
}

.left {
  position: relative;
}

.showcase-cta {
  position: absolute;
  right: clamp(-68px, -4.722vw, -20px);
  bottom: clamp(-75px, -5.208vw, -28px);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  appearance: none;
  border-radius: 1px;
  background: #26c6d0;
  color: #fff;
  width: fit-content;
  padding: clamp(40px, 4.167vw, 60px) clamp(20px, 2.292vw, 33px);
  font-size: clamp(14px, 1.111vw, 16px);
  font-weight: 700;
  line-height: 1;
  letter-spacing: 2.222px;
  text-decoration: none;
  cursor: pointer;
  text-transform: uppercase;
  white-space: nowrap;
}

.decoration-line {
  width: clamp(50px, 4.861vw, 70px);
  height: 2px;
  background: #fff;
  margin-left: clamp(16px, 1.806vw, 26px);
}

.title {
  width: 100%;
  font-size: clamp(14px, 1.1vw, 16px);
  font-weight: 700;
  letter-spacing: 2.222px;
}

.showcase-name {
  width: fit-content;
  max-width: 100%;
  margin: 20px 0;
}

.showcase-name__text {
  position: relative;
  display: inline;
  max-width: 100%;
  color: #fff;
  font-size: clamp(24px, 2.3vw, 32px);
  font-weight: 700;
  letter-spacing: 3px;
  z-index: 0;
  background: linear-gradient(transparent 72%, #26c6d0 72%, #26c6d0 88%, transparent 88%);
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  white-space: normal;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: -27px;
    width: clamp(8px, 0.694vw, 10px);
    height: clamp(8px, 0.694vw, 10px);
    border-radius: 50%;
    background: #ee6c8a;
    z-index: -1;
    transform: translateY(-50%);
  }
}

.showcase-description {
  width: 90%;
  font-size: clamp(14px, 1.1vw, 16px);
  font-weight: 200;
  line-height: clamp(18px, 1.7vw, 24px);
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
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .left {
    width: 80%;
    justify-self: center;
  }

  .right {
    width: 80%;
    justify-self: center;
  }

  .title {
    margin-top: 20px;
    text-align: center;
  }

  .showcase-name {
    justify-self: center;
    text-align: center;
  }

  .showcase-description {
    text-align: center;
    justify-self: center;
  }

  .image-wrapper {
    max-width: 100%;
    aspect-ratio: 1 / 1;
    height: auto;
  }

  .showcase-cta {
    right: clamp(-20px, -2vw, -8px);
    bottom: clamp(-28px, -2.5vw, -16px);
    padding: 28px 20px;
  }
}

@media (max-width: 480px) {
  .showcase {
    width: 100%;
    grid-column: 1 / span 3;
    gap: 24px;
  }

  .showcase-cta {
    // right: clamp(8px, 2vw, 12px);
    // bottom: clamp(8px, 2vw, 12px);
    padding: 18px 16px;
    font-size: 13px;
  }

  .decoration-line {
    width: 42px;
    margin-left: 12px;
  }

  .showcase-name {
    font-size: 22px;
    margin: 16px 0;
  }

  .showcase-description {
    font-size: 14px;
    line-height: 22px;
  }

  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .showcase-cta {
    position: relative;
  }
}
</style>
