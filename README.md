# bpmnlint-plugin-camunda-compat

[![CI](https://github.com/camunda/bpmnlint-plugin-camunda-compat/workflows/CI/badge.svg)](https://github.com/camunda/bpmnlint-plugin-camunda-compat/actions?query=workflow%3ACI)

Camunda BPMN compatibility, packed as a [bpmnlint](https://github.com/bpmn-io/bpmnlint) plug-in.


## Usage

Add the plug-in via your `.bpmnlintrc` file:

```
{
  "extends": [
    "bpmnlint:recommended",
    "plugin:camunda-compat/recommended"
  ]
}
```

To validate a diagram it must be pinned to a particular execution platform via the [`modeler`](https://github.com/camunda/modeler-moddle) BPMN 2.0 extension.


## Resources

* BPMN coverage
    * [Camunda Cloud](https://docs.camunda.io/docs/reference/bpmn-processes/bpmn-coverage/)
    * [Camunda Platform](https://docs.camunda.org/manual/latest/reference/bpmn20/)
* [Issues](https://github.com/camunda/bpmnlint-plugin-camunda-compat/issues)


## License

MIT
