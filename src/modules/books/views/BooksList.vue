<script setup lang="ts">
import {useBooks} from "../composables/useBooks.ts";
import {onMounted} from "vue";
import {Book} from "../components/Book";

const { fetchBooks, list } = useBooks()

onMounted(async () => {
  await fetchBooks()
})
</script>

<template>
  <div>
    <div v-if="list.length">
      <Book
          v-for="(book, index) in list"
          :key="index"
          v-bind="{ book }"
      />
    </div>
  </div>
</template>
