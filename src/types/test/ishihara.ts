import type { BaseTest, BaseTestQuestion } from ".";

export type IshiharaTest = BaseTest<IshiharaTestQuestion>;

export type IshiharaTestQuestion = BaseTestQuestion & {
  imageUrl: string;
  actualNumber: number;
};
