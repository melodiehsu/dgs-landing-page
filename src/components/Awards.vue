<template>
  <section class="awards-section">
    <div class="awards-stack">
      <div
        class="awards-background"
        aria-hidden="true"
      ></div>

      <div class="awards">
        <div class="awards-info">
          <div class="awards-section-title">
            <SectionTitle
              title="awards"
              wave-color="#26C6D0"
              dot-color="#EE6C8A"
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
          <div class="award-item">
            <img
              src="../assets/awards/award.png"
              alt="Award"
            />
          </div>
          <div class="award-item">
            <img
              src="../assets/awards/award.png"
              alt="Award"
            />
          </div>
          <div class="award-item">
            <img
              src="../assets/awards/award.png"
              alt="Award"
            />
          </div>
          <div class="award-item">
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
import SectionTitle from './SectionTitle.vue';
</script>

<style scoped lang="scss">
.awards-section {
  background: #f2f2f2;
}

.awards-stack {
  position: relative;
  width: 100vw;
  padding-top: 70px;
}

.awards-background {
  position: absolute;
  inset: 50% 0 0;
  background: #26c6d0;
  z-index: 0;
  border-top-left-radius: 50px;
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
  }

  .awards-info {
    width: 100%;
    max-width: 100%;
  }

  .awards-gallery {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px 16px;
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
  }

  .awards-gallery {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px 12px;
  }
}
</style>
