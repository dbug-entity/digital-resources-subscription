// router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import PersonalInformation from "../components/PersonalInformation.vue";
import AccountInformation from "../components/AccountInformation.vue";
import Confirmation from "../components/ConfirmationPage.vue";
import SubscriptionInfo from "../components/SubscriptionInfo.vue";
import CompletionPage from "../components/CompletionPage.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: PersonalInformation },
  { path: "/subscription", component: SubscriptionInfo },
  { path: "/account-information", component: AccountInformation },
  { path: "/confirmation", component: Confirmation },
  { path: "/completion", component: CompletionPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
