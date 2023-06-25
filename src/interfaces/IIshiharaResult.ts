import type { IshiharaTestQuestion } from "@/types/test/ishihara";

export default interface IIshiharaResult {
  testId: string;
  testUrl: string;
  dateCreated: string;
  dateEnded: string;
  totalQuestions: number;
  correctQuestions: number;
  wrongQuestions: number;
  accuracy: number;
  blindnessTypeAccuracy: {
    DEUTERANOPIA: number;
    TRITANOPIA: number;
    PROTANOPIA: number;
  };
  questions: IshiharaTestQuestion[];
}
