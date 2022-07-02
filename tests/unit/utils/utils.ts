import state from "@/store/state";
import { Job } from "@/api/types";
import { GlobalState } from "@/store/types";

export const createStore = (config: Partial<GlobalState> = {}): GlobalState => {
  const initialState = state();
  return { ...initialState, ...config };
};

export const createJob = (config: Partial<Job> = {}): Job => ({
  id: 1,
  title: "Angular Developer",
  organization: "Vue and Me",
  degree: "Master's",
  jobType: "Intern",
  locations: ["Lisbon"],
  minimumQualifications: [],
  prefferedQualification: [],
  description: [],
  dateAdded: "2022-07-04",
  ...config,
});
