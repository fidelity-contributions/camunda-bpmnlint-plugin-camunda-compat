const camundaCloud12Checks = require('./camunda-cloud-1-2-checks');

const {
  checkEvery,
  replaceCheck
} = require('./utils/rule');

const { withTranslations } = require('./utils/element');

const {
  hasZeebeCalledDecisionOrTaskDefinition,
  hasZeebeLoopCharacteristics
} = require('./utils/cloud/element');

module.exports = [
  ...replaceCheck(
    camundaCloud12Checks,
    'bpmn:BusinessRuleTask',
    withTranslations(
      checkEvery(
        hasZeebeCalledDecisionOrTaskDefinition,
        hasZeebeLoopCharacteristics
      ),
      {
        'Element of type <bpmn:BusinessRuleTask> must have one extension element of type <zeebe:CalledDecision> or <zeebe:TaskDefinition>': 'A <Business Rule Task> must have a defined <Implementation>',
        'Element of type <bpmn:BusinessRuleTask> must have one or many extension elements of type <zeebe:CalledDecision> or <zeebe:TaskDefinition>': 'A <Business Rule Task> must have a defined <Implementation>',
        'Element of type <zeebe:TaskDefinition> must have property <type>': 'A <Business Rule Task> with <Implementation: Job worker> must have a defined <Task definition type>',
        'Element of type <zeebe:CalledDecision> must have property <decisionId>': 'A <Business Rule Task> with <Implementation: DMN decision> must have a defined <Called decision ID>',
        'Element of type <zeebe:CalledDecision> must have property <resultVariable>': 'A Business Rule Task with <Implementation: DMN decision> must have a defined <Result variable>'
      }
    )
  )
];