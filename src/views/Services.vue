<template>
  <main class="min-h-screen overflow-hidden bg-[#eaf0fb] text-[#1f2942]">
    <!-- HERO -->
    <section class="relative overflow-hidden bg-[#293487]">
      <div
        class="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-[#008BCB]/30 blur-3xl"
      ></div>
      <div
        class="absolute -bottom-28 left-1/4 h-72 w-72 rounded-full bg-[#FFB600]/20 blur-3xl"
      ></div>

      <div
        class="relative mx-auto max-w-[1400px] px-6 pb-14 pt-24 sm:px-10 sm:pb-16 lg:px-16 lg:pb-20 lg:pt-28"
      >
        <div class="max-w-4xl">
          <div class="flex items-center gap-3">
            <span class="h-1 w-10 rounded-full bg-[#FFB600]"></span>
            <p class="text-xs font-bold tracking-[0.28em] text-[#FFB600]">
              OUR SERVICES
            </p>
          </div>

          <h1
            class="mt-5 font-serif text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-8xl"
          >
            Support that begins with
            <span class="block italic text-[#FFB600]">understanding.</span>
          </h1>

          <p
            class="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8"
          >
            Psychological and psychosocial support for individuals, couples and
            families, shaped around personal needs and circumstances.
          </p>

          <div class="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              class="inline-flex items-center gap-3 rounded-full bg-[#FFB600] px-6 py-3.5 text-sm font-bold text-[#293487] transition hover:-translate-y-0.5 hover:bg-white"
              @click="goToApproach"
            >
              Explore our approach <span aria-hidden="true">→</span>
            </button>

            <a
              href="#services-list"
              class="inline-flex items-center gap-3 rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View all services <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div class="mt-10 grid max-w-2xl grid-cols-3 gap-3 sm:gap-4">
            <div
              class="rounded-2xl border border-white/15 bg-white/10 p-3 sm:p-4"
            >
              <span
                class="block font-serif text-2xl font-semibold text-[#FFB600] sm:text-3xl"
                >01</span
              >
              <span class="mt-1 block text-xs leading-5 text-white/80"
                >Understand</span
              >
            </div>
            <div
              class="rounded-2xl border border-white/15 bg-white/10 p-3 sm:p-4"
            >
              <span
                class="block font-serif text-2xl font-semibold text-[#7DE0F5] sm:text-3xl"
                >02</span
              >
              <span class="mt-1 block text-xs leading-5 text-white/80"
                >Formulate</span
              >
            </div>
            <div
              class="rounded-2xl border border-white/15 bg-white/10 p-3 sm:p-4"
            >
              <span
                class="block font-serif text-2xl font-semibold text-[#D7D5FF] sm:text-3xl"
                >03</span
              >
              <span class="mt-1 block text-xs leading-5 text-white/80"
                >Support</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- INTRO -->
    <section
      class="bg-gradient-to-br from-[#d9f4ff] via-[#e8ebff] to-[#fff0c4] px-6 py-10 sm:px-10 lg:px-16 lg:py-14"
    >
      <div
        class="mx-auto grid max-w-[1200px] gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12"
      >
        <div>
          <div class="flex items-center gap-3">
            <span class="h-1 w-9 rounded-full bg-[#008BCB]"></span>
            <p class="text-xs font-bold tracking-[0.25em] text-[#008BCB]">
              HOW WE HELP
            </p>
          </div>

          <h2
            class="mt-4 font-serif text-3xl font-semibold leading-tight text-[#293487] sm:text-5xl"
          >
            Care that considers the
            <span class="italic text-[#008BCB]">whole context.</span>
          </h2>
        </div>

        <div class="rounded-3xl border border-white/70 bg-white/65 p-5 sm:p-7">
          <p class="text-base leading-7 text-[#46536c] sm:text-lg sm:leading-8">
            At Foresight, concerns are understood in their personal,
            behavioural, relational and social context.
          </p>
          <p class="mt-3 text-sm leading-7 text-[#596274]">
            Depending on individual needs, support may involve psychological
            interventions, assessment, psychoeducation, behavioural strategies,
            family interventions and psychosocial care.
          </p>
        </div>
      </div>

      <!-- JOURNEY CONTEXT -->
      <div
        v-if="selectedFeeling"
        class="mx-auto mt-6 max-w-[1200px] overflow-hidden rounded-3xl border border-[#008BCB]/20 bg-white/80 shadow-sm"
      >
        <div
          class="grid gap-5 p-5 sm:p-7 lg:grid-cols-[1fr_auto] lg:items-center"
        >
          <div>
            <p class="text-[10px] font-bold tracking-[0.22em] text-[#008BCB]">
              YOUR FORESIGHT JOURNEY
            </p>
            <h3
              class="mt-2 font-serif text-2xl font-semibold text-[#293487] sm:text-3xl"
            >
              You said:
              <span class="italic text-[#008BCB]">{{
                selectedFeeling.label
              }}</span>
            </h3>
            <p class="mt-2 max-w-2xl text-sm leading-6 text-[#596274]">
              You don't need to choose the right service on your own. This is a
              possible starting point, not a diagnosis or a substitute for
              professional assessment.
            </p>
          </div>

          <div class="rounded-2xl bg-[#e3f6ff] p-5 lg:min-w-[280px]">
            <p class="text-[9px] font-bold tracking-[0.2em] text-[#008BCB]">
              A POSSIBLE STARTING POINT
            </p>
            <p class="mt-2 font-serif text-2xl font-semibold text-[#293487]">
              {{ suggestedService.title }}
            </p>
            <p class="mt-1 text-xs leading-5 text-[#596274]">
              {{ suggestedService.short }}
            </p>
            <button
              type="button"
              class="mt-4 text-xs font-bold tracking-wide text-[#293487] hover:text-[#008BCB]"
              @click="scrollToService(suggestedService.id)"
            >
              EXPLORE THIS SUPPORT →
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section
      id="services-list"
      class="bg-[#eaf0fb] px-6 py-10 sm:px-10 lg:px-16 lg:py-14"
    >
      <div class="mx-auto max-w-[1400px]">
        <div
          class="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p class="text-xs font-bold tracking-[0.25em] text-[#008BCB]">
              AREAS OF SUPPORT
            </p>
            <h2
              class="mt-3 font-serif text-3xl font-semibold text-[#293487] sm:text-5xl"
            >
              Explore your options.
            </h2>
          </div>
          <p class="max-w-md text-sm leading-6 text-[#596274]">
            Choose a service to learn how the support process may work for you.
          </p>
        </div>

        <div class="grid gap-4">
          <article
            v-for="(service, index) in services"
            :id="service.id"
            :key="service.key"
            class="group relative scroll-mt-24 overflow-hidden rounded-2xl border p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 lg:p-8"
            :class="
              selectedService === service.key
                ? 'border-[#008BCB] bg-[#d8f4ff] ring-2 ring-[#008BCB]/30 shadow-lg'
                : service.cardClass
            "
          >
            <div
              class="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-40 blur-2xl transition group-hover:scale-125"
              :class="service.glowClass"
            ></div>

            <div
              class="relative grid gap-5 lg:grid-cols-[90px_0.85fr_1.15fr] lg:items-start lg:gap-8"
            >
              <div class="flex items-center gap-3 lg:block">
                <span
                  class="font-serif text-5xl font-semibold sm:text-6xl"
                  :class="service.numberClass"
                >
                  {{ service.number }}
                </span>
                <span
                  v-if="selectedService === service.key"
                  class="rounded-full bg-[#008BCB] px-3 py-1.5 text-[9px] font-bold tracking-wider text-white lg:mt-3 lg:inline-block"
                >
                  SELECTED
                </span>
              </div>

              <div>
                <span
                  class="inline-flex rounded-full px-3 py-1.5 text-[9px] font-bold tracking-[0.16em]"
                  :class="service.badgeClass"
                >
                  {{ service.category }}
                </span>

                <h3
                  class="mt-3 font-serif text-2xl font-semibold leading-tight text-[#293487] sm:text-3xl"
                >
                  {{ service.title }}
                </h3>
              </div>

              <div>
                <p
                  class="text-sm font-medium leading-7 text-[#39465e] sm:text-base"
                >
                  {{ service.description }}
                </p>
                <p class="mt-2 text-sm leading-6 text-[#596274]">
                  {{ service.details }}
                </p>

                <div
                  v-if="service.tags?.length"
                  class="mt-4 flex flex-wrap gap-2"
                >
                  <span
                    v-for="tag in service.tags"
                    :key="tag"
                    class="rounded-full border border-[#293487]/10 bg-white/80 px-3 py-1.5 text-xs font-medium text-[#293487]"
                  >
                    {{ tag }}
                  </span>
                </div>

                <button
                  type="button"
                  class="mt-5 inline-flex items-center gap-2 rounded-full bg-[#293487] px-5 py-3 text-xs font-bold tracking-wide text-white transition hover:bg-[#008BCB]"
                  @click="chooseService(service)"
                >
                  {{
                    selectedService === service.key
                      ? "VIEW YOUR APPROACH"
                      : "EXPLORE THIS SUPPORT"
                  }}
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- APPROACH PREVIEW -->
    <section
      class="bg-gradient-to-br from-[#fff0c4] via-[#e2f5ff] to-[#e7e9ff] px-6 py-10 sm:px-10 lg:px-16 lg:py-14"
    >
      <div
        class="mx-auto max-w-[1200px] overflow-hidden rounded-3xl bg-[#293487] p-6 sm:p-9 lg:p-12"
      >
        <div
          class="grid items-center gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10"
        >
          <div>
            <p class="text-xs font-bold tracking-[0.28em] text-[#FFB600]">
              OUR APPROACH
            </p>
            <h2
              class="mt-3 font-serif text-3xl font-semibold leading-tight text-white sm:text-5xl"
            >
              Understand.
              <span class="italic text-[#FFB600]">Formulate.</span>
              Intervene. Grow.
            </h2>
            <p class="mt-4 text-sm leading-7 text-white/75">
              Discover how we move from understanding a concern to planning
              thoughtful, individualised support.
            </p>

            <button
              type="button"
              class="mt-6 inline-flex items-center gap-3 rounded-full bg-[#FFB600] px-6 py-3.5 text-sm font-bold text-[#293487] transition hover:-translate-y-0.5 hover:bg-white"
              @click="goToApproach"
            >
              Explore our approach <span aria-hidden="true">→</span>
            </button>
          </div>

          <div class="grid gap-3 sm:grid-cols-2">
            <div
              v-for="(stage, index) in approachStages"
              :key="stage.title"
              class="rounded-2xl border border-white/10 p-5"
              :class="['bg-white/10', index === 1 ? 'sm:translate-y-4' : '']"
            >
              <span
                class="font-serif text-3xl font-semibold"
                :class="index % 2 === 0 ? 'text-[#FFB600]' : 'text-[#7DE0F5]'"
              >
                0{{ index + 1 }}
              </span>
              <p class="mt-2 text-base font-semibold text-white">
                {{ stage.title }}
              </p>
              <p class="mt-1 text-xs leading-5 text-white/65">
                {{ stage.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="bg-[#dceeff] px-6 py-10 sm:px-10 lg:px-16 lg:py-14">
      <div
        class="mx-auto max-w-[1000px] rounded-3xl border border-white/80 bg-white/55 px-5 py-8 text-center sm:px-10 sm:py-10"
      >
        <div class="flex items-center justify-center gap-3">
          <span class="h-1 w-8 rounded-full bg-[#008BCB]"></span>
          <p class="text-xs font-bold tracking-[0.25em] text-[#293487]">
            TAKE THE FIRST STEP
          </p>
          <span class="h-1 w-8 rounded-full bg-[#FFB600]"></span>
        </div>

        <h2
          class="mt-4 font-serif text-3xl font-semibold leading-tight text-[#293487] sm:text-5xl"
        >
          Find the right space for
          <span class="italic text-[#008BCB]">your concerns.</span>
        </h2>

        <p
          class="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#596274] sm:text-base"
        >
          Tell us what you're experiencing and our team can help you understand
          the available support.
        </p>

        <RouterLink
          to="/contact"
          class="mt-6 inline-flex items-center gap-3 rounded-full bg-[#293487] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#008BCB]"
          @click="goToContact"
        >
          Book an Appointment <span aria-hidden="true">→</span>
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useForesightJourney } from "../composables/useForesightJourney.js";

const router = useRouter();
const { state, setService, setStage } = useForesightJourney();

onMounted(() => {
  setStage("explore");
});

const feelingLabels = {
  low: { label: "I feel low", service: "individual" },
  anxious: { label: "I feel anxious", service: "individual" },
  exhausted: { label: "I'm exhausted", service: "individual" },
  overwhelmed: { label: "I'm overwhelmed", service: "individual" },
  focus: { label: "I can't focus", service: "individual" },
  unsure: { label: "Something feels off", service: "individual" },
};

const services = [
  {
    key: "individual",
    id: "individual-support",
    number: "01",
    category: "INDIVIDUAL SUPPORT",
    title: "Individual Counselling",
    short: "A space to explore emotional, behavioural and personal concerns.",
    description:
      "Professional support for emotional, behavioural and personal concerns.",
    details:
      "Interventions may include CBT-informed techniques, psychoeducation, emotional regulation, behavioural strategies, problem-solving and coping-skills training, depending on individual needs.",
    badgeClass: "bg-[#293487] text-white",
    cardClass: "border-[#c9d4fa] bg-gradient-to-r from-white to-[#e8ebff]",
    numberClass: "text-[#293487]/35",
    glowClass: "bg-[#7b83ff]",
  },
  {
    key: "family",
    id: "family-support",
    number: "02",
    category: "FAMILY SUPPORT",
    title: "Family Counselling",
    short: "Support for communication, parenting and family concerns.",
    description:
      "Understanding relationships, communication and family dynamics.",
    details:
      "We work with families experiencing communication difficulties, parenting concerns, interpersonal conflicts, behavioural concerns and adjustment difficulties.",
    badgeClass: "bg-[#008BCB] text-white",
    cardClass: "border-[#b9e9f7] bg-gradient-to-r from-white to-[#ddf7ff]",
    numberClass: "text-[#008BCB]/45",
    glowClass: "bg-[#4ed8f4]",
  },
  {
    key: "relationship",
    id: "relationship-support",
    number: "03",
    category: "RELATIONSHIPS",
    title: "Couple & Relationship Counselling",
    short: "Support for communication and relationship patterns.",
    description:
      "A structured space to understand relationship patterns and develop healthier communication.",
    details:
      "Sessions may focus on communication, conflict resolution, emotional connection, expectations and relationship adjustment.",
    badgeClass: "bg-[#FFB600] text-[#293487]",
    cardClass: "border-[#f3d98d] bg-gradient-to-r from-white to-[#fff4d4]",
    numberClass: "text-[#d49b00]/55",
    glowClass: "bg-[#ffdc6c]",
  },
  {
    key: "young-people",
    id: "young-people-support",
    number: "04",
    category: "YOUNG PEOPLE",
    title: "Child & Adolescent Support",
    short: "Support that considers young people and their context.",
    description:
      "Children and adolescents may express emotional difficulties through changes in behaviour, academics, relationships or social functioning.",
    details:
      "Our approach considers the child, family and environmental context while developing appropriate psychological and psychosocial interventions.",
    badgeClass: "bg-[#6754b8] text-white",
    cardClass: "border-[#d8ccff] bg-gradient-to-r from-white to-[#eee9ff]",
    numberClass: "text-[#6754b8]/40",
    glowClass: "bg-[#b6a1ff]",
  },
  {
    key: "assessment",
    id: "assessment-support",
    number: "05",
    category: "ASSESSMENT",
    title: "Psychological Assessment",
    short: "Assessment to understand psychological functioning.",
    description:
      "Professional psychological assessment can help develop a clearer understanding of cognitive, emotional, behavioural and personality-related functioning.",
    details:
      "Assessments are selected according to the individual's clinical requirements.",
    badgeClass: "bg-[#008BCB] text-white",
    cardClass: "border-[#b9e9f7] bg-gradient-to-r from-white to-[#e1f8f8]",
    numberClass: "text-[#008BCB]/40",
    glowClass: "bg-[#7de0f5]",
  },
  {
    key: "recovery",
    id: "recovery-support",
    number: "06",
    category: "RECOVERY SUPPORT",
    title: "De-addiction & Recovery Support",
    short: "Psychological and psychosocial support around recovery.",
    description:
      "Substance-use difficulties require an understanding of the psychological, behavioural and social factors involved in addiction.",
    details:
      "The focus is on developing insight, motivation, coping skills and sustainable recovery strategies. Medical care may also be needed depending on individual circumstances.",
    tags: [
      "Motivational Interviewing",
      "Relapse Prevention",
      "CBT-informed Interventions",
      "Craving & Trigger Management",
      "Family Interventions",
      "Psychoeducation",
    ],
    badgeClass: "bg-[#FFB600] text-[#293487]",
    cardClass: "border-[#f3d98d] bg-gradient-to-r from-white to-[#fff0d7]",
    numberClass: "text-[#d49b00]/50",
    glowClass: "bg-[#ffcf70]",
  },
];

const approachStages = [
  {
    title: "Understand",
    description: "Explore the concern and individual context.",
  },
  {
    title: "Assess",
    description: "Consider relevant psychological and psychosocial factors.",
  },
  {
    title: "Formulate",
    description: "Develop a working understanding of contributing patterns.",
  },
  {
    title: "Intervene",
    description: "Plan appropriate, evidence-informed support.",
  },
];

const selectedFeeling = computed(() => {
  const feeling = state.feeling;
  return feeling ? feelingLabels[feeling] || null : null;
});

const suggestedService = computed(() => {
  const key = selectedFeeling.value?.service || "individual";
  return services.find((service) => service.key === key) || services[0];
});

const selectedService = computed(() => state.service || "");

const scrollToService = (serviceId) => {
  document.getElementById(serviceId)?.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
};

const chooseService = (service) => {
  setService(service.key);
  setStage("connect");

  router.push({
    path: "/approach",
    query: { service: service.key },
  });
};

const goToApproach = () => {
  const serviceKey = selectedService.value || suggestedService.value.key;

  setService(serviceKey);
  setStage("connect");

  router.push({
    path: "/approach",
    query: { service: serviceKey },
  });
};

const goToContact = () => {
  setStage("connect");
};
</script>
