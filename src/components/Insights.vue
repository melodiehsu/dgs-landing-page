<template>
  <section
    id="insights"
    class="insights-section"
  >
    <div class="insights-stack">
      <div class="insights">
        <div class="insights-profile">
          <div class="insights-avatar">
            <img
              src="../assets/tony-avatar.png"
              alt=""
            />
          </div>
          <div class="insights-name">Tony Ng</div>
          <div class="insights-role">Founder & Creative Director</div>
        </div>

        <div class="insights-quote">
          <img
            src="../assets/left-quote.png"
            alt=""
          />

          <p>
            A great digital work isn’t about designing beautiful pages purely. It is about context -
            how do we deliver the right experience to the
            <strong> right person at the right time</strong>. The most important thing is that your
            work can engage customers at anytime, anywhere and let users experience an entire
            amazing digital journey.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.insights-section {
  width: 100%;
  background: #fff;
  scroll-margin-top: 120px;
}

.insights-stack {
  position: relative;
  width: 100%;
  margin-left: calc(50% - 50vw);

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 50%;
    top: 0;
    right: 0;
    background: #26c6d0;
    z-index: 0;
    border-bottom-right-radius: 50px;
  }
}

.insights {
  position: relative;
  width: min(92%, 1440px);
  margin: 0 auto;
  overflow: hidden;
  background: #26c6d0;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
  display: grid;
  grid-template-columns: 300px minmax(0, 1fr);
  align-items: center;
  gap: 72px;
  padding: 100px 72px;
  box-sizing: border-box;
  color: #fff;
  z-index: 1;
}

.insights::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('../assets/insights-bg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter: blur(6px);
  transform: scale(1.06);
  z-index: 0;
}

.insights > * {
  position: relative;
  z-index: 1;
}

.insights-name {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 40px;
}

.insights-role {
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  letter-spacing: 2px;
}

.insights-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  width: 300px;
}

.insights-quote {
  justify-self: start;
  width: 100%;
  max-width: 734px;
  transform: translateY(-10px);

  img {
    width: 90px;
    height: 90px;
    margin-bottom: 13px;
  }
}

.insights-avatar {
  position: relative;
  width: 204px;
  height: 204px;
  border-radius: 50%;
  overflow: hidden;
  margin: 10px 0;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
}

.insights-quote {
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 22px;
    font-style: normal;
    font-weight: 200;
    line-height: 48px;
    letter-spacing: 2px;
  }

  strong {
    color: #ffbc58;
  }
}
</style>
