<template>
  <section class="about" id="about">
    <p class="about__title">About <span class="about__me">Me</span></p>
    <p class="about__text">
      I am a Front-end developer with 6 years of software development experience
      and a Master's degree in Computer Science. I have worked on 7 projects
      across diverse domains including Healthcare, FinTech, E-commerce, Travel,
      Social, Retail, and HR. My proficiency in Vue.js and its ecosystem (Vue
      2-3, Nuxt 2-3, etc.) is complemented by a good understanding of the core
      React ecosystem. My responsibilities include ensuring code quality and
      stability through code reviews, unit testing (using tools such as Jest and
      Typescript), bug fixing, and related tasks. With experience working with
      teams ranging from 6-26 people, I have mentored junior developers and
      provided guidance and feedback as necessary. I am well-versed in various
      management systems such as Agile, Scrum, and Kanban, and I have excellent
      communication skills while collaborating with Product Owners/Managers to
      plan for the future of a project.
    </p>
  </section>
</template>

<style lang="scss">
@import "assets/styles/variables";
.about {
  background-color: $green;
  color: $greenDark;
  padding: 15px 30px 105px;

  &__title {
    max-width: $max-width;
    font-size: 60px;
    margin: 0 auto;
  }
  &__text {
    max-width: 700px;
    margin: 30px auto 0;
    font-size: 20px;
    line-height: 1.5;
  }
  &__me {
    color: $green;
    background-color: $greenDark;
    border-radius: 20px;
    padding: 0 30px;
  }
  @media screen and (max-width: $mobile) {
    padding-bottom: 40px;
    &__title {
      font-size: 40px;
    }
    &__text {
      font-size: 14px;
    }
  }
}
</style>
