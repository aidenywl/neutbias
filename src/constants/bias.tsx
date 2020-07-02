export interface BiasInfo {
  readonly name: string;
  readonly description: string;
  readonly biased: string;
  readonly unbiased: string;
}

export const BIASES: BiasInfo[] = [
  {
    name: 'Demographic Bias',
    description:
      'Text with presuppositions about particular genders, races, or other demographic categories.',
    biased: 'books are to mankind what memory is to the individual',
    unbiased: 'books are to humankind what memory is to the individual',
  },
  {
    name: 'Framing Bias',
    description: 'Using Subjective Words or phrases linked with a particular point of view',
    biased: 'books are to mankind what memory is to the individual',
    unbiased: 'books are to humankind what memory is to the individual',
  },
  {
    name: 'Demographic Bias',
    description:
      'Text with presuppositions about particular genders, races, or other demographic categories.',
    biased: 'books are to mankind what memory is to the individual',
    unbiased: 'books are to humankind what memory is to the individual',
  },
];
