<template>
  <section class="services-section">
    <div class="services-shell">
      <SectionTitle
        id="ingredients"
        title="our ingredients"
        wave-color="#585880"
        dot-color="#EE6C8A"
        :scroll-margin-top="200"
      />

      <p class="services-description">
        Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum
        bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.
        Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis
        orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis
        dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et
        vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis
        molestie faucibus.
      </p>

      <div class="services-label">
        <a
          id="services"
          href="#services"
          class="services-label-link"
        >
          <span>our services</span>
          <span
            class="decoration-line"
            aria-hidden="true"
          ></span>
        </a>
      </div>

      <div class="services-gallery">
        <ServiceCard
          v-for="service in services"
          :key="service.title"
          :img-src="service.imgSrc"
          :img-alt="service.imgAlt"
          :title="service.title"
          :content="service.content"
          :cta-label="service.ctaLabel"
        />
      </div>

      <a
        href="#ingredients"
        class="services-cta"
      >
        VIEW MORE DIGISALAD’S ingredients
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from './SectionTitle.vue';
import ServiceCard from './ServiceCard.vue';

const ingredientImage = (fileName: string) =>
  new URL(`../assets/ingredients/${fileName}`, import.meta.url).href;

const services = [
  {
    title: 'UX Design',
    content:
      'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
    ctaLabel: 'view more',
    imgSrc: ingredientImage('lettuce.png'),
    imgAlt: '',
  },
  {
    title: 'UI Design',
    content:
      'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
    ctaLabel: 'view more',
    imgSrc: ingredientImage('tomato.png'),
    imgAlt: '',
  },
  {
    title: 'website development',
    content:
      'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
    ctaLabel: 'view more',
    imgSrc: ingredientImage('cheese.png'),
    imgAlt: '',
  },
  {
    title: 'mobile app development',
    content:
      'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
    ctaLabel: 'view more',
    imgSrc: ingredientImage('pickle.png'),
    imgAlt: '',
  },
  {
    title: 'ecommerce',
    content:
      'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
    ctaLabel: 'view more',
    imgSrc: ingredientImage('tangerine.png'),
    imgAlt: '',
  },
  {
    title: 'customer loyalty',
    content:
      'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
    ctaLabel: 'view more',
    imgSrc: ingredientImage('kiwi.png'),
    imgAlt: '',
  },
  {
    title: 'digital transformation',
    content:
      'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
    ctaLabel: 'view more',
    imgSrc: ingredientImage('watermelon.png'),
    imgAlt: '',
  },
  {
    title: 'digital\nmarketing',
    content:
      'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
    ctaLabel: 'view more',
    imgSrc: ingredientImage('corn.png'),
    imgAlt: '',
  },
  {
    title: 'branding',
    content:
      'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
    ctaLabel: 'view more',
    imgSrc: ingredientImage('apple.png'),
    imgAlt: '',
  },
];
</script>

<style scoped lang="scss">
.services-section {
  background: #26c6d0;
  width: 100%;
  box-sizing: border-box;
}

.services-shell {
  width: 100%;
  padding: 104px 150px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.services-description {
  padding: 30px 60px;
  color: #fff;
  font-size: 16px;
  font-weight: 200;
  line-height: 28px;
  letter-spacing: 1px;
  color: #fff;
  text-align: center;
  letter-spacing: 1px;
}

#services {
  scroll-margin-top: 120px;
}

.services-gallery {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 30px 50px;
  align-items: start;
  padding: 85px 0 100px;
}

.services-label {
  align-self: center;
}

.services-label-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  appearance: none;
  border-radius: 1px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 2.222px;
  text-decoration: none;
  padding: 33px 24.53px;
  background: #585880;
}

.decoration-line {
  width: 52.033px;
  height: 2px;
  background: #fff;
  margin-left: 14px;
}

.services-cta {
  color: #fff;
  position: relative;
  z-index: 0;
  display: inline-block;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    bottom: 4px;
    height: 10px;
    background: #ffbc58;
    z-index: -1;
    // transform: translateX(-6px);
  }
}
</style>
