<template>
  <main class="overflow-hidden bg-[#f3f7fa] text-[#293487]">
    <!-- HERO -->
    <section
      class="relative overflow-hidden bg-[#202968] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-28"
    >
      <div
        class="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#008BCB]/30 blur-3xl"
      ></div>
      <div
        class="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-[#FFB600]/15 blur-3xl"
      ></div>

      <div class="relative mx-auto max-w-[1400px]">
        <div class="flex items-center gap-3">
          <span class="h-px w-12 bg-[#FFB600]"></span>
          <p
            class="text-xs font-bold uppercase tracking-[0.3em] text-[#FFB600]"
          >
            Foresight · Our approach
          </p>
        </div>

        <div class="mt-8 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p class="text-sm font-semibold text-[#69D0F2]">
              {{
                selectedService
                  ? selectedService.category
                  : "A PERSON-CENTRED PROCESS"
              }}
            </p>

            <h1
              class="mt-5 max-w-4xl font-serif text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl"
            >
              {{
                selectedService
                  ? selectedService.heroTitle
                  : "Understand the person. Not just the problem."
              }}
            </h1>

            <p
              class="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg"
            >
              {{
                selectedService
                  ? selectedService.description
                  : "Every person's experience is different. Our approach brings together careful listening, psychological understanding and practical support shaped around individual needs."
              }}
            </p>

            <div class="mt-9 flex flex-wrap gap-4">
              <a
                href="#process"
                class="inline-flex items-center gap-3 rounded-full bg-[#FFB600] px-7 py-4 text-sm font-bold text-[#202968] transition hover:-translate-y-0.5 hover:bg-white"
              >
                Explore the process <span>↓</span>
              </a>

              <RouterLink
                to="/contact"
                @click="continueToContact"
                class="inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Book an Appointment <span>→</span>
              </RouterLink>
            </div>
          </div>

          <!-- HERO SUMMARY -->
          <div
            class="relative rounded-[2rem] border border-white/15 bg-white/[0.07] p-7 backdrop-blur-sm sm:p-9"
          >
            <div class="flex items-center justify-between">
              <span
                class="text-xs font-bold uppercase tracking-[0.2em] text-[#69D0F2]"
              >
                Your support journey
              </span>
              <span
                class="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFB600] text-xl text-[#202968]"
              >
                ✳
              </span>
            </div>

            <p class="mt-7 font-serif text-3xl leading-tight text-white">
              {{
                selectedService
                  ? selectedService.cardTitle
                  : "A thoughtful way forward."
              }}
            </p>

            <p class="mt-4 text-sm leading-7 text-white/65">
              {{
                selectedService
                  ? selectedService.approach
                  : "Understand what is happening, explore what may be contributing, and identify the next helpful steps together."
              }}
            </p>

            <div class="mt-8 flex flex-wrap gap-2">
              <span
                v-for="tag in heroTags"
                :key="tag"
                class="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs text-white/85"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>

        <div class="mt-16 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <div
            v-for="(item, index) in heroSteps"
            :key="item"
            class="rounded-2xl border border-white/10 p-4 sm:p-5"
            :class="
              index === 1
                ? 'bg-[#008BCB]/20'
                : index === 2
                  ? 'bg-[#FFB600]/10'
                  : 'bg-white/[0.04]'
            "
          >
            <p class="text-xs font-bold text-[#69D0F2]">0{{ index + 1 }}</p>
            <p class="mt-3 text-sm font-semibold text-white">{{ item }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SELECTED SERVICE NAVIGATION -->
    <section class="bg-[#FFB600] px-6 py-5 sm:px-10 lg:px-16">
      <div
        class="mx-auto flex max-w-[1400px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <p
            class="text-[10px] font-bold uppercase tracking-[0.25em] text-[#293487]/65"
          >
            Your selected service
          </p>
          <p class="mt-1 text-lg font-bold text-[#293487]">
            {{
              selectedService ? selectedService.title : "Explore our approach"
            }}
          </p>
        </div>

        <RouterLink
          to="/services"
          class="inline-flex items-center gap-2 self-start rounded-full bg-[#293487] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#008BCB] sm:self-center"
        >
          Change service <span>→</span>
        </RouterLink>
      </div>
    </section>

    <!-- SERVICE-SPECIFIC INTRODUCTION -->
    <section class="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div
        class="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20"
      >
        <div>
          <p
            class="text-xs font-bold uppercase tracking-[0.25em] text-[#008BCB]"
          >
            The purpose
          </p>

          <h2
            class="mt-5 font-serif text-4xl font-semibold leading-tight sm:text-5xl"
          >
            {{
              selectedService
                ? selectedService.introTitle
                : "A space to make sense of your experiences."
            }}
          </h2>

          <div class="mt-7 h-1.5 w-24 rounded-full bg-[#FFB600]"></div>
        </div>

        <div class="rounded-[2rem] bg-white p-7 shadow-sm sm:p-10">
          <p class="text-base leading-8 text-[#596274]">
            {{
              selectedService
                ? selectedService.introText
                : "We begin by understanding the person's perspective, concerns, strengths and circumstances. Rather than assuming a cause, we explore relevant factors together and develop a considered way forward."
            }}
          </p>

          <div class="mt-8 grid gap-3 sm:grid-cols-2">
            <div
              v-for="(point, index) in focusPoints"
              :key="point"
              class="flex items-start gap-3 rounded-xl p-4"
              :class="index % 2 === 0 ? 'bg-[#e5f5fb]' : 'bg-[#fff5d8]'"
            >
              <span
                class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                :class="
                  index % 2 === 0
                    ? 'bg-[#008BCB] text-white'
                    : 'bg-[#FFB600] text-[#293487]'
                "
              >
                {{ index + 1 }}
              </span>
              <p class="pt-1 text-sm font-semibold leading-6 text-[#293487]">
                {{ point }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- COUNSELLING PROCESS -->
    <section
      id="process"
      class="bg-[#e6f0f6] px-6 py-16 sm:px-10 lg:px-16 lg:py-24"
    >
      <div class="mx-auto max-w-[1400px]">
        <div class="max-w-3xl">
          <p
            class="text-xs font-bold uppercase tracking-[0.25em] text-[#008BCB]"
          >
            {{ selectedService ? "How the service may work" : "How we work" }}
          </p>

          <h2
            class="mt-5 font-serif text-4xl font-semibold leading-tight sm:text-5xl"
          >
            {{
              selectedService
                ? selectedService.processTitle
                : "From the first conversation to meaningful progress."
            }}
          </h2>

          <p class="mt-5 max-w-2xl leading-8 text-[#596274]">
            {{
              selectedService
                ? selectedService.processIntro
                : "The process is collaborative, flexible and guided by the person's needs. These stages provide a framework rather than a fixed formula."
            }}
          </p>
        </div>

        <div class="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="(step, index) in currentProcess"
            :key="step.title"
            class="relative overflow-hidden rounded-[1.5rem] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
          >
            <div
              class="absolute right-0 top-0 h-24 w-24 rounded-bl-full opacity-80"
              :class="step.color"
            ></div>

            <div class="relative flex items-center justify-between">
              <span class="font-serif text-5xl font-semibold text-[#293487]/15">
                {{ String(index + 1).padStart(2, "0") }}
              </span>
              <span
                class="flex h-12 w-12 items-center justify-center rounded-full bg-[#293487] text-xl text-white"
              >
                {{ step.icon }}
              </span>
            </div>

            <h3 class="mt-7 text-xl font-bold text-[#293487]">
              {{ step.title }}
            </h3>

            <p class="mt-4 text-sm leading-7 text-[#596274]">
              {{ step.description }}
            </p>

            <div class="mt-6 h-1 w-12 rounded-full" :class="step.bar"></div>
          </article>
        </div>
      </div>
    </section>

    <!-- WHAT A SESSION CAN LOOK LIKE -->
    <section class="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div
        class="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div>
          <p
            class="text-xs font-bold uppercase tracking-[0.25em] text-[#008BCB]"
          >
            Inside the process
          </p>

          <h2
            class="mt-5 font-serif text-4xl font-semibold leading-tight sm:text-5xl"
          >
            {{
              selectedService
                ? selectedService.sessionTitle
                : "What does support look like?"
            }}
          </h2>

          <p class="mt-6 leading-8 text-[#596274]">
            {{
              selectedService
                ? selectedService.sessionIntro
                : "The details depend on the service, the person's needs and the goals agreed together. A typical meeting includes time to talk, reflect, explore and consider next steps."
            }}
          </p>

          <div class="mt-8 rounded-2xl bg-[#293487] p-6 text-white sm:p-8">
            <span
              class="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB600]"
            >
              Remember
            </span>
            <p class="mt-4 font-serif text-2xl leading-snug">
              {{
                selectedService
                  ? selectedService.takeaway
                  : "The plan is shaped with the person, not imposed on them."
              }}
            </p>
          </div>
        </div>

        <div class="space-y-4">
          <article
            v-for="(item, index) in sessionDetails"
            :key="item.title"
            class="flex gap-5 rounded-2xl border border-[#293487]/10 p-5 sm:p-6"
            :class="
              index === 0
                ? 'bg-[#e5f5fb]'
                : index === 1
                  ? 'bg-[#fff5d8]'
                  : index === 2
                    ? 'bg-[#e9e9fa]'
                    : 'bg-white'
            "
          >
            <span
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-bold"
              :class="
                index === 0
                  ? 'bg-[#008BCB] text-white'
                  : index === 1
                    ? 'bg-[#FFB600] text-[#293487]'
                    : 'bg-[#293487] text-white'
              "
            >
              {{ index + 1 }}
            </span>

            <div>
              <h3 class="font-bold text-[#293487]">{{ item.title }}</h3>
              <p class="mt-2 text-sm leading-7 text-[#596274]">
                {{ item.description }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- METHODS AND GOALS -->
    <section
      class="bg-[#293487] px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-24"
    >
      <div class="mx-auto max-w-[1400px]">
        <div class="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p
              class="text-xs font-bold uppercase tracking-[0.25em] text-[#FFB600]"
            >
              Tools for progress
            </p>

            <h2
              class="mt-5 font-serif text-4xl font-semibold leading-tight sm:text-5xl"
            >
              {{
                selectedService
                  ? selectedService.toolsTitle
                  : "Different tools. One thoughtful process."
              }}
            </h2>

            <p class="mt-6 max-w-xl leading-8 text-white/70">
              {{
                selectedService
                  ? selectedService.toolsIntro
                  : "Suitable approaches depend on the concern, context, preferences and professional assessment. No single method is right for everyone."
              }}
            </p>

            <div class="mt-8 flex flex-wrap gap-2">
              <span
                v-for="tool in currentTools"
                :key="tool"
                class="rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm text-white"
              >
                {{ tool }}
              </span>
            </div>
          </div>

          <div class="rounded-[2rem] bg-[#008BCB] p-7 sm:p-10">
            <p
              class="text-xs font-bold uppercase tracking-[0.2em] text-white/75"
            >
              The direction
            </p>

            <h3
              class="mt-5 font-serif text-3xl font-semibold leading-tight text-white"
            >
              {{
                selectedService
                  ? selectedService.outcomeTitle
                  : "Progress that matters in everyday life."
              }}
            </h3>

            <p class="mt-5 leading-8 text-white/85">
              {{
                selectedService
                  ? selectedService.outcomeText
                  : "The aim is to build understanding, identify useful strategies, review progress and adjust support when needed."
              }}
            </p>

            <div class="mt-8 border-t border-white/25 pt-6">
              <p class="text-sm font-semibold text-[#FFEBAB]">
                Progress is reviewed together, at a pace appropriate to the
                person.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PRINCIPLES -->
    <section class="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div class="mx-auto max-w-[1400px]">
        <div class="text-center">
          <p
            class="text-xs font-bold uppercase tracking-[0.25em] text-[#008BCB]"
          >
            What guides us
          </p>
          <h2 class="mt-5 font-serif text-4xl font-semibold sm:text-5xl">
            Professional care, with the person at the centre.
          </h2>
        </div>

        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="(principle, index) in principles"
            :key="principle.title"
            class="rounded-2xl p-6 sm:p-7"
            :class="
              index === 0
                ? 'bg-[#e5f5fb]'
                : index === 1
                  ? 'bg-[#fff5d8]'
                  : index === 2
                    ? 'bg-[#e9e9fa]'
                    : 'bg-[#dff3ed]'
            "
          >
            <p class="text-xs font-bold tracking-[0.2em] text-[#008BCB]">
              0{{ index + 1 }}
            </p>
            <h3 class="mt-5 text-lg font-bold text-[#293487]">
              {{ principle.title }}
            </h3>
            <p class="mt-3 text-sm leading-7 text-[#596274]">
              {{ principle.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- CHANGE SERVICE -->
    <section class="px-6 pb-10 sm:px-10 lg:px-16">
      <div
        class="mx-auto max-w-[1400px] rounded-[2rem] bg-[#fff0bf] p-7 sm:p-10 lg:p-12"
      >
        <div class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p
              class="text-xs font-bold uppercase tracking-[0.25em] text-[#008BCB]"
            >
              Continue exploring
            </p>
            <h2
              class="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl"
            >
              Your needs may change. Your support can adapt.
            </h2>
            <p class="mt-4 max-w-2xl leading-8 text-[#596274]">
              Explore another service to learn how its process and support
              options may differ. You can change your selection at any time.
            </p>
          </div>

          <RouterLink
            to="/services"
            class="inline-flex items-center justify-center gap-3 rounded-full bg-[#293487] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#008BCB]"
          >
            Explore all services →
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div
        class="mx-auto max-w-[1400px] overflow-hidden rounded-[2rem] bg-[#202968] px-7 py-12 text-center text-white sm:px-12 sm:py-16"
      >
        <p class="text-xs font-bold uppercase tracking-[0.3em] text-[#FFB600]">
          Take the first step
        </p>

        <h2
          class="mx-auto mt-5 max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl"
        >
          Start with a conversation.
        </h2>

        <p class="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
          You don't need to have everything figured out before reaching out. A
          first conversation can help clarify your concerns and possible next
          steps.
        </p>

        <RouterLink
          to="/contact"
          @click="continueToContact"
          class="mt-8 inline-flex items-center gap-3 rounded-full bg-[#FFB600] px-8 py-4 text-sm font-bold text-[#293487] transition hover:-translate-y-0.5 hover:bg-white"
        >
          Book an Appointment →
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useForesightJourney } from "../composables/useForesightJourney.js";

const route = useRoute();
const { state, setService, setStage } = useForesightJourney();

const serviceContent = {
  individual: {
    category: "INDIVIDUAL COUNSELLING",
    title: "Individual Counselling",
    heroTitle: "A space to understand yourself.",
    cardTitle: "One person. One conversation at a time.",
    description:
      "Professional support for emotional, behavioural and personal concerns.",
    approach:
      "Work collaboratively with a professional to understand concerns, recognise patterns, explore coping strategies and consider practical next steps.",
    introTitle: "Begin with your story.",
    introText:
      "Individual counselling offers a confidential professional space to discuss what has been difficult, what you would like to change and what matters to you. You do not need to arrive with a complete explanation. The initial work is about listening, understanding your circumstances and agreeing on what would be useful to explore.",
    processTitle: "How individual counselling may work.",
    processIntro:
      "Counselling is not simply being told what to do. It is a collaborative process. The professional helps you explore your concerns, develop a shared understanding and work towards goals that are meaningful to you.",
    process: [
      {
        title: "The first conversation",
        icon: "♡",
        description:
          "Discuss what brought you to counselling, what you have been experiencing and what you hope might change. You can ask questions about the process and share only what you feel ready to discuss.",
        color: "bg-[#e5f5fb]",
        bar: "bg-[#008BCB]",
      },
      {
        title: "Understand the concern",
        icon: "◎",
        description:
          "Explore when the difficulty began, what tends to make it better or worse, how it affects everyday life and which personal or environmental factors may be relevant.",
        color: "bg-[#fff5d8]",
        bar: "bg-[#FFB600]",
      },
      {
        title: "Explore patterns",
        icon: "⌁",
        description:
          "Where relevant, examine connections between thoughts, emotions, actions, relationships and coping habits. This can help identify patterns without blaming or judging yourself.",
        color: "bg-[#e9e9fa]",
        bar: "bg-[#7777ce]",
      },
      {
        title: "Agree on goals",
        icon: "↗",
        description:
          "Decide together what you would like to work towards. Goals might involve coping with stress, understanding emotions, changing a habit, improving communication or managing a life transition.",
        color: "bg-[#dff3ed]",
        bar: "bg-[#36a889]",
      },
      {
        title: "Practise useful strategies",
        icon: "✳",
        description:
          "Depending on your needs, sessions may introduce psychological techniques, reflection exercises, behavioural strategies, emotional regulation skills or practical problem-solving.",
        color: "bg-[#e5f5fb]",
        bar: "bg-[#008BCB]",
      },
      {
        title: "Review and adjust",
        icon: "✓",
        description:
          "Review what has been helpful, identify remaining difficulties and adjust the plan. The pace and frequency of sessions depend on your circumstances and agreed needs.",
        color: "bg-[#fff5d8]",
        bar: "bg-[#FFB600]",
      },
    ],
    sessionTitle: "What can happen in a session?",
    sessionIntro:
      "Sessions may look different over time. Early conversations often focus on understanding your concerns and history. Later sessions may focus more on agreed goals, practising strategies, reflecting on experiences and reviewing progress.",
    sessionDetails: [
      {
        title: "Talk through what is happening",
        description:
          "Describe a concern, a recent experience or something you have found difficult. The counsellor may ask questions to understand your perspective and circumstances.",
      },
      {
        title: "Explore feelings and patterns",
        description:
          "Consider how thoughts, emotions, behaviour and situations connect. You can work at a pace that feels manageable and discuss questions that arise.",
      },
      {
        title: "Identify a helpful next step",
        description:
          "Depending on the session, you may reflect on a new perspective, practise a skill, identify a small action or decide what needs further exploration.",
      },
      {
        title: "Review what you learned",
        description:
          "At an appropriate point, reflect on what felt useful and what remains difficult. The next session can build on this or take a different direction.",
      },
    ],
    takeaway:
      "You do not need to solve everything in one session. Understanding and change can take time.",
    toolsTitle: "Strategies chosen for your needs.",
    toolsIntro:
      "Methods are selected by a qualified professional in discussion with you, according to your concerns, preferences and assessment. Not every method is suitable for every person.",
    tools: [
      "Psychoeducation",
      "Coping strategies",
      "CBT-informed techniques",
      "Emotional regulation",
      "Problem-solving",
      "Behavioural strategies",
      "Goal setting",
      "Relapse prevention where relevant",
    ],
    outcomeTitle: "Build understanding. Develop practical skills.",
    outcomeText:
      "The aim may be to understand yourself more clearly, manage difficult experiences, develop more helpful coping strategies or work towards personal goals. Progress is individual and can be reviewed as counselling continues.",
    focusPoints: [
      "Understand concerns and personal context",
      "Identify strengths and existing coping skills",
      "Explore patterns without judgement",
      "Agree on meaningful goals",
    ],
    heroTags: ["Listening", "Understanding", "Personal goals"],
    heroSteps: ["Listen", "Explore", "Plan together", "Review"],
  },

  family: {
    category: "FAMILY COUNSELLING",
    title: "Family Counselling",
    heroTitle: "Understand the relationships around you.",
    cardTitle: "Make space for every perspective.",
    description: "Support for communication, parenting and family concerns.",
    approach:
      "Explore communication, family relationships, recurring conflicts and the circumstances affecting family members.",
    introTitle: "Understand the family as a system.",
    introText:
      "Family counselling may help family members explore communication difficulties, parenting concerns, changing roles or recurring conflicts. The process aims to understand different perspectives and identify more constructive ways to respond.",
    processTitle: "How family counselling may work.",
    processIntro:
      "The professional helps the family identify shared concerns, understand interaction patterns and agree on realistic goals. The structure depends on the family’s circumstances and the suitability of joint sessions.",
    process: [
      {
        title: "Clarify the concerns",
        icon: "♡",
        description:
          "Understand what has brought the family to counselling and how each participant experiences the situation.",
        color: "bg-[#e5f5fb]",
        bar: "bg-[#008BCB]",
      },
      {
        title: "Hear different perspectives",
        icon: "◎",
        description:
          "Create space to explore experiences, needs and expectations while maintaining respectful communication.",
        color: "bg-[#fff5d8]",
        bar: "bg-[#FFB600]",
      },
      {
        title: "Identify recurring patterns",
        icon: "⌁",
        description:
          "Explore how communication, reactions, roles and circumstances may contribute to repeated difficulties.",
        color: "bg-[#e9e9fa]",
        bar: "bg-[#7777ce]",
      },
      {
        title: "Agree on family goals",
        icon: "↗",
        description:
          "Identify practical goals such as clearer communication, more consistent expectations or constructive problem-solving.",
        color: "bg-[#dff3ed]",
        bar: "bg-[#36a889]",
      },
      {
        title: "Practise new responses",
        icon: "✳",
        description:
          "Where appropriate, practise listening, expressing needs, setting boundaries and responding to disagreements.",
        color: "bg-[#e5f5fb]",
        bar: "bg-[#008BCB]",
      },
      {
        title: "Review changes",
        icon: "✓",
        description:
          "Review what is changing and adapt the plan as the family's needs and circumstances evolve.",
        color: "bg-[#fff5d8]",
        bar: "bg-[#FFB600]",
      },
    ],
    sessionTitle: "What might a family session include?",
    sessionIntro:
      "A session may include listening to different experiences, clarifying a disagreement, exploring family routines or agreeing on practical ways to communicate. Joint participation is considered according to the circumstances and professional judgement.",
    sessionDetails: [
      {
        title: "Describe the main concern",
        description: "Clarify the difficulty and how it affects family life.",
      },
      {
        title: "Listen to perspectives",
        description:
          "Explore different experiences without assuming that one person's account explains the entire situation.",
      },
      {
        title: "Agree on practical changes",
        description:
          "Identify realistic ways to improve communication, expectations or everyday routines.",
      },
      {
        title: "Review together",
        description:
          "Discuss what has been helpful and what may need further attention.",
      },
    ],
    takeaway:
      "The goal is not to assign blame. It is to understand patterns and explore constructive change.",
    toolsTitle: "Communication and collaboration.",
    toolsIntro:
      "Approaches depend on the family's concerns, safety, needs and agreed goals.",
    tools: [
      "Active listening",
      "Communication skills",
      "Problem-solving",
      "Parenting support",
      "Psychoeducation",
      "Boundary setting",
      "Collaborative goals",
    ],
    outcomeTitle: "Create healthier ways to relate.",
    outcomeText:
      "The work may help family members understand one another, address recurring difficulties and develop more constructive communication. Outcomes vary by situation.",
    focusPoints: [
      "Understand each perspective",
      "Explore communication patterns",
      "Identify shared goals",
      "Practise constructive responses",
    ],
    heroTags: ["Communication", "Relationships", "Shared goals"],
    heroSteps: ["Listen", "Understand", "Collaborate", "Review"],
  },

  relationship: {
    category: "COUPLE & RELATIONSHIP COUNSELLING",
    title: "Couple & Relationship Counselling",
    heroTitle: "Create space for a different conversation.",
    cardTitle: "Understand the patterns between you.",
    description:
      "A structured space to understand relationship patterns and develop healthier communication.",
    approach:
      "Explore communication, expectations, conflict patterns, emotional connection and the goals each person brings to the relationship.",
    introTitle: "Move beyond the same argument.",
    introText:
      "Relationship counselling can provide a structured setting to explore recurring disagreements, communication difficulties, changing expectations and emotional distance. The process aims to understand interaction patterns and consider practical ways forward.",
    processTitle: "How relationship counselling may work.",
    processIntro:
      "The work depends on the concerns and goals involved. A professional may help clarify each person's perspective, identify repeated patterns and explore constructive ways of communicating and making decisions.",
    process: [
      {
        title: "Clarify the reason for coming",
        icon: "♡",
        description:
          "Explore what has been difficult and what each person hopes to understand or change.",
        color: "bg-[#e5f5fb]",
        bar: "bg-[#008BCB]",
      },
      {
        title: "Understand each perspective",
        icon: "◎",
        description:
          "Make room for different experiences, needs, expectations and interpretations of the situation.",
        color: "bg-[#fff5d8]",
        bar: "bg-[#FFB600]",
      },
      {
        title: "Recognise interaction cycles",
        icon: "⌁",
        description:
          "Explore how reactions and communication patterns can repeat or intensify disagreements.",
        color: "bg-[#e9e9fa]",
        bar: "bg-[#7777ce]",
      },
      {
        title: "Set shared goals",
        icon: "↗",
        description:
          "Clarify whether the focus is communication, trust, decisions, adjustment or understanding the relationship.",
        color: "bg-[#dff3ed]",
        bar: "bg-[#36a889]",
      },
      {
        title: "Practise communication",
        icon: "✳",
        description:
          "Where suitable, practise listening, expressing needs clearly and responding more constructively.",
        color: "bg-[#e5f5fb]",
        bar: "bg-[#008BCB]",
      },
      {
        title: "Review progress",
        icon: "✓",
        description:
          "Reflect on changes and determine which concerns need further work or a different form of support.",
        color: "bg-[#fff5d8]",
        bar: "bg-[#FFB600]",
      },
    ],
    sessionTitle: "What might a session include?",
    sessionIntro:
      "Sessions may involve exploring a recent disagreement, clarifying expectations, discussing recurring communication difficulties or practising ways to express concerns constructively.",
    sessionDetails: [
      {
        title: "Describe the relationship concern",
        description: "Identify what has been happening and why it matters.",
      },
      {
        title: "Understand the interaction",
        description:
          "Explore each person's experience and the sequence of responses around a disagreement.",
      },
      {
        title: "Practise a different conversation",
        description:
          "When appropriate, work on listening, expressing needs and considering alternative responses.",
      },
      {
        title: "Agree on next steps",
        description:
          "Clarify what each person wants to work on and review progress over time.",
      },
    ],
    takeaway:
      "The process supports understanding and constructive choices; it does not predetermine the outcome of a relationship.",
    toolsTitle: "Build clearer communication.",
    toolsIntro:
      "Approaches are selected according to the relationship concerns, suitability and professional assessment.",
    tools: [
      "Active listening",
      "Communication skills",
      "Conflict patterns",
      "Expectation setting",
      "Problem-solving",
      "Emotional awareness",
      "Shared goals",
    ],
    outcomeTitle: "Make space for more considered choices.",
    outcomeText:
      "Counselling may support clearer communication, better understanding of recurring patterns and more informed decisions about the relationship.",
    focusPoints: [
      "Explore each person's perspective",
      "Understand repeated disagreements",
      "Clarify expectations",
      "Agree on realistic goals",
    ],
    heroTags: ["Communication", "Connection", "Understanding"],
    heroSteps: ["Listen", "Explore", "Practise", "Review"],
  },

  "young-people": {
    category: "CHILD & ADOLESCENT SUPPORT",
    title: "Child & Adolescent Support",
    heroTitle: "Understand the young person behind the behaviour.",
    cardTitle: "Consider development and context.",
    description: "Support that considers young people and their context.",
    approach:
      "Explore emotional, behavioural, developmental, educational, relational and environmental factors relevant to the young person.",
    introTitle: "Look beyond what you can see.",
    introText:
      "Children and adolescents may communicate distress through changes in behaviour, school participation, sleep, friendships or family relationships. Understanding their developmental stage and environment helps guide appropriate support.",
    processTitle: "How child and adolescent support may work.",
    processIntro:
      "The process is adapted to the young person's age, needs, concerns and circumstances. Caregiver involvement may be helpful where appropriate, with attention to privacy, safety and developmental needs.",
    process: [
      {
        title: "Understand the concern",
        icon: "♡",
        description:
          "Explore what has changed, when it began and how it affects the young person's daily life.",
        color: "bg-[#e5f5fb]",
        bar: "bg-[#008BCB]",
      },
      {
        title: "Consider development",
        icon: "◎",
        description:
          "Understand the young person's developmental stage, strengths and individual circumstances.",
        color: "bg-[#fff5d8]",
        bar: "bg-[#FFB600]",
      },
      {
        title: "Explore different settings",
        icon: "⌁",
        description:
          "Consider relevant experiences at home, school, with peers and in other everyday environments.",
        color: "bg-[#e9e9fa]",
        bar: "bg-[#7777ce]",
      },
      {
        title: "Agree on support goals",
        icon: "↗",
        description:
          "Identify suitable goals with attention to the young person's needs and appropriate caregiver involvement.",
        color: "bg-[#dff3ed]",
        bar: "bg-[#36a889]",
      },
      {
        title: "Develop useful skills",
        icon: "✳",
        description:
          "Where suitable, support emotional expression, coping, routines, communication or behavioural skills.",
        color: "bg-[#e5f5fb]",
        bar: "bg-[#008BCB]",
      },
      {
        title: "Review progress",
        icon: "✓",
        description:
          "Review changes and adapt support as the young person's needs develop.",
        color: "bg-[#fff5d8]",
        bar: "bg-[#FFB600]",
      },
    ],
    sessionTitle: "What might support involve?",
    sessionIntro:
      "Depending on age and needs, the process may involve conversation, age-appropriate activities, information from relevant adults and discussion of everyday experiences.",
    sessionDetails: [
      {
        title: "Understand the young person's experience",
        description:
          "Explore concerns in a developmentally appropriate and respectful way.",
      },
      {
        title: "Consider the wider context",
        description:
          "Review relevant family, school, peer and environmental factors.",
      },
      {
        title: "Identify suitable strategies",
        description:
          "Select approaches that fit the young person's needs and developmental stage.",
      },
      {
        title: "Coordinate where appropriate",
        description:
          "Consider caregiver or other professional involvement when suitable and consistent with privacy and safety needs.",
      },
    ],
    takeaway:
      "Behaviour is information to understand, not a reason to label a young person.",
    toolsTitle: "Support matched to developmental needs.",
    toolsIntro:
      "Methods depend on age, assessment, context and professional judgement.",
    tools: [
      "Psychoeducation",
      "Emotional expression",
      "Behavioural strategies",
      "Coping skills",
      "Caregiver guidance",
      "School collaboration where appropriate",
    ],
    outcomeTitle: "Support growth in everyday settings.",
    outcomeText:
      "The aim is to understand difficulties and build appropriate skills and support around the young person.",
    focusPoints: [
      "Understand behaviour and emotions",
      "Consider development and context",
      "Identify strengths",
      "Plan suitable support",
    ],
    heroTags: ["Development", "Family context", "Wellbeing"],
    heroSteps: ["Listen", "Understand", "Support", "Review"],
  },

  assessment: {
    category: "PSYCHOLOGICAL ASSESSMENT",
    title: "Psychological Assessment",
    heroTitle: "Turn questions into clearer understanding.",
    cardTitle: "A structured way to explore psychological functioning.",
    description: "Assessment to understand psychological functioning.",
    approach:
      "Clarify the questions to be explored, gather relevant information and select suitable assessment methods.",
    introTitle: "Start with a clear question.",
    introText:
      "Psychological assessment may help explore particular aspects of cognitive, emotional, behavioural or personality-related functioning. The process depends on the referral question and should use methods appropriate to the individual and context.",
    processTitle: "How psychological assessment may work.",
    processIntro:
      "The professional clarifies the purpose, chooses appropriate methods, interprets findings in context and discusses relevant conclusions or recommendations.",
    process: [
      {
        title: "Clarify the purpose",
        icon: "♡",
        description:
          "Identify the question or concern the assessment is intended to explore.",
        color: "bg-[#e5f5fb]",
        bar: "bg-[#008BCB]",
      },
      {
        title: "Gather background",
        icon: "◎",
        description:
          "Collect relevant history and contextual information with appropriate consent.",
        color: "bg-[#fff5d8]",
        bar: "bg-[#FFB600]",
      },
      {
        title: "Choose suitable methods",
        icon: "⌁",
        description:
          "Select assessment tools or procedures appropriate to the question and individual.",
        color: "bg-[#e9e9fa]",
        bar: "bg-[#7777ce]",
      },
      {
        title: "Conduct the assessment",
        icon: "↗",
        description:
          "Complete the relevant procedures according to professional standards and test requirements.",
        color: "bg-[#dff3ed]",
        bar: "bg-[#36a889]",
      },
      {
        title: "Interpret findings",
        icon: "✳",
        description:
          "Consider results alongside relevant history, observations and contextual factors.",
        color: "bg-[#e5f5fb]",
        bar: "bg-[#008BCB]",
      },
      {
        title: "Discuss next steps",
        icon: "✓",
        description:
          "Explain findings and relevant recommendations within the assessment's scope.",
        color: "bg-[#fff5d8]",
        bar: "bg-[#FFB600]",
      },
    ],
    sessionTitle: "What might an assessment involve?",
    sessionIntro:
      "The format depends on the question being explored. It may include an interview, questionnaires, structured tasks, observations or other appropriate methods.",
    sessionDetails: [
      {
        title: "Discuss the referral question",
        description:
          "Clarify what needs to be understood and what the assessment can address.",
      },
      {
        title: "Review relevant information",
        description:
          "Consider history and contextual details relevant to the purpose.",
      },
      {
        title: "Complete selected procedures",
        description:
          "Undertake the chosen assessment methods under appropriate conditions.",
      },
      {
        title: "Discuss findings",
        description:
          "Explain the results, limitations and relevant next steps.",
      },
    ],
    takeaway:
      "An assessment is interpreted in context; no single test should automatically define a person.",
    toolsTitle: "Methods selected for the question.",
    toolsIntro:
      "Assessment tools must be appropriate to the purpose, individual, setting and professional requirements.",
    tools: [
      "Clinical interview",
      "Questionnaires",
      "Structured tasks",
      "Observations",
      "Relevant history",
      "Integrated interpretation",
    ],
    outcomeTitle: "A clearer basis for decisions.",
    outcomeText:
      "Findings may contribute to understanding and planning. Conclusions depend on the information available and the scope of the assessment.",
    focusPoints: [
      "Clarify the purpose",
      "Gather relevant information",
      "Use suitable methods",
      "Explain findings and limits",
    ],
    heroTags: ["Assessment", "Context", "Recommendations"],
    heroSteps: ["Clarify", "Assess", "Interpret", "Discuss"],
  },

  recovery: {
    category: "DE-ADDICTION & RECOVERY SUPPORT",
    title: "De-addiction & Recovery Support",
    heroTitle: "Build a considered path towards recovery.",
    cardTitle: "Understand patterns. Strengthen support.",
    description: "Psychological and psychosocial support around recovery.",
    approach:
      "Explore substance-use patterns, triggers, motivation, coping strategies and social context while considering whether medical or specialist care is also needed.",
    introTitle: "Understand the pattern, not just the behaviour.",
    introText:
      "Recovery can involve psychological, behavioural, medical and social factors. Support may help explore triggers, motivation, coping, relationships and recovery goals without reducing a person's experience to a single label.",
    processTitle: "How recovery support may work.",
    processIntro:
      "Support is individualised. A qualified professional may help identify goals, strengthen coping strategies and review progress. Medical advice or specialist treatment is important when indicated, especially where withdrawal or other health risks may be present.",
    process: [
      {
        title: "Explore the current situation",
        icon: "♡",
        description:
          "Discuss the concerns, patterns of use, effects on daily life and the person's priorities.",
        color: "bg-[#e5f5fb]",
        bar: "bg-[#008BCB]",
      },
      {
        title: "Understand triggers",
        icon: "◎",
        description:
          "Explore situations, emotions, routines and social factors that may be linked to use.",
        color: "bg-[#fff5d8]",
        bar: "bg-[#FFB600]",
      },
      {
        title: "Clarify motivation",
        icon: "⌁",
        description:
          "Explore the person's goals, concerns about change and readiness for different next steps.",
        color: "bg-[#e9e9fa]",
        bar: "bg-[#7777ce]",
      },
      {
        title: "Plan suitable support",
        icon: "↗",
        description:
          "Identify practical goals and consider medical or specialist support where appropriate.",
        color: "bg-[#dff3ed]",
        bar: "bg-[#36a889]",
      },
      {
        title: "Build coping strategies",
        icon: "✳",
        description:
          "Where suitable, practise ways to respond to triggers, manage cravings and seek support.",
        color: "bg-[#e5f5fb]",
        bar: "bg-[#008BCB]",
      },
      {
        title: "Review and maintain progress",
        icon: "✓",
        description:
          "Review goals, identify emerging difficulties and adjust the recovery support plan.",
        color: "bg-[#fff5d8]",
        bar: "bg-[#FFB600]",
      },
    ],
    sessionTitle: "What might recovery support involve?",
    sessionIntro:
      "Conversations may focus on motivation, triggers, coping strategies, recovery goals and the support available in daily life. The plan should reflect clinical needs and safety.",
    sessionDetails: [
      {
        title: "Discuss current concerns",
        description:
          "Explore patterns, effects on everyday life and goals for change.",
      },
      {
        title: "Identify triggers and supports",
        description:
          "Consider situations that increase risk as well as people and resources that may help.",
      },
      {
        title: "Develop a practical plan",
        description:
          "Identify appropriate coping strategies and professional support options.",
      },
      {
        title: "Review and adjust",
        description:
          "Discuss progress, difficulties and the need for further medical or specialist care.",
      },
    ],
    takeaway:
      "Recovery is not a test of willpower. Appropriate support and attention to safety matter.",
    toolsTitle: "Build a recovery support plan.",
    toolsIntro:
      "Psychological strategies may complement medical care, addiction treatment and other specialist services when needed.",
    tools: [
      "Motivational interviewing",
      "Trigger awareness",
      "Coping strategies",
      "Relapse prevention",
      "Psychoeducation",
      "Family support where appropriate",
    ],
    outcomeTitle: "Support safer, sustainable progress.",
    outcomeText:
      "The aim is to strengthen understanding, coping and access to appropriate support. Recovery pathways vary, and clinical or medical needs should be assessed by qualified professionals.",
    focusPoints: [
      "Understand patterns and triggers",
      "Explore motivation and goals",
      "Identify support options",
      "Review safety and progress",
    ],
    heroTags: ["Motivation", "Coping", "Recovery planning"],
    heroSteps: ["Understand", "Prepare", "Practise", "Review"],
  },
};

const generalContent = {
  process: [
    {
      title: "Understand",
      icon: "♡",
      description:
        "Listen to the person's experiences, concerns, expectations and goals.",
      color: "bg-[#e5f5fb]",
      bar: "bg-[#008BCB]",
    },
    {
      title: "Assess",
      icon: "◎",
      description:
        "Consider relevant psychological, behavioural, relational and contextual factors.",
      color: "bg-[#fff5d8]",
      bar: "bg-[#FFB600]",
    },
    {
      title: "Formulate",
      icon: "⌁",
      description:
        "Develop a working understanding of possible contributing and maintaining factors.",
      color: "bg-[#e9e9fa]",
      bar: "bg-[#7777ce]",
    },
    {
      title: "Plan",
      icon: "↗",
      description:
        "Agree on suitable goals and consider appropriate options for support.",
      color: "bg-[#dff3ed]",
      bar: "bg-[#36a889]",
    },
    {
      title: "Intervene",
      icon: "✳",
      description:
        "Use suitable, evidence-informed approaches based on individual needs.",
      color: "bg-[#e5f5fb]",
      bar: "bg-[#008BCB]",
    },
    {
      title: "Review",
      icon: "✓",
      description:
        "Review progress and adapt support as needs and circumstances evolve.",
      color: "bg-[#fff5d8]",
      bar: "bg-[#FFB600]",
    },
  ],
};

const routeService = computed(() => {
  const queryValue = route.query.service;
  const key = Array.isArray(queryValue) ? queryValue[0] : queryValue;
  return key && serviceContent[key] ? key : "";
});

const selectedService = computed(() => {
  const key = routeService.value || state.service;
  return key && serviceContent[key] ? serviceContent[key] : null;
});

watch(
  () => route.query.service,
  (value) => {
    const key = Array.isArray(value) ? value[0] : value;
    if (key && serviceContent[key]) {
      setService(key);
    }
  },
  { immediate: true },
);

onMounted(() => {
  setStage("connect");
});

const currentProcess = computed(
  () => selectedService.value?.process || generalContent.process,
);

const heroTags = computed(
  () =>
    selectedService.value?.heroTags || [
      "Understanding",
      "Assessment",
      "Support",
    ],
);

const heroSteps = computed(
  () =>
    selectedService.value?.heroSteps || [
      "Understand",
      "Assess",
      "Plan",
      "Review",
    ],
);

const focusPoints = computed(
  () =>
    selectedService.value?.focusPoints || [
      "Understand the person's context",
      "Explore relevant factors",
      "Identify strengths and needs",
      "Agree on suitable next steps",
    ],
);

const sessionDetails = computed(
  () =>
    selectedService.value?.sessionDetails || [
      {
        title: "Understand the concern",
        description:
          "Discuss the person's experience and relevant circumstances.",
      },
      {
        title: "Explore possible factors",
        description:
          "Consider relevant emotional, behavioural, relational and social patterns.",
      },
      {
        title: "Agree on goals",
        description: "Identify useful priorities and possible ways forward.",
      },
      {
        title: "Review progress",
        description:
          "Reflect on what is helpful and adapt support where appropriate.",
      },
    ],
);

const currentTools = computed(
  () =>
    selectedService.value?.tools || [
      "Listening",
      "Assessment",
      "Psychoeducation",
      "Goal setting",
      "Evidence-informed support",
      "Progress review",
    ],
);

const principles = [
  {
    title: "Individualised care",
    description:
      "Support reflects each person's concerns, strengths, goals and circumstances.",
  },
  {
    title: "Professional understanding",
    description:
      "Careful assessment helps guide decisions rather than relying on assumptions.",
  },
  {
    title: "Collaboration",
    description:
      "The person's perspective and preferences matter throughout the process.",
  },
  {
    title: "Evidence-informed practice",
    description:
      "Approaches are chosen thoughtfully according to the person's needs and professional judgement.",
  },
];

const continueToContact = () => {
  setStage("connect");
};
</script>
