<template>
  <div class="min-h-screen bg-white text-[#1f2942]">
    <main class="overflow-hidden">
      <!-- CONTACT -->

      <section class="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div
          class="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20"
        >
          <!-- DETAILS -->

          <div>
            <p class="text-xs font-bold tracking-[0.3em] text-[#008BCB]">
              GET IN TOUCH
            </p>

            <h2
              class="mt-5 max-w-md font-serif text-4xl font-semibold leading-tight text-[#293487] sm:text-5xl"
            >
              Let's start with
              <span class="italic text-[#008BCB]"> understanding. </span>
            </h2>

            <p class="mt-6 max-w-lg text-base leading-8 text-[#596274]">
              You can contact Foresight directly or use the appointment form to
              send your request through WhatsApp.
            </p>

            <div class="mt-12 border-t border-[#293487]/10">
              <!-- PHONE -->

              <div class="flex gap-5 border-b border-[#293487]/10 py-6">
                <div
                  class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#293487] text-lg text-white"
                >
                  ☎
                </div>

                <div>
                  <p
                    class="text-[10px] font-bold tracking-[0.2em] text-[#008BCB]"
                  >
                    PHONE
                  </p>

                  <a
                    href="tel:+917660002050"
                    class="mt-2 block text-base font-semibold text-[#293487] transition hover:text-[#008BCB]"
                  >
                    +91 7 66 000 2050
                  </a>
                </div>
              </div>

              <!-- WHATSAPP -->

              <div class="flex gap-5 border-b border-[#293487]/10 py-6">
                <div
                  class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFB600] text-lg text-[#293487]"
                >
                  ↗
                </div>

                <div>
                  <p
                    class="text-[10px] font-bold tracking-[0.2em] text-[#008BCB]"
                  >
                    WHATSAPP
                  </p>

                  <a
                    href="https://wa.me/917660002050"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mt-2 block text-base font-semibold text-[#293487] transition hover:text-[#008BCB]"
                  >
                    Chat with us
                  </a>
                </div>
              </div>

              <!-- ADDRESS -->

              <div class="flex gap-5 py-6">
                <div
                  class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#008BCB] text-lg text-white"
                >
                  ●
                </div>

                <div>
                  <p
                    class="text-[10px] font-bold tracking-[0.2em] text-[#008BCB]"
                  >
                    LOCATION
                  </p>

                  <p class="mt-2 max-w-sm text-sm leading-7 text-[#596274]">
                    BHI, Road No. 3, Greenhills Colony, Kothapet Backside,
                    Paramitha Women & Child Hospital, Hyderabad – 500035
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/917660002050"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-8 inline-flex items-center gap-3 rounded-full bg-[#293487] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#008BCB]"
            >
              Chat on WhatsApp
              <span>→</span>
            </a>
          </div>

          <!-- FORM -->

          <div
            class="rounded-[2rem] border border-[#293487]/10 bg-[#f3f7fa] p-6 sm:p-9 lg:p-11"
          >
            <div class="flex items-start justify-between gap-6">
              <div>
                <p class="text-xs font-bold tracking-[0.3em] text-[#008BCB]">
                  APPOINTMENT REQUEST
                </p>

                <h2
                  class="mt-4 font-serif text-3xl font-semibold leading-tight text-[#293487] sm:text-4xl"
                >
                  Tell us how we can help.
                </h2>

                <p
                  v-if="serviceLabel"
                  class="mt-4 max-w-xl text-sm leading-6 text-[#596274]"
                >
                  Your earlier selection has been carried forward. You can
                  change it below if another kind of support feels more
                  appropriate.
                </p>
              </div>

              <div
                class="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#293487] text-lg text-[#FFB600] sm:flex"
              >
                ✦
              </div>
            </div>

            <form class="mt-9 space-y-5" @submit.prevent="requestAppointment">
              <!-- NAME -->

              <div>
                <label
                  for="name"
                  class="mb-2 block text-[10px] font-bold tracking-[0.18em] text-[#596274]"
                >
                  YOUR NAME *
                </label>

                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  autocomplete="name"
                  placeholder="Enter your name"
                  class="w-full rounded-xl border border-[#293487]/10 bg-white px-4 py-3.5 text-sm text-[#293487] outline-none transition placeholder:text-[#9aa2af] focus:border-[#008BCB] focus:ring-4 focus:ring-[#008BCB]/10"
                />
              </div>

              <!-- PHONE -->

              <div>
                <label
                  for="phone"
                  class="mb-2 block text-[10px] font-bold tracking-[0.18em] text-[#596274]"
                >
                  PHONE NUMBER *
                </label>

                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  required
                  autocomplete="tel"
                  placeholder="+91"
                  class="w-full rounded-xl border border-[#293487]/10 bg-white px-4 py-3.5 text-sm text-[#293487] outline-none transition placeholder:text-[#9aa2af] focus:border-[#008BCB] focus:ring-4 focus:ring-[#008BCB]/10"
                />
              </div>

              <!-- EMAIL -->

              <div>
                <label
                  for="email"
                  class="mb-2 block text-[10px] font-bold tracking-[0.18em] text-[#596274]"
                >
                  EMAIL ADDRESS
                </label>

                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  autocomplete="email"
                  placeholder="you@example.com"
                  class="w-full rounded-xl border border-[#293487]/10 bg-white px-4 py-3.5 text-sm text-[#293487] outline-none transition placeholder:text-[#9aa2af] focus:border-[#008BCB] focus:ring-4 focus:ring-[#008BCB]/10"
                />
              </div>

              <!-- SERVICE -->

              <div>
                <label
                  for="service"
                  class="mb-2 block text-[10px] font-bold tracking-[0.18em] text-[#596274]"
                >
                  SERVICE *
                </label>

                <select
                  id="service"
                  v-model="form.service"
                  required
                  class="w-full rounded-xl border border-[#293487]/10 bg-white px-4 py-3.5 text-sm text-[#293487] outline-none transition focus:border-[#008BCB] focus:ring-4 focus:ring-[#008BCB]/10"
                >
                  <option value="" disabled>Select a service</option>

                  <option value="Individual Counselling">
                    Individual Counselling
                  </option>

                  <option value="Family Counselling">Family Counselling</option>

                  <option value="Couple & Relationship Counselling">
                    Couple & Relationship Counselling
                  </option>

                  <option value="Child & Adolescent Support">
                    Child & Adolescent Support
                  </option>

                  <option value="Psychological Assessment">
                    Psychological Assessment
                  </option>

                  <option value="De-addiction & Recovery Support">
                    De-addiction & Recovery Support
                  </option>
                </select>
              </div>

              <!-- DATE -->

              <div class="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    for="date"
                    class="mb-2 block text-[10px] font-bold tracking-[0.18em] text-[#596274]"
                  >
                    PREFERRED DATE *
                  </label>

                  <input
                    id="date"
                    v-model="form.date"
                    type="date"
                    required
                    :min="today"
                    class="w-full rounded-xl border border-[#293487]/10 bg-white px-4 py-3.5 text-sm text-[#293487] outline-none transition focus:border-[#008BCB] focus:ring-4 focus:ring-[#008BCB]/10"
                  />
                </div>

                <div>
                  <label
                    for="time"
                    class="mb-2 block text-[10px] font-bold tracking-[0.18em] text-[#596274]"
                  >
                    PREFERRED TIME
                  </label>

                  <select
                    id="time"
                    v-model="form.time"
                    class="w-full rounded-xl border border-[#293487]/10 bg-white px-4 py-3.5 text-sm text-[#293487] outline-none transition focus:border-[#008BCB] focus:ring-4 focus:ring-[#008BCB]/10"
                  >
                    <option value="">Any available time</option>

                    <option value="Morning">Morning</option>

                    <option value="Afternoon">Afternoon</option>

                    <option value="Evening">Evening</option>
                  </select>
                </div>
              </div>

              <!-- MESSAGE -->

              <div>
                <label
                  for="message"
                  class="mb-2 block text-[10px] font-bold tracking-[0.18em] text-[#596274]"
                >
                  MESSAGE
                </label>

                <textarea
                  id="message"
                  v-model="form.message"
                  rows="4"
                  placeholder="Briefly tell us what you would like support with..."
                  class="w-full resize-none rounded-xl border border-[#293487]/10 bg-white px-4 py-3.5 text-sm text-[#293487] outline-none transition placeholder:text-[#9aa2af] focus:border-[#008BCB] focus:ring-4 focus:ring-[#008BCB]/10"
                ></textarea>
              </div>

              <!-- SUBMIT -->

              <button
                type="submit"
                class="flex w-full items-center justify-center gap-3 rounded-xl bg-[#293487] px-6 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(41,52,135,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#008BCB]"
              >
                Request Appointment
                <span>→</span>
              </button>

              <p class="text-center text-[11px] leading-5 text-[#7b8492]">
                Your request will open WhatsApp with the appointment details
                ready to send.
              </p>
            </form>
          </div>
        </div>
      </section>

      <!-- FINAL CTA -->

      <section class="px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
        <div
          class="mx-auto max-w-[1200px] rounded-[2rem] bg-[#293487] px-7 py-12 text-center sm:px-10 lg:py-16"
        >
          <p class="text-xs font-bold tracking-[0.3em] text-[#FFB600]">
            YOU CAN BEGIN HERE
          </p>

          <h2
            class="mx-auto mt-5 max-w-3xl font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl"
          >
            Understanding can be the beginning of change.
          </h2>

          <p
            class="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base"
          >
            One message is enough to start the conversation.
          </p>

          <a
            href="https://wa.me/917660002050"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-8 inline-flex items-center gap-3 rounded-full bg-[#FFB600] px-8 py-4 text-sm font-semibold text-[#293487] transition duration-300 hover:-translate-y-0.5 hover:bg-white"
          >
            Request an Appointment
            <span>→</span>
          </a>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive } from "vue";
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

const serviceValueMap = {
  individual: "Individual Counselling",
  family: "Family Counselling",
  couple: "Couple & Relationship Counselling",
  child: "Child & Adolescent Support",
  assessment: "Psychological Assessment",
  addiction: "De-addiction & Recovery Support",
};

const defaultMessages = {
  low: "I have been feeling low and would like some support.",
  anxious: "I have been feeling anxious and would like some support.",
  exhausted: "I have been feeling exhausted and would like some support.",
  overwhelmed: "I have been feeling overwhelmed and would like some support.",
  focus:
    "I have been finding it difficult to focus and would like some support.",
  unsure:
    "Something has been feeling off and I would like to understand it better.",
};

const form = reactive({
  name: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  time: "",
  message: "",
});

const today = computed(() => {
  const date = new Date();

  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
});

onMounted(() => {
  setStage("begin");

  if (state.service && serviceValueMap[state.service]) {
    form.service = serviceValueMap[state.service];
  }

  if (state.feeling && defaultMessages[state.feeling]) {
    form.message = defaultMessages[state.feeling];
  }
});

const requestAppointment = () => {
  const whatsappNumber = "917660002050";

  const message = [
    "Hello Foresight Counselling Centre,",
    "",
    "I would like to request an appointment.",
    "",
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    `Email: ${form.email || "Not provided"}`,
    `Service: ${form.service}`,
    `Preferred Date: ${form.date}`,
    `Preferred Time: ${form.time || "Any available time"}`,
    `Message: ${form.message || "Not provided"}`,
    "",
    "Thank you.",
  ].join("\n");

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
};
</script>
