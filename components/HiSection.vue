<template>
  <section class="hi" id="hi">
    <div class="hi__container">
      <div class="hi__text">
        <p class="hi__greet">Hi! My name is</p>
        <p class="hi__name">Vlad Ovcharenko</p>
        <p class="hi__position">Vue.js Frontend Engineer in Canada <span>🇨🇦</span></p>
      </div>
      <img class="hi__img" src="../assets/images/me.png" alt="me" />
    </div>
  </section>
</template>

<style lang="scss">
@import "assets/styles/variables";

.hi {
  &__container {
    max-width: $max-width + 60px;
    padding: 0 30px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
  }
  &__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &__greet,
  &__position {
    font-size: 18px;
    span {
      font-size: 25px;
    }
  }
  &__name {
    color: $green;
    padding: 20px 0;
    font-size: 60px;
  }
  &__img {
    max-width: 100%;
    margin-left: auto;
    margin-bottom: -1px;
  }
  @media screen and (max-width: $laptop) {
    padding-top: 50px;
    height: auto;
    &__container {
      grid-template-columns: 1fr;
      grid-gap: 50px;
    }
    &__img {
      margin: 0 auto;
    }
  }
  @media screen and (max-width: $mobile) {
    &__name {
      font-size: 40px;
    }
  }
}
</style>
