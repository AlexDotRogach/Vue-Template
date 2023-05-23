import vueI18n from "@intlify/vite-plugin-vue-i18n";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import vuetify from "vite-plugin-vuetify";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [
    vue(),
    vueI18n({
      include: resolve(__dirname, "./src/locales/**"),
      runtimeOnly: false,
    }),
    eslintPlugin(),
    AutoImport({
      imports: ["vue", "vue-router", "vue-i18n", "@vueuse/core"],
      dts: true,
      dirs: [
        "src/composables",
        "src/composables/**/",
        "src/stores",
        "src/stores/**/",
        "src/assets/img/svg/*",
      ],
      eslintrc: {
        enabled: true,
      },
    }),
    Components({
      dts: "src/components.d.ts",
    }),
    vuetify({
      autoImport: true,
    }),
  ],
  server: { port: 5050 },
});
