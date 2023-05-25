<template>
  <table class="text-[2rem] lg:text-[1.6rem] md:text-[1.4rem]">
    <caption
      class="text-big md:text-medium pb-[5.2rem] text-start md:pb-[3rem] md:font-bold sm:pb-[2rem] xs:pb-[1rem]"
    >
      {{
        caption
      }}
    </caption>
    <tbody>
      <tr
        v-for="{ title, values } in data"
        :key="title"
        class="beffore relative border-t-[1px] border-black border-opacity-[15%] before:hidden last:border-b-[1px] lg:before:block"
        :data-title="title"
      >
        <th
          class="min-w-[30rem] text-start font-normal opacity-40 xl:min-w-[23rem] lg:hidden"
        >
          {{ title }}
        </th>

        <td
          v-for="value in values"
          :key="typeof value === 'string' ? value : value.value"
          :style="
            typeof value === 'object' && value.isBad ? { opacity: '40%' } : {}
          "
          class="w-[45.7rem] py-[2.6rem] text-center before:hidden lg:pt-[4rem] lg:before:block"
        >
          {{ typeof value === "string" ? value : value.value }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { ITableRow } from "~/features/types/shared.types";

defineProps<{ data: ITableRow[]; caption: string }>();
</script>

<style scoped lang="scss">
.table-container {
  overflow-x: auto;
}

table {
  width: 100%;
}

.beffore {
  &::before {
    content: attr(data-title);
    @apply absolute top-[1rem] w-full text-center font-bold;
  }
}
</style>
