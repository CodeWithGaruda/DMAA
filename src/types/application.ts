// src/types/application.ts

export interface PersonalDetails {
  fullName: string;
  email: string;
  gender: string;
  dateOfBirth: string;
  age: number;
  height?: string;
  weight?: string;
  bloodGroup?: string;
  occupation?: string;
  phoneNumber: string;
  address: string;
}

export interface MartialArtsBackground {
  hasPriorExperience: boolean;
  artName?: string;
  degreeOrDan?: string;
  previousAcademy?: string;
  purpose: string;
  selectedDisciplines: string[];
}

export interface Uploads {
  photo?: File | null;
  aadhaar?: File | null;
}

export interface Declaration {
  accepted: boolean;
  acceptedAt?: string;
}

export interface ApplicationMeta {
  submittedAt?: string;
  submittedByUserId?: string;
}

export interface MemberApplication {
  personalDetails: PersonalDetails;
  martialArtsBackground: MartialArtsBackground;
  uploads: Uploads;
  declaration: Declaration;
  meta: ApplicationMeta;
}
