import Vue from 'vue';
import Button from '@/components/button.vue';
import Grid from '@/components/grid/grid.vue';
import Row from '@/components/grid/row.vue';
import Column from '@/components/grid/column.vue';
import Navbar from '@/components/header.vue';

Vue.component('v-button', Button);
Vue.component('navbar', Navbar);
Vue.component('grid', Grid);
Vue.component('row', Row);
Vue.component('column', Column);
