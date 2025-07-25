# Changelog

All notable changes to [bpmnlint-plugin-camunda-compat](https://github.com/camunda/bpmnlint-plugin-camunda-compat) are documented here. We use [semantic versioning](http://semver.org/) for releases.

## Unreleased

___Note:__ Yet to be released changes appear here._

## 2.39.0

* `FEAT`: include [`start-event-required`](https://github.com/bpmn-io/bpmnlint/blob/main/docs/rules/start-event-required.md) rule ([#210](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/210))
* `DEPS`: mark `bpmlint` peerDependency ([#210](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/210))

## 2.38.1

* `FIX`: adjust minimum allowed version for `io-mapping` rule without input source to `8.8` ([#211](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/211))

## 2.38.0

* `FEAT`: use Camunda builtins in `feel` rule ([#206](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/206))
* `FEAT`: add `io-mapping` rule ([#207](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/207))
* `FEAT`: add documentation link for `no-loop` rule ([#208](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/208))

## 2.37.0

* `FEAT`: use parserDialect `camunda` for `feel` rule ([#205](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/205))

## 2.36.0

* `CHORE`: update documentation link for C7 HTTL ([#202](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/202))
* `DEPS`: update `bpmnlint@11.6.0`

## 2.35.0

* `FEAT`: add Camunda 7.24 configuration ([#200](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/200))

## 2.34.2

* `FIX`: correct `zeebe-user-task` documentation URL ([#199](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/199))

## 2.34.1

* `FIX`: allow escalation boundary event attached to ad-hoc sub-process ([#198](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/198))

## 2.34.0

* `FEAT`: add rules for ad-hoc subprocess configuration ([#196](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/196))
* `FIX`: allow call activity in ad-hoc subprocess ([#197](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/197))

## 2.33.1

* `FIX`: correct documentation URL ([#194](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/194))

## 2.33.0

* `FEAT`: add documentation links to rules ([#193](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/193))

## 2.32.0

* `FEAT`: add `ad-hoc-sub-process` rule ([#189](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/189), [#190](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/190))

## 2.31.0

* `FEAT`: support `bpmn:AdHocSubProcess` for Camunda 8.7 and newer ([#187](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/187))
* `DEPS`: update to `zeebe-bpmn-moddle@1.9.0`

## 2.30.0

* `FEAT`: disallow task listeners in Camunda 8.7 config ([#185](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/185))
* `FEAT`: add Camunda 8.8 config ([#185](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/185))

## 2.29.0

* `FEAT`: re-add `zeebe-user-task` rule as a warning due to deprecation ([#183](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/183))

## 2.28.1

* `FIX`: relax `task-listener` to not check implementation type ([#182](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/182))
* `FIX`: do not mark job worker user task as incorrect
* `FIX`: remove `zeebe-user-task` rule

## 2.28.0

* `DEPS`: bump `zeebe-bpmn-moddle@1.7.0`
* `FEAT`: support task listeners ([#181](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/181))
* `FEAT`: add `no-task-listeners` rule
* `FEAT`: add `task-listener` rule

## 2.27.0

* `FEAT`: add `zeebe-user-task` rule ([#179](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/179))
* `FEAT`: add Camunda 8.7 and 7.23 configurations ([#176](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/176))
* `FIX`: lint message end events for task definition ([#180](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/180))

## 2.26.1

* `FIX`: report FEEL errors for processes ([#175](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/175))

## 2.26.0

* `FEAT`: introduce `version-tag` rule ([#174](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/174))
* `FIX`: do not double validate version tag field ([#174](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/174))

## 2.25.0

* `FEAT`: add `no-version-tag` rule ([#172](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/172))
* `DEPS`: bump zeebe-bpmn-moddle@1.6.0

## 2.24.0

* `FEAT`: add `no-priority-definition` and `priority-definition` rules ([#170](https://github.com/camunda/bpmnlint-plugin-camunda-compat/issues/170))
* `DEPS`: bump zeebe-bpmn-moddle@1.5.1

## 2.23.0

* `FEAT`: add `no-binding-type` rule ([#169](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/169))

## 2.22.0

* `FEAT`: support execution listeners ([#168](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/168))
* `FEAT`: add `no-duplicate-execution-listeners` rule
* `FEAT`: add `no-execution-listeners` rule
* `FEAT`: add `execution-listener` rule

## 2.21.1

* `FIX`: improve `no-loop` performance ([#165](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/165))

## 2.21.0

* `FEAT`: allow converging inclusive gateway in 8.6 ([#166](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/166))

## 2.20.2

* `FIX`: fix connector property naming for `connector-properties` rule ([ba130360](https://github.com/camunda/bpmnlint-plugin-camunda-compat/commit/ba130360d93d694591a3a6ff6faf493f3d393d36))

## 2.20.1

* `FIX`: `connector-properties` rule reports allowed version ([08d9ae1c](https://github.com/camunda/bpmnlint-plugin-camunda-compat/commit/08d9ae1ccad1218419d1ff4641344231ab28b7e8))

## 2.20.0

* `FEAT`: add `connector-properties` rule ([#163](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/163))

## 2.19.0

* `FEAT`: add 8.6 and 7.22 config ([#164](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/164))

## 2.18.0

* `FEAT`: add `wait-for-completion` rule ([#162](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/162))
* `FEAT`: add supported compensation events to element-type ([#162](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/162))

## 2.17.0

* `FEAT`: add `no-zeebe-user-task` rule ([#161](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/161))

## 2.16.0

* `FEAT`: make `history-time-to-live` an informative hint ([#160](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/160))
* `FEAT`: report missing form definition as warning, not error ([#154](https://github.com/camunda/bpmnlint-plugin-camunda-compat/issues/154), [#157](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/157))
* `FIX`: correct `escalation-reference` to allow start event without `escalationRef` ([#158](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/158))
* `FIX`: report `secrets` as `warn`, not `error` ([#157](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/157))

## 2.15.0

* `DEPS`: update to `@bpmn-io/feel-lint@1.2.0` ([#153](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/153))

## 2.14.0

* `FEAT`: ensure user tasks have a `formDefinition` ([#151](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/151))

## 2.13.0

* `FEAT`: allow collapsed subprocess starting with v8.4 ([#150](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/150))

## 2.12.0

* `FEAT`: allow `formKey` and `formId` starting with v8.3 when linting start event forms ([#149](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/149))
* `FIX`: differentiate between desktop and web modeler when linting user task forms ([#149](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/149))

## 2.11.1

* `FIX`: treat empty strings as errors (previously only undefined was treated as error) ([#148](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/148))
* `FIX`: change supported version for `zeebe:formId` to Camunda 8.4 ([#148](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/148))

## 2.11.0

* `FEAT`: add 8.4 and 7.21 config ([#143](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/143))
* `FEAT`: validate `formId` with Camunda 8.3 and newer ([#144](https://github.com/camunda/bpmnlint-plugin-camunda-compat/issues/144))

## 2.10.0

* `FIX`: make `camunda-bpmn-moddle` a development dependency ([#142](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/142))
* `DEPS`: update dependencies ([#142](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/142))

## 2.9.1

* `FIX`: allow spaces and `-` in secret names (`camunda-cloud/secrets`)

## 2.9.0

* `FEAT`: rename `Camunda Platform 8` to `Camunda 8` ([#140](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/140))

## 2.8.1

* `FIX`: enable `signal-reference` rule for signal boundary events and signal intermediate catch events ([#138](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/138))

## 2.8.0

* `FEAT`: allow signal boundary, intermediate catch, and signal start events in sub-processes ([`#135`](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/135))
* `FEAT`: enable `secrets` rule for Camunda 8.3 ([`#137`](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/137))

## 2.7.1

* `FIX`: `secrets` reports warning instead of error ([#133](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/133))
* `CHORE`: disable `secrets` rule ([#133](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/133))

## 2.7.0

* `FEAT`: add `no-loop` rule ([#102](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/102))
* `FIX`: `link-event` rule only checks link events ([`#131`](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/131))

## 2.6.3

* `FIX`: `secrets` rule is more forgiving when getting path ([`102936b7`](https://github.com/camunda/bpmnlint-plugin-camunda-compat/commit/102936b749f12a12d11a9d8d6b13aafe5897abac))

## 2.6.2

* `DEPS`: update to `@bpmn-io/feel-lint@1.0.0`

## 2.6.1

* `FIX`: `link-event` rule doesn't report false positives ([`b069da74`](https://github.com/camunda/bpmnlint-plugin-camunda-compat/commit/b069da74afc622d202573e569f11bf8a0cd09321))

## 2.6.0

* `FEAT`: add `link-event` rule ([#122](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/122))

## 2.5.1

* `FIX`: `no-propagate-all-parent-variables` only disallows `false` ([#125](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/125))

## 2.5.0

* `FEAT`: add `no-propagate-all-parent-variables` ([#124](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/124))
* `FEAT`: add `secrets` rule ([#116](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/116))

## 2.4.0

* `FEAT`: add `start-form` rule ([#106](https://github.com/camunda/bpmnlint-plugin-camunda-compat/issues/106))

## 2.3.0

* `FEAT`: add `escalation-boundary-event-attached-to-ref` rule ([#110](https://github.com/camunda/bpmnlint-plugin-camunda-compat/issues/110))
* `FEAT`: remove support converging inclusive gateway in Camunda 8.3
* `FIX`: allow escalation boundary event without escalation reference ([#109](https://github.com/camunda/bpmnlint-plugin-camunda-compat/issues/109))

## 2.2.0

* `FEAT`: support converging inclusive gateway in Camunda 8.3 ([#111](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/111))

## 2.1.0

* `FEAT`: add `all` config ([#108](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/108))

## 2.0.0

* `FEAT`: separate C7 and C8 rules ([#87](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/87))
* `FEAT`: add `no-multiple-start-events` rule ([#104](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/104))
* `DEPS`: update `bpmnlint` to v9.0.0 ([#105](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/105))

### Breaking Changes

* C7 rules have been moved to `rules/camunda-platform`
* C8 rules have been moved to `rules/camunda-cloud`

## 1.4.0

* `FEAT`: extend Camunda 7.19 rules to Camunda 7.20 ([#101](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/101))

## 1.3.2

* `FIX`: report property not allowed error if time property not allowed ([#99](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/99))

## 1.3.1

* `FIX`: fix non-interrupting boundary event with time cycle in integrations tests ([#99f41869](https://github.com/camunda/bpmnlint-plugin-camunda-compat/commit/99f41869afbd385d22438b466a9bfc562243c3f1))

## 1.3.0

* `FEAT`: allow time date for timer intermediate catch and boundary event in Camunda 8.3 ([98](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/98))

## 1.2.0

* `FEAT`: add `event-based-gateway-target` rule ([#96](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/96))
* `FEAT`: allow conditional flow only if source is inclusive or exclusive gateway ([#97](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/97))

## 1.1.0

* `FEAT`: support signal throw event in Camunda 8.3 ([#93](https://github.com/camunda/bpmnlint-plugin-camunda-compat/issues/93))
* `FEAT`: add `signal-reference` rule ([#93](https://github.com/camunda/bpmnlint-plugin-camunda-compat/issues/93))

## 1.0.1

* `FIX`: report missing errorCode in Camunda 8.2 ([#91](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/91))

## 1.0.0

* `FIX`: fix typo in error type `PROPERTY_DEPENDENT_REQUIRED` ([#90](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/90))

### Breaking Changes

* `PROPERTY_DEPENDEND_REQUIRED` error type renamed to `PROPERTY_DEPENDENT_REQUIRED`

## 0.25.0

* `FEAT`: adjust `element-type` configuration and add `no-signal-event-sub-process` rule to allow signal start events in Camunda 8.2 ([#88](https://github.com/camunda/bpmnlint-plugin-camunda-compat/issues/88))
* `FIX`: adjust `error-reference` rule to disallow error references without error code ([#89](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/89))

## 0.24.0

* `FEAT`: add `task-schedule` and `no-task-schedule` rules ([#86](https://github.com/camunda/bpmnlint-plugin-camunda-compat/issues/86))

## 0.23.0

* `FEAT`: require history time to live in Camunda 7.19 ([#83](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/83))

## 0.22.0

* `FEAT`: allow error catch event without error code in Camunda 8.2 ([#81](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/81))

## 0.21.0

* `FEAT`: skip non-executable process ([#80](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/80))

## 0.20.0

* `FEAT`: add candidate users rule ([#76](https://github.com/camunda/bpmnlint-plugin-camunda-compat/issues/76))
* `FEAT`: require escalation and escalation code in Camunda 8.2

## 0.19.0

* `FEAT`: allow escalation events in Camunda 8.2 ([#73](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/73))
* `FIX`: disallow error code expression for catch events ([#74](https://github.com/camunda/bpmnlint-plugin-camunda-compat/issues/74))

## 0.18.0

* `FEAT`: add `no-expression` rule ([#69](https://github.com/camunda/bpmnlint-plugin-camunda-compat/issues/69))

## 0.17.0

* `FEAT`: support `zeebe:Script` ([#67](https://github.com/camunda/bpmnlint-plugin-camunda-compat/issues/67))

### Breaking Changes

* Rule `called-decision-or-task-definition` was renamed to `implementation`.

## 0.16.0

* `FEAT`: add link events to `element-type` rule ([#63](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/63))
* `DEPS`: update to `@bpmn-io/feel-lint@0.1.1`

## 0.15.2

* `FIX`: support weeks in timer duration and cycle ([#64](https://github.com/camunda/bpmnlint-plugin-camunda-compat/issues/64))

## 0.15.1

* `FIX`: report process not executable for all affected flow element (containers) ([#61](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/61))

## 0.15.0

* `FEAT`: add `executable-process` rule ([#56](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/56))
* `FEAT`: add `sequence-flow-condition` rule ([#58](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/58))
* `FEAT`: add Camunda Platform 8.2 config ([#59](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/59))
* `FEAT`: add elements supported by Camunda Platform 8.2 to `element-type` rule ([#59](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/59))

## 0.14.1

* `FIX`: lint subprocesses without `isExpanded` attribute ([#55](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/55))
* `FIX`: correct typo in `FEEL_EXPRESSION_INVALID` message ([#55](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/55))

## 0.14.0

* `FEAT`: add `feel` rule to validate feel expressions ([#51](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/51))
* `FEAT`: add `collapsed-subprocess` rule to disallow collapsed subprocess ([#52](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/52))
* `CHORE`: `element-type` rule handles all errors using `ELEMENT_TYPE_NOT_ALLOWED` error type ([#50](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/50))
* `CHORE`: `timer` rule handles `bpmn:FormalExpression` elements using new error types `EXPRESSION_REQUIRED` and `EXPRESSION_VALUE_NOT_ALLOWED` ([#50](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/50))
* `CHORE`: refactor configuration of rules ([#50](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/50))

### Breaking Changes

* rules that need configuration (e.g. element-type) are now configured by specifying execution platform version
* element-type rule only reports `ELEMENT_TYPE_NOT_ALLOWED` errors
* timer rule reports new error types `EXPRESSION_REQUIRED` and `EXPRESSION_VALUE_NOT_ALLOWED`
* `report.error` was renamed to `report.data` as it is meant to be used for any additional data
* `ERROR_TYPES` were namespaced to avoid mistaking reports with `report.data.type` for Camunda-specific reports

## 0.13.1

* `FIX`: improve time date validation ([#49](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/49))

## 0.13.0

* `FEAT`: allow terminate end event in Camunda Platform 8.1 ([#48](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/48))
* `FEAT`: add `timer` rule ([#45](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/45))

## 0.12.0

* `FEAT`: add `inclusive-gateway` rule ([#44](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/44))

## 0.11.0

* `FEAT`: add `no-zeebe-properties` rule ([#43](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/43))
* `FEAT`: add Camunda Platform 8.1

## 0.10.0

* `FEAT`: add duplicate task headers rule ([#41](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/41))

## 0.9.2

* `FIX`: ignore null properties ([#39](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/39))

## 0.9.1

* `FIX`: add name to reports ([#38](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/38))

## 0.9.0

* `FEAT`: add user task forms rule ([#32](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/32))

## 0.8.0

* `FEAT`: add templates rule ([#31](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/31))

## 0.7.1

* `FIX`: lint subscription only if start event child of sub process ([#34](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/34))

## 0.7.0

* `FEAT`: refactor plugin structure ([#29](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/29))
* `DEPS`: update to `bpmnlint@7.8.0` ([#29](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/29))

### Breaking Changes

* configuration not selected based on execution platform and version anymore, either configure manually or use [`@camunda/linting`](https://github.com/camunda/linting)
* error message not adjusted to be shown in Camunda Modeler anymore
* error type ELEMENT_TYPE changed to ELEMENT_TYPE_NOT_ALLOWED
* error type PROPERTY_TYPE changed to PROPERTY_TYPE_NOT_ALLOWED
* error data changed (cf. docs/ERRORS.md)

## 0.6.2

* `FIX`: fix error message formatting ([#27](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/27))

## 0.6.1

* `FIX`: lanes supported ([#26](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/26))

## 0.6.0

* `FEAT`: adjust error messages to be more friendly ([#22](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/22))
* `FEAT`: lint error code and message name ([#21](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/21))
* `FIX`: task definition retries not required ([#20](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/20))

## 0.5.0

* `FEAT`: update Camunda Cloud rules to lint extension elements and their properties ([#18](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/18))

## 0.4.0

* `CHORE`: rename `Cloud` `1.4` to `8.0` ([#14](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/14))
* `CHORE`: rename `Cloud` to `Platform`/`Zeebe` ([#15](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/15))

## 0.3.0

* `FEAT`: support multiInstance for subprocesses with cloud 1.0 ([#6](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/6))
* `FEAT`: add Camunda Platform rules ([#5](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/5))
* `FEAT`: add Camunda Cloud 1.4 rule ([#5](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/5))
* `TEST`: add Cloud 1.1, 1.2, 1.3 integration tests ([#4](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/4))
* `TEST`: verify exported configs ([#5](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/5))
* `DEPS`: fix security audit warnings ([#6](https://github.com/camunda/bpmnlint-plugin-camunda-compat/pull/6))
* `DOCS`: update link to documentation
* `DOCS`: link Camunda Cloud and Platform BPMN coverage

## 0.2.0

* `FEAT`: early return if execution platform does not match
* `FIX`: correct check for `bpmn:BaseElement`

## 0.1.1

* `FEAT`: initial support for Camunda Cloud 1.0, 1.1, 1.2, and 1.3

## ...

Check `git log` for earlier history.
