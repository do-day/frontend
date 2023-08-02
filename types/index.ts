export type ReportForm = {
  memberId: number;
  location: string;
  photoRaincatch: File | null;
  photoAround?: File | null;
  description?: string;
  latitude: number;
  longitude: number;
};
