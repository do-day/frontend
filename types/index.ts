export type State =
  | 'UNAPPROVAL'
  | 'UNRESOLVED'
  | 'RESOLVING'
  | 'RESOLVED'
  | 'REJECTED'
  | 'CONFIRMED';

export type Report = {
  reportId: number;
  latitude?: number;
  longitude?: number;
  location: string;
  photoRaincatch: string;
  photoAround?: string;
  description: string;
  state?: State;
  createdDate?: string;
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

export type Solve = {
  solutionId: number;
  latitude?: number;
  longitude?: number;
  location: string;
  photo: string;
  falseReport?: string;
  content?: string;
  state?: State;
  createdDate?: string;
  reportDate?: string;
};

export type SolveForm = {
  latitude?: number;
  longitude?: number;
  location?: string;
  photo: File | null;
  falseReport?: string;
};

export type ChangeReward = {
  amount: number;
};

export type Reward = {
  rewardId: number;
  date: string;
  price: number;
  type: string;
  location: string;
};

export type TotalReward = {
  nowReward?: number;
  totalReward?: number;
};

export type MemberForm = {
  userId: string;
  password: string;
};

export type MemberResult = {
  code: number;
  isSuccess: boolean;
  message: string;
  result: {
    id: number;
  };
};
