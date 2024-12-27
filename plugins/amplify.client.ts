import { Amplify } from "aws-amplify";
import config from "@/src/amplify_outputs.json";

// eslint-disable-next-line no-undef
export default defineNuxtPlugin(() => {
  Amplify.configure(config, { ssr: true });
});
