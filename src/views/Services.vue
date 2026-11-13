<template>
  <main class="min-h-screen overflow-hidden bg-[#eaf0fb] text-[#1f2942]">
    <!-- HERO SECTION -->
    <section class="relative overflow-hidden bg-[#293487]">
      <div
        class="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-[#008BCB]/30 blur-3xl"
      ></div>
      <div
        class="absolute -bottom-28 left-1/4 h-72 w-72 rounded-full bg-[#FFB600]/20 blur-3xl"
      ></div>

      <div
        class="relative mx-auto max-w-[1400px] px-6 pb-14 pt-24 sm:px-10 lg:px-16 lg:py-28"
      >
        <div class="max-w-4xl">
          <div class="flex items-center gap-3">
            <span class="h-1 w-10 rounded-full bg-[#FFB600]"></span>
            <p class="text-xs font-bold tracking-[0.28em] text-[#FFB600]">
              OUR SERVICES
            </p>
          </div>

          <h1
            class="mt-5 font-serif text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-8xl"
          >
            Support that begins with
            <span class="block italic text-[#FFB600]">understanding.</span>
          </h1>

          <p
            class="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg"
          >
            Psychological and psychosocial support for individuals, children,
            couples and families, shaped around personal needs.
          </p>

          <div class="mt-7 flex flex-wrap gap-3">
            <button
              @click="goToContact"
              class="rounded-full bg-[#FFB600] px-6 py-3.5 text-sm font-bold text-[#293487] transition hover:bg-white"
            >
              Explore the support →
            </button>

            <a
              href="#our-series"
              class="rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Explore concerns ↓
            </a>
          </div>

          <div class="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            <div class="rounded-2xl border border-white/15 bg-white/10 p-4">
              <span class="font-serif text-3xl font-semibold text-[#FFB600]"
                >01</span
              >
              <p class="mt-1 text-xs text-white/80">Understand</p>
            </div>

            <div class="rounded-2xl border border-white/15 bg-white/10 p-4">
              <span class="font-serif text-3xl font-semibold text-[#7DE0F5]"
                >02</span
              >
              <p class="mt-1 text-xs text-white/80">Assess</p>
            </div>

            <div class="rounded-2xl border border-white/15 bg-white/10 p-4">
              <span class="font-serif text-3xl font-semibold text-[#D7D5FF]"
                >03</span
              >
              <p class="mt-1 text-xs text-white/80">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- INTRODUCTION -->
    <section
      class="bg-gradient-to-br from-[#d9f4ff] via-[#e8ebff] to-[#fff0c4] px-6 py-14 sm:px-10 lg:px-16"
    >
      <div
        class="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-2 lg:items-center"
      >
        <div>
          <p class="text-xs font-bold tracking-[0.25em] text-[#008BCB]">
            HOW WE HELP
          </p>

          <h2
            class="mt-4 font-serif text-3xl font-semibold text-[#293487] sm:text-5xl"
          >
            Care that considers the
            <span class="italic text-[#008BCB]">whole context.</span>
          </h2>
        </div>

        <div class="rounded-3xl border border-white/70 bg-white/70 p-6">
          <p class="text-base leading-8 text-[#46536c]">
            At Foresight, concerns are understood in their personal,
            behavioural, relational and social context.
          </p>

          <p class="mt-3 text-sm leading-7 text-[#596274]">
            Depending on individual needs, support may involve psychological
            interventions, assessments, psychoeducation, behavioural strategies,
            family interventions and psychosocial care.
          </p>
        </div>
      </div>
    </section>

    <!-- OUR SERIES: MENTAL HEALTH CONCERNS -->
    <section id="our-series" class="bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div class="mx-auto max-w-[1400px]">
        <p class="text-xs font-bold tracking-[0.25em] text-[#008BCB]">
          OUR SERIES
        </p>

        <h2
          class="mt-3 font-serif text-3xl font-semibold text-[#293487] sm:text-5xl"
        >
          Understanding Mental Health
        </h2>

        <p class="mt-4 max-w-3xl text-sm leading-7 text-[#596274]">
          Explore common psychological, emotional and behavioural concerns.
          Understanding these concerns is an important step towards seeking
          appropriate professional support.
        </p>

        <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="topic in concernTopics"
            :key="topic.title"
            class="group overflow-hidden rounded-3xl border border-[#dfe6ef] bg-[#f8fbff] transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div class="overflow-hidden">
              <img
                :src="topic.image"
                :alt="topic.title"
                class="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div class="p-6">
              <span class="text-xs font-bold tracking-wider text-[#008BCB]">
                {{ topic.category }}
              </span>

              <h3 class="mt-3 font-serif text-2xl font-semibold text-[#293487]">
                {{ topic.title }}
              </h3>

              <p class="mt-3 text-sm leading-7 text-[#596274]">
                {{ topic.description }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- TYPES OF THERAPIES -->
    <section class="bg-[#eaf0fb] px-6 py-16 sm:px-10 lg:px-16">
      <div class="mx-auto max-w-[1400px]">
        <p class="text-xs font-bold tracking-[0.25em] text-[#008BCB]">
          PSYCHOLOGICAL INTERVENTIONS
        </p>

        <h2
          class="mt-3 font-serif text-3xl font-semibold text-[#293487] sm:text-5xl"
        >
          Types of Therapies
        </h2>

        <p class="mt-4 max-w-3xl text-sm leading-7 text-[#596274]">
          Different therapeutic approaches can help individuals understand their
          thoughts, emotions and behaviours. The approach is selected according
          to individual needs and professional assessment.
        </p>

        <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="therapy in therapyTopics"
            :key="therapy.title"
            class="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div class="overflow-hidden">
              <img
                :src="therapy.image"
                :alt="therapy.title"
                class="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div class="p-5">
              <h3 class="font-serif text-xl font-semibold text-[#293487]">
                {{ therapy.title }}
              </h3>

              <p class="mt-3 text-sm leading-7 text-[#596274]">
                {{ therapy.description }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CHILD PSYCHOLOGY AND SCHOOL PROBLEMS -->
    <section
      class="bg-gradient-to-br from-[#d9f4ff] via-[#e8ebff] to-[#fff0c4] px-6 py-16 sm:px-10 lg:px-16"
    >
      <div class="mx-auto max-w-[1400px]">
        <div class="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p class="text-xs font-bold tracking-[0.25em] text-[#008BCB]">
              CHILD & ADOLESCENT PSYCHOLOGY
            </p>

            <h2
              class="mt-3 font-serif text-3xl font-semibold text-[#293487] sm:text-5xl"
            >
              Supporting Children at Every Stage
            </h2>

            <p class="mt-5 text-sm leading-8 text-[#596274]">
              Children and adolescents may experience emotional, behavioural,
              academic and developmental difficulties. Early identification and
              appropriate assessment can help understand their individual needs.
            </p>
          </div>

          <div class="overflow-hidden rounded-3xl shadow-lg">
            <img
              src="https://strapi-bucket-cdc.s3.ap-south-1.amazonaws.com/4_511e659b94.jpg"
              alt="Male child therapist working with a young child"
              class="h-72 w-full object-cover sm:h-96"
              loading="lazy"
            />
          </div>
        </div>

        <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="item in childSupportTopics"
            :key="item.title"
            class="rounded-3xl border border-white bg-white/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div class="overflow-hidden rounded-2xl">
              <img
                :src="item.image"
                :alt="item.title"
                class="h-44 w-full object-cover transition duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>

            <h3 class="mt-4 font-serif text-xl font-semibold text-[#293487]">
              {{ item.title }}
            </h3>

            <p class="mt-3 text-sm leading-7 text-[#596274]">
              {{ item.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- PSYCHOLOGICAL ASSESSMENTS -->
    <section class="bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div class="mx-auto max-w-[1200px]">
        <p class="text-xs font-bold tracking-[0.25em] text-[#008BCB]">
          PSYCHOLOGICAL TESTING
        </p>

        <h2
          class="mt-3 font-serif text-3xl font-semibold text-[#293487] sm:text-5xl"
        >
          Psychological Assessments
        </h2>

        <p class="mt-4 max-w-3xl text-sm leading-7 text-[#596274]">
          Psychological assessments help understand an individual's cognitive
          abilities, learning profile, emotional functioning and behavioural
          patterns.
        </p>

        <div class="mt-8 grid gap-6 md:grid-cols-2">
          <div class="overflow-hidden rounded-3xl bg-[#eaf0fb]">
            <img
              src="https://www.whis.edu.in/smc/image-basket/Remedial-Teaching--The-Recharge-Center-1724132083.jpg"
              alt="Psychological assessment and testing"
              class="h-64 w-full object-cover"
              loading="lazy"
            />

            <div class="p-6">
              <h3 class="font-serif text-2xl font-semibold text-[#293487]">
                IQ & Cognitive Testing
              </h3>

              <p class="mt-3 text-sm leading-7 text-[#596274]">
                Assessment of intellectual abilities and cognitive functioning
                using appropriate standardised assessment tools.
              </p>
            </div>
          </div>

          <div class="overflow-hidden rounded-3xl bg-[#eaf0fb]">
            <img
              src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg"
              alt="Child learning assessment"
              class="h-64 w-full object-cover"
              loading="lazy"
            />

            <div class="p-6">
              <h3 class="font-serif text-2xl font-semibold text-[#293487]">
                Learning & Developmental Assessment
              </h3>

              <p class="mt-3 text-sm leading-7 text-[#596274]">
                Understanding learning difficulties, attention, concentration
                and developmental needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- OUR APPROACH -->
    <section
      class="bg-gradient-to-br from-[#fff0c4] via-[#e2f5ff] to-[#e7e9ff] px-6 py-16 sm:px-10 lg:px-16"
    >
      <div
        class="mx-auto max-w-[1200px] rounded-3xl bg-[#293487] p-6 sm:p-10 lg:p-12"
      >
        <div class="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p class="text-xs font-bold tracking-[0.28em] text-[#FFB600]">
              OUR APPROACH
            </p>

            <h2
              class="mt-3 font-serif text-3xl font-semibold text-white sm:text-5xl"
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
              @click="goToContact"
              class="mt-6 rounded-full bg-[#FFB600] px-6 py-3.5 text-sm font-bold text-[#293487] transition hover:bg-white"
            >
              Explore the support →
            </button>
          </div>

          <div class="grid gap-3 sm:grid-cols-2">
            <div
              v-for="(stage, index) in approachStages"
              :key="stage.title"
              class="rounded-2xl border border-white/10 bg-white/10 p-5"
            >
              <span
                class="font-serif text-3xl font-semibold"
                :class="index % 2 === 0 ? 'text-[#FFB600]' : 'text-[#7DE0F5]'"
              >
                0{{ index + 1 }}
              </span>

              <h3 class="mt-2 text-base font-semibold text-white">
                {{ stage.title }}
              </h3>

              <p class="mt-2 text-xs leading-6 text-white/65">
                {{ stage.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="bg-[#dceeff] px-6 py-16 sm:px-10 lg:px-16">
      <div
        class="mx-auto max-w-[1000px] rounded-3xl border border-white bg-white/70 px-6 py-10 text-center sm:px-10"
      >
        <p class="text-xs font-bold tracking-[0.25em] text-[#293487]">
          TAKE THE FIRST STEP
        </p>

        <h2
          class="mt-4 font-serif text-3xl font-semibold text-[#293487] sm:text-5xl"
        >
          Find the right space for
          <span class="italic text-[#008BCB]">your concerns.</span>
        </h2>

        <p class="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#596274]">
          Tell us what you're experiencing and our team can help you understand
          the available support.
        </p>

        <RouterLink
          to="/contact"
          @click="goToContact"
          class="mt-7 inline-flex rounded-full bg-[#293487] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#008BCB]"
        >
          Book an Appointment →
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useForesightJourney } from "../composables/useForesightJourney.js";

const router = useRouter();

const { setService, setStage } = useForesightJourney();

onMounted(() => {
  setStage("explore");
});

// EXISTING SERVICES

const services = [
  {
    key: "individual",
    id: "individual-support",
    category: "INDIVIDUAL SUPPORT",
    title: "Individual Counselling",
    short: "A space to explore emotional, behavioural and personal concerns.",
    description:
      "Professional support for emotional, behavioural and personal concerns.",
    details:
      "Interventions may include CBT-informed techniques, psychoeducation, emotional regulation, behavioural strategies, problem-solving and coping-skills training.",
    cardClass: "border-[#c9d4fa] bg-gradient-to-r from-white to-[#e8ebff]",
  },
  {
    key: "family",
    id: "family-support",
    category: "FAMILY SUPPORT",
    title: "Family Counselling",
    short: "Support for communication, parenting and family concerns.",
    description:
      "Understanding relationships, communication and family dynamics.",
    details:
      "Support for communication difficulties, parenting concerns, interpersonal conflicts and adjustment difficulties.",
    cardClass: "border-[#b9e9f7] bg-gradient-to-r from-white to-[#ddf7ff]",
  },
  {
    key: "relationship",
    id: "relationship-support",
    category: "RELATIONSHIPS",
    title: "Couple & Relationship Counselling",
    short: "Support for communication and relationship patterns.",
    description:
      "A structured space to understand relationship patterns and develop healthier communication.",
    details:
      "Sessions may focus on communication, conflict resolution, emotional connection, expectations and relationship adjustment.",
    cardClass: "border-[#f3d98d] bg-gradient-to-r from-white to-[#fff4d4]",
  },
  {
    key: "young-people",
    id: "young-people-support",
    category: "YOUNG PEOPLE",
    title: "Child & Adolescent Support",
    short: "Support that considers young people and their context.",
    description:
      "Children and adolescents may express emotional difficulties through changes in behaviour, academics and relationships.",
    details:
      "Our approach considers the child, family and environmental context while developing appropriate psychological and psychosocial interventions.",
    cardClass: "border-[#d8ccff] bg-gradient-to-r from-white to-[#eee9ff]",
  },
  {
    key: "assessment",
    id: "assessment-support",
    category: "ASSESSMENT",
    title: "Psychological Assessment",
    short: "Assessment to understand psychological functioning.",
    description:
      "Professional psychological assessment can help develop a clearer understanding of cognitive, emotional, behavioural and personality-related functioning.",
    details:
      "Assessments are selected according to the individual's clinical requirements.",
    cardClass: "border-[#b9e9f7] bg-gradient-to-r from-white to-[#e1f8f8]",
  },
  {
    key: "recovery",
    id: "recovery-support",
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
    cardClass: "border-[#f3d98d] bg-gradient-to-r from-white to-[#fff0d7]",
  },
];

// MENTAL HEALTH CONCERNS

const concernTopics = [
  {
    category: "EMOTIONAL WELLBEING",
    title: "Anxiety & Panic",
    description:
      "Understanding excessive worry, fear, panic symptoms and developing healthy coping strategies.",
    image:
      "https://saanthwana.com/saanthwana-counselling-healing-center-hyderabad/saanthwana-counselling-healing-center-hyderabad.png",
  },
  {
    category: "THOUGHTS & BEHAVIOURS",
    title: "Obsessive Compulsive Disorder (OCD)",
    description:
      "Understanding intrusive thoughts, repetitive behaviours and available psychological support.",
    image:
      "https://static.mywebsites360.com/fbb117e45e7a46cba2bfc96d8a0f2b89/i/d7e68439de02424080068ee464190e61/1/4SoifmQp45JMgBnHjfgmz/Anxiety%20Center%20Checking%20OCD.png",
  },
  {
    category: "EMOTIONAL REGULATION",
    title: "Anger Management",
    description:
      "Recognising anger triggers, managing emotions and developing healthier responses.",
    image:
      "https://cdn.pixabay.com/photo/2014/02/25/10/59/angry-man-274175_1280.jpg",
  },
  {
    category: "MOOD & EMOTIONS",
    title: "Emotional Difficulties",
    description:
      "Support for low mood, stress, self-esteem and emotional adjustment.",
    image:
      "https://images.pexels.com/photos/1930523/pexels-photo-1930523.jpeg?cs=srgb&dl=pexels-ana-bregantin-892791-1930523.jpg&fm=jpg",
  },
  {
    category: "BEHAVIOURAL HEALTH",
    title: "Addiction & Related Problems",
    description:
      "Understanding addictive behaviours, triggers, motivation and recovery strategies.",
    image: "https://asrcharitabletrust.org/6.6.png",
  },
  {
    category: "BEHAVIOURAL WELLBEING",
    title: "Behavioural Problems",
    description:
      "Understanding behavioural changes, interpersonal difficulties and adjustment concerns.",
    image:
      "https://framerusercontent.com/images/6aPrkDZPRV4hHogFhZDa8ENBqI.png?height=1024&width=1024",
  },
];

// TYPES OF THERAPIES

const therapyTopics = [
  {
    title: "Cognitive Behavioural Therapy (CBT)",
    description:
      "Identifying unhelpful thoughts and behaviours and developing healthier thinking patterns.",
    image:
      "https://fostercdchyderabad.com/assets/img/services/cognitive-behavioural-therapy-02.png",
  },
  {
    title: "Mindfulness Therapy",
    description:
      "Developing present-moment awareness and learning to manage thoughts and emotions.",
    image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
  },
  {
    title: "Relaxation Exercises",
    description:
      "Breathing exercises, grounding techniques and muscle relaxation for stress management.",
    image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg",
  },
  {
    title: "Counselling & Psychotherapy",
    description:
      "A supportive environment to explore concerns and develop effective coping skills.",
    image: "https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg",
  },
];

// CHILD AND SCHOOL-RELATED PROBLEMS

const childSupportTopics = [
  {
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format%3Dauto%2Cw%3D768%2Ch%3D479%2Cfit%3Dcrop/MVNkISAPXnFqY8Ld/an_image_of_an_indian_child_age_7_sitting_at_a_des_c4da81adc8-Q9zriCVPNAF3Bh2d.jpeg",
    title: "IQ Tests & Cognitive Assessment",
    description:
      "Assessment of intellectual abilities and cognitive functioning using appropriate standardised tools.",
  },
  {
    image:
      "https://static.wixstatic.com/media/5de58e_4b2fcf3e0daf4f38a1e80ddbbe5ae081~mv2.jpg/v1/fill/w_640%2Ch_708%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/5de58e_4b2fcf3e0daf4f38a1e80ddbbe5ae081~mv2.jpg",
    title: "Learning Difficulties",
    description:
      "Support for difficulties related to reading, writing, mathematics and learning.",
  },
  {
    image:
      "https://framerusercontent.com/images/Y5qY8bDY12p3ABiuBGUUxUrllkk.jpeg?height=1024&width=1024",
    title: "Attention & Concentration",
    description:
      "Understanding attention, focus and factors affecting classroom participation.",
  },
  {
    image: "https://globalgiving.org/pfil/16364/ph_16364_57492.jpg",
    title: "School-Related Problems",
    description:
      "Support for academic stress, peer relationships and school adjustment.",
  },
  {
    image: "https://isharastogi.com/hero-image.png",
    title: "Emotional & Behavioural Problems",
    description:
      "Understanding emotional outbursts, behavioural changes and coping difficulties.",
  },
  {
    image: "https://www.creativemindind.com/imgs/Parent%20Counseling.jpg",
    title: "Parent & Family Guidance",
    description:
      "Helping parents develop supportive routines and healthy communication with children.",
  },
];

// OUR APPROACH

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

// NAVIGATION

const chooseService = (service) => {
  setService(service.key);
  setStage("connect");

  router.push({
    path: "/contact",
    query: { service: service.key },
  });
};

const goToContact = () => {
  setStage("connect");
  router.push("/contact");
};
</script>
