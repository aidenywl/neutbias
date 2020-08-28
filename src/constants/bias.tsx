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
    biased: 'books are to [mankind] what memory is to the individual',
    unbiased: 'books are to humankind what memory is to the individual',
  },
  {
    name: 'Epistemological Bias',
    description: 'Linguistic features that subtly modify the believability of a proposition',
    biased: 'he [realized] that all claims by the news source are biased',
    unbiased: 'he says that all claims by the news source are biased',
  },
  {
    name: 'Framing Bias',
    description: 'Using subjective words or phrases linked with a particular point of view',
    biased: "Schnabel did the [fantastic] reproductions of Basquiat's work",
    unbiased: "Schnabel did the reproductions of Basquiat's work",
  },
];
