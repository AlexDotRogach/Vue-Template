<template>
  <locale-select></locale-select>
  <header-part></header-part>
  <div>{{ t("welcome") }}</div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import HeaderPart from "@/parts/HeaderPart.vue";
import LocaleSelect from "@/components/LocaleSelect.vue";

const { t } = useI18n();
</script>

<style></style>
