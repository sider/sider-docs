---
id: reek
title: Reek
sidebar_label: Reek
hide_title: true
---

# Reek

| Supported Version         | Language   | Website                           |
| ------------------------- | ---------- | --------------------------------- |
| 4.4.0+ (default to 5.4.0) | Ruby 2.6.5 | https://github.com/troessner/reek |

## Configuration via `sider.yml`

Here are some example settings for Reek in `sider.yml`, under `reek`:

```yaml
linter:
  reek:
    gems:
      - name: "reek"
        version: "5.2.0"
```

### Options

| Name                                                                | Type                 | Description                         |
| ------------------------------------------------------------------- | -------------------- | ----------------------------------- |
| [`gems`](../../getting-started/custom-configuration.md#gems-option) | `string[]`, `hash[]` | Definition of gems to be installed. |

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
