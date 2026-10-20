<template>
  <div class="min-h-screen bg-white text-[#293487]">
    <main
      class="relative flex min-h-[calc(100vh-82px)] items-center justify-center overflow-hidden px-6 py-20"
    >
      <!-- BACKGROUND -->

      <div
        class="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#008BCB]/10 blur-3xl"
      ></div>

      <div
        class="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#FFB600]/15 blur-3xl"
      ></div>

      <div
        class="pointer-events-none absolute left-[12%] top-[18%] text-3xl text-[#FFB600]/50"
      >
        ✦
      </div>

      <div
        class="pointer-events-none absolute bottom-[18%] right-[12%] text-2xl text-[#008BCB]/40"
      >
        ✦
      </div>

      <!-- CONTENT -->

      <section class="relative w-full max-w-3xl text-center">
        <div class="mx-auto mb-8 flex justify-center">
          <img
            src="/foresight-logo.png"
            alt="Foresight Counselling Centre"
            class="h-16 w-auto object-contain sm:h-20"
          />
        </div>

        <p
          class="text-xs font-bold tracking-[0.35em] text-[#008BCB] sm:text-sm"
        >
          PAGE NOT FOUND
        </p>

        <h1
          class="mt-5 font-serif text-[6rem] font-semibold leading-none tracking-[-0.05em] text-[#293487] sm:text-[9rem]"
        >
          404
        </h1>

        <h2
          class="mt-4 font-serif text-2xl font-semibold text-[#293487] sm:text-4xl"
        >
          This page seems to have wandered off.
        </h2>

        <p
          class="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#596274] sm:text-base"
        >
          The page you're looking for doesn't exist or may have moved. Let's
          help you find your way back.
        </p>

        <!-- ACTIONS -->

        <div
          class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <RouterLink
            to="/"
            class="inline-flex w-full items-center justify-center rounded-xl bg-[#293487] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#008BCB] sm:w-auto"
          >
            Back to Home
          </RouterLink>

          <RouterLink
            to="/contact"
            class="inline-flex w-full items-center justify-center rounded-xl border border-[#293487]/15 bg-white px-7 py-3.5 text-sm font-semibold text-[#293487] transition duration-300 hover:border-[#008BCB]/30 hover:bg-[#008BCB]/5 sm:w-auto"
          >
            Contact Us
          </RouterLink>
        </div>

        <!-- FOOTER -->

        <div
          class="mx-auto mt-12 flex max-w-sm items-center justify-center gap-4"
        >
          <span class="h-px flex-1 bg-[#293487]/10"></span>

          <span
            class="text-[10px] font-semibold tracking-[0.25em] text-[#596274]"
          >
            FORESIGHT COUNSELLING CENTRE
          </span>

          <span class="h-px flex-1 bg-[#293487]/10"></span>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
/* 404 PAGE */
</script>
