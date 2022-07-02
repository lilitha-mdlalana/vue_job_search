import { Job, Degree } from "@/api/types";

export interface GlobalState {
  isLoggedIn: boolean;
  jobs: Job[];
  selectedOrganizations: string[];
  skillsSearchTerm: string;
  selectedJobTypes: string[];
  degrees: Degree[];
  selectedDegrees: string[];
}
