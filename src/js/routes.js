// Pages
import Home from '../pages/home.vue';
import Scanner from '../pages/scanner.vue';
import Camera from '../pages/camera.vue';

var routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/scanner',
    component: Scanner,
  },
  {
    path: '/camera',
    component: Camera,
  },
];

export default routes;
