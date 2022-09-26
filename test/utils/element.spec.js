const { expect } = require('chai');

const {
  ERROR_TYPES,
  formatTypes,
  hasDuplicatedPropertyValues,
  hasExtensionElement,
  hasNoExtensionElement,
  hasProperties,
  hasProperty,
  isAnyExactly,
  isExactly
} = require('../../rules/utils/element');

const { createElement } = require('../helper');

describe('utils/element', function() {

  describe('#formatTypes', function() {

    it('one', function() {

      // given
      const types = [ 'foo' ];

      // then
      expect(formatTypes(types)).to.eql('<foo>');
    });


    it('two (inclusive)', function() {

      // given
      const types = [ 'foo', 'bar' ];

      // then
      expect(formatTypes(types)).to.eql('<foo> and <bar>');
    });


    it('two (exclusive)', function() {

      // given
      const types = [ 'foo', 'bar' ];

      // then
      expect(formatTypes(types, true)).to.eql('<foo> or <bar>');
    });


    it('three', function() {

      // given
      const types = [ 'foo', 'bar', 'baz' ];

      // then
      expect(formatTypes(types)).to.eql('<foo>, <bar> and <baz>');
    });

  });


  describe('#hasExtensionElement', function() {

    describe('one type', function() {

      it('should not return errors', function() {

        // given
        const serviceTask = createElement('bpmn:ServiceTask', {
          extensionElements: createElement('bpmn:ExtensionElements', {
            values: [
              createElement('zeebe:TaskDefinition')
            ]
          })
        });

        // when
        const errors = hasExtensionElement(serviceTask, 'zeebe:TaskDefinition');

        // then
        expect(errors).to.be.empty;
      });


      it('should return errors (no extension elements)', function() {

        // given
        const serviceTask = createElement('bpmn:ServiceTask', {
          extensionElements: createElement('bpmn:ExtensionElements', {
            values: []
          })
        });

        // when
        const errors = hasExtensionElement(serviceTask, 'zeebe:TaskDefinition');

        // then
        expect(errors).to.eql([
          {
            message: 'Element of type <bpmn:ServiceTask> must have one extension element of type <zeebe:TaskDefinition>',
            path: null,
            error: {
              type: ERROR_TYPES.EXTENSION_ELEMENT_REQUIRED,
              node: serviceTask,
              parentNode: null,
              requiredExtensionElement: 'zeebe:TaskDefinition'
            }
          }
        ]);
      });


      it('should return errors (no task definition)', function() {

        // given
        const serviceTask = createElement('bpmn:ServiceTask');

        // when
        const errors = hasExtensionElement(serviceTask, 'zeebe:TaskDefinition');

        // then
        expect(errors).to.eql([
          {
            message: 'Element of type <bpmn:ServiceTask> must have one extension element of type <zeebe:TaskDefinition>',
            path: null,
            error: {
              type: 'extensionElementRequired',
              node: serviceTask,
              parentNode: null,
              requiredExtensionElement: 'zeebe:TaskDefinition'
            }
          }
        ]);
      });

    });


    describe('many types', function() {

      it('should not return errors', function() {

        // given
        const businessRuleTask = createElement('bpmn:BusinessRuleTask', {
          extensionElements: createElement('bpmn:ExtensionElements', {
            values: [
              createElement('zeebe:TaskDefinition')
            ]
          })
        });

        // when
        const errors = hasExtensionElement(businessRuleTask, [
          'zeebe:CalledDecision',
          'zeebe:TaskDefinition'
        ]);

        // then
        expect(errors).to.be.empty;
      });


      it('should return errors (no extension elements)', function() {

        // given
        const businessRuleTask = createElement('bpmn:BusinessRuleTask');

        // when
        const errors = hasExtensionElement(businessRuleTask, [
          'zeebe:CalledDecision',
          'zeebe:TaskDefinition'
        ]);

        // then
        expect(errors).to.eql([
          {
            message: 'Element of type <bpmn:BusinessRuleTask> must have one extension element of type <zeebe:CalledDecision> or <zeebe:TaskDefinition>',
            path: null,
            error: {
              type: ERROR_TYPES.EXTENSION_ELEMENT_REQUIRED,
              node: businessRuleTask,
              parentNode: null,
              requiredExtensionElement: [
                'zeebe:CalledDecision',
                'zeebe:TaskDefinition'
              ]
            }
          }
        ]);
      });


      it('should return errors (no task definition)', function() {

        // given
        const businessRuleTask = createElement('bpmn:BusinessRuleTask', {
          extensionElements: createElement('bpmn:ExtensionElements', {
            values: []
          })
        });

        // when
        const result = hasExtensionElement(businessRuleTask, [
          'zeebe:CalledDecision',
          'zeebe:TaskDefinition'
        ]);

        // then
        expect(result).to.eql([
          {
            message: 'Element of type <bpmn:BusinessRuleTask> must have one extension element of type <zeebe:CalledDecision> or <zeebe:TaskDefinition>',
            path: null,
            error: {
              type: ERROR_TYPES.EXTENSION_ELEMENT_REQUIRED,
              node: businessRuleTask,
              parentNode: null,
              requiredExtensionElement: [
                'zeebe:CalledDecision',
                'zeebe:TaskDefinition'
              ]
            }
          }
        ]);
      });


      it('should return errors (called decision and task definition)', function() {

        // given
        const businessRuleTask = createElement('bpmn:BusinessRuleTask', {
          extensionElements: createElement('bpmn:ExtensionElements', {
            values: [
              createElement('zeebe:CalledDecision'),
              createElement('zeebe:TaskDefinition')
            ]
          })
        });

        // when
        const errors = hasExtensionElement(businessRuleTask, [
          'zeebe:CalledDecision',
          'zeebe:TaskDefinition'
        ], null);

        // then
        expect(errors).to.eql([
          {
            message: 'Element of type <bpmn:BusinessRuleTask> must have one extension element of type <zeebe:CalledDecision> or <zeebe:TaskDefinition>',
            path: null,
            error: {
              type: ERROR_TYPES.EXTENSION_ELEMENT_REQUIRED,
              node: businessRuleTask,
              parentNode: null,
              requiredExtensionElement: [
                'zeebe:CalledDecision',
                'zeebe:TaskDefinition'
              ]
            }
          }
        ]);
      });

    });

  });


  describe('#hasNoExtensionElement', function() {

    it('should not return errors', function() {

      // given
      const serviceTask = createElement('bpmn:ServiceTask');

      // when
      const errors = hasNoExtensionElement(serviceTask, 'zeebe:Property');

      // then
      expect(errors).to.be.empty;
    });


    it('should return errors', function() {

      // given
      const serviceTask = createElement('bpmn:ServiceTask', {
        extensionElements: createElement('bpmn:ExtensionElements', {
          values: [
            createElement('zeebe:Properties', {
              properties: [
                createElement('zeebe:Property')
              ]
            })
          ]
        })
      });

      // when
      const errors = hasNoExtensionElement(serviceTask, 'zeebe:Properties');

      // then
      expect(errors).to.eql([
        {
          message: 'Element of type <bpmn:ServiceTask> must not have extension element of type <zeebe:Properties>',
          path: null,
          error: {
            type: ERROR_TYPES.EXTENSION_ELEMENT_NOT_ALLOWED,
            node: serviceTask,
            parentNode: null,
            extensionElement: serviceTask.get('extensionElements').get('values')[ 0 ]
          }
        }
      ]);
    });

  });


  describe('#hasDuplicatedPropertyValues', function() {

    it('should not return errors', function() {

      // given
      const taskHeaders = createElement('zeebe:TaskHeaders', {
        values: [
          createElement('zeebe:Header', {
            key: 'foo'
          }),
          createElement('zeebe:Header', {
            key: 'bar'
          }),
          createElement('zeebe:Header', {
            key: 'baz'
          })
        ]
      });

      // when
      const errors = hasDuplicatedPropertyValues(taskHeaders, 'values', 'key');

      // then
      expect(errors).to.be.empty;
    });


    it('should return error', function() {

      // given
      const taskHeaders = createElement('zeebe:TaskHeaders', {
        values: [
          createElement('zeebe:Header', {
            key: 'foo'
          }),
          createElement('zeebe:Header', {
            key: 'foo'
          }),
          createElement('zeebe:Header', {
            key: 'bar'
          }),
          createElement('zeebe:Header', {
            key: 'baz'
          })
        ]
      });

      // when
      const errors = hasDuplicatedPropertyValues(taskHeaders, 'values', 'key');

      // then
      expect(errors).to.exist;
      expect(errors).to.have.length(1);

      expect(errors[ 0 ]).eql({
        message: 'Properties of type <zeebe:Header> have property <key> with duplicate value of <foo>',
        path: null,
        error: {
          type: ERROR_TYPES.PROPERTY_VALUE_DUPLICATED,
          node: taskHeaders,
          parentNode: null,
          duplicatedProperty: 'key',
          duplicatedPropertyValue: 'foo',
          properties: taskHeaders.get('values').filter(header => header.get('key') === 'foo'),
          propertiesName: 'values'
        }
      });
    });


    it('should return errors', function() {

      // given
      const taskHeaders = createElement('zeebe:TaskHeaders', {
        values: [
          createElement('zeebe:Header', {
            key: 'foo'
          }),
          createElement('zeebe:Header', {
            key: 'foo'
          }),
          createElement('zeebe:Header', {
            key: 'bar'
          }),
          createElement('zeebe:Header', {
            key: 'bar'
          }),
          createElement('zeebe:Header', {
            key: 'baz'
          })
        ]
      });

      // when
      const errors = hasDuplicatedPropertyValues(taskHeaders, 'values', 'key');

      // then
      expect(errors).to.exist;
      expect(errors).to.have.length(2);

      expect(errors[ 0 ]).eql({
        message: 'Properties of type <zeebe:Header> have property <key> with duplicate value of <foo>',
        path: null,
        error: {
          type: ERROR_TYPES.PROPERTY_VALUE_DUPLICATED,
          node: taskHeaders,
          parentNode: null,
          duplicatedProperty: 'key',
          duplicatedPropertyValue: 'foo',
          properties: taskHeaders.get('values').filter(header => header.get('key') === 'foo'),
          propertiesName: 'values'
        }
      });

      expect(errors[ 1 ]).eql({
        message: 'Properties of type <zeebe:Header> have property <key> with duplicate value of <bar>',
        path: null,
        error: {
          type: ERROR_TYPES.PROPERTY_VALUE_DUPLICATED,
          node: taskHeaders,
          parentNode: null,
          duplicatedProperty: 'key',
          duplicatedPropertyValue: 'bar',
          properties: taskHeaders.get('values').filter(header => header.get('key') === 'bar'),
          propertiesName: 'values'
        }
      });
    });

  });

  describe('#hasProperty', function() {

    it('should not return errors (single property)', function() {

      // given
      const timerEventDefition = createElement('bpmn:TimerEventDefinition', {
        timeCycle: createElement('bpmn:FormalExpression', {})
      });

      // when
      const errors = hasProperty(timerEventDefition, 'timeCycle');

      // then
      expect(errors).to.be.empty;
    });


    it('should not return errors (one property array)', function() {

      // given
      const timerEventDefition = createElement('bpmn:TimerEventDefinition', {
        timeCycle: createElement('bpmn:FormalExpression', {})
      });

      // when
      const errors = hasProperty(timerEventDefition, [ 'timeCycle' ]);

      // then
      expect(errors).to.be.empty;
    });


    it('should not return errors (more properties array)', function() {

      // given
      const timerEventDefition = createElement('bpmn:TimerEventDefinition', {
        timeCycle: createElement('bpmn:FormalExpression', {})
      });

      // when
      const errors = hasProperty(timerEventDefition, [ 'timeCycle', 'timeDuration' ]);

      // then
      expect(errors).to.be.empty;
    });


    it('should return errors (no properties set)', function() {

      // given
      const timerEventDefition = createElement('bpmn:TimerEventDefinition', {});

      // when
      const errors = hasProperty(timerEventDefition, [ 'timeCycle', 'timeDuration' ]);

      // then
      expect(errors).to.eql([
        {
          message: 'Element of type <bpmn:TimerEventDefinition> must have one property of type <timeCycle> or <timeDuration>',
          path: null,
          error: {
            type: ERROR_TYPES.PROPERTY_REQUIRED,
            node: timerEventDefition,
            parentNode: null,
            requiredProperty: [
              'timeCycle',
              'timeDuration'
            ]
          }
        }
      ]);
    });


    it('should return errors (both properties set)', function() {

      // given
      const timerEventDefition = createElement('bpmn:TimerEventDefinition', {
        timeCycle: createElement('bpmn:FormalExpression', {}),
        timeDuration: createElement('bpmn:FormalExpression', {})
      });

      // when
      const errors = hasProperty(timerEventDefition, [ 'timeCycle', 'timeDuration' ]);

      // then
      expect(errors).to.eql([
        {
          message: 'Element of type <bpmn:TimerEventDefinition> must have one property of type <timeCycle> or <timeDuration>',
          path: null,
          error: {
            type: ERROR_TYPES.PROPERTY_REQUIRED,
            node: timerEventDefition,
            parentNode: null,
            requiredProperty: [
              'timeCycle',
              'timeDuration'
            ]
          }
        }
      ]);
    });
  });

  describe('#hasProperties', function() {

    describe('required', function() {

      it('should not return errors', function() {

        // given
        const taskDefinition = createElement('zeebe:TaskDefinition', {
          type: 'foo'
        });

        // when
        const errors = hasProperties(taskDefinition, {
          type: {
            required: true
          }
        });

        // then
        expect(errors).to.be.empty;
      });


      it('should return errors', function() {

        // given
        const taskDefinition = createElement('zeebe:TaskDefinition');

        // when
        const errors = hasProperties(taskDefinition, {
          type: {
            required: true
          }
        });

        // then
        expect(errors).eql([
          {
            message: 'Element of type <zeebe:TaskDefinition> must have property <type>',
            path: [
              'type'
            ],
            error: {
              type: ERROR_TYPES.PROPERTY_REQUIRED,
              node: taskDefinition,
              parentNode: null,
              requiredProperty: 'type'
            }
          }
        ]);
      });

    });


    describe('dependend required', function() {

      it('should not return errors', function() {

        // given
        const loopCharacteristics = createElement('zeebe:LoopCharacteristics', {
          outputCollection: 'foo',
          outputElement: 'bar'
        });

        // when
        const errors = hasProperties(loopCharacteristics, {
          outputElement: {
            dependendRequired: 'outputCollection'
          }
        });

        // then
        expect(errors).to.be.empty;
      });


      it('should return errors', function() {

        // given
        const loopCharacteristics = createElement('zeebe:LoopCharacteristics', {
          outputCollection: 'foo'
        });

        // when
        const errors = hasProperties(loopCharacteristics, {
          outputElement: {
            dependendRequired: 'outputCollection'
          }
        });

        // then
        expect(errors).eql([
          {
            message: 'Element of type <zeebe:LoopCharacteristics> must have property <outputElement> if it has property <outputCollection>',
            path: [
              'outputElement'
            ],
            error: {
              type: ERROR_TYPES.PROPERTY_DEPENDEND_REQUIRED,
              node: loopCharacteristics,
              parentNode: null,
              property: 'outputCollection',
              dependendRequiredProperty: 'outputElement'
            }
          }
        ]);
      });

    });


    describe('type', function() {

      it('should not return errors', function() {

        // given
        const serviceTask = createElement('bpmn:ServiceTask', {
          loopCharacteristics: createElement('bpmn:MultiInstanceLoopCharacteristics')
        });

        // when
        const errors = hasProperties(serviceTask, {
          loopCharacteristics: {
            type: 'bpmn:MultiInstanceLoopCharacteristics'
          }
        });

        // then
        expect(errors).to.be.empty;
      });


      it('should return errors', function() {

        // given
        const serviceTask = createElement('bpmn:ServiceTask', {
          loopCharacteristics: createElement('bpmn:StandardLoopCharacteristics')
        });

        // when
        const errors = hasProperties(serviceTask, {
          loopCharacteristics: {
            type: 'bpmn:MultiInstanceLoopCharacteristics'
          }
        });

        // then
        expect(errors).eql([
          {
            message: 'Element of type <bpmn:ServiceTask> must not have property <loopCharacteristics> of type <bpmn:StandardLoopCharacteristics>',
            path: [
              'loopCharacteristics'
            ],
            error: {
              type: ERROR_TYPES.PROPERTY_TYPE_NOT_ALLOWED,
              node: serviceTask,
              parentNode: null,
              property: 'loopCharacteristics',
              allowedPropertyType: 'bpmn:MultiInstanceLoopCharacteristics'
            }
          }
        ]);
      });

    });


    describe('allowed', function() {

      describe('boolean', function() {

        it('should not return errors (undefined)', function() {

          // given
          const serviceTask = createElement('bpmn:ServiceTask');

          // when
          const errors = hasProperties(serviceTask, {
            modelerTemplate: {
              allowed: false
            }
          });

          // then
          expect(errors).to.be.empty;
        });


        it('should not return errors (null)', function() {

          // given
          const serviceTask = createElement('bpmn:ServiceTask', {
            modelerTemplate: null
          });

          // when
          const errors = hasProperties(serviceTask, {
            modelerTemplate: {
              allowed: false
            }
          });

          // then
          expect(errors).to.be.empty;
        });


        it('should return errors', function() {

          // given
          const serviceTask = createElement('bpmn:ServiceTask', {
            modelerTemplate: 'foo'
          });

          // when
          const errors = hasProperties(serviceTask, {
            modelerTemplate: {
              allowed: false
            }
          });

          // then
          expect(errors).eql([
            {
              message: 'Element of type <bpmn:ServiceTask> must not have property <modelerTemplate>',
              path: [
                'modelerTemplate'
              ],
              error: {
                type: ERROR_TYPES.PROPERTY_NOT_ALLOWED,
                node: serviceTask,
                parentNode: null,
                property: 'modelerTemplate'
              }
            }
          ]);
        });

      });


      describe('function', function() {

        it('should not return errors (() => true)', function() {

          // given
          const serviceTask = createElement('bpmn:ServiceTask', {
            modelerTemplate: null
          });

          // when
          const errors = hasProperties(serviceTask, {
            modelerTemplate: {
              allowed: () => true
            }
          });

          // then
          expect(errors).to.be.empty;
        });


        it('should return errors (() => false)', function() {

          // given
          const serviceTask = createElement('bpmn:ServiceTask', {
            modelerTemplate: null
          });

          // when
          const errors = hasProperties(serviceTask, {
            modelerTemplate: {
              allowed: () => false
            }
          });

          // then
          expect(errors).eql([
            {
              message: 'Property <modelerTemplate> of element of type <bpmn:ServiceTask> must not have value of <null>',
              path: [
                'modelerTemplate'
              ],
              error: {
                type: ERROR_TYPES.PROPERTY_VALUE_NOT_ALLOWED,
                node: serviceTask,
                parentNode: null,
                property: 'modelerTemplate'
              }
            }
          ]);
        });

      });


    });

  });


  describe('#isExactly', function() {

    it('should be true', function() {

      // given
      const task = createElement('bpmn:Task');

      // when
      expect(isExactly(task, 'bpmn:Task')).to.be.true;
    });


    it('should be false', function() {

      // given
      const serviceTask = createElement('bpmn:ServiceTask');

      // when
      expect(isExactly(serviceTask, 'bpmn:Task')).to.be.false;
    });

  });


  describe('#isAnyExactly', function() {

    it('should be true', function() {

      // given
      const task = createElement('bpmn:Task');

      // when
      expect(isAnyExactly(task, [ 'bpmn:Task', 'bpmn:Gateway' ])).to.be.true;
    });


    it('should be false', function() {

      // given
      const serviceTask = createElement('bpmn:ServiceTask');

      // when
      expect(isAnyExactly(serviceTask, [ 'bpmn:Task', 'bpmn:Gateway' ])).to.be.false;
    });

  });

});