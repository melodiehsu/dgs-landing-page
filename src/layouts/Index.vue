<template>
  <div class="page">
    <header class="site-header">
      <Navbar />
    </header>

    <main>
      <HeroSection />

      <div
        class="page-decoration"
        aria-hidden="true"
      ></div>

      <About />

      <Services />
      <!-- <section>services</section> -->
      <!-- <section>insights</section> -->
      <!-- <section>works</section> -->
    </main>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue';
import Navbar from '@/components/Navbar.vue';
import About from '@/components/About.vue';
import Services from '@/components/Services.vue';
</script>

<style scoped lang="scss">
.page {
  position: relative;
  z-index: 0;
  background: #f2f2f2;
}

.site-header {
  position: relative;
  z-index: 20;
}

.page-decoration {
  width: 1px;
  height: 86px;
  margin: 0 auto;
  background: #808080;
}
</style>
