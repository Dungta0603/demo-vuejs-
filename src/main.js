import { createApp } from "vue";
import App from "./App.vue";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUserSecret,
  faDesktop,
  faKeyboard,
  faPalette,
  faCamera,
  faVideo,
  faWaveSquare,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faSquareFacebook,
  faSquareInstagram,
  faLinkedinIn,
  faDribbble,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faImages } from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */

library.add(
  faUserSecret,
  faTwitter,
  faDesktop,
  faImages,
  faKeyboard,
  faPalette,
  faCamera,
  faVideo,
  faWaveSquare,
  faUser,
  faSquareFacebook,
  faSquareInstagram,
  faLinkedinIn,
  faDribbble,
  faYoutube
);
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
