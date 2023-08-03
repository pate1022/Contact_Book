import { createRouter, createWebHistory } from 'vue-router';
import ContactList from '../views/ContactList.vue';
import ContactDetails from '../views/ContactDetails.vue';
import AddContact from '../views/AddContact.vue';

const routes = [
  { path: '/', component: ContactList },
  { path: '/contact/:id', component: ContactDetails, props: true },
  { path: '/add', component: AddContact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
