// router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import PersonalInformation from "../components/PersonalInformation.vue";
import AccountInformation from "../components/AccountInformation.vue";
import Confirmation from "../components/ConfirmationPage.vue";
import SubscriptionInfo from "../components/SubscriptionInfo.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: PersonalInformation },
  { path: "/subscription", component: SubscriptionInfo },
  { path: "/account-information", component: AccountInformation },
  { path: "/confirmation", component: Confirmation },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
