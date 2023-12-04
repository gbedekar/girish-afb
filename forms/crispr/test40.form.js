export default {
  id: 'container-1a0123b312',
  fieldType: 'form',
  title: 'test1',
  properties: {
    'fd:dor': {
      dorType: 'none',
    },
    'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer',
    'fd:schemaType': 'BASIC',
    'fd:formDataEnabled': false,
  },
  lang: 'en-US',
  events: {
    'custom:setProperty': [
      '$event.payload',
    ],
  },
  ':itemsOrder': [
    'textinput',
    'numberinput',
    'checkbox',
    'button',
    'textinput1',
    'numberinput1',
    'checkbox1',
    'button1',
    'textinput2',
    'numberinput2',
    'checkbox2',
    'button2',
    'textinput3',
    'numberinput3',
    'checkbox3',
    'button3',
    'textinput4',
    'numberinput4',
    'checkbox4',
    'button4',
    'textinput5',
    'numberinput5',
    'checkbox5',
    'button5',
    'textinput6',
    'numberinput6',
    'checkbox6',
    'button6',
    'textinput7',
    'numberinput7',
    'checkbox7',
    'button7',
    'textinput8',
    'numberinput8',
    'checkbox8',
    'button8',
    'textinput9',
    'numberinput9',
    'checkbox9',
    'button9',
  ],
  metadata: {
    grammar: 'json-formula-1.0.0',
    version: '1.0.0',
  },
  adaptiveform: '0.12.1',
  ':type': 'forms-components-examples/components/form/container',
  ':items': {
    textinput: {
      id: 'textinput-579dc2eaba',
      fieldType: 'text-input',
      name: 'text1',
      visible: true,
      type: 'string',
      required: true,
      enabled: true,
      constraintMessages: {
        required: 'This is a required field',
      },
      readOnly: false,
      autoComplete: 'off',
      label: {
        value: 'Text Input 1',
        visible: true,
      },
      properties: {
        'fd:dor': {
          dorExclusion: false,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/textinput',
      },
      events: {
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      ':type': 'forms-components-examples/components/form/textinput',
    },
    numberinput: {
      id: 'numberinput-3876071950',
      fieldType: 'number-input',
      name: 'number1',
      visible: true,
      type: 'number',
      enabled: true,
      readOnly: false,
      label: {
        value: 'Number Input',
        visible: true,
      },
      rules: {
        visible: "text1 == 'show'",
      },
      properties: {
        'fd:dor': {
          dorExclusion: false,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/numberinput',
      },
      events: {
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      ':type': 'forms-components-examples/components/form/numberinput',
    },
    checkbox: {
      id: 'checkbox-baf96c736b',
      fieldType: 'checkbox',
      name: 'check1',
      visible: true,
      type: 'string',
      enabled: true,
      readOnly: false,
      enforceEnum: true,
      label: {
        value: 'Check Box',
        visible: true,
      },
      properties: {
        'fd:dor': {
          dorExclusion: false,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/checkbox',
        'fd:rules': {
          validationStatus: 'valid',
        },
      },
      events: {
        change: [
          "if(contains($event.payload.changes[].propertyName, 'value'),[if($field == 'on', dispatchEvent(text1, 'custom:setProperty', {required : false()}), {})],{})",
          "if(contains($event.payload.changes[].propertyName, 'value'),[if($field.$value != 'on', dispatchEvent(text1, 'custom:setProperty', {required : true()}), {})],{})",
        ],
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      enum: [
        'on',
      ],
      ':type': 'forms-components-examples/components/form/checkbox',
    },
    button: {
      id: 'button-9288811f1b',
      fieldType: 'button',
      name: 'validate',
      visible: true,
      type: 'string',
      enabled: true,
      buttonType: 'button',
      properties: {
        'fd:dor': {
          dorExclusion: true,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/button',
        'fd:rules': {
          validationStatus: 'valid',
        },
        'fd:buttonType': 'button',
      },
      label: {
        value: 'Validate Form',
        visible: true,
      },
      events: {
        click: [
          'validate()',
        ],
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      ':type': 'forms-components-examples/components/form/button',
    },
    textinput1: {
      id: 'textinput1',
      fieldType: 'text-input',
      name: 'textinput1',
      visible: true,
      type: 'string',
      required: true,
      enabled: true,
      constraintMessages: {
        required: 'This is a required field',
      },
      readOnly: false,
      autoComplete: 'off',
      label: {
        value: 'Text Input 1',
        visible: true,
      },
      properties: {
        'fd:dor': {
          dorExclusion: false,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/textinput',
      },
      events: {
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      ':type': 'forms-components-examples/components/form/textinput',
    },
    numberinput1: {
      id: 'numberinput1',
      fieldType: 'number-input',
      name: 'numberinput1',
      visible: true,
      type: 'number',
      enabled: true,
      readOnly: false,
      label: {
        value: 'Number Input',
        visible: true,
      },
      rules: {
        visible: "text1 == 'show'",
      },
      properties: {
        'fd:dor': {
          dorExclusion: false,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/numberinput',
      },
      events: {
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      ':type': 'forms-components-examples/components/form/numberinput',
    },
    checkbox1: {
      id: 'checkbox1',
      fieldType: 'checkbox',
      name: 'checkbox1',
      visible: true,
      type: 'string',
      enabled: true,
      readOnly: false,
      enforceEnum: true,
      label: {
        value: 'Check Box',
        visible: true,
      },
      properties: {
        'fd:dor': {
          dorExclusion: false,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/checkbox',
        'fd:rules': {
          validationStatus: 'valid',
        },
      },
      events: {
        change: [
          "if(contains($event.payload.changes[].propertyName, 'value'),[if($field == 'on', dispatchEvent(text1, 'custom:setProperty', {required : false()}), {})],{})",
          "if(contains($event.payload.changes[].propertyName, 'value'),[if($field.$value != 'on', dispatchEvent(text1, 'custom:setProperty', {required : true()}), {})],{})",
        ],
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      enum: [
        'on',
      ],
      ':type': 'forms-components-examples/components/form/checkbox',
    },
    button1: {
      id: 'button1',
      fieldType: 'button',
      name: 'button1',
      visible: true,
      type: 'string',
      enabled: true,
      buttonType: 'button',
      properties: {
        'fd:dor': {
          dorExclusion: true,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/button',
        'fd:rules': {
          validationStatus: 'valid',
        },
        'fd:buttonType': 'button',
      },
      label: {
        value: 'Validate Form',
        visible: true,
      },
      events: {
        click: [
          'validate()',
        ],
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      ':type': 'forms-components-examples/components/form/button',
    },
    textinput2: {
      id: 'textinput2',
      fieldType: 'text-input',
      name: 'textinput2',
      visible: true,
      type: 'string',
      required: true,
      enabled: true,
      constraintMessages: {
        required: 'This is a required field',
      },
      readOnly: false,
      autoComplete: 'off',
      label: {
        value: 'Text Input 1',
        visible: true,
      },
      properties: {
        'fd:dor': {
          dorExclusion: false,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/textinput',
      },
      events: {
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      ':type': 'forms-components-examples/components/form/textinput',
    },
    numberinput2: {
      id: 'numberinput2',
      fieldType: 'number-input',
      name: 'numberinput2',
      visible: true,
      type: 'number',
      enabled: true,
      readOnly: false,
      label: {
        value: 'Number Input',
        visible: true,
      },
      rules: {
        visible: "text1 == 'show'",
      },
      properties: {
        'fd:dor': {
          dorExclusion: false,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/numberinput',
      },
      events: {
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      ':type': 'forms-components-examples/components/form/numberinput',
    },
    checkbox2: {
      id: 'checkbox2',
      fieldType: 'checkbox',
      name: 'checkbox2',
      visible: true,
      type: 'string',
      enabled: true,
      readOnly: false,
      enforceEnum: true,
      label: {
        value: 'Check Box',
        visible: true,
      },
      properties: {
        'fd:dor': {
          dorExclusion: false,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/checkbox',
        'fd:rules': {
          validationStatus: 'valid',
        },
      },
      events: {
        change: [
          "if(contains($event.payload.changes[].propertyName, 'value'),[if($field == 'on', dispatchEvent(text1, 'custom:setProperty', {required : false()}), {})],{})",
          "if(contains($event.payload.changes[].propertyName, 'value'),[if($field.$value != 'on', dispatchEvent(text1, 'custom:setProperty', {required : true()}), {})],{})",
        ],
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      enum: [
        'on',
      ],
      ':type': 'forms-components-examples/components/form/checkbox',
    },
    button2: {
      id: 'button2',
      fieldType: 'button',
      name: 'button2',
      visible: true,
      type: 'string',
      enabled: true,
      buttonType: 'button',
      properties: {
        'fd:dor': {
          dorExclusion: true,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/button',
        'fd:rules': {
          validationStatus: 'valid',
        },
        'fd:buttonType': 'button',
      },
      label: {
        value: 'Validate Form',
        visible: true,
      },
      events: {
        click: [
          'validate()',
        ],
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      ':type': 'forms-components-examples/components/form/button',
    },
    textinput3: {
      id: 'textinput3',
      fieldType: 'text-input',
      name: 'textinput3',
      visible: true,
      type: 'string',
      required: true,
      enabled: true,
      constraintMessages: {
        required: 'This is a required field',
      },
      readOnly: false,
      autoComplete: 'off',
      label: {
        value: 'Text Input 1',
        visible: true,
      },
      properties: {
        'fd:dor': {
          dorExclusion: false,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/textinput',
      },
      events: {
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      ':type': 'forms-components-examples/components/form/textinput',
    },
    numberinput3: {
      id: 'numberinput3',
      fieldType: 'number-input',
      name: 'numberinput3',
      visible: true,
      type: 'number',
      enabled: true,
      readOnly: false,
      label: {
        value: 'Number Input',
        visible: true,
      },
      rules: {
        visible: "text1 == 'show'",
      },
      properties: {
        'fd:dor': {
          dorExclusion: false,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/numberinput',
      },
      events: {
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      ':type': 'forms-components-examples/components/form/numberinput',
    },
    checkbox3: {
      id: 'checkbox3',
      fieldType: 'checkbox',
      name: 'checkbox3',
      visible: true,
      type: 'string',
      enabled: true,
      readOnly: false,
      enforceEnum: true,
      label: {
        value: 'Check Box',
        visible: true,
      },
      properties: {
        'fd:dor': {
          dorExclusion: false,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/checkbox',
        'fd:rules': {
          validationStatus: 'valid',
        },
      },
      events: {
        change: [
          "if(contains($event.payload.changes[].propertyName, 'value'),[if($field == 'on', dispatchEvent(text1, 'custom:setProperty', {required : false()}), {})],{})",
          "if(contains($event.payload.changes[].propertyName, 'value'),[if($field.$value != 'on', dispatchEvent(text1, 'custom:setProperty', {required : true()}), {})],{})",
        ],
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      enum: [
        'on',
      ],
      ':type': 'forms-components-examples/components/form/checkbox',
    },
    button3: {
      id: 'button3',
      fieldType: 'button',
      name: 'button3',
      visible: true,
      type: 'string',
      enabled: true,
      buttonType: 'button',
      properties: {
        'fd:dor': {
          dorExclusion: true,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/button',
        'fd:rules': {
          validationStatus: 'valid',
        },
        'fd:buttonType': 'button',
      },
      label: {
        value: 'Validate Form',
        visible: true,
      },
      events: {
        click: [
          'validate()',
        ],
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      ':type': 'forms-components-examples/components/form/button',
    },
    textinput4: {
      id: 'textinput4',
      fieldType: 'text-input',
      name: 'textinput4',
      visible: true,
      type: 'string',
      required: true,
      enabled: true,
      constraintMessages: {
        required: 'This is a required field',
      },
      readOnly: false,
      autoComplete: 'off',
      label: {
        value: 'Text Input 1',
        visible: true,
      },
      properties: {
        'fd:dor': {
          dorExclusion: false,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/textinput',
      },
      events: {
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      ':type': 'forms-components-examples/components/form/textinput',
    },
    numberinput4: {
      id: 'numberinput4',
      fieldType: 'number-input',
      name: 'numberinput4',
      visible: true,
      type: 'number',
      enabled: true,
      readOnly: false,
      label: {
        value: 'Number Input',
        visible: true,
      },
      rules: {
        visible: "text1 == 'show'",
      },
      properties: {
        'fd:dor': {
          dorExclusion: false,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/numberinput',
      },
      events: {
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      ':type': 'forms-components-examples/components/form/numberinput',
    },
    checkbox4: {
      id: 'checkbox4',
      fieldType: 'checkbox',
      name: 'checkbox4',
      visible: true,
      type: 'string',
      enabled: true,
      readOnly: false,
      enforceEnum: true,
      label: {
        value: 'Check Box',
        visible: true,
      },
      properties: {
        'fd:dor': {
          dorExclusion: false,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/checkbox',
        'fd:rules': {
          validationStatus: 'valid',
        },
      },
      events: {
        change: [
          "if(contains($event.payload.changes[].propertyName, 'value'),[if($field == 'on', dispatchEvent(text1, 'custom:setProperty', {required : false()}), {})],{})",
          "if(contains($event.payload.changes[].propertyName, 'value'),[if($field.$value != 'on', dispatchEvent(text1, 'custom:setProperty', {required : true()}), {})],{})",
        ],
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      enum: [
        'on',
      ],
      ':type': 'forms-components-examples/components/form/checkbox',
    },
    button4: {
      id: 'button4',
      fieldType: 'button',
      name: 'button4',
      visible: true,
      type: 'string',
      enabled: true,
      buttonType: 'button',
      properties: {
        'fd:dor': {
          dorExclusion: true,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/button',
        'fd:rules': {
          validationStatus: 'valid',
        },
        'fd:buttonType': 'button',
      },
      label: {
        value: 'Validate Form',
        visible: true,
      },
      events: {
        click: [
          'validate()',
        ],
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      ':type': 'forms-components-examples/components/form/button',
    },
    textinput5: {
      id: 'textinput5',
      fieldType: 'text-input',
      name: 'textinput5',
      visible: true,
      type: 'string',
      required: true,
      enabled: true,
      constraintMessages: {
        required: 'This is a required field',
      },
      readOnly: false,
      autoComplete: 'off',
      label: {
        value: 'Text Input 1',
        visible: true,
      },
      properties: {
        'fd:dor': {
          dorExclusion: false,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/textinput',
      },
      events: {
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      ':type': 'forms-components-examples/components/form/textinput',
    },
    numberinput5: {
      id: 'numberinput5',
      fieldType: 'number-input',
      name: 'numberinput5',
      visible: true,
      type: 'number',
      enabled: true,
      readOnly: false,
      label: {
        value: 'Number Input',
        visible: true,
      },
      rules: {
        visible: "text1 == 'show'",
      },
      properties: {
        'fd:dor': {
          dorExclusion: false,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/numberinput',
      },
      events: {
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      ':type': 'forms-components-examples/components/form/numberinput',
    },
    checkbox5: {
      id: 'checkbox5',
      fieldType: 'checkbox',
      name: 'checkbox5',
      visible: true,
      type: 'string',
      enabled: true,
      readOnly: false,
      enforceEnum: true,
      label: {
        value: 'Check Box',
        visible: true,
      },
      properties: {
        'fd:dor': {
          dorExclusion: false,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/checkbox',
        'fd:rules': {
          validationStatus: 'valid',
        },
      },
      events: {
        change: [
          "if(contains($event.payload.changes[].propertyName, 'value'),[if($field == 'on', dispatchEvent(text1, 'custom:setProperty', {required : false()}), {})],{})",
          "if(contains($event.payload.changes[].propertyName, 'value'),[if($field.$value != 'on', dispatchEvent(text1, 'custom:setProperty', {required : true()}), {})],{})",
        ],
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      enum: [
        'on',
      ],
      ':type': 'forms-components-examples/components/form/checkbox',
    },
    button5: {
      id: 'button5',
      fieldType: 'button',
      name: 'button5',
      visible: true,
      type: 'string',
      enabled: true,
      buttonType: 'button',
      properties: {
        'fd:dor': {
          dorExclusion: true,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/button',
        'fd:rules': {
          validationStatus: 'valid',
        },
        'fd:buttonType': 'button',
      },
      label: {
        value: 'Validate Form',
        visible: true,
      },
      events: {
        click: [
          'validate()',
        ],
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      ':type': 'forms-components-examples/components/form/button',
    },
    textinput6: {
      id: 'textinput6',
      fieldType: 'text-input',
      name: 'textinput6',
      visible: true,
      type: 'string',
      required: true,
      enabled: true,
      constraintMessages: {
        required: 'This is a required field',
      },
      readOnly: false,
      autoComplete: 'off',
      label: {
        value: 'Text Input 1',
        visible: true,
      },
      properties: {
        'fd:dor': {
          dorExclusion: false,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/textinput',
      },
      events: {
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      ':type': 'forms-components-examples/components/form/textinput',
    },
    numberinput6: {
      id: 'numberinput6',
      fieldType: 'number-input',
      name: 'numberinput6',
      visible: true,
      type: 'number',
      enabled: true,
      readOnly: false,
      label: {
        value: 'Number Input',
        visible: true,
      },
      rules: {
        visible: "text1 == 'show'",
      },
      properties: {
        'fd:dor': {
          dorExclusion: false,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/numberinput',
      },
      events: {
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      ':type': 'forms-components-examples/components/form/numberinput',
    },
    checkbox6: {
      id: 'checkbox6',
      fieldType: 'checkbox',
      name: 'checkbox6',
      visible: true,
      type: 'string',
      enabled: true,
      readOnly: false,
      enforceEnum: true,
      label: {
        value: 'Check Box',
        visible: true,
      },
      properties: {
        'fd:dor': {
          dorExclusion: false,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/checkbox',
        'fd:rules': {
          validationStatus: 'valid',
        },
      },
      events: {
        change: [
          "if(contains($event.payload.changes[].propertyName, 'value'),[if($field == 'on', dispatchEvent(text1, 'custom:setProperty', {required : false()}), {})],{})",
          "if(contains($event.payload.changes[].propertyName, 'value'),[if($field.$value != 'on', dispatchEvent(text1, 'custom:setProperty', {required : true()}), {})],{})",
        ],
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      enum: [
        'on',
      ],
      ':type': 'forms-components-examples/components/form/checkbox',
    },
    button6: {
      id: 'button6',
      fieldType: 'button',
      name: 'button6',
      visible: true,
      type: 'string',
      enabled: true,
      buttonType: 'button',
      properties: {
        'fd:dor': {
          dorExclusion: true,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/button',
        'fd:rules': {
          validationStatus: 'valid',
        },
        'fd:buttonType': 'button',
      },
      label: {
        value: 'Validate Form',
        visible: true,
      },
      events: {
        click: [
          'validate()',
        ],
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      ':type': 'forms-components-examples/components/form/button',
    },
    textinput7: {
      id: 'textinput7',
      fieldType: 'text-input',
      name: 'textinput7',
      visible: true,
      type: 'string',
      required: true,
      enabled: true,
      constraintMessages: {
        required: 'This is a required field',
      },
      readOnly: false,
      autoComplete: 'off',
      label: {
        value: 'Text Input 1',
        visible: true,
      },
      properties: {
        'fd:dor': {
          dorExclusion: false,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/textinput',
      },
      events: {
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      ':type': 'forms-components-examples/components/form/textinput',
    },
    numberinput7: {
      id: 'numberinput7',
      fieldType: 'number-input',
      name: 'numberinput7',
      visible: true,
      type: 'number',
      enabled: true,
      readOnly: false,
      label: {
        value: 'Number Input',
        visible: true,
      },
      rules: {
        visible: "text1 == 'show'",
      },
      properties: {
        'fd:dor': {
          dorExclusion: false,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/numberinput',
      },
      events: {
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      ':type': 'forms-components-examples/components/form/numberinput',
    },
    checkbox7: {
      id: 'checkbox7',
      fieldType: 'checkbox',
      name: 'checkbox7',
      visible: true,
      type: 'string',
      enabled: true,
      readOnly: false,
      enforceEnum: true,
      label: {
        value: 'Check Box',
        visible: true,
      },
      properties: {
        'fd:dor': {
          dorExclusion: false,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/checkbox',
        'fd:rules': {
          validationStatus: 'valid',
        },
      },
      events: {
        change: [
          "if(contains($event.payload.changes[].propertyName, 'value'),[if($field == 'on', dispatchEvent(text1, 'custom:setProperty', {required : false()}), {})],{})",
          "if(contains($event.payload.changes[].propertyName, 'value'),[if($field.$value != 'on', dispatchEvent(text1, 'custom:setProperty', {required : true()}), {})],{})",
        ],
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      enum: [
        'on',
      ],
      ':type': 'forms-components-examples/components/form/checkbox',
    },
    button7: {
      id: 'button7',
      fieldType: 'button',
      name: 'button7',
      visible: true,
      type: 'string',
      enabled: true,
      buttonType: 'button',
      properties: {
        'fd:dor': {
          dorExclusion: true,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/button',
        'fd:rules': {
          validationStatus: 'valid',
        },
        'fd:buttonType': 'button',
      },
      label: {
        value: 'Validate Form',
        visible: true,
      },
      events: {
        click: [
          'validate()',
        ],
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      ':type': 'forms-components-examples/components/form/button',
    },
    textinput8: {
      id: 'textinput8',
      fieldType: 'text-input',
      name: 'textinput8',
      visible: true,
      type: 'string',
      required: true,
      enabled: true,
      constraintMessages: {
        required: 'This is a required field',
      },
      readOnly: false,
      autoComplete: 'off',
      label: {
        value: 'Text Input 1',
        visible: true,
      },
      properties: {
        'fd:dor': {
          dorExclusion: false,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/textinput',
      },
      events: {
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      ':type': 'forms-components-examples/components/form/textinput',
    },
    numberinput8: {
      id: 'numberinput8',
      fieldType: 'number-input',
      name: 'numberinput8',
      visible: true,
      type: 'number',
      enabled: true,
      readOnly: false,
      label: {
        value: 'Number Input',
        visible: true,
      },
      rules: {
        visible: "text1 == 'show'",
      },
      properties: {
        'fd:dor': {
          dorExclusion: false,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/numberinput',
      },
      events: {
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      ':type': 'forms-components-examples/components/form/numberinput',
    },
    checkbox8: {
      id: 'checkbox8',
      fieldType: 'checkbox',
      name: 'checkbox8',
      visible: true,
      type: 'string',
      enabled: true,
      readOnly: false,
      enforceEnum: true,
      label: {
        value: 'Check Box',
        visible: true,
      },
      properties: {
        'fd:dor': {
          dorExclusion: false,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/checkbox',
        'fd:rules': {
          validationStatus: 'valid',
        },
      },
      events: {
        change: [
          "if(contains($event.payload.changes[].propertyName, 'value'),[if($field == 'on', dispatchEvent(text1, 'custom:setProperty', {required : false()}), {})],{})",
          "if(contains($event.payload.changes[].propertyName, 'value'),[if($field.$value != 'on', dispatchEvent(text1, 'custom:setProperty', {required : true()}), {})],{})",
        ],
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      enum: [
        'on',
      ],
      ':type': 'forms-components-examples/components/form/checkbox',
    },
    button8: {
      id: 'button8',
      fieldType: 'button',
      name: 'button8',
      visible: true,
      type: 'string',
      enabled: true,
      buttonType: 'button',
      properties: {
        'fd:dor': {
          dorExclusion: true,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/button',
        'fd:rules': {
          validationStatus: 'valid',
        },
        'fd:buttonType': 'button',
      },
      label: {
        value: 'Validate Form',
        visible: true,
      },
      events: {
        click: [
          'validate()',
        ],
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      ':type': 'forms-components-examples/components/form/button',
    },
    textinput9: {
      id: 'textinput9',
      fieldType: 'text-input',
      name: 'textinput9',
      visible: true,
      type: 'string',
      required: true,
      enabled: true,
      constraintMessages: {
        required: 'This is a required field',
      },
      readOnly: false,
      autoComplete: 'off',
      label: {
        value: 'Text Input 1',
        visible: true,
      },
      properties: {
        'fd:dor': {
          dorExclusion: false,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/textinput',
      },
      events: {
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      ':type': 'forms-components-examples/components/form/textinput',
    },
    numberinput9: {
      id: 'numberinput9',
      fieldType: 'number-input',
      name: 'numberinput9',
      visible: true,
      type: 'number',
      enabled: true,
      readOnly: false,
      label: {
        value: 'Number Input',
        visible: true,
      },
      rules: {
        visible: "text1 == 'show'",
      },
      properties: {
        'fd:dor': {
          dorExclusion: false,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/numberinput',
      },
      events: {
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      ':type': 'forms-components-examples/components/form/numberinput',
    },
    checkbox9: {
      id: 'checkbox9',
      fieldType: 'checkbox',
      name: 'checkbox9',
      visible: true,
      type: 'string',
      enabled: true,
      readOnly: false,
      enforceEnum: true,
      label: {
        value: 'Check Box',
        visible: true,
      },
      properties: {
        'fd:dor': {
          dorExclusion: false,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/checkbox',
        'fd:rules': {
          validationStatus: 'valid',
        },
      },
      events: {
        change: [
          "if(contains($event.payload.changes[].propertyName, 'value'),[if($field == 'on', dispatchEvent(text1, 'custom:setProperty', {required : false()}), {})],{})",
          "if(contains($event.payload.changes[].propertyName, 'value'),[if($field.$value != 'on', dispatchEvent(text1, 'custom:setProperty', {required : true()}), {})],{})",
        ],
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      enum: [
        'on',
      ],
      ':type': 'forms-components-examples/components/form/checkbox',
    },
    button9: {
      id: 'button9',
      fieldType: 'button',
      name: 'button9',
      visible: true,
      type: 'string',
      enabled: true,
      buttonType: 'button',
      properties: {
        'fd:dor': {
          dorExclusion: true,
        },
        'fd:path': '/content/forms/af/xwalk/test1/jcr:content/guideContainer/button',
        'fd:rules': {
          validationStatus: 'valid',
        },
        'fd:buttonType': 'button',
      },
      label: {
        value: 'Validate Form',
        visible: true,
      },
      events: {
        click: [
          'validate()',
        ],
        'custom:setProperty': [
          '$event.payload',
        ],
      },
      ':type': 'forms-components-examples/components/form/button',
    },
  },
  action: '/adobe/forms/af/submit/L2NvbnRlbnQvZm9ybXMvYWYveHdhbGsvdGVzdDE=',
};
