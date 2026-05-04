<template>
  <div class="page">
    <header class="site-header">
      <Navbar
        :show-menu="isSideMenuOpen"
        @open-menu="openSideMenu"
      />
    </header>

    <main>
      <HeroSection />

      <div class="page-decoration-wrapper">
        <div
          class="page-decoration"
          aria-hidden="true"
        ></div>
      </div>

      <About />

      <Awards />

      <Services />

      <Insights />

      <Works />

      <ShowCase />

      <SideMenu
        :open="isSideMenuOpen"
        @close="closeSideMenu"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HeroSection from '@/components/HeroSection.vue';
import Navbar from '@/components/Navbar.vue';
import About from '@/components/About.vue';
import Services from '@/components/Services.vue';
import Insights from '@/components/Insights.vue';
import Awards from '@/components/Awards.vue';
import Works from '@/components/Works.vue';
import ShowCase from '@/components/Showcase.vue';
import SideMenu from '@/components/SideMenu.vue';

const isSideMenuOpen = ref(false);

const openSideMenu = () => {
  isSideMenuOpen.value = true;
};

const closeSideMenu = () => {
  isSideMenuOpen.value = false;
};
</script>

<style scoped lang="scss">
.page {
  position: relative;
  z-index: 0;
}

.site-header {
  position: relative;
  z-index: 20;
}

.page-decoration-wrapper {
  width: 100%;
  background: #f2f2f2;
}

.page-decoration {
  width: 1px;
  height: 86px;
  margin: 0 auto;
  background: #808080;
}
</style>
