import { Amplify } from "aws-amplify";
import config from "@/amplify_outputs.json";

// eslint-disable-next-line no-undef
export default defineNuxtPlugin(() => {
  Amplify.configure(config);
});
