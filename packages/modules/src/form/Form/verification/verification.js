// @flow
import { getModuleControlsMap } from '../moduleControls';

export const avg = (values: Array<?number>): number => {
  const filtered = values.filter(v => typeof v !== 'undefined');
  if (!filtered.length) {
    return 0;
  }
  const sum = filtered.reduce((all, next) => all + next, 0);
  return Math.round((sum / values.length) * 1000) / 1000;
};

export const calculateModuleScore = (
  value: any,
  Control: ModuleControl
): ?number => {
  if (!Control || !Control.module || !Control.module.verificationScore) {
    return undefined;
  }
  return Control.module.verificationScore(value);
};

export const calculateVerificationScore = (
  response: Object,
  formModules: Array<Module>,
  controls: Array<Object>,
  scoreMethod: totalScoreFn = avg
) => {
  if (!response) {
    return 0;
  }
  const controlsMap = getModuleControlsMap(controls);

  const moduleScores = Reflect.ownKeys(response).map(fieldName => {
    const formModule = formModules.find(m => m.name === fieldName);
    if (typeof formModule === 'undefined') {
      return undefined;
    }
    return calculateModuleScore(
      response[fieldName],
      controlsMap[formModule.type]
    );
  });

  return scoreMethod(moduleScores);
};
