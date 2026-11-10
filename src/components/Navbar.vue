<template>
  <header
    class="fixed left-0 right-0 top-0 z-50 border-b border-[#293487]/10 bg-white/95 shadow-[0_4px_25px_rgba(41,52,135,0.07)] backdrop-blur-xl"
  >
    <div
      class="mx-auto flex h-[88px] max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12"
    >
      <!-- LOGO -->
      <RouterLink
        to="/"
        class="group flex shrink-0 items-center"
        aria-label="Foresight Counselling Centre — Home"
        @click="closeMenu"
      >
        <img
          src="/foresight-logo.png"
          alt="Foresight Counselling Centre"
          class="h-14 w-auto max-w-[250px] object-contain transition duration-300 group-hover:scale-[1.03] sm:h-16"
        />
      </RouterLink>

      <!-- DESKTOP NAVIGATION -->
      <nav
        class="hidden items-center gap-2 lg:flex"
        aria-label="Main navigation"
      >
        <RouterLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="group relative rounded-full px-4 py-3 text-[11px] font-bold tracking-[0.12em] transition-all duration-300"
          :class="
            isActive(item.to)
              ? 'bg-[#293487]/[0.07] text-[#293487]'
              : 'text-[#293487]/65 hover:bg-[#008BCB]/[0.06] hover:text-[#008BCB]'
          "
        >
          {{ item.label }}

          <span
            class="absolute bottom-[5px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#008BCB] transition-all duration-300"
            :class="isActive(item.to) ? 'w-5' : 'w-0 group-hover:w-5'"
          ></span>
        </RouterLink>

        <!-- CTA BUTTON -->
        <RouterLink
          to="/contact"
          class="group ml-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#293487] to-[#3548a5] px-6 py-4 text-[10px] font-bold tracking-[0.14em] text-white shadow-[0_6px_18px_rgba(41,52,135,0.20)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(41,52,135,0.28)]"
        >
          BEGIN A CONVERSATION
          <span
            class="text-sm transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </RouterLink>
      </nav>

      <!-- MOBILE MENU BUTTON -->
      <button
        type="button"
        class="flex h-11 w-11 items-center justify-center rounded-full border border-[#293487]/15 bg-[#f5f7ff] transition duration-300 hover:border-[#008BCB] hover:bg-[#eaf7ff] lg:hidden"
        :aria-expanded="menuOpen"
        aria-controls="mobile-navigation"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        @click="menuOpen = !menuOpen"
      >
        <div class="space-y-[6px]">
          <span
            class="block h-[2px] w-5 rounded-full bg-[#293487] transition duration-300"
            :class="menuOpen ? 'translate-y-2 rotate-45' : ''"
          ></span>

          <span
            class="block h-[2px] w-5 rounded-full bg-[#293487] transition duration-300"
            :class="menuOpen ? 'opacity-0' : ''"
          ></span>

          <span
            class="block h-[2px] w-5 rounded-full bg-[#293487] transition duration-300"
            :class="menuOpen ? '-translate-y-2 -rotate-45' : ''"
          ></span>
        </div>
      </button>
    </div>

    <!-- MOBILE NAVIGATION -->
    <Transition
      enter-active-class="transition duration-250 ease-out"
      enter-from-class="-translate-y-3 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-3 opacity-0"
    >
      <div
        v-if="menuOpen"
        id="mobile-navigation"
        class="border-t border-[#293487]/10 bg-white px-5 pb-6 pt-4 shadow-xl lg:hidden"
      >
        <nav
          class="mx-auto flex max-w-xl flex-col gap-2"
          aria-label="Mobile navigation"
        >
          <RouterLink
            v-for="(item, index) in navigation"
            :key="item.to"
            :to="item.to"
            class="flex items-center justify-between rounded-xl px-5 py-4 text-sm font-bold tracking-[0.1em] transition duration-300"
            :class="
              isActive(item.to)
                ? 'bg-[#293487] text-white shadow-md'
                : 'bg-[#f5f7ff] text-[#293487] hover:bg-[#eaf7ff] hover:text-[#008BCB]'
            "
            @click="closeMenu"
          >
            <span>{{ item.label }}</span>

            <span
              class="text-lg"
              :class="isActive(item.to) ? 'text-[#FFB600]' : 'text-[#008BCB]'"
            >
              →
            </span>
          </RouterLink>

          <RouterLink
            to="/contact"
            class="mt-3 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#293487] to-[#008BCB] px-6 py-4 text-center text-xs font-bold tracking-[0.13em] text-white shadow-lg transition duration-300 hover:shadow-xl"
            @click="closeMenu"
          >
            BEGIN A CONVERSATION
            <span class="text-base">→</span>
          </RouterLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const menuOpen = ref(false);

const navigation = [
  { label: "HOME", to: "/" },
  { label: "ABOUT", to: "/about" },
  { label: "SERVICES", to: "/services" },
  { label: "OUR TEAM", to: "/team" },
  { label: "CONTACT", to: "/contact" },
];

const closeMenu = () => {
  menuOpen.value = false;
};

const isActive = (path) => {
  if (path === "/") {
    return route.path === "/";
  }

  return route.path === path || route.path.startsWith(`${path}/`);
};
</script>
