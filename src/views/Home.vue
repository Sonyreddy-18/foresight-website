<template>
  <div class="min-h-screen overflow-x-hidden bg-[#f7f6f2] text-[#263b35]">
    <!-- CINEMATIC HERO — KEPT -->
    <section
      class="relative h-[100svh] min-h-[680px] overflow-hidden bg-[#263b35]"
    >
      <div
        v-for="(slide, index) in heroSlides"
        :key="slide.image"
        class="absolute inset-0 transition-opacity duration-[1800ms] ease-in-out"
        :class="activeHero === index ? 'opacity-100' : 'opacity-0'"
      >
        <img
          :src="slide.image"
          :alt="slide.alt"
          class="hero-image absolute inset-0 h-full w-full object-cover"
          :class="activeHero === index ? 'hero-image-active' : ''"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#071411]/55 via-[#071411]/28 to-[#071411]/5"
        ></div>
        <div
          class="absolute inset-0 bg-gradient-to-t from-[#071411]/45 via-[#071411]/8 to-transparent"
        ></div>
      </div>

      <div
        class="absolute left-0 right-0 top-0 z-20 px-6 pt-28 sm:px-10 lg:px-16"
      >
        <div class="flex items-center justify-between">
          <div
            class="text-[10px] font-semibold tracking-[0.28em] text-white/80 uppercase"
          >
            Psychological & Psychosocial Care
          </div>
          <div
            class="hidden text-[10px] tracking-[0.25em] text-white/60 uppercase sm:block"
          >
            Hyderabad · India
          </div>
        </div>
      </div>

      <div
        class="relative z-10 mx-auto flex h-full max-w-[1500px] items-end px-6 pb-16 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24"
      >
        <div class="w-full">
          <div class="hero-content-panel max-w-5xl">
            <p
              class="mb-5 text-[10px] font-semibold tracking-[0.32em] text-white/75 uppercase"
            >
              FORESIGHT
            </p>
            <div class="hero-copy-wrap">
              <h1
                :key="activeHero"
                class="hero-copy text-[clamp(3.5rem,8vw,8.5rem)] font-light leading-[0.88] tracking-[-0.065em] text-[#fffdf8]"
              >
                {{ heroSlides[activeHero].title }}
              </h1>
            </div>
            <p
              :key="`description-${activeHero}`"
              class="hero-description mt-7 max-w-xl text-base leading-7 text-[#fffdf8]/90 sm:text-lg"
            >
              {{ heroSlides[activeHero].description }}
            </p>
            <div class="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="#appointment"
                class="group inline-flex items-center gap-5 bg-white px-6 py-4 text-[10px] font-semibold tracking-[0.2em] text-[#263b35] uppercase transition duration-500 hover:bg-[#c4ad91] hover:text-white"
              >
                Book an Appointment
                <span
                  class="text-base transition-transform duration-500 group-hover:translate-x-2"
                  >→</span
                >
              </a>
              <a
                href="#services"
                class="group inline-flex items-center gap-3 text-[10px] font-semibold tracking-[0.2em] text-white uppercase"
              >
                Explore Foresight
                <span
                  class="h-px w-7 bg-white transition-all duration-500 group-hover:w-12"
                ></span>
              </a>
            </div>
          </div>

          <div
            class="mt-14 flex items-end justify-between border-t border-white/20 pt-5"
          >
            <p
              class="max-w-xs text-[9px] leading-5 tracking-[0.16em] text-white/55 uppercase"
            >
              Clinical understanding.<br />Human connection.
            </p>
            <div
              class="hidden items-center gap-3 text-[9px] tracking-[0.2em] text-white/60 uppercase sm:flex"
            >
              Scroll to explore
              <span class="relative h-8 w-px overflow-hidden bg-white/25">
                <span
                  class="hero-scroll-line absolute left-0 top-0 h-4 w-px bg-white"
                ></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- NEW 01 — EMOTIONAL CHECK-IN -->
    <section
      id="check-in"
      class="bg-gradient-to-b from-[#f7f6f2] to-[#ecefe9] px-6 py-12 sm:px-10 lg:px-16 lg:py-16"
    >
      <div class="mx-auto max-w-[1450px]">
        <div class="grid gap-12 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p
              class="text-[10px] font-semibold tracking-[0.3em] text-[#9a7d60] uppercase"
            >
              01 / CHECK IN
            </p>
            <p class="mt-5 max-w-xs text-sm leading-7 text-[#687671]">
              You don't need to know exactly what is wrong before reaching out.
            </p>
          </div>

          <div>
            <h2
              class="max-w-5xl text-[clamp(3rem,6vw,6.5rem)] font-light leading-[0.92] tracking-[-0.06em]"
            >
              How are you,<br />
              <span class="text-[#9a7d60]">really?</span>
            </h2>

            <div class="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <button
                v-for="feeling in feelings"
                :key="feeling.id"
                type="button"
                class="feeling-card group relative text-left"
                :class="
                  selectedFeeling === feeling.id ? 'feeling-card-active' : ''
                "
                :aria-pressed="selectedFeeling === feeling.id"
                @click="selectFeeling(feeling.id)"
              >
                <span
                  class="absolute right-5 top-5 text-[9px] font-semibold tracking-[0.18em] uppercase opacity-0 transition duration-300"
                  :class="
                    selectedFeeling === feeling.id
                      ? 'opacity-100 text-white/70'
                      : ''
                  "
                  >Selected</span
                >
                <span class="text-2xl">{{ feeling.icon }}</span>
                <span
                  class="mt-8 block text-xl font-light tracking-[-0.03em]"
                  >{{ feeling.label }}</span
                >
                <span class="mt-2 block text-xs leading-5 text-[#687671]">{{
                  feeling.short
                }}</span>
              </button>
            </div>

            <transition name="soft-fade" mode="out-in">
              <div
                v-if="selectedFeeling"
                :key="selectedFeeling"
                class="mt-5 border-t border-[#263b35]/15 pt-8"
              >
                <p
                  class="text-[10px] font-semibold tracking-[0.2em] text-[#9a7d60] uppercase"
                >
                  A gentle place to begin
                </p>
                <p
                  class="mt-4 max-w-2xl text-2xl font-light leading-tight tracking-[-0.03em] sm:text-3xl"
                >
                  {{ currentFeeling.message }}
                </p>
                <div class="mt-7 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    class="journey-next-button"
                    @click="continueFromFeeling"
                  >
                    Continue with this feeling <span>→</span>
                  </button>
                  <button
                    type="button"
                    class="text-[10px] font-semibold tracking-[0.2em] text-[#687671] uppercase underline decoration-[#9a7d60]/50 underline-offset-4 transition hover:text-[#263b35]"
                    @click="selectedFeeling = null"
                  >
                    Clear selection
                  </button>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT FORESIGHT — KEPT -->
    <section id="about" class="bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
      <div class="mx-auto max-w-[1450px]">
        <div class="grid gap-12 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p
              class="text-[10px] font-semibold tracking-[0.3em] text-[#9a7d60] uppercase"
            >
              02 / ABOUT FORESIGHT
            </p>
          </div>
          <div>
            <h2
              class="max-w-5xl text-[clamp(2.8rem,5.7vw,6.5rem)] font-light leading-[0.94] tracking-[-0.06em]"
            >
              A Professional Space for
              <span class="font-normal text-[#9a7d60]">
                Understanding and Change.
              </span>
            </h2>
            <p class="mt-10 max-w-3xl text-base leading-8 text-[#62716c]">
              Every person has a story behind their thoughts, emotions and
              behaviour.
            </p>
            <div
              class="mt-10 grid gap-8 border-t border-[#263b35]/15 pt-8 md:grid-cols-2"
            >
              <p class="text-sm leading-7 text-[#62716c]">
                At Foresight, we look beyond the presenting concern to
                understand the factors influencing an individual's emotional
                wellbeing, behaviour and relationships.
              </p>
              <div>
                <p
                  class="text-[10px] font-semibold tracking-[0.2em] text-[#9a7d60] uppercase"
                >
                  Our work is guided by
                </p>
                <p class="mt-4 text-sm leading-7 text-[#62716c]">
                  Clinical Assessment <span class="text-[#9a7d60]">•</span> Case
                  Understanding
                  <span class="text-[#9a7d60]">•</span> Evidence-Informed
                  Interventions <span class="text-[#9a7d60]">•</span>
                  Psychosocial Support
                </p>
              </div>
            </div>
            <p class="mt-8 max-w-3xl text-sm leading-7 text-[#62716c]">
              We provide a confidential and respectful environment where
              individuals and families can explore their concerns and work
              towards meaningful change.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES — KEPT -->
    <section
      id="services"
      class="bg-[#eef1ed] px-6 py-16 sm:px-10 lg:px-16 lg:py-20"
    >
      <div class="mx-auto max-w-[1450px]">
        <div
          class="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p
              class="text-[10px] font-semibold tracking-[0.3em] text-[#9a7d60] uppercase"
            >
              03 / OUR SERVICES
            </p>
            <h2
              class="mt-5 text-[clamp(3rem,6vw,6.5rem)] font-light leading-[0.9] tracking-[-0.06em]"
            >
              Professional <span class="text-[#9a7d60]">support.</span>
            </h2>
          </div>
          <p class="max-w-md text-sm leading-7 text-[#62716c]">
            Professional psychological and psychosocial support for individuals,
            couples and families.
          </p>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <a
            v-for="(service, index) in services"
            :key="service.title"
            :href="service.href"
            class="service-card group relative min-h-[430px] overflow-hidden bg-[#263b35]"
          >
            <img
              :src="service.image"
              :alt="service.title"
              class="absolute inset-0 h-full w-full object-cover transition duration-[1000ms] ease-out group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-[#101c19]/90 via-[#101c19]/30 to-transparent"
            ></div>
            <div
              class="absolute inset-0 bg-[#263b35]/10 transition duration-500 group-hover:bg-[#263b35]/30"
            ></div>
            <div
              class="absolute right-6 top-6 text-[10px] font-semibold tracking-[0.25em] text-white/70"
            >
              0{{ index + 1 }}
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
              <div
                class="mb-4 h-px w-10 bg-[#c4ad91] transition-all duration-500 group-hover:w-20"
              ></div>
              <h3
                class="max-w-lg text-[clamp(2.1rem,4vw,4.3rem)] font-light leading-[0.95] tracking-[-0.05em] text-white"
              >
                {{ service.title }}
              </h3>
              <div
                class="mt-4 flex max-h-0 max-w-xl items-end justify-between overflow-hidden opacity-0 transition-all duration-700 group-hover:max-h-40 group-hover:opacity-100"
              >
                <p class="max-w-md text-sm leading-6 text-white/75">
                  {{ service.description }}
                </p>
                <span
                  class="ml-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/40 text-lg text-white transition duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#263b35]"
                  >→</span
                >
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- NEW 02 — TAKE A BREATH -->
    <section
      id="breathe"
      class="breath-section relative overflow-hidden bg-[#263b35] px-6 py-28 text-white sm:px-10 lg:px-16 lg:py-36"
    >
      <div class="breath-orb"></div>
      <div
        class="relative mx-auto grid max-w-[1450px] items-center gap-16 lg:grid-cols-[0.45fr_0.55fr]"
      >
        <div>
          <p
            class="text-[10px] font-semibold tracking-[0.3em] text-[#c4ad91] uppercase"
          >
            04 / TAKE A BREATH
          </p>
          <h2
            class="mt-6 max-w-2xl text-[clamp(3rem,6vw,6.5rem)] font-light leading-[0.9] tracking-[-0.06em]"
          >
            You can pause<br /><span class="text-[#c4ad91]">here.</span>
          </h2>
          <p class="mt-7 max-w-xl text-base leading-8 text-white/70">
            {{ breathingContext }}
          </p>
          <button
            type="button"
            class="mt-9 border border-white/25 px-6 py-4 text-[10px] font-semibold tracking-[0.2em] uppercase transition hover:bg-white hover:text-[#263b35]"
            @click="toggleBreathing"
          >
            {{ breathingActive ? "Pause breathing" : "Start breathing" }}
          </button>
          <button
            v-if="breathingActive"
            type="button"
            class="ml-3 mt-9 border border-white/10 px-6 py-4 text-[10px] font-semibold tracking-[0.2em] text-white/60 uppercase transition hover:border-white/30 hover:text-white"
            @click="resetBreathing"
          >
            Reset
          </button>
          <button
            type="button"
            class="mt-4 block text-[10px] font-semibold tracking-[0.2em] text-[#c4ad91] uppercase underline underline-offset-4"
            @click="continueFromBreath"
          >
            {{
              breathingActive
                ? "Continue when you are ready →"
                : "Continue to the next step →"
            }}
          </button>
        </div>

        <div class="flex min-h-[390px] items-center justify-center">
          <div
            class="relative flex h-[300px] w-[300px] items-center justify-center rounded-full border border-white/10 sm:h-[360px] sm:w-[360px]"
          >
            <div
              class="breathing-circle"
              :class="{ 'breathing-active': breathingActive }"
            ></div>
            <div class="relative z-10 text-center">
              <span
                class="block text-[10px] tracking-[0.25em] text-white/50 uppercase"
                >{{ breathingActive ? breathPhase : "Ready" }}</span
              >
              <span class="mt-3 block text-2xl font-light">{{
                breathingActive ? breathInstruction : "Take your time."
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- NEW 03 — MIND JOURNEY -->
    <section
      id="journey"
      class="overflow-hidden bg-[#f7f6f2] px-6 py-16 sm:px-10 lg:px-16 lg:py-20"
    >
      <div class="mx-auto max-w-[1450px]">
        <div class="grid gap-12 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p
              class="text-[10px] font-semibold tracking-[0.3em] text-[#9a7d60] uppercase"
            >
              05 / THE MIND JOURNEY
            </p>
          </div>
          <div>
            <h2
              class="text-[clamp(3rem,6vw,6.5rem)] font-light leading-[0.9] tracking-[-0.06em]"
            >
              From feeling stuck<br />to
              <span class="text-[#9a7d60]">moving forward.</span>
            </h2>
            <div class="journey-track mt-16">
              <button
                v-for="(item, index) in journey"
                :key="item.title"
                type="button"
                class="journey-step group"
                :class="{ 'journey-step-active': journeyStep === index }"
                @click="journeyStep = index"
              >
                <span class="journey-number">0{{ index + 1 }}</span>
                <span class="journey-title">{{ item.title }}</span>
                <span class="journey-dot"></span>
              </button>
            </div>
            <div class="mt-10 min-h-[150px] border-t border-[#263b35]/15 pt-8">
              <transition name="soft-fade" mode="out-in">
                <div :key="journeyStep">
                  <p
                    class="text-2xl font-light leading-tight tracking-[-0.03em] sm:text-3xl"
                  >
                    {{ journey[journeyStep].statement }}
                  </p>
                  <p class="mt-4 max-w-2xl text-sm leading-7 text-[#687671]">
                    {{ journey[journeyStep].description }}
                  </p>
                </div>
              </transition>
              <div class="mt-7 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  class="journey-control"
                  :disabled="journeyStep === 0"
                  @click="previousJourneyStep"
                >
                  ← Previous
                </button>
                <button
                  type="button"
                  class="journey-control"
                  :disabled="journeyStep === journey.length - 1"
                  @click="nextJourneyStep"
                >
                  Next →
                </button>
                <button
                  type="button"
                  class="journey-next-button"
                  @click="continueFromJourney"
                >
                  Continue to conversation →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- APPROACH — KEPT -->
    <section
      id="approach"
      class="bg-[#263b35] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32"
    >
      <div class="mx-auto max-w-[1450px]">
        <div class="grid gap-16 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p
              class="text-[10px] font-semibold tracking-[0.3em] text-[#c4ad91] uppercase"
            >
              06 / OUR APPROACH
            </p>
            <h2
              class="mt-6 text-[clamp(3rem,6vw,6.3rem)] font-light leading-[0.9] tracking-[-0.06em]"
            >
              Understand.
              <span class="text-[#c4ad91]">Formulate.</span> Intervene. Grow.
            </h2>
          </div>
          <div>
            <p class="max-w-2xl text-base leading-8 text-white/60">
              We follow a structured yet individualized approach to understand
              concerns and develop appropriate psychological and psychosocial
              strategies.
            </p>
            <div class="mt-14">
              <div
                v-for="(step, index) in approach"
                :key="step.title"
                class="approach-row group grid gap-5 border-t border-white/15 py-8 sm:grid-cols-[70px_1fr_1fr] sm:items-start"
              >
                <span class="text-[10px] tracking-[0.2em] text-[#c4ad91]"
                  >0{{ index + 1 }}</span
                >
                <h3
                  class="text-3xl font-light tracking-[-0.04em] transition duration-300 group-hover:text-[#c4ad91]"
                >
                  {{ step.title }}
                </h3>
                <p class="text-sm leading-7 text-white/50">
                  {{ step.description }}
                </p>
              </div>
              <div class="border-t border-white/15"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- NEW 04 — CONVERSATION -->
    <section
      id="conversation"
      class="bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-20"
    >
      <div class="mx-auto max-w-[1100px]">
        <p
          class="text-center text-[10px] font-semibold tracking-[0.3em] text-[#9a7d60] uppercase"
        >
          07 / A DIFFERENT KIND OF BEGINNING
        </p>
        <p
          v-if="selectedFeeling"
          class="mx-auto mt-5 max-w-xl text-center text-sm leading-7 text-[#687671]"
        >
          You chose “{{ currentFeeling.label }}”. You can begin the conversation
          exactly there.
        </p>
        <h2
          class="mx-auto mt-6 max-w-4xl text-center text-[clamp(3rem,6vw,6.5rem)] font-light leading-[0.9] tracking-[-0.06em]"
        >
          A conversation,<br /><span class="text-[#9a7d60]"
            >not a consultation.</span
          >
        </h2>

        <div class="mx-auto mt-16 max-w-2xl space-y-4">
          <transition-group name="chat-reveal" tag="div" class="space-y-4">
            <div
              v-for="(message, index) in visibleConversation"
              :key="message.text"
              class="chat-bubble"
              :class="message.side === 'left' ? 'chat-left' : 'chat-right'"
            >
              {{ message.text }}
            </div>
          </transition-group>
          <button
            v-if="conversationStep < conversation.length"
            type="button"
            class="mt-5 text-[10px] font-semibold tracking-[0.2em] text-[#9a7d60] uppercase underline underline-offset-4"
            @click="showNextConversation"
          >
            Continue the conversation →
          </button>
          <button
            v-else
            type="button"
            class="mt-5 text-[10px] font-semibold tracking-[0.2em] text-[#687671] uppercase underline underline-offset-4"
            @click="resetConversation"
          >
            Start again
          </button>
          <button
            type="button"
            class="journey-next-button mt-8"
            @click="continueFromConversation"
          >
            See what the first visit can look like <span>→</span>
          </button>
        </div>

        <div class="mt-14 text-center">
          <a
            href="#appointment"
            class="group inline-flex items-center gap-5 bg-[#263b35] px-7 py-5 text-[10px] font-semibold tracking-[0.2em] text-white uppercase transition duration-500 hover:bg-[#9a7d60]"
          >
            Start a conversation
            <span
              class="text-lg transition-transform duration-500 group-hover:translate-x-2"
              >→</span
            >
          </a>
        </div>
      </div>
    </section>

    <!-- WHY FORESIGHT — INTERACTIVE MULTIDISCIPLINARY EXAMPLE -->
    <section
      id="why-foresight"
      class="bg-[#f7f6f2] px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
    >
      <div class="mx-auto max-w-[1450px]">
        <div class="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:gap-16">
          <div>
            <p
              class="text-[10px] font-semibold tracking-[0.3em] text-[#9a7d60] uppercase"
            >
              08 / WHY FORESIGHT
            </p>
            <h2
              class="mt-6 max-w-md text-[clamp(2.8rem,5vw,5.5rem)] font-light leading-[0.93] tracking-[-0.06em]"
            >
              One situation.<br /><span class="text-[#9a7d60]"
                >More than one lens.</span
              >
            </h2>
            <p class="mt-6 max-w-md text-sm leading-7 text-[#687671]">
              A person's difficulty rarely exists in isolation. Explore how
              different professional perspectives can contribute to a fuller
              understanding—without jumping to conclusions.
            </p>
            <p
              class="mt-5 text-[10px] font-semibold tracking-[0.18em] text-[#9a7d60] uppercase"
            >
              A fictional example · Select a perspective
            </p>
          </div>

          <div>
            <div class="border border-[#263b35]/10 bg-white p-6 sm:p-8">
              <p
                class="text-[9px] font-semibold tracking-[0.22em] text-[#9a7d60] uppercase"
              >
                The situation
              </p>
              <h3
                class="mt-3 text-2xl font-light leading-tight tracking-[-0.04em] sm:text-3xl"
              >
                A student is finding it hard to concentrate, has withdrawn from
                friends, and is falling behind academically.
              </h3>
              <p class="mt-4 text-sm leading-6 text-[#687671]">
                The signs are visible, but they do not tell the whole story.
                Different areas of a person's life may need to be understood
                together.
              </p>
            </div>

            <div class="mt-3 grid gap-3 sm:grid-cols-2">
              <button
                v-for="(lens, index) in perspectiveLenses"
                :key="lens.title"
                type="button"
                @click="selectedPerspective = index"
                :aria-pressed="selectedPerspective === index"
                class="group min-h-[150px] border p-5 text-left transition duration-300 sm:p-6"
                :class="
                  selectedPerspective === index
                    ? 'border-[#263b35] bg-[#263b35] text-white'
                    : 'border-[#263b35]/10 bg-white text-[#263b35] hover:border-[#9a7d60] hover:-translate-y-1'
                "
              >
                <span
                  class="text-[9px] font-semibold tracking-[0.2em] uppercase"
                  :class="
                    selectedPerspective === index
                      ? 'text-[#c4ad91]'
                      : 'text-[#9a7d60]'
                  "
                  >0{{ index + 1 }}</span
                >
                <span
                  class="mt-4 block text-xl font-light tracking-[-0.03em]"
                  >{{ lens.title }}</span
                >
                <span
                  class="mt-2 block text-sm leading-6"
                  :class="
                    selectedPerspective === index
                      ? 'text-white/70'
                      : 'text-[#687671]'
                  "
                  >{{ lens.short }}</span
                >
              </button>
            </div>

            <div
              v-if="perspectiveLenses[selectedPerspective]"
              class="mt-3 border border-[#c4ad91]/60 bg-[#eef1ed] p-6 sm:p-8"
              aria-live="polite"
            >
              <p
                class="text-[9px] font-semibold tracking-[0.22em] text-[#9a7d60] uppercase"
              >
                {{ perspectiveLenses[selectedPerspective].eyebrow }}
              </p>
              <h4 class="mt-3 text-2xl font-light tracking-[-0.04em]">
                {{ perspectiveLenses[selectedPerspective].title }}
              </h4>
              <p class="mt-3 max-w-2xl text-sm leading-7 text-[#52645d]">
                {{ perspectiveLenses[selectedPerspective].detail }}
              </p>
              <div class="mt-5 border-t border-[#263b35]/10 pt-4">
                <p class="text-sm font-medium text-[#263b35]">
                  The aim is not to assume an answer.
                </p>
                <p class="mt-1 text-sm leading-6 text-[#687671]">
                  It is to ask better questions, consider relevant context, and
                  decide what assessment or support may be appropriate for this
                  individual.
                </p>
              </div>
            </div>
            <p class="mt-4 text-xs leading-5 text-[#7b8581]">
              Educational illustration only—not a diagnosis or a substitute for
              an individual assessment.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- NEW 05 — VISIT JOURNEY -->
    <section
      id="visit"
      class="visit-section overflow-hidden bg-gradient-to-br from-[#e7ece5] via-[#f0eee7] to-[#e5e9e2] px-6 py-12 sm:px-10 lg:px-16 lg:py-16"
    >
      <div class="mx-auto max-w-[1450px]">
        <div class="grid gap-10 lg:grid-cols-[0.4fr_0.6fr]">
          <div>
            <p
              class="text-[10px] font-semibold tracking-[0.3em] text-[#9a7d60] uppercase"
            >
              09 / YOUR FIRST VISIT
            </p>
            <h2
              class="mt-6 text-[clamp(3rem,6vw,6.3rem)] font-light leading-[0.9] tracking-[-0.06em]"
            >
              You don't need to know<br /><span class="text-[#9a7d60]"
                >what to say.</span
              >
            </h2>
            <p class="mt-6 max-w-lg text-sm leading-7 text-[#687671]">
              {{ visitContext }}
            </p>
          </div>

          <div class="grid gap-3">
            <button
              v-for="(item, index) in visitSteps"
              :key="item.title"
              type="button"
              class="visit-step group"
              :class="{ 'visit-step-active': visitStep === index }"
              @click="visitStep = index"
            >
              <span class="text-[10px] tracking-[0.2em] text-[#9a7d60]"
                >0{{ index + 1 }}</span
              >
              <span class="text-2xl font-light tracking-[-0.03em]">{{
                item.title
              }}</span>
              <span
                class="text-xl transition-transform duration-300 group-hover:translate-x-1"
                >{{ visitStep === index ? "−" : "+" }}</span
              >
              <span
                v-if="visitStep === index"
                class="col-span-full max-w-xl pt-2 text-left text-sm leading-7 text-[#687671]"
                >{{ item.description }}</span
              >
            </button>
          </div>
        </div>

        <div class="mt-6 flex justify-end">
          <a
            href="#appointment"
            class="group inline-flex items-center gap-5 bg-[#263b35] px-7 py-5 text-[10px] font-semibold tracking-[0.2em] text-white uppercase transition duration-300 hover:bg-[#9a7d60]"
          >
            Whenever you're ready
            <span
              class="text-lg transition-transform duration-300 group-hover:translate-x-2"
              >→</span
            >
          </a>
        </div>
      </div>
    </section>

    <!-- PHILOSOPHY — KEPT -->
    <section class="relative min-h-[620px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1800&q=85"
        alt="Quiet reflective space"
        class="philosophy-image absolute inset-0 h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-[#162620]/60"></div>
      <div
        class="relative mx-auto flex min-h-[620px] max-w-[1450px] items-center px-6 py-24 sm:px-10 lg:px-16"
      >
        <div class="max-w-5xl">
          <p
            class="text-[10px] font-semibold tracking-[0.3em] text-white/70 uppercase"
          >
            10 / OUR PHILOSOPHY
          </p>
          <h2
            class="mt-7 text-[clamp(3rem,6.5vw,7.5rem)] font-light leading-[0.92] tracking-[-0.065em] text-white"
          >
            Every behaviour<br />has a
            <span class="text-[#c4ad91]">story.</span>
          </h2>
          <p
            class="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg"
          >
            Understanding that story can be the beginning of change.
          </p>
          <p
            class="mt-6 text-[10px] font-semibold tracking-[0.25em] text-white/70 uppercase"
          >
            Understand the Present. Shape the Future.
          </p>
        </div>
      </div>
    </section>

    <!-- PROFESSIONAL TEAM — KEPT -->
    <section class="bg-[#f2f0e9] px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
      <div class="mx-auto max-w-[1450px]">
        <div class="mb-14">
          <p
            class="text-[10px] font-semibold tracking-[0.3em] text-[#9a7d60] uppercase"
          >
            12 / OUR PROFESSIONAL TEAM
          </p>
          <h2
            class="mt-5 max-w-5xl text-[clamp(3rem,6vw,6.5rem)] font-light leading-[0.9] tracking-[-0.06em]"
          >
            Professional <span class="text-[#9a7d60]">perspectives.</span>
          </h2>
        </div>
        <div class="grid gap-4 md:grid-cols-2">
          <div
            v-for="(member, index) in team"
            :key="member.name"
            class="team-card group border-t border-[#263b35]/15 bg-[#f7f6f2] p-7 transition duration-500 hover:-translate-y-1 sm:p-9"
          >
            <div class="flex items-start justify-between gap-6">
              <span
                class="text-[10px] font-semibold tracking-[0.2em] text-[#9a7d60]"
                >0{{ index + 1 }}</span
              >
              <span
                class="h-px w-12 bg-[#c4ad91] transition-all duration-500 group-hover:w-20"
              ></span>
            </div>
            <h3
              class="mt-14 text-3xl font-light tracking-[-0.04em] text-[#263b35] sm:text-4xl"
            >
              {{ member.name }}
            </h3>
            <p class="mt-3 text-sm font-semibold text-[#9a7d60]">
              {{ member.qualification }}
            </p>
            <p
              v-if="member.experience"
              class="mt-1 text-[10px] font-semibold tracking-[0.15em] text-[#687671] uppercase"
            >
              {{ member.experience }}
            </p>
            <p class="mt-6 max-w-xl text-sm leading-7 text-[#687671]">
              {{ member.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT — KEPT -->
    <section
      id="appointment"
      class="bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-20"
    >
      <div class="mx-auto max-w-[1300px]">
        <div class="border-t border-[#263b35]/15 pt-12">
          <div class="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p
                class="text-[10px] font-semibold tracking-[0.3em] text-[#9a7d60] uppercase"
              >
                13 / CONTACT
              </p>
              <h2
                class="mt-6 max-w-5xl text-[clamp(3rem,6vw,7rem)] font-light leading-[0.9] tracking-[-0.065em]"
              >
                Take the First <span class="text-[#9a7d60]">Step.</span>
              </h2>
              <p class="mt-7 max-w-2xl text-sm leading-7 text-[#687671]">
                If you are experiencing emotional, behavioural, relationship or
                psychological difficulties, you don't have to navigate them
                alone.
              </p>
              <div class="mt-8 space-y-3 text-sm leading-7 text-[#687671]">
                <p>
                  <strong class="font-semibold text-[#263b35]"
                    >Foresight Counselling Centre</strong
                  >
                </p>
                <p>
                  📍 BHI, Road No. 3, Greenhills Colony, Kothapet Backside,
                  Paramitha Women & Child Hospital, Hyderabad – 500035
                </p>
                <p>
                  📞
                  <a
                    href="tel:+917660002050"
                    class="font-semibold text-[#263b35] transition hover:text-[#9a7d60]"
                    >+91 7 66 000 2050</a
                  >
                </p>
              </div>
            </div>
            <div class="flex flex-wrap gap-3">
              <a
                href="https://wa.me/917660002050"
                target="_blank"
                rel="noopener noreferrer"
                class="group inline-flex items-center justify-center gap-5 bg-[#263b35] px-7 py-5 text-[10px] font-semibold tracking-[0.2em] text-white uppercase transition duration-500 hover:bg-[#9a7d60]"
              >
                WhatsApp Us
                <span
                  class="text-lg transition-transform duration-500 group-hover:translate-x-2"
                  >→</span
                >
              </a>
              <a
                href="tel:+917660002050"
                class="group inline-flex items-center justify-center gap-5 border border-[#263b35]/20 px-7 py-5 text-[10px] font-semibold tracking-[0.2em] text-[#263b35] uppercase transition duration-500 hover:bg-[#263b35] hover:text-white"
              >
                Call Us
                <span
                  class="text-lg transition-transform duration-500 group-hover:translate-x-2"
                  >→</span
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer
      class="border-t border-[#263b35]/10 bg-[#f7f6f2] px-6 py-10 sm:px-10 lg:px-16"
    >
      <div
        class="mx-auto flex max-w-[1450px] flex-col justify-between gap-8 md:flex-row md:items-end"
      >
        <div>
          <h3 class="text-3xl font-semibold tracking-[-0.05em]">FORESIGHT</h3>
          <p
            class="mt-2 text-[10px] tracking-[0.16em] text-[#687671] uppercase"
          >
            Understand Yourself. Strengthen Relationships. Shape Your Future.
          </p>
        </div>
        <div
          class="flex flex-wrap gap-x-7 gap-y-3 text-[10px] font-semibold tracking-[0.16em] text-[#687671] uppercase"
        >
          <a href="#about" class="transition hover:text-[#9a7d60]">About</a>
          <a href="#services" class="transition hover:text-[#9a7d60]"
            >Services</a
          >
          <a href="#approach" class="transition hover:text-[#9a7d60]"
            >Approach</a
          >
          <a href="#check-in" class="transition hover:text-[#9a7d60]"
            >Wellbeing</a
          >
          <a href="#appointment" class="transition hover:text-[#9a7d60]"
            >Contact</a
          >
        </div>
      </div>
      <div
        class="mx-auto mt-8 flex max-w-[1450px] flex-col justify-between gap-2 border-t border-[#263b35]/10 pt-5 text-[9px] tracking-[0.15em] text-[#7b8581] uppercase sm:flex-row"
      >
        <span>© {{ currentYear }} FORESIGHT COUNSELLING CENTRE</span>
        <span>Psychological & Psychosocial Care</span>
      </div>
    </footer>

    <!-- WHATSAPP -->
    <a
      href="https://wa.me/917660002050"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Foresight on WhatsApp"
      class="whatsapp-button fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_35px_rgba(0,0,0,0.18)] transition duration-300 hover:scale-110 sm:bottom-8 sm:right-8"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="h-7 w-7"
      >
        <path
          d="M20.52 3.48A11.78 11.78 0 0 0 12.08 0C5.56 0 .26 5.3.26 11.82c0 2.08.54 4.11 1.57 5.9L.16 24l6.43-1.64a11.82 11.82 0 0 0 5.49 1.36h.01c6.52 0 11.82-5.3 11.82-11.82 0-3.16-1.23-6.13-3.39-8.42ZM12.09 21.7h-.01a9.82 9.82 0 0 1-5.01-1.37l-.36-.21-3.82.98 1.02-3.72-.23-.38a9.82 9.82 0 1 1 8.41 4.7Zm5.39-7.36c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.65.15-.19.29-.75.95-.92 1.14-.17.19-.34.22-.63.07-.29-.15-1.21-.45-2.3-1.43-.85-.76-1.43-1.7-1.6-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.19.05-.36-.02-.51-.07-.15-.65-1.58-.9-2.17-.24-.58-.48-.5-.65-.51h-.56c-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.43 0 1.43 1.04 2.81 1.19 3 .15.19 2.05 3.13 4.97 4.39.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34Z"
        />
      </svg>
    </a>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useForesightJourney } from "../composables/useForesightJourney";

const currentYear = new Date().getFullYear();

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=2200&q=90",
    alt: "Portrait",
    title: "Understand Yourself.",
    description:
      "At Foresight Counselling Centre, we provide professional psychological and psychosocial support for individuals, couples and families.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=2200&q=90",
    alt: "People connecting",
    title: "Strengthen Relationships.",
    description:
      "Our approach combines clinical experience, psychological understanding and psychosocial perspectives to understand concerns in their personal, behavioural, relational and social context.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2200&q=90",
    alt: "People together",
    title: "Shape Your Future.",
    description: "We believe that meaningful change begins with understanding.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=2200&q=90",
    alt: "Calm environment",
    title: "Meaningful Change.",
    description: "Understand the Present. Shape the Future.",
  },
];

const activeHero = ref(0);
let heroTimer = null;

const services = [
  {
    title: "Individual Counselling",
    href: "#appointment",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1400&q=85",
    description:
      "Professional support for emotional, behavioural and personal concerns. Our interventions may include CBT-informed techniques, psychoeducation, emotional regulation, behavioural strategies, problem-solving and coping-skills training, depending on individual needs.",
  },
  {
    title: "Family Counselling",
    href: "#appointment",
    image:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1400&q=85",
    description:
      "Understanding relationships, communication and family dynamics. We work with families experiencing communication difficulties, parenting concerns, interpersonal conflicts, behavioural concerns and adjustment difficulties.",
  },
  {
    title: "Couple & Relationship Counselling",
    href: "#appointment",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1400&q=85",
    description:
      "A structured space to understand relationship patterns and develop healthier communication. Sessions may focus on communication, conflict resolution, emotional connection, expectations and relationship adjustment.",
  },
  {
    title: "Child & Adolescent Support",
    href: "#appointment",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1400&q=85",
    description:
      "Children and adolescents may express emotional difficulties through changes in behaviour, academics, relationships or social functioning. Our approach considers the child, family and environmental context while developing appropriate psychological and psychosocial interventions.",
  },
  {
    title: "Psychological Assessment",
    href: "#appointment",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1400&q=85",
    description:
      "Professional psychological assessment can help develop a clearer understanding of cognitive, emotional, behavioural and personality-related functioning. Assessments are selected according to the individual's clinical requirements.",
  },
  {
    title: "De-addiction & Recovery Support",
    href: "#appointment",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85",
    description:
      "Substance-use difficulties require an understanding of the psychological, behavioural and social factors involved in addiction. Support may incorporate Motivational Interviewing, Relapse Prevention, CBT-informed interventions, craving and trigger management, family interventions and psychoeducation.",
  },
];

const feelings = [
  {
    id: "low",
    icon: "◌",
    label: "I feel low",
    short: "Heavy, empty or disconnected.",
    message:
      "You don't have to explain everything at once. A conversation can begin with simply saying that things have felt difficult.",
  },
  {
    id: "anxious",
    icon: "〰",
    label: "I feel anxious",
    short: "My mind won't seem to slow down.",
    message:
      "When worry starts taking up too much space, having someone help you understand the pattern can be a useful first step.",
  },
  {
    id: "exhausted",
    icon: "○",
    label: "I'm exhausted",
    short: "I'm getting through the day, but barely.",
    message:
      "Constant emotional effort can be difficult to carry alone. There is space here to slow down and understand what is happening.",
  },
  {
    id: "overwhelmed",
    icon: "✦",
    label: "I'm overwhelmed",
    short: "Everything feels like too much.",
    message:
      "You don't need to solve everything before asking for support. Start with what feels most difficult today.",
  },
  {
    id: "focus",
    icon: "◎",
    label: "I can't focus",
    short: "My thoughts feel scattered.",
    message:
      "Changes in concentration can have many contexts. Understanding what has changed is often more useful than judging yourself for it.",
  },
  {
    id: "unsure",
    icon: "?",
    label: "Something feels off",
    short: "I can't quite put it into words.",
    message:
      "Not knowing exactly what is wrong is a valid place to begin. You can come with questions, uncertainty or simply a feeling that something has changed.",
  },
];

const { state: foresightJourney, setFeeling, setStage } = useForesightJourney();

const selectedFeeling = ref(foresightJourney.feeling || null);
const currentFeeling = computed(
  () =>
    feelings.find((item) => item.id === selectedFeeling.value) || feelings[0],
);

const breathingActive = ref(false);
const breathPhase = ref("Breathe in");
const breathInstruction = ref("Slowly");
let breathTimer = null;

const journeyStep = ref(0);
const journey = [
  {
    title: "Notice",
    statement: "Something feels different.",
    description:
      "You notice a change in mood, behaviour, relationships, thoughts or everyday functioning.",
  },
  {
    title: "Understand",
    statement: "Let's make sense of it.",
    description:
      "Understanding the context can help separate what is happening from the judgment you may place on yourself.",
  },
  {
    title: "Support",
    statement: "You don't have to carry it alone.",
    description:
      "Professional support creates a structured and confidential space to explore concerns.",
  },
  {
    title: "Strengthen",
    statement: "Build what helps you cope.",
    description:
      "The work can focus on practical skills, relationships, emotional regulation and adaptive functioning.",
  },
  {
    title: "Forward",
    statement: "Move forward with understanding.",
    description:
      "Change does not have to mean becoming someone else. It can mean understanding yourself more clearly.",
  },
];

const conversationStep = ref(1);
const conversation = computed(() => [
  {
    side: "left",
    text: selectedFeeling.value
      ? `“${currentFeeling.value.label} — but I don't really know where to start.”`
      : "“I don't even know where to start.”",
  },
  { side: "right", text: "“That's okay. Start there.”" },
  { side: "left", text: "“What if I can't explain everything?”" },
  { side: "right", text: "“You don't have to have all the words.”" },
  { side: "left", text: `“Can we just understand what's been happening?”` },
  { side: "right", text: "“Yes. That's what the first conversation is for.”" },
]);
const visibleConversation = computed(() =>
  conversation.value.slice(0, conversationStep.value),
);

const showNextConversation = () => {
  conversationStep.value = Math.min(
    conversationStep.value + 1,
    conversation.value.length,
  );
};

const resetConversation = () => {
  conversationStep.value = 1;
};

const visitStep = ref(0);
const visitSteps = [
  {
    title: "Reach out",
    description:
      "Choose the contact option that feels easiest. You can call or message us to discuss an appointment.",
  },
  {
    title: "Have a conversation",
    description:
      "The first meeting is a chance to talk about what brings you in and what you would like support with.",
  },
  {
    title: "Understand the concern",
    description:
      "Depending on the situation, the professional may explore emotional, behavioural, psychological, relational and psychosocial factors.",
  },
  {
    title: "Plan the next step",
    description:
      "Together, the appropriate form of support, assessment or intervention can be discussed.",
  },
];

const realisationLines = [
  {
    text: "You might still be functioning.",
    message:
      "Functioning on the outside does not tell the whole story of how you are doing inside.",
  },
  {
    text: "Going to work.",
    message:
      "Keeping up with responsibilities can coexist with feeling emotionally stretched.",
  },
  {
    text: "Talking to people.",
    message:
      "Being connected to others does not mean you have to handle every difficult feeling alone.",
  },
  {
    text: "Smiling.",
    message:
      "A smile can be genuine and still not capture everything someone is carrying.",
  },
  {
    text: "Getting things done.",
    message: "Productivity is not a measure of whether you deserve support.",
  },
  {
    text: "And still not feel like yourself.",
    message:
      "If something feels different, you can make space to understand it without needing a perfect explanation.",
  },
];

const revealedRealisation = ref(null);

const approach = [
  {
    title: "Understand",
    description: "Explore the presenting concern and individual context.",
  },
  {
    title: "Assess",
    description:
      "Identify relevant psychological, behavioural and psychosocial factors.",
  },
  {
    title: "Formulate",
    description:
      "Develop a meaningful understanding of the patterns contributing to the concern.",
  },
  {
    title: "Intervene",
    description:
      "Use appropriate evidence-informed psychological and psychosocial strategies.",
  },
  {
    title: "Strengthen",
    description:
      "Build coping, emotional regulation, communication and adaptive functioning.",
  },
];

const perspectiveLenses = [
  {
    title: "Psychological perspective",
    short: "Thoughts, emotions, behaviour and coping.",
    eyebrow: "Lens 01 · Psychological",
    detail:
      "A professional may explore changes in mood, stress, attention, thoughts, behaviour and coping patterns, while considering the person's own account of what has changed.",
  },
  {
    title: "Psychosocial perspective",
    short: "Relationships, family, studies and environment.",
    eyebrow: "Lens 02 · Psychosocial",
    detail:
      "The wider context may matter: family expectations, relationships, academic pressure, social connection, daily routines and other circumstances affecting the person's life.",
  },
  {
    title: "Psychiatric perspective",
    short: "Whether a psychiatric assessment may help.",
    eyebrow: "Lens 03 · Psychiatric",
    detail:
      "When appropriate, a qualified psychiatric professional may assess symptoms, duration, severity, functioning and relevant health history to consider whether further evaluation or treatment is needed.",
  },
  {
    title: "A fuller understanding",
    short: "Bringing relevant perspectives together.",
    eyebrow: "Lens 04 · Integrated understanding",
    detail:
      "These perspectives can inform one another. The team can consider what is known, what still needs to be explored, and which next steps fit the person's circumstances and preferences.",
  },
];
const selectedPerspective = ref(0);

const whyForesight = [
  {
    title: "Clinical Perspective",
    description:
      "Our work is informed by professional clinical experience and structured assessment.",
  },
  {
    title: "Individualised Care",
    description:
      "Every person's concerns, experiences and circumstances are different.",
  },
  {
    title: "Multidisciplinary Understanding",
    description:
      "Psychiatric, psychological and psychosocial perspectives come together under one roof.",
  },
  {
    title: "Confidential & Respectful",
    description:
      "A safe environment to discuss personal concerns without judgment.",
  },
  {
    title: "Evidence-Informed Practice",
    description:
      "Interventions are selected according to the individual's needs and clinical presentation.",
  },
];

const team = [
  {
    name: "Dr. Mahendra Shekhar",
    qualification: "MD Psychiatry",
    description: "Psychiatric evaluation and clinical mental-health care.",
  },
  {
    name: "Dr. Mahesh Sanga",
    qualification: "Clinical Psychologist",
    experience: "10+ Years of Experience",
    description: "Psychological assessment and psychological interventions.",
  },
  {
    name: "Mr. Gurrapu Rakesh",
    qualification: "M.Phil. (NIMHANS) | Ph.D.",
    description:
      "Psychological and psychosocial interventions with advanced clinical training.",
  },
  {
    name: "Mr. Shiva Kumar Medhari",
    qualification: "Psychiatric Social Worker | MSW | Ph.D.",
    experience: "8 Years of Experience",
    description:
      "Psychosocial assessment, counselling, family interventions and recovery-oriented support.",
  },
];

const experienceStep = ref(1);

const breathingContext = computed(() => {
  if (selectedFeeling.value)
    return `You selected “${currentFeeling.value.label}”. Before we try to understand it, give yourself one quiet minute to slow things down.`;
  return "Follow the circle for one gentle breathing cycle. There is nothing you need to solve in this moment.";
});

const visitContext = computed(() => {
  if (selectedFeeling.value)
    return `You have already taken the first step by naming that ${currentFeeling.value.label.toLowerCase()}. You can bring that same starting point into your first conversation.`;
  return "The first step is simply opening the door. The rest can happen one conversation at a time.";
});

const scrollToFeature = (id) => {
  experienceStep.value = Number(
    {
      check: 1,
      breathe: 2,
      journey: 3,
      conversation: 4,
      visit: 5,
      realisation: 6,
    }[id] || 1,
  );
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const continueFromFeeling = () => {
  setStage("understand");
  scrollToFeature("breathe");
};

const continueFromBreath = () => {
  setStage("explore");
  scrollToFeature("journey");
};

const continueFromJourney = () => {
  setStage("connect");
  scrollToFeature("conversation");
};

const continueFromConversation = () => {
  setStage("begin");
  scrollToFeature("visit");
};
const continueFromVisit = () => scrollToFeature("appointment");

const selectFeeling = (id) => {
  selectedFeeling.value = id;
  setFeeling(id);
  setStage("notice");
  experienceStep.value = 1;
  conversationStep.value = 1;
};

const previousJourneyStep = () => {
  journeyStep.value = Math.max(0, journeyStep.value - 1);
};

const nextJourneyStep = () => {
  journeyStep.value = Math.min(journey.length - 1, journeyStep.value + 1);
};

const startBreathing = () => {
  breathingActive.value = true;
  breathPhase.value = "Breathe in";
  breathInstruction.value = "Slowly";
  if (breathTimer) clearTimeout(breathTimer);
  runBreathCycle();
};

const pauseBreathing = () => {
  breathingActive.value = false;
  if (breathTimer) {
    clearTimeout(breathTimer);
    breathTimer = null;
  }
};

const toggleBreathing = () => {
  if (breathingActive.value) pauseBreathing();
  else startBreathing();
};

const resetBreathing = () => {
  pauseBreathing();
  breathPhaseIndex = 0;
  breathPhase.value = "Ready";
  breathInstruction.value = "Take your time.";
};

let breathPhaseIndex = 0;
const breathPhases = [
  ["Breathe in", "Slowly", 4000],
  ["Hold", "Stay here", 2000],
  ["Breathe out", "Gently", 6000],
];
const runBreathCycle = () => {
  if (!breathingActive.value) return;
  const [label, instruction, duration] = breathPhases[breathPhaseIndex];
  breathPhase.value = label;
  breathInstruction.value = instruction;
  breathTimer = setTimeout(() => {
    breathPhaseIndex = (breathPhaseIndex + 1) % breathPhases.length;
    runBreathCycle();
  }, duration);
};

onMounted(() => {
  heroTimer = setInterval(() => {
    activeHero.value = (activeHero.value + 1) % heroSlides.length;
  }, 7000);
});

onUnmounted(() => {
  if (heroTimer) clearInterval(heroTimer);
  if (breathTimer) clearTimeout(breathTimer);
});
</script>

<style scoped>
.hero-image {
  transform: scale(1.04);
  opacity: 1;
  filter: none;
}
.hero-content-panel {
  padding: 24px 28px 26px;
  border-left: 2px solid rgba(196, 173, 145, 0.9);
  background: linear-gradient(
    90deg,
    rgba(7, 20, 17, 0.72),
    rgba(7, 20, 17, 0.34),
    transparent
  );
  text-shadow: 0 3px 22px rgba(0, 0, 0, 0.42);
  backdrop-filter: blur(2px);
}
.hero-copy {
  text-shadow: 0 5px 30px rgba(0, 0, 0, 0.48);
}
.journey-next-button {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  border: 1px solid rgba(154, 125, 96, 0.55);
  background: #263b35;
  color: white;
  padding: 12px 16px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  transition:
    transform 0.3s ease,
    background-color 0.3s ease,
    border-color 0.3s ease;
}
.journey-next-button:hover {
  transform: translateY(-2px);
  background: #9a7d60;
  border-color: #9a7d60;
}
.visit-step {
  border: 1px solid rgba(38, 59, 53, 0.12);
  background: rgba(255, 255, 255, 0.62);
  border-radius: 3px;
  padding: 18px 20px;
  display: grid;
  grid-template-columns: 35px 1fr auto;
  align-items: center;
  gap: 12px;
  text-align: left;
  transition:
    background-color 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;
}
.visit-step:hover {
  border-color: rgba(154, 125, 96, 0.55);
  transform: translateX(3px);
}
.visit-step-active {
  background: #fffdf8;
  border-color: rgba(154, 125, 96, 0.65);
  box-shadow: inset 3px 0 0 #9a7d60;
}
.realisation-section {
  background-image:
    radial-gradient(
      ellipse at 85% 15%,
      rgba(154, 125, 96, 0.16),
      transparent 38%
    ),
    linear-gradient(135deg, #101c19 0%, #1c3029 100%);
}

.hero-image-active {
  animation: cinematicMove 7s ease-in-out forwards;
}
.hero-copy {
  animation: textReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
}
.hero-description {
  animation: descriptionReveal 1.1s 0.15s cubic-bezier(0.16, 1, 0.3, 1) both;
}
.hero-scroll-line {
  animation: scrollLine 2s ease-in-out infinite;
}

.service-card,
.context-card,
.team-card,
.feeling-card,
.journey-step,
.visit-step {
  cursor: pointer;
}
.approach-row {
  transition:
    padding-left 400ms ease,
    background-color 400ms ease;
}
.approach-row:hover {
  padding-left: 12px;
}
.philosophy-image {
  animation: philosophyMove 14s ease-in-out infinite alternate;
}
.whatsapp-button {
  animation: whatsappPulse 3s ease-in-out infinite;
}

.feeling-card {
  min-height: 190px;
  border: 1px solid rgba(38, 59, 53, 0.12);
  background: white;
  padding: 24px;
  transition:
    transform 0.5s ease,
    background-color 0.5s ease,
    color 0.5s ease,
    border-color 0.5s ease;
}
.feeling-card:hover,
.feeling-card-active {
  transform: translateY(-5px);
  background: #263b35;
  border-color: #263b35;
  color: white;
}
.feeling-card-active span:nth-child(3),
.feeling-card:hover span:nth-child(3) {
  color: rgba(255, 255, 255, 0.6);
}
.feeling-card:focus-visible,
.journey-step:focus-visible,
.visit-step:focus-visible,
.realisation-line:focus-visible,
.journey-control:focus-visible {
  outline: 2px solid #9a7d60;
  outline-offset: 4px;
}

.breath-section {
  isolation: isolate;
}
.breath-orb {
  position: absolute;
  width: 520px;
  height: 520px;
  border-radius: 9999px;
  right: -180px;
  top: -180px;
  background: rgba(196, 173, 145, 0.06);
  filter: blur(5px);
}
.breathing-circle {
  width: 130px;
  height: 130px;
  border-radius: 9999px;
  border: 1px solid rgba(196, 173, 145, 0.55);
  background: rgba(196, 173, 145, 0.12);
  transition:
    transform 1s ease,
    box-shadow 1s ease;
}
.breathing-active {
  animation: breathing 12s ease-in-out infinite;
}

.journey-track {
  display: grid;
  grid-template-columns: repeat(5, minmax(130px, 1fr));
  position: relative;
}
.journey-track::before {
  content: "";
  position: absolute;
  left: 4%;
  right: 4%;
  top: 48px;
  height: 1px;
  background: rgba(38, 59, 53, 0.15);
}
.journey-step {
  position: relative;
  z-index: 1;
  display: flex;
  min-height: 120px;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 10px;
}
.journey-number {
  font-size: 10px;
  letter-spacing: 0.2em;
  color: #9a7d60;
}
.journey-title {
  font-size: 22px;
  font-weight: 300;
  letter-spacing: -0.03em;
}
.journey-dot {
  margin-top: 5px;
  height: 11px;
  width: 11px;
  border-radius: 9999px;
  border: 1px solid #9a7d60;
  background: #f7f6f2;
  transition:
    transform 0.4s ease,
    background-color 0.4s ease;
}
.journey-step-active .journey-dot {
  transform: scale(1.5);
  background: #9a7d60;
}
.journey-control {
  border: 1px solid rgba(38, 59, 53, 0.15);
  padding: 10px 14px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    opacity 0.3s ease;
}
.journey-control:hover:not(:disabled) {
  background: #263b35;
  color: white;
}
.journey-control:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.chat-bubble {
  width: fit-content;
  max-width: 85%;
  padding: 18px 22px;
  border-radius: 2px;
  font-size: 18px;
  line-height: 1.5;
}
.chat-left {
  background: #eef1ed;
  color: #263b35;
}
.chat-right {
  margin-left: auto;
  background: #263b35;
  color: white;
}

.visit-step {
  display: grid;
  grid-template-columns: 55px 1fr auto;
  gap: 18px;
  align-items: center;
  width: 100%;
  border-top: 1px solid rgba(38, 59, 53, 0.15);
  padding: 28px 0;
  text-align: left;
  transition: padding-left 0.4s ease;
}
.visit-step:hover,
.visit-step-active {
  padding-left: 12px;
}
.visit-step-active {
  padding-bottom: 34px;
}

.realisation-line {
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
  font-size: clamp(2.7rem, 7vw, 7.5rem);
  font-weight: 300;
  line-height: 0.95;
  letter-spacing: -0.06em;
  color: rgba(255, 255, 255, 0.22);
  transition: color 0.6s ease;
}
.realisation-line:hover,
.realisation-line-active {
  color: #fff;
}
.chat-reveal-enter-active,
.chat-reveal-leave-active {
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}
.chat-reveal-enter-from,
.chat-reveal-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.soft-fade-enter-active,
.soft-fade-leave-active {
  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
}
.soft-fade-enter-from,
.soft-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

@keyframes cinematicMove {
  0% {
    transform: scale(1.04) translate3d(0, 0, 0);
  }
  45% {
    transform: scale(1.09) translate3d(-0.8%, -0.5%, 0);
  }
  100% {
    transform: scale(1.14) translate3d(0.7%, -1%, 0);
  }
}
@keyframes philosophyMove {
  0% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1.08);
  }
}
@keyframes textReveal {
  from {
    opacity: 0;
    transform: translateY(28px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes descriptionReveal {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes scrollLine {
  0% {
    transform: translateY(-120%);
  }
  50% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(220%);
  }
}
@keyframes breathing {
  0%,
  100% {
    transform: scale(0.82);
    box-shadow: 0 0 0 0 rgba(196, 173, 145, 0.05);
  }
  33% {
    transform: scale(1.35);
    box-shadow: 0 0 0 22px rgba(196, 173, 145, 0.04);
  }
  50% {
    transform: scale(1.35);
  }
  100% {
    transform: scale(0.82);
  }
}
@keyframes whatsappPulse {
  0%,
  100% {
    box-shadow:
      0 12px 35px rgba(0, 0, 0, 0.18),
      0 0 0 0 rgba(37, 211, 102, 0.25);
  }
  50% {
    box-shadow:
      0 14px 40px rgba(0, 0, 0, 0.2),
      0 0 0 10px rgba(37, 211, 102, 0);
  }
}

@media (max-width: 800px) {
  .journey-track {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .journey-track::before {
    left: 5px;
    top: 0;
    bottom: 0;
    width: 1px;
    height: auto;
  }
  .journey-step {
    min-height: auto;
    padding-left: 28px;
  }
  .journey-dot {
    position: absolute;
    left: 0;
    top: 5px;
  }
}
@media (max-width: 640px) {
  .hero-content-panel {
    padding: 18px 18px 20px;
    border-left-width: 1px;
  }
  .hero-image-active {
    animation-duration: 7s;
  }
  .approach-row:hover {
    padding-left: 0;
  }
  .chat-bubble {
    max-width: 92%;
    font-size: 16px;
  }
  .visit-step {
    grid-template-columns: 35px 1fr auto;
  }
}
@media (prefers-reduced-motion: reduce) {
  .hero-image-active,
  .hero-copy,
  .hero-description,
  .hero-scroll-line,
  .philosophy-image,
  .whatsapp-button,
  .breathing-active {
    animation: none !important;
  }
  * {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
