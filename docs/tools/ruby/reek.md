---
id: reek
title: Reek
sidebar_label: Reek
hide_title: true
---

# Reek

| Version Constraints | Language | Web Site |
| ----------------- | -------- | -------- |
| >= 4.4.0, < 6.0 (default to 5.3.1) | Ruby 2.5.1 | [https://github.com/troessner/reek](https://github.com/troessner/reek) |


## Default Configuration

When there are no configuration files in your repository, Sider uses the following configuration by default:

```yaml
---
detectors:
  ### enabled rules
  TooManyInstanceVariables:
    enabled: true
    exclude: []
    max_instance_variables: 50
  TooManyMethods:
    enabled: true
    exclude: []
    max_methods: 30
  TooManyStatements:
    enabled: true
    exclude: []
    max_statements: 80
  TooManyConstants:
    enabled: true
    exclude: []
    max_constants: 50
  LongParameterList:
    enabled: true
    exclude: []
    max_params: 8
  LongYieldList:
    enabled: true
    exclude: []
    max_params: 8
  NestedIterators:
    enabled: true
    exclude: []
    max_allowed_nesting: 5
    ignore_iterators:
    - tap
  ModuleInitialize:
    enabled: true
    exclude: []
  SubclassedFromCoreClass:
    enabled: true
    exclude: []

  ### disabled rules
  Attribute:
    enabled: false
    exclude: []
  BooleanParameter:
    enabled: false
    exclude: []
  ClassVariable:
    enabled: false
    exclude: []
  ControlParameter:
    enabled: false
    exclude: []
  DataClump:
    enabled: false
    exclude: []
  DuplicateMethodCall:
    enabled: false
    exclude: []
  FeatureEnvy:
    enabled: false
    exclude: []
  InstanceVariableAssumption:
    enabled: false
    exclude: []
  IrresponsibleModule:
    enabled: false
    exclude: []
  ManualDispatch:
    enabled: false
    exclude: []
  NilCheck:
    enabled: false
    exclude: []
  MissingSafeMethod:
    enabled: false
    exclude: []
  RepeatedConditional:
    enabled: false
    exclude: []
  UncommunicativeMethodName:
    enabled: false
    exclude: []
  UncommunicativeModuleName:
    enabled: false
    exclude: []
  UncommunicativeParameterName:
    enabled: false
    exclude: []
  UncommunicativeVariableName:
    enabled: false
    exclude: []
  UnusedParameters:
    enabled: false
    exclude: []
  UtilityFunction:
    enabled: false
    exclude: []
```

## Configuration via `sideci.yml`

Here are some example settings for Reek in `sideci.yml`, under `reek`:

```yaml:sideci.yml
linter:
  reek:
    gems:
      - name: "reek"
        version: "5.2.0"
```

### Options

| Name | Type | Description |
| ---- | ---- | ----------- |
| [`root_dir`](../../getting-started/custom-configuration.md#root-dir-option) | `string` | Directory which runs the analyzer. |
| [`gems`](../../getting-started/custom-configuration.md#gems-option) | `array<string, object>` | Definition of gems to be installed. |
