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
          <img
            src="../assets/awards/award.png"
            alt="Award"
          />
          <img
            src="../assets/awards/award.png"
            alt="Award"
          />
          <img
            src="../assets/awards/award.png"
            alt="Award"
          />
          <img
            src="../assets/awards/award.png"
            alt="Award"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.awards-section {
  background: #f2f2f2;
}

.awards-stack {
  position: relative;
  width: 100vw;
  padding-top: 70px;
  margin-left: calc(50% - 50vw);
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
  gap: 35px;
}

.awards-section-title {
  width: 200px;
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
  width: auto;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: repeat(2, max-content);
  justify-items: center;
  align-items: center;
  gap: 37px 19px;
}
</style>
