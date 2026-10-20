<template>
  <div class="min-h-screen bg-white text-[#1f2942]">
    <main class="overflow-hidden">
      <!-- HERO -->

      <section class="relative bg-[#f3f7fa] pt-24">
        <div
          class="absolute right-[-180px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#008BCB]/10 blur-3xl"
        ></div>

        <div
          class="absolute bottom-[-160px] left-[-160px] h-[420px] w-[420px] rounded-full bg-[#FFB600]/10 blur-3xl"
        ></div>

        <div
          class="relative mx-auto grid min-h-[76vh] max-w-[1400px] items-center gap-14 px-6 py-20 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-16 lg:py-24"
        >
          <div>
            <div class="flex items-center gap-4">
              <span class="h-px w-12 bg-[#008BCB]"></span>

              <p class="text-xs font-bold tracking-[0.3em] text-[#008BCB]">
                ABOUT FORESIGHT
              </p>
            </div>

            <h1
              class="mt-7 max-w-4xl font-serif text-5xl font-semibold leading-[0.96] tracking-[-0.04em] text-[#293487] sm:text-6xl lg:text-8xl"
            >
              Understanding
              <span class="block italic text-[#008BCB]"> comes first. </span>
            </h1>

            <p
              class="mt-8 max-w-2xl text-base leading-8 text-[#596274] sm:text-lg"
            >
              Foresight Counselling Centre provides professional psychological
              and psychosocial support for individuals, couples and families.
            </p>

            <div class="mt-9 flex flex-wrap gap-4">
              <RouterLink
                to="/contact"
                class="inline-flex items-center gap-3 rounded-full bg-[#293487] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#008BCB]"
              >
                Book an Appointment
                <span>→</span>
              </RouterLink>

              <RouterLink
                to="/services"
                class="inline-flex items-center gap-3 rounded-full border border-[#293487]/15 bg-white px-7 py-3.5 text-sm font-semibold text-[#293487] transition duration-300 hover:border-[#008BCB]/30 hover:text-[#008BCB]"
              >
                Explore Services
              </RouterLink>
            </div>
          </div>

          <!-- HERO PANEL -->

          <div class="relative">
            <div
              class="relative mx-auto max-w-lg overflow-hidden rounded-[2rem] bg-[#293487] p-7 shadow-[0_30px_80px_rgba(41,52,135,0.15)] sm:p-10"
            >
              <div
                class="absolute right-0 top-0 h-36 w-36 rounded-bl-full bg-[#008BCB]/20"
              ></div>

              <div
                class="absolute bottom-0 left-0 h-28 w-28 rounded-tr-full bg-[#FFB600]/10"
              ></div>

              <div class="relative">
                <div class="flex items-center justify-between">
                  <span
                    class="text-[10px] font-bold tracking-[0.3em] text-[#FFB600]"
                  >
                    OUR PERSPECTIVE
                  </span>

                  <span
                    class="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl text-[#FFB600]"
                  >
                    ✦
                  </span>
                </div>

                <p
                  class="mt-12 font-serif text-3xl leading-tight text-white sm:text-4xl"
                >
                  Every person has a story behind their
                  <span class="italic text-[#FFB600]">
                    thoughts, emotions and behaviour.
                  </span>
                </p>

                <div class="mt-10 h-px w-16 bg-[#FFB600]"></div>

                <p class="mt-6 text-sm leading-7 text-white/65">
                  We look beyond the presenting concern to understand the
                  personal, behavioural, relational and social context.
                </p>
              </div>
            </div>

            <div
              class="absolute -bottom-6 -left-4 hidden h-20 w-20 items-center justify-center rounded-full border border-[#008BCB]/20 bg-white text-xs font-bold tracking-[0.2em] text-[#293487] shadow-lg sm:flex"
            >
              CARE
            </div>
          </div>
        </div>
      </section>

      <!-- INTRODUCTION -->

      <section class="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div class="mx-auto max-w-[1400px]">
          <div class="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p class="text-xs font-bold tracking-[0.3em] text-[#008BCB]">
                WHO WE ARE
              </p>

              <div class="mt-5 h-px w-16 bg-[#FFB600]"></div>
            </div>

            <div>
              <h2
                class="max-w-4xl font-serif text-4xl font-semibold leading-tight tracking-[-0.025em] text-[#293487] sm:text-5xl lg:text-6xl"
              >
                A professional space for
                <span class="italic text-[#008BCB]">
                  understanding and change.
                </span>
              </h2>

              <p class="mt-8 max-w-3xl text-lg leading-8 text-[#596274]">
                At Foresight, we look beyond the presenting concern to
                understand the factors influencing an individual's emotional
                wellbeing, behaviour and relationships.
              </p>

              <p class="mt-6 max-w-3xl text-base leading-8 text-[#596274]">
                Our approach combines clinical experience, psychological
                understanding and psychosocial perspectives to understand
                concerns in their personal, behavioural, relational and social
                context.
              </p>
            </div>
          </div>

          <!-- GUIDED AREAS -->

          <div class="mt-20 border-t border-[#293487]/10">
            <div
              class="grid border-b border-[#293487]/10 sm:grid-cols-2 lg:grid-cols-4"
            >
              <div
                class="border-b border-[#293487]/10 p-7 sm:border-r lg:border-b-0"
              >
                <span class="text-sm font-bold text-[#008BCB]">01</span>

                <h3
                  class="mt-8 font-serif text-2xl font-semibold text-[#293487]"
                >
                  Clinical Assessment
                </h3>

                <p class="mt-4 text-sm leading-7 text-[#596274]">
                  Understanding the presenting concern and relevant individual
                  factors.
                </p>
              </div>

              <div
                class="border-b border-[#293487]/10 p-7 lg:border-b-0 lg:border-r"
              >
                <span class="text-sm font-bold text-[#008BCB]">02</span>

                <h3
                  class="mt-8 font-serif text-2xl font-semibold text-[#293487]"
                >
                  Case Understanding
                </h3>

                <p class="mt-4 text-sm leading-7 text-[#596274]">
                  Developing a meaningful understanding of patterns and context.
                </p>
              </div>

              <div
                class="border-b border-[#293487]/10 p-7 sm:border-r lg:border-b-0"
              >
                <span class="text-sm font-bold text-[#FFB600]">03</span>

                <h3
                  class="mt-8 font-serif text-2xl font-semibold text-[#293487]"
                >
                  Evidence-Informed Interventions
                </h3>

                <p class="mt-4 text-sm leading-7 text-[#596274]">
                  Selecting appropriate strategies according to individual
                  needs.
                </p>
              </div>

              <div class="p-7">
                <span class="text-sm font-bold text-[#008BCB]">04</span>

                <h3
                  class="mt-8 font-serif text-2xl font-semibold text-[#293487]"
                >
                  Psychosocial Support
                </h3>

                <p class="mt-4 text-sm leading-7 text-[#596274]">
                  Considering relationships, family and social context in care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- HOW WE WORK -->

      <section class="bg-[#293487] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div class="mx-auto max-w-[1400px]">
          <div class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p class="text-xs font-bold tracking-[0.3em] text-[#FFB600]">
                HOW WE WORK
              </p>

              <h2
                class="mt-6 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
              >
                Understanding the person,
                <span class="italic text-[#FFB600]">
                  not only the problem.
                </span>
              </h2>
            </div>

            <div>
              <p class="max-w-2xl text-lg leading-8 text-white/70">
                We provide a confidential and respectful environment where
                individuals and families can explore their concerns and work
                towards meaningful change.
              </p>

              <div class="mt-12 grid gap-0 border-t border-white/10">
                <div
                  class="grid gap-5 border-b border-white/10 py-7 sm:grid-cols-[80px_1fr]"
                >
                  <span class="text-sm font-bold text-[#FFB600]"> 01 </span>

                  <div>
                    <h3 class="font-serif text-2xl font-semibold text-white">
                      Clinical
                    </h3>

                    <p class="mt-2 text-sm leading-7 text-white/60">
                      Our work is informed by clinical experience and structured
                      assessment.
                    </p>
                  </div>
                </div>

                <div
                  class="grid gap-5 border-b border-white/10 py-7 sm:grid-cols-[80px_1fr]"
                >
                  <span class="text-sm font-bold text-[#FFB600]"> 02 </span>

                  <div>
                    <h3 class="font-serif text-2xl font-semibold text-white">
                      Psychological
                    </h3>

                    <p class="mt-2 text-sm leading-7 text-white/60">
                      Psychological understanding guides assessment and
                      intervention.
                    </p>
                  </div>
                </div>

                <div
                  class="grid gap-5 border-b border-white/10 py-7 sm:grid-cols-[80px_1fr]"
                >
                  <span class="text-sm font-bold text-[#FFB600]"> 03 </span>

                  <div>
                    <h3 class="font-serif text-2xl font-semibold text-white">
                      Psychosocial
                    </h3>

                    <p class="mt-2 text-sm leading-7 text-white/60">
                      Personal, relational and social factors are considered
                      together.
                    </p>
                  </div>
                </div>

                <div class="grid gap-5 py-7 sm:grid-cols-[80px_1fr]">
                  <span class="text-sm font-bold text-[#FFB600]"> 04 </span>

                  <div>
                    <h3 class="font-serif text-2xl font-semibold text-white">
                      Individualised
                    </h3>

                    <p class="mt-2 text-sm leading-7 text-white/60">
                      Every person's concerns, experiences and circumstances are
                      different.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- PHILOSOPHY -->

      <section class="relative px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div
          class="absolute right-[-120px] top-20 h-[380px] w-[380px] rounded-full bg-[#008BCB]/5 blur-3xl"
        ></div>

        <div class="relative mx-auto max-w-[1200px]">
          <div class="grid gap-12 lg:grid-cols-[0.35fr_1fr] lg:gap-20">
            <div>
              <p class="text-xs font-bold tracking-[0.3em] text-[#008BCB]">
                OUR PHILOSOPHY
              </p>

              <div class="mt-5 h-px w-12 bg-[#FFB600]"></div>
            </div>

            <div>
              <h2
                class="font-serif text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-[#293487] sm:text-6xl lg:text-8xl"
              >
                Every behaviour
                <span class="block italic text-[#008BCB]"> has a story. </span>
              </h2>

              <p class="mt-8 max-w-2xl text-lg leading-8 text-[#596274]">
                Understanding that story can be the beginning of change.
              </p>

              <div class="mt-10 max-w-3xl border-l-2 border-[#FFB600] pl-6">
                <p class="text-base leading-8 text-[#596274]">
                  At Foresight, we help individuals and families understand
                  their experiences, recognise patterns and develop healthier
                  ways of moving forward.
                </p>
              </div>

              <p
                class="mt-10 font-serif text-2xl font-semibold italic text-[#293487] sm:text-3xl"
              >
                Understand the Present. Shape the Future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->

      <section class="px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
        <div
          class="mx-auto overflow-hidden rounded-[2rem] bg-[#f3f7fa] px-7 py-12 sm:px-10 lg:px-14 lg:py-14"
        >
          <div
            class="flex flex-col justify-between gap-10 lg:flex-row lg:items-center"
          >
            <div>
              <p class="text-xs font-bold tracking-[0.3em] text-[#008BCB]">
                TAKE THE FIRST STEP
              </p>

              <h2
                class="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight text-[#293487] sm:text-5xl"
              >
                You don't have to navigate your concerns alone.
              </h2>

              <p class="mt-5 max-w-2xl text-base leading-7 text-[#596274]">
                If you are experiencing emotional, behavioural, relationship or
                psychological difficulties, support is available.
              </p>
            </div>

            <RouterLink
              to="/contact"
              class="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#293487] px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#008BCB]"
            >
              Book an Appointment
              <span>→</span>
            </RouterLink>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
/* ABOUT PAGE */
</script>
