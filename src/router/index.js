import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Services from "../views/Services.vue";
import Approach from "../views/Approach.vue";
import Team from "../views/Team.vue";
import Contact from "../views/Contact.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return {
      top: 0,
      behavior: "smooth",
    };
  },

  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        journey: "notice",
      },
    },

    {
      path: "/about",
      name: "About",
      component: About,
      meta: {
        journey: "understand",
      },
    },

    {
      path: "/services",
      name: "Services",
      component: Services,
      meta: {
        journey: "explore",
      },
    },

    {
      path: "/approach",
      name: "Approach",
      component: Approach,
      meta: {
        journey: "understand",
      },
    },

    {
      path: "/team",
      name: "Team",
      component: Team,
      meta: {
        journey: "connect",
      },
    },

    {
      path: "/contact",
      name: "Contact",
      component: Contact,
      meta: {
        journey: "begin",
      },
    },

    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
      meta: {
        journey: "begin",
      },
    },
  ],
});

export default router;
