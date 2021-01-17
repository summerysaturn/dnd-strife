import App from "./App.svelte";
import { writable } from "svelte/store";

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

export default app;
