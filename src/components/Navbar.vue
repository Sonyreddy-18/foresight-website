<template>
  <header
    class="fixed left-0 right-0 top-0 z-50 border-b border-[#293487]/10 bg-white/95 backdrop-blur-xl"
  >
    <div
      class="mx-auto flex h-[82px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12"
    >
      <!-- LOGO -->

      <RouterLink
        to="/"
        class="flex items-center"
        aria-label="Foresight Counselling Centre — Home"
        @click="closeMenu"
      >
        <img
          src="/foresight-logo.png"
          alt="Foresight Counselling Centre"
          class="h-14 w-auto max-w-[250px] object-contain sm:h-16"
        />
      </RouterLink>

      <!-- DESKTOP NAVIGATION -->

      <nav
        class="hidden items-center gap-7 lg:flex"
        aria-label="Main navigation"
      >
        <RouterLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="relative py-2 text-[11px] font-semibold tracking-[0.13em] transition"
          :class="
            isActive(item.to)
              ? 'text-[#293487]'
              : 'text-[#293487]/65 hover:text-[#008BCB]'
          "
        >
          {{ item.label }}

          <span
            v-if="isActive(item.to)"
            class="absolute bottom-0 left-0 right-0 mx-auto h-[2px] w-5 rounded-full bg-[#008BCB]"
          ></span>
        </RouterLink>

        <RouterLink
          to="/contact"
          class="ml-1 rounded-full bg-[#293487] px-5 py-3 text-[10px] font-semibold tracking-[0.15em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#008BCB]"
        >
          BEGIN A CONVERSATION
        </RouterLink>
      </nav>

      <!-- MOBILE MENU BUTTON -->

      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center rounded-full border border-[#293487]/15 transition hover:border-[#008BCB] lg:hidden"
        :aria-expanded="menuOpen"
        aria-controls="mobile-navigation"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        @click="menuOpen = !menuOpen"
      >
        <div class="space-y-1.5">
          <span
            class="block h-[1.5px] w-5 bg-[#293487] transition"
            :class="menuOpen ? 'translate-y-[4px] rotate-45' : ''"
          ></span>

          <span
            class="block h-[1.5px] w-5 bg-[#293487] transition"
            :class="menuOpen ? 'opacity-0' : ''"
          ></span>

          <span
            class="block h-[1.5px] w-5 bg-[#293487] transition"
            :class="menuOpen ? '-translate-y-[4px] -rotate-45' : ''"
          ></span>
        </div>
      </button>
    </div>

    <!-- MOBILE NAVIGATION -->

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-[-8px] opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-[-8px] opacity-0"
    >
      <div
        v-if="menuOpen"
        id="mobile-navigation"
        class="border-t border-[#293487]/10 bg-white px-5 py-5 lg:hidden"
      >
        <nav class="flex flex-col" aria-label="Mobile navigation">
          <RouterLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            class="border-b border-[#293487]/10 py-4 text-sm font-semibold tracking-[0.1em] transition"
            :class="
              isActive(item.to)
                ? 'text-[#008BCB]'
                : 'text-[#293487] hover:text-[#008BCB]'
            "
            @click="closeMenu"
          >
            <span class="flex items-center justify-between">
              {{ item.label }}

              <span
                v-if="isActive(item.to)"
                class="h-1.5 w-1.5 rounded-full bg-[#008BCB]"
              ></span>
            </span>
          </RouterLink>

          <RouterLink
            to="/contact"
            class="mt-5 rounded-full bg-[#FFB600] px-5 py-4 text-center text-xs font-bold tracking-[0.12em] text-[#293487] transition duration-300 hover:bg-[#293487] hover:text-white"
            @click="closeMenu"
          >
            BEGIN A CONVERSATION
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
  { label: "OUR APPROACH", to: "/approach" },
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
