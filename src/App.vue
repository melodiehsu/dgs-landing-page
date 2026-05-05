<template>
  <div>
    <Index />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, nextTick } from 'vue';
import Index from './layouts/Index.vue';

const revealSelector = 'p, .scroll-reveal';
let revealObserver: IntersectionObserver | undefined;
let mutationObserver: MutationObserver | undefined;
const observedElements = new WeakSet<Element>();

const observeElement = (element: Element) => {
  if (!(element instanceof HTMLElement)) {
    return;
  }

  if (element.tagName === 'P') {
    element.classList.add('scroll-reveal');
  }

  if (observedElements.has(element)) {
    return;
  }

  observedElements.add(element);
  revealObserver?.observe(element);
};

const scanForRevealTargets = (root: ParentNode | Element = document) => {
  if (root instanceof Element && root.matches(revealSelector)) {
    observeElement(root);
  }

  root.querySelectorAll(revealSelector).forEach(observeElement);
};

onMounted(async () => {
  await nextTick();

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add('is-revealed');
        revealObserver?.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: '0px 0px -8% 0px',
    },
  );

  scanForRevealTargets(document);

  mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (!(node instanceof Element)) {
          return;
        }

        scanForRevealTargets(node);
      });
    });
  });

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
  });
});

onBeforeUnmount(() => {
  revealObserver?.disconnect();
  mutationObserver?.disconnect();
});
</script>

<style scoped lang="scss"></style>
