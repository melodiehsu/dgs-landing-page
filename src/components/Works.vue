<template>
  <section class="experience-section">
    <SectionTitle
      id="works"
      title="our brand experience"
      wave-color="#26C6D0"
      dot-color="#EE6C8A"
      :wave-loop-count="3"
      :scroll-margin-top="120"
    />

    <p class="experience-description">
      Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum
      bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.
      Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis
      orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis
      dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et
      vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis
      molestie faucibus.
    </p>

    <figure class="experience-clients">
      <img
        class="experience-clients__image"
        src="../assets/digisalad-client-list.png"
        alt="Digisalad client list"
      />
    </figure>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from './SectionTitle.vue';
</script>

<style scoped lang="scss">
.experience-section {
  width: 100%;
  margin: 0 auto;
  padding: 70px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
}

.experience-description {
  width: 70%;
  max-width: 960px;
  color: #262626;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 1px;
  padding: 50px 0;
}

.experience-clients {
  position: relative;
  width: min(100%, 960px);
  aspect-ratio: 1040 / 720;
  margin: 0;
}

.experience-clients__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

@media (max-width: 960px) {
  .experience-section {
    padding: 56px 0;
  }

  .experience-description {
    width: min(88%, 720px);
    padding: 36px 0;
  }
}

@media (max-width: 480px) {
  .experience-section {
    padding: 40px 0;
  }

  .experience-description {
    width: calc(100% - 40px);
    font-size: 14px;
    line-height: 22px;
    padding: 24px 0 32px;
  }
}
</style>
