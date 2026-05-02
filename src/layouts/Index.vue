<template>
  <div class="page">
    <header class="site-header">
      <Navbar />
    </header>

    <main>
      <HeroSection />

      <section
        id="about"
        class="about-section"
      ></section>

      <!-- <section>awards</section> -->
      <!-- <section>services</section> -->
      <!-- <section>insights</section> -->
      <!-- <section>works</section> -->
    </main>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue';
import Navbar from '@/components/Navbar.vue';
</script>

<style scoped lang="scss">
.site-header {
  position: relative;
  z-index: 20;
}

.about-section {
  scroll-margin-top: 100px;
}
</style>
