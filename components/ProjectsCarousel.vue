<template>
  <Carousel
    ref="myCarousel"
    :wrap-around="true"
    :autoplay="4000"
    :breakpoints="breakpoints"
  >
    <Slide v-for="slide in props.data" :key="slide">
      <div class="carousel__item">
        <a :href="slide.link" target="_blank" class="carousel__button">
          <img class="carousel__img" :src="slide.images[0]" alt="" />
        </a>
        <p>{{ slide.title }}</p>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import type { IProject } from '@/constants'
import { onMounted, ref } from 'vue'
const myCarousel = ref()
onMounted(() => {
  console.log()
})
const props = defineProps<{
  data: IProject[]
}>()
const breakpoints = {
  // 700px and up
  1: {
    itemsToShow: 1
  },
  // 1024 and up
  424: {
    itemsToShow: 1.4
  },
  768: {
    itemsToShow: 1.8
  }
}
</script>

<style lang="scss">
@import "assets/styles/variables";
.container-carousel {
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
}
.carousel {
  &__slide {
    padding: 10px;
    border-radius: 20px;
  }
  &__item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    p {
      font-size: 20px;
    }
  }
  &__button {
    aspect-ratio: 1/1;
    width: 100%;
    border-radius: 20px;
    padding: 0;
    margin: 0;
    background-color: transparent;
    img {
      border-radius: 20px;
      max-width: 100%;
      max-height: 100%;
    }
  }
  &__prev,
  &__next {
    box-sizing: content-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 100px;
    border-radius: 10px;
    background-color: $green;
    box-shadow: 5px 5px 15px rgba(black, 0.5);
  }
  &__icon {
    fill: $greenDark;
  }
  &__pagination {
    gap: 15px;
  }
  &__pagination-button {
    width: 30px;
    height: 30px;
    background-color: $green;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:after {
      display: none;
    }
    &--active {
      &:after {
        display: block;
        width: 15px;
        height: 15px;
        background: $greenDark;
        border-radius: 50%;
        content: '';
      }
    }
  }
  @media screen and (max-width: $tablet) {
    &__prev,
    &__next {
      display: none;
    }
  }
}
</style>
