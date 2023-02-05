<script setup lang="ts">
import DuHeader from '@components/DuHeader/DuHeader.vue';
import { useVocabularyStore } from '@stores/vocabulary';
import { RouterView } from 'vue-router'

const { reloadVocabularyList } = useVocabularyStore()

Promise.all([
  reloadVocabularyList(),
])
</script>

<template>
  <DuHeader />
  <RouterView />
</template>