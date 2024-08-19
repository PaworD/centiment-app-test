
<script lang="ts" setup>
import {useRoute} from "vue-router";
import {useBooks} from "../composables/useBooks.ts";
import {onMounted, ref, shallowRef} from "vue";
import {IBook} from "../models";
import {AnyObject} from "../../../bootstrap/contracts.ts";

const route = useRoute()
const { fetchBook, updateBook } = useBooks()

const book = shallowRef<IBook | null>(null)
const formData = ref<AnyObject>({})


onMounted(async () => {
  if (route.params.id) {
    const bookId = route.params?.id
    book.value = await fetchBook(Number(bookId))

    formData.value = {
      ...book.value
    }
  }
})
async function edit (): Promise<void> {
  await updateBook(book.value!.id, { ...formData.value } )
}
</script>

<template>
  <div v-if="book">
    <form @submit.prevent="edit" novalidate>
      <input type="text" v-model="formData.title">
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-flow: column;
  gap: 14px;
  align-items: flex-start;
}
</style>
