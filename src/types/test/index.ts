export type BaseTest<TestQuestion extends BaseTestQuestion = BaseTestQuestion> =
  {
    testId: string;
    questions: TestQuestion[];
    dateCreated: string;
  };

export type BaseTestQuestion = {
  userGuess: string | number | null;
};
