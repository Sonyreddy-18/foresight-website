<template>
  <div class="min-h-screen bg-white text-[#1f2942]">
    <main class="overflow-hidden">
      <!-- =========================================================
           HERO
      ========================================================== -->
      <section class="relative overflow-hidden bg-[#293487] pt-24">
        <div
          class="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#008BCB]/20 blur-3xl"
        ></div>

        <div
          class="absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-[#FFB600]/10 blur-3xl"
        ></div>

        <div
          class="relative mx-auto max-w-[1400px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
        >
          <div class="max-w-4xl">
            <div class="flex items-center gap-4">
              <span class="h-px w-12 bg-[#FFB600]"></span>

              <p class="text-xs font-bold tracking-[0.3em] text-[#FFB600]">
                OUR PROFESSIONAL TEAM
              </p>
            </div>

            <h1
              class="mt-6 font-serif text-5xl font-semibold leading-[0.98] tracking-[-0.03em] text-white sm:text-6xl lg:text-8xl"
            >
              Clinical experience,
              <span class="block italic text-[#FFB600]">
                different perspectives.
              </span>
            </h1>

            <p
              class="mt-8 max-w-2xl text-base leading-8 text-white/75 sm:text-lg"
            >
              Our multidisciplinary team brings together psychiatric,
              psychological and psychosocial perspectives to support individuals
              and families.
            </p>
          </div>
        </div>
      </section>

      <!-- =========================================================
           JOURNEY CONTEXT
      ========================================================== -->
      <section
        v-if="hasJourneyContext"
        class="border-b border-[#293487]/10 bg-white px-6 py-8 sm:px-10 lg:px-16"
      >
        <div class="mx-auto max-w-[1200px]">
          <div
            class="overflow-hidden rounded-[1.5rem] bg-[#293487] px-6 py-7 sm:px-8 lg:px-10"
          >
            <div
              class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
            >
              <div>
                <div class="flex items-center gap-3">
                  <span class="h-2 w-2 rounded-full bg-[#FFB600]"></span>

                  <p
                    class="text-[10px] font-bold tracking-[0.25em] text-[#FFB600]"
                  >
                    CONTINUING YOUR JOURNEY
                  </p>
                </div>

                <h2
                  class="mt-4 font-serif text-2xl font-semibold text-white sm:text-3xl"
                >
                  You don't have to start over.
                </h2>

                <p
                  class="mt-3 max-w-2xl text-sm leading-7 text-white/65 sm:text-base"
                >
                  You began by noticing
                  <span class="font-semibold text-white">
                    {{ feelingLabel }}
                  </span>
                  <template v-if="serviceLabel">
                    and explored
                    <span class="font-semibold text-white">
                      {{ serviceLabel }}
                    </span> </template
                  >. Now you can meet the people behind the care.
                </p>
              </div>

              <div
                class="shrink-0 rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
              >
                <p class="text-[9px] font-bold tracking-[0.22em] text-white/40">
                  YOU ARE HERE
                </p>

                <div class="mt-2 flex items-center gap-3">
                  <span class="h-2 w-2 rounded-full bg-[#008BCB]"></span>

                  <span class="text-sm font-semibold tracking-wide text-white">
                    Meet the team
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- =========================================================
           INTRO
      ========================================================== -->
      <section class="px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div
          class="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20"
        >
          <div>
            <div class="flex items-center gap-4">
              <span class="h-px w-10 bg-[#008BCB]"></span>

              <p class="text-xs font-bold tracking-[0.28em] text-[#008BCB]">
                MULTIDISCIPLINARY CARE
              </p>
            </div>

            <h2
              class="mt-5 font-serif text-4xl font-semibold leading-tight text-[#293487] sm:text-5xl"
            >
              Different areas of expertise,
              <span class="italic text-[#008BCB]"> one shared purpose. </span>
            </h2>
          </div>

          <div>
            <p class="text-lg leading-8 text-[#596274]">
              Foresight brings together professionals with different areas of
              clinical and psychosocial expertise.
            </p>

            <p class="mt-6 text-base leading-8 text-[#596274]">
              This multidisciplinary perspective allows concerns to be
              understood across psychological, psychiatric, behavioural,
              relational and social dimensions.
            </p>
          </div>
        </div>
      </section>

      <!-- =========================================================
           TEAM
      ========================================================== -->
      <section class="bg-[#f3f7fa] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div class="mx-auto max-w-[1200px]">
          <!-- MEMBER 01 -->
          <article
            class="overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(41,52,135,0.07)]"
          >
            <div class="grid lg:grid-cols-[0.42fr_0.58fr]">
              <div
                class="relative flex min-h-[300px] items-end overflow-hidden bg-[#293487] p-8 sm:p-10 lg:min-h-[430px] lg:p-12"
              >
                <div
                  class="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10"
                ></div>

                <div
                  class="absolute bottom-8 right-8 text-7xl font-serif text-white/5"
                >
                  01
                </div>

                <div class="relative">
                  <span
                    class="text-xs font-bold tracking-[0.25em] text-[#FFB600]"
                  >
                    PSYCHIATRY
                  </span>

                  <p
                    class="mt-5 font-serif text-3xl font-semibold text-white sm:text-4xl"
                  >
                    Psychiatric
                    <span class="italic text-[#FFB600]"> Care </span>
                  </p>
                </div>
              </div>

              <div class="p-8 sm:p-10 lg:p-12">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-full bg-[#293487] text-sm font-bold text-white"
                >
                  01
                </div>

                <h2
                  class="mt-7 font-serif text-3xl font-semibold text-[#293487] sm:text-4xl"
                >
                  Dr. Mahendra Shekhar
                </h2>

                <p
                  class="mt-3 text-sm font-semibold tracking-[0.12em] text-[#008BCB]"
                >
                  MD PSYCHIATRY
                </p>

                <div class="mt-7 h-px w-16 bg-[#FFB600]"></div>

                <p class="mt-6 text-base leading-8 text-[#596274]">
                  Psychiatric evaluation and clinical mental-health care.
                </p>
              </div>
            </div>
          </article>

          <!-- MEMBER 02 -->
          <article
            class="mt-6 overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(41,52,135,0.07)]"
          >
            <div class="grid lg:grid-cols-[0.42fr_0.58fr]">
              <div
                class="relative flex min-h-[300px] items-end overflow-hidden bg-[#008BCB] p-8 sm:p-10 lg:min-h-[430px] lg:p-12"
              >
                <div
                  class="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10"
                ></div>

                <div
                  class="absolute bottom-8 right-8 text-7xl font-serif text-white/5"
                >
                  02
                </div>

                <div class="relative">
                  <span
                    class="text-xs font-bold tracking-[0.25em] text-white/80"
                  >
                    CLINICAL PSYCHOLOGY
                  </span>

                  <p
                    class="mt-5 font-serif text-3xl font-semibold text-white sm:text-4xl"
                  >
                    Psychological
                    <span class="italic text-[#FFB600]"> Care </span>
                  </p>
                </div>
              </div>

              <div class="p-8 sm:p-10 lg:p-12">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-full bg-[#008BCB] text-sm font-bold text-white"
                >
                  02
                </div>

                <h2
                  class="mt-7 font-serif text-3xl font-semibold text-[#293487] sm:text-4xl"
                >
                  Dr. Mahesh Sanga
                </h2>

                <p
                  class="mt-3 text-sm font-semibold tracking-[0.12em] text-[#008BCB]"
                >
                  CLINICAL PSYCHOLOGIST
                </p>

                <span
                  class="mt-4 inline-flex rounded-full bg-[#f3f7fa] px-4 py-2 text-xs font-semibold text-[#293487]"
                >
                  10+ Years of Experience
                </span>

                <div class="mt-7 h-px w-16 bg-[#FFB600]"></div>

                <p class="mt-6 text-base leading-8 text-[#596274]">
                  Psychological assessment and psychological interventions.
                </p>
              </div>
            </div>
          </article>

          <!-- MEMBER 03 -->
          <article
            class="mt-6 overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(41,52,135,0.07)]"
          >
            <div class="grid lg:grid-cols-[0.42fr_0.58fr]">
              <div
                class="relative flex min-h-[300px] items-end overflow-hidden bg-[#FFB600] p-8 sm:p-10 lg:min-h-[430px] lg:p-12"
              >
                <div
                  class="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#293487]/10"
                ></div>

                <div
                  class="absolute bottom-8 right-8 text-7xl font-serif text-[#293487]/10"
                >
                  03
                </div>

                <div class="relative">
                  <span
                    class="text-xs font-bold tracking-[0.25em] text-[#293487]/70"
                  >
                    ADVANCED CLINICAL TRAINING
                  </span>

                  <p
                    class="mt-5 font-serif text-3xl font-semibold text-[#293487] sm:text-4xl"
                  >
                    Psychological &
                    <span class="italic text-[#008BCB]"> Psychosocial </span>
                  </p>
                </div>
              </div>

              <div class="p-8 sm:p-10 lg:p-12">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFB600] text-sm font-bold text-[#293487]"
                >
                  03
                </div>

                <h2
                  class="mt-7 font-serif text-3xl font-semibold text-[#293487] sm:text-4xl"
                >
                  Mr. Gurrapu Rakesh
                </h2>

                <p
                  class="mt-3 text-sm font-semibold tracking-[0.1em] text-[#008BCB]"
                >
                  M.PHIL. (NIMHANS) | PH.D.
                </p>

                <div class="mt-7 h-px w-16 bg-[#FFB600]"></div>

                <p class="mt-6 text-base leading-8 text-[#596274]">
                  Psychological and psychosocial interventions with advanced
                  clinical training.
                </p>
              </div>
            </div>
          </article>

          <!-- MEMBER 04 -->
          <article
            class="mt-6 overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(41,52,135,0.07)]"
          >
            <div class="grid lg:grid-cols-[0.42fr_0.58fr]">
              <div
                class="relative flex min-h-[300px] items-end overflow-hidden bg-[#293487] p-8 sm:p-10 lg:min-h-[430px] lg:p-12"
              >
                <div
                  class="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10"
                ></div>

                <div
                  class="absolute bottom-8 right-8 text-7xl font-serif text-white/5"
                >
                  04
                </div>

                <div class="relative">
                  <span
                    class="text-xs font-bold tracking-[0.25em] text-[#FFB600]"
                  >
                    PSYCHIATRIC SOCIAL WORK
                  </span>

                  <p
                    class="mt-5 font-serif text-3xl font-semibold text-white sm:text-4xl"
                  >
                    Psychosocial
                    <span class="italic text-[#FFB600]"> Support </span>
                  </p>
                </div>
              </div>

              <div class="p-8 sm:p-10 lg:p-12">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-full bg-[#293487] text-sm font-bold text-white"
                >
                  04
                </div>

                <h2
                  class="mt-7 font-serif text-3xl font-semibold text-[#293487] sm:text-4xl"
                >
                  Mr. Shiva Kumar Medhari
                </h2>

                <p
                  class="mt-3 text-sm font-semibold tracking-[0.1em] text-[#008BCB]"
                >
                  PSYCHIATRIC SOCIAL WORKER | MSW | PH.D.
                </p>

                <span
                  class="mt-4 inline-flex rounded-full bg-[#f3f7fa] px-4 py-2 text-xs font-semibold text-[#293487]"
                >
                  8 Years of Experience
                </span>

                <div class="mt-7 h-px w-16 bg-[#FFB600]"></div>

                <p class="mt-6 text-base leading-8 text-[#596274]">
                  Psychosocial assessment, counselling, family interventions and
                  recovery-oriented support.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- =========================================================
           TEAM PERSPECTIVE
      ========================================================== -->
      <section class="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div class="mx-auto max-w-[1100px] text-center">
          <div class="flex items-center justify-center gap-4">
            <span class="h-px w-10 bg-[#008BCB]"></span>

            <p class="text-xs font-bold tracking-[0.3em] text-[#293487]">
              ONE TEAM
            </p>

            <span class="h-px w-10 bg-[#008BCB]"></span>
          </div>

          <h2
            class="mt-6 font-serif text-4xl font-semibold leading-tight text-[#293487] sm:text-5xl lg:text-6xl"
          >
            Psychiatric.
            <span class="italic text-[#008BCB]">Psychological.</span>
            Psychosocial.
          </h2>

          <p
            class="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#596274] sm:text-lg"
          >
            Different professional perspectives come together to develop a
            broader understanding of individual and family concerns.
          </p>
        </div>
      </section>

      <!-- =========================================================
           NEXT STEP
      ========================================================== -->
      <section class="bg-[#f3f7fa] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div class="mx-auto max-w-[1100px]">
          <div
            class="relative overflow-hidden rounded-[2rem] bg-[#293487] px-7 py-10 sm:px-10 lg:px-12 lg:py-12"
          >
            <div
              class="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10"
            ></div>

            <div
              class="absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-[#008BCB]/10 blur-3xl"
            ></div>

            <div
              class="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"
            >
              <div>
                <p class="text-xs font-bold tracking-[0.3em] text-[#FFB600]">
                  NEXT: BEGIN
                </p>

                <h2
                  class="mt-4 max-w-2xl font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl"
                >
                  You know a little more about who you'll meet.
                  <span class="block italic text-[#FFB600]">
                    Now you can simply begin.
                  </span>
                </h2>

                <p
                  class="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base"
                >
                  You don't need to have everything figured out before reaching
                  out. The first conversation is a place to begin understanding
                  what you need.
                </p>
              </div>

              <RouterLink
                to="/contact"
                class="relative inline-flex shrink-0 items-center justify-center rounded-full bg-[#FFB600] px-8 py-4 text-sm font-semibold text-[#293487] transition duration-300 hover:-translate-y-0.5 hover:bg-white"
                @click="beginJourney"
              >
                Begin a Conversation
                <span class="ml-2">→</span>
              </RouterLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useForesightJourney } from "../composables/useForesightJourney";

const { state, setStage } = useForesightJourney();

const feelingLabels = {
  low: "feeling low",
  anxious: "feeling anxious",
  exhausted: "feeling exhausted",
  overwhelmed: "feeling overwhelmed",
  focus: "finding it difficult to focus",
  unsure: "something feeling off",
};

const serviceLabels = {
  individual: "Individual Counselling",
  family: "Family Counselling",
  couple: "Couple & Relationship Counselling",
  child: "Child & Adolescent Support",
  assessment: "Psychological Assessment",
  addiction: "De-addiction & Recovery Support",
};

const feelingLabel = computed(() => {
  if (!state.feeling) return "";
  return feelingLabels[state.feeling] || state.feeling;
});

const serviceLabel = computed(() => {
  if (!state.service) return "";
  return serviceLabels[state.service] || state.service;
});

const hasJourneyContext = computed(() =>
  Boolean(state.feeling || state.service),
);

onMounted(() => {
  setStage("connect");
});

const beginJourney = () => {
  setStage("begin");
};
</script>
