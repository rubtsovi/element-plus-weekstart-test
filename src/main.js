import { createApp } from "vue";
import ElementPlus from "element-plus";
import elementPL from "element-plus/es/locale/lang/pl";
import dayjs from "dayjs";
import plLocale from "dayjs/locale/pl";
import "element-plus/dist/index.css";
import "./style.css";
import App from "./App.vue";

plLocale.weekStart = 1;
dayjs.locale(plLocale, null, false);

const app = createApp(App);
app.use(ElementPlus, { locale: elementPL });
app.mount("#app");
