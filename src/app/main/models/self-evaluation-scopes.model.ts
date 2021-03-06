interface SelfEvaluationCriteria {
  criteria: string;
  points: string;
  isChecked: boolean;
}

export default interface Scopes {
  min: Array<SelfEvaluationCriteria>;
  normal: Array<SelfEvaluationCriteria>;
  extra: Array<SelfEvaluationCriteria>;
  fines: Array<SelfEvaluationCriteria>;
}
