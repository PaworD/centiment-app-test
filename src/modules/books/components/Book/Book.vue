<script setup lang="ts">
import {PropType, toRefs} from "vue";
import {IBook} from "../../models";
import {useRouter} from "vue-router";

const props = defineProps({
  book: {
    type: Object as PropType<IBook>,
    required: true
  }
})

const { book } = toRefs(props)
const router = useRouter()

function handleClick (): void {
  router.push({
    name: 'SingleBook',
    params: { id: book?.value?.id }
  })
}
</script>

<template>
      <span class="single-book" @click="handleClick">
        <span>{{ book.author }}</span>
        <span>{{ book.id }}</span>
        <span>{{ book.title }}</span>
        <span>{{ book.description }}</span>
      </span>
</template>

<style scoped>
.single-book {
  display: flex;
  flex-flow: column;
  gap: 14px;

  padding: 14px  8px;

  margin-bottom: 24px;
  border: 1px solid #bbb;
}
</style>
