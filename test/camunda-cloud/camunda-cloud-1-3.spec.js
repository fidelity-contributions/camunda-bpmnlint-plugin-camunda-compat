const RuleTester = require('bpmnlint/lib/testers/rule-tester');

const camundaCloud13Rule = require('../../rules/camunda-cloud-1-3');

const { createModdle } = require('../helper');

const { ERROR_TYPES } = require('../../rules/utils/element');

const { createValid: createCamundaCloud12Valid } = require('./camunda-cloud-1-2.spec');

function createValid(executionPlatformVersion = '1.3.0') {
  const createCloudProcess = require('../helper').createCloudProcess(executionPlatformVersion);

  return [
    ...createCamundaCloud12Valid(executionPlatformVersion),

    // bpmn:BusinessRuleTask
    {
      name: 'business rule task (called decision)',
      moddleElement: createModdle(createCloudProcess(`
        <bpmn:businessRuleTask id="BusinessRuleTask_1">
          <bpmn:extensionElements>
            <zeebe:calledDecision decisionId="foo" resultVariable="bar" />
          </bpmn:extensionElements>
        </bpmn:businessRuleTask>
      `))
    }
  ];
}

module.exports.createValid = createValid;

function createInvalid(executionPlatformVersion = '1.3.0') {
  const createCloudProcess = require('../helper').createCloudProcess(executionPlatformVersion);

  return [

    // bpmn:BusinessRuleTask
    {
      name: 'business rule task (no task definition)',
      moddleElement: createModdle(createCloudProcess('<bpmn:businessRuleTask id="BusinessRuleTask_1" />')),
      report: {
        id: 'BusinessRuleTask_1',
        message: 'A <Business Rule Task> must have a defined <Implementation>',
        path: null,
        error: {
          type: ERROR_TYPES.EXTENSION_ELEMENT_REQUIRED,
          requiredExtensionElement: 'zeebe:CalledDecision'
        }
      }
    },
    {
      name: 'business rule task (no task definition type)',
      moddleElement: createModdle(createCloudProcess(`
        <bpmn:businessRuleTask id="BusinessRuleTask_1">
          <bpmn:extensionElements>
            <zeebe:taskDefinition />
          </bpmn:extensionElements>
        </bpmn:businessRuleTask>
      `)),
      report: {
        id: 'BusinessRuleTask_1',
        message: 'A <Business Rule Task> with <Implementation: Job worker> must have a defined <Task definition type>',
        path: [
          'extensionElements',
          'values',
          0,
          'type'
        ],
        error: {
          type: ERROR_TYPES.PROPERTY_REQUIRED,
          requiredProperty: 'type'
        }
      }
    },
    {
      name: 'business rule task (called decision)',
      moddleElement: createModdle(createCloudProcess(`
        <bpmn:businessRuleTask id="BusinessRuleTask_1">
          <bpmn:extensionElements>
            <zeebe:calledDecision />
            <zeebe:taskDefinition />
          </bpmn:extensionElements>
        </bpmn:businessRuleTask>
      `)),
      report: {
        id: 'BusinessRuleTask_1',
        message: 'A <Business Rule Task> must have a defined <Implementation>',
        path: null
      }
    },
    {
      name: 'business rule task (no called decision)',
      moddleElement: createModdle(createCloudProcess('<bpmn:businessRuleTask id="BusinessRuleTask_1" />')),
      report: {
        id: 'BusinessRuleTask_1',
        message: 'A <Business Rule Task> must have a defined <Implementation>',
        path: null,
        error: {
          type: ERROR_TYPES.EXTENSION_ELEMENT_REQUIRED,
          requiredExtensionElement: 'zeebe:CalledDecision'
        }
      }
    },
    {
      name: 'business rule task (no called decision decision ID)',
      moddleElement: createModdle(createCloudProcess(`
        <bpmn:businessRuleTask id="BusinessRuleTask_1">
          <bpmn:extensionElements>
            <zeebe:calledDecision resultVariable="bar" />
          </bpmn:extensionElements>
        </bpmn:businessRuleTask>
      `)),
      report: {
        id: 'BusinessRuleTask_1',
        message: 'A <Business Rule Task> with <Implementation: DMN decision> must have a defined <Called decision ID>',
        path: [
          'extensionElements',
          'values',
          0,
          'decisionId'
        ],
        error: {
          type: ERROR_TYPES.PROPERTY_REQUIRED,
          requiredProperty: 'decisionId'
        }
      }
    },
    {
      name: 'business rule task (no called decision result variable)',
      moddleElement: createModdle(createCloudProcess(`
        <bpmn:businessRuleTask id="BusinessRuleTask_1">
          <bpmn:extensionElements>
            <zeebe:calledDecision decisionId="foo" />
          </bpmn:extensionElements>
        </bpmn:businessRuleTask>
      `)),
      report: {
        id: 'BusinessRuleTask_1',
        message: 'A <Business Rule Task> with <Implementation: DMN decision> must have a defined <Result variable>',
        path: [
          'extensionElements',
          'values',
          0,
          'resultVariable'
        ],
        error: {
          type: ERROR_TYPES.PROPERTY_REQUIRED,
          requiredProperty: 'resultVariable'
        }
      }
    },
    {
      name: 'business rule task (no loop characteristics)',
      moddleElement: createModdle(createCloudProcess(`
        <bpmn:businessRuleTask id="BusinessRuleTask_1">
          <bpmn:multiInstanceLoopCharacteristics />
          <bpmn:extensionElements>
            <zeebe:taskDefinition type="foo" />
          </bpmn:extensionElements>
        </bpmn:businessRuleTask>
      `)),
      report: {
        id: 'BusinessRuleTask_1',
        message: 'A <Business Rule Task> with <Multi-instance marker> must have a defined <Input collection>',
        path: [
          'loopCharacteristics'
        ],
        error: {
          type: ERROR_TYPES.EXTENSION_ELEMENT_REQUIRED,
          requiredExtensionElement: 'zeebe:LoopCharacteristics'
        }
      }
    }
  ];
}

module.exports.createInvalid = createInvalid;

RuleTester.verify('camunda-cloud-1-3', camundaCloud13Rule, {
  valid: createValid(),
  invalid: createInvalid()
});