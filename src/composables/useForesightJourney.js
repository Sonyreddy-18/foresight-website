import { reactive } from "vue";

const state = reactive({
  feeling: "",
  service: "",
  stage: "explore",
});

export function useForesightJourney() {
  function setFeeling(feeling) {
    state.feeling = feeling;
  }

  function setService(service) {
    state.service = typeof service === "string" ? service : service?.id || "";
  }

  function setStage(stage) {
    state.stage = stage;
  }

  return {
    state,
    setFeeling,
    setService,
    setStage,
  };
}
