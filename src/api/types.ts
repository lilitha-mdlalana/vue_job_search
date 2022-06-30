export interface Job {
  id: number;
  title: string;
  organizations: string;
  degree: string;
  jobType: string;
  locations: string[];
  minimumQualifications: string[];
  prefferedQualification: string[];
  description: string[];
  dateAdded: string;
}
