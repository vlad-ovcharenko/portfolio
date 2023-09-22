<script setup lang="ts">
import ProjectsCarousel from '@/components/ProjectsCarousel.vue'
import { projects } from '@/constants'
import { ref, reactive, watch, onMounted } from 'vue'
import type { Ref } from 'vue'
import AboutSection from '@/components/AboutSection.Vue'
import HiSection from '@/components/HiSection.vue'

const hiRef = ref<HTMLDivElement>()
const aboutRef = ref<HTMLDivElement>()
const projectsRef = ref<HTMLDivElement>()
// @ts-ignore
const sectionsRefs: Ref<HTMLDivElement>[] = [hiRef, aboutRef, projectsRef]

const links = [
  { href: '#hi', title: 'Hi!' },
  { href: '#about', title: 'about' },
  // { href: '#skills', title: 'skills' },
  // { href: '#companies', title: 'companies' },
  { href: '#projects', title: 'projects' }
  // { href: '#education', title: 'Education' },
  // { href: '#next', title: 'What is next' }
]

const state = reactive({
  currentHash: '',
  isMenu: false
})

watch(
    () => state.isMenu,
    (newV, oldV) => {
      console.log(newV, oldV)
      document.body.style.overflow = newV ? 'hidden' : 'auto'
    }
)

onMounted(() => {
  function getHash(hash: string) {
    const hashArr = [...hash]
    const hashIndex = hashArr.findIndex((e) => e === '#')
    if (hashIndex < 0) return
    hashArr.splice(0, hashIndex)
    return hashArr.join('')
  }

  if (window.location.hash) {
    state.currentHash = window.location.hash
  }
  window.onhashchange = (ev) => {
    const hash = getHash(ev.newURL)
    if (hash) state.currentHash = hash
  }

  let isScrolling: ReturnType<typeof setTimeout> | null = null
  function setHash() {
    const body = document.body
    const html = document.documentElement

    const pageHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
    )

    for (const i in sectionsRefs) {
      const el = sectionsRefs[i].value
      if (!el) return
      for (const { value } of sectionsRefs) if (!value) return
      const offsetBottom = el.offsetTop + el.offsetHeight

      if (pageHeight === scrollY + window.innerHeight) {
        const item = sectionsRefs[sectionsRefs.length - 1]
        if (item !== undefined) {
          const name = item.value.id
          history.pushState(null, '', '#' + name)
          state.currentHash = '#' + name
          return
        }
      }
      if (window.scrollY === 0) {
        const name = sectionsRefs[0].value.id
        history.pushState(null, '', '#' + name)
        state.currentHash = '#' + name
        return
      }
      if (window.scrollY > el.offsetTop && window.scrollY < offsetBottom) {
        history.pushState(null, '', '#' + el.id)
        state.currentHash = '#' + el.id
        return
      }
    }
  }

  document.addEventListener('scroll', () => {
    if (isScrolling) window.clearTimeout(isScrolling)
    isScrolling = setTimeout(setHash, 200)
  })
})
</script>

<template>
  <header class="header" :class="{ 'header--open': state.isMenu }">
    <div class="header__container">
      <a
          class="resume-button"
          target="_blank"
          href="https://docs.google.com/document/d/1umiW5NyW1V49OLZlpLxVyvhPe8zJuIncY1_4em4sG-8/edit?usp=sharing"
      >Resume</a
      >
      <div
          class="burger header__burger"
          :class="{ 'burger--active': state.isMenu }"
          @click="state.isMenu = !state.isMenu"
      >
        <div class="icon-left"></div>
        <div class="icon-right"></div>
      </div>
      <nav class="header__nav">
        <div class="header__nav-container">
          <a
              v-for="link in links"
              :href="link.href"
              :class="{ active: link.href === state.currentHash }"
              :key="link.href"
          >{{ link.title }}</a
          >
        </div>
      </nav>
    </div>
  </header>

  <HiSection ref="hiRef" />
  <AboutSection ref="aboutRef" />

  <div class="projects" ref="projectsRef" id="projects">
    <p class="projects__title">Completed Projects</p>
    <p class="projects__hint">click an image to see details</p>
    <ProjectsCarousel :data="projects" />
  </div>
</template>

<style lang="scss">
@import "assets/styles/index";
@import "assets/styles/variables";
body {
  background-color: $greenDark;
  color: $text-light;
  padding-top: $headerHeight;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.resume-button {
  padding: 10px 30px;
  border-radius: 10px;
  //background: linear-gradient(-45deg, $greenDark, $green);
  background: linear-gradient(-45deg, #23a6d5, $green, #ee7752, #e73c7e);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  height: 100%;
  background: rgba($greenDark, 0.5);
  backdrop-filter: blur(20px);
  font-size: 18px;
  padding: 10px 10px 0;

  -webkit-transition: max-height 0.3s;
  -moz-transition: max-height 0.3s;
  -ms-transition: max-height 0.3s;
  -o-transition: max-height 0.3s;
  transition: max-height 0.3s;
  overflow: hidden;
  // "height: 0" not work with css transitions
  max-height: $headerHeight;
  &__container {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: start;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    max-width: $max-width + 30px;
  }
  &__burger {
    margin-top: 7px;
    display: none;
  }
  &__nav {
    a {
      display: inline-block;
      margin: 0 15px;
      text-transform: capitalize;
      padding: 10px 5px;
      text-align: center;

      &:after {
        display: block;
        content: '';
        width: 0;
        margin-top: 2px;
        height: 3px;
        background: $green;
        transition: width 0.3s;
      }
      &:hover {
        color: $green;
        transition: color 0.3s;
      }
      &.active {
        color: $green;
        &:after {
          width: 100%;
        }
      }
    }
  }
  @media screen and (max-width: $laptop) {
    .burger {
      display: block;
    }
    .header__nav {
      display: none;
    }
  }
  &--open {
    max-height: 100vh;
    height: 100%;
    padding: 10px;
    z-index: 1;
    .header__container {
      grid-template-rows: auto 1fr;
      padding: 0;
      align-items: start;
    }
    .header__nav {
      grid-column-start: 1;
      grid-column-end: -1;
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
    .header__nav-container {
      display: flex;
      flex-direction: column;
    }
  }
}

.projects {
  padding: 40px 0;
  &__title {
    max-width: $max-width + 30px;
    padding: 0 15px;
    font-size: 60px;
    margin: 0 auto;
  }
  &__hint {
    max-width: $max-width + 30px;
    padding: 0 15px;
    font-size: 20px;
    margin: 10px auto 40px;
  }
  @media screen and (max-width: $mobile) {
    &__title {
      font-size: 40px;
    }
  }
}
</style>
