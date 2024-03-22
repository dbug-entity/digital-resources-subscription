import { createRouter, createWebHistory } from 'vue-router';

import PersonalInformation from '@/pages/PersonalInformation.vue';
import AccountInformation from '@/pages/AccountInformation.vue';
import Confirmation from '@/pages/ConfirmationPage.vue';
import SubscriptionInfo from '@/pages/SubscriptionInfo.vue';
import CompletionPage from '@/pages/CompletionPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: PersonalInformation },
    { path: "/subscription", name: "subscription", component: SubscriptionInfo },
    { path: "/account-information", name: "account-information", component: AccountInformation },
    { path: "/confirmation", name: "confirmation", component: Confirmation },
    { path: "/completion", name: "completion", component: CompletionPage },
  ]
})

export default router
