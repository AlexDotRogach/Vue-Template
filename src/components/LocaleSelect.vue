<script setup lang="ts">
import { watch } from "vue";
import { useI18n } from "vue-i18n";
const { availableLocales, locale } = useI18n<string[]>();

watch(locale, (newLocale) => {
  if (newLocale) localStorage.locale = newLocale;
});
</script>

<template>
  <div class="locales">
    <select v-model="locale">
      <option
        :value="locale"
        class="locale"
        v-for="locale in availableLocales"
        :key="locale"
      >
        {{ locale }}
      </option>
    </select>
  </div>
</template>

<style scoped></style>
