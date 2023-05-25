<template>
  <ul :class="`flex flex-wrap gap-[0.2rem] `">
    <li v-for="ix in 5" :key="ix">
      <NuxtIcon
        name="star"
        :class="[
          'w-[1.6rem] aspect-square',
          fillMap[level],
          ix > stars && 'opacity-[0.1]',
        ]"
        v-if="!(isNotRenderingStars && ix > stars)"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { IRatingStars, TLevel } from "~/features/types/shared.types";

interface IRating extends IRatingStars {
  isNotRenderingStars?: boolean;
}

const fillMap: Record<TLevel, string> = {
  easy: "text-light-green",
  medium: "text-yellow",
  hard: "text-red",
};

const props = defineProps<IRating>();
</script>

<style scoped lang="scss"></style>
