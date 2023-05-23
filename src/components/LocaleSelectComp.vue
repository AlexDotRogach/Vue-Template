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

<script setup lang="ts">
const { availableLocales, locale } = useI18n<string[]>();

watch(locale, (newLocale) => {
  if (newLocale) localStorage.locale = newLocale;
});
</script>

<style scoped></style>
