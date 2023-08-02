export type State =
  | 'UNAPPROVAL'
  | 'UNRESOLVED'
  | 'RESOLVING'
  | 'RESOLVED'
  | 'REJECTED';

export type Report = {
  reportId: number;
  latitude?: number;
  longitude?: number;
  location: string;
  photoRaincatch: string;
  photoAround?: string;
  description: string;
  state?: State;
  createDate?: string;
};

export type Solve = {
  solutionId: number;
  latitude?: number;
  longitude?: number;
  location: string;
  photo: string;
  content: string;
  state?: State;
  createdDate?: string;
  reportDate?: string;
};

export type ReportForm = {
  memberId: number;
  location: string;
  photoRaincatch: File | null;
  photoAround?: File | null;
  description?: string;
  latitude: number;
  longitude: number;
};