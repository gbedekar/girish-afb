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
  metadata: {
    grammar: 'json-formula-1.0.0',
    version: '1.0.0',
  },
  adaptiveform: '0.12.1',
  ':type': 'forms-components-examples/components/form/container',
  action: '/adobe/forms/af/submit/L2NvbnRlbnQvZm9ybXMvYWYveHdhbGsvdGVzdDE=',
  items: [
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
      id: 'textinput10',
      fieldType: 'text-input',
      name: 'textinput10',
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
    {
      id: 'numberinput10',
      fieldType: 'number-input',
      name: 'numberinput10',
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
    {
      id: 'checkbox10',
      fieldType: 'checkbox',
      name: 'checkbox10',
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
    {
      id: 'button10',
      fieldType: 'button',
      name: 'button10',
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
    {
      id: 'textinput11',
      fieldType: 'text-input',
      name: 'textinput11',
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
    {
      id: 'numberinput11',
      fieldType: 'number-input',
      name: 'numberinput11',
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
    {
      id: 'checkbox11',
      fieldType: 'checkbox',
      name: 'checkbox11',
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
    {
      id: 'button11',
      fieldType: 'button',
      name: 'button11',
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
    {
      id: 'textinput12',
      fieldType: 'text-input',
      name: 'textinput12',
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
    {
      id: 'numberinput12',
      fieldType: 'number-input',
      name: 'numberinput12',
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
    {
      id: 'checkbox12',
      fieldType: 'checkbox',
      name: 'checkbox12',
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
    {
      id: 'button12',
      fieldType: 'button',
      name: 'button12',
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
    {
      id: 'textinput13',
      fieldType: 'text-input',
      name: 'textinput13',
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
    {
      id: 'numberinput13',
      fieldType: 'number-input',
      name: 'numberinput13',
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
    {
      id: 'checkbox13',
      fieldType: 'checkbox',
      name: 'checkbox13',
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
    {
      id: 'button13',
      fieldType: 'button',
      name: 'button13',
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
    {
      id: 'textinput14',
      fieldType: 'text-input',
      name: 'textinput14',
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
    {
      id: 'numberinput14',
      fieldType: 'number-input',
      name: 'numberinput14',
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
    {
      id: 'checkbox14',
      fieldType: 'checkbox',
      name: 'checkbox14',
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
    {
      id: 'button14',
      fieldType: 'button',
      name: 'button14',
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
    {
      id: 'textinput15',
      fieldType: 'text-input',
      name: 'textinput15',
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
    {
      id: 'numberinput15',
      fieldType: 'number-input',
      name: 'numberinput15',
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
    {
      id: 'checkbox15',
      fieldType: 'checkbox',
      name: 'checkbox15',
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
    {
      id: 'button15',
      fieldType: 'button',
      name: 'button15',
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
    {
      id: 'textinput16',
      fieldType: 'text-input',
      name: 'textinput16',
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
    {
      id: 'numberinput16',
      fieldType: 'number-input',
      name: 'numberinput16',
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
    {
      id: 'checkbox16',
      fieldType: 'checkbox',
      name: 'checkbox16',
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
    {
      id: 'button16',
      fieldType: 'button',
      name: 'button16',
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
    {
      id: 'textinput17',
      fieldType: 'text-input',
      name: 'textinput17',
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
    {
      id: 'numberinput17',
      fieldType: 'number-input',
      name: 'numberinput17',
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
    {
      id: 'checkbox17',
      fieldType: 'checkbox',
      name: 'checkbox17',
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
    {
      id: 'button17',
      fieldType: 'button',
      name: 'button17',
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
    {
      id: 'textinput18',
      fieldType: 'text-input',
      name: 'textinput18',
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
    {
      id: 'numberinput18',
      fieldType: 'number-input',
      name: 'numberinput18',
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
    {
      id: 'checkbox18',
      fieldType: 'checkbox',
      name: 'checkbox18',
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
    {
      id: 'button18',
      fieldType: 'button',
      name: 'button18',
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
    {
      id: 'textinput19',
      fieldType: 'text-input',
      name: 'textinput19',
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
    {
      id: 'numberinput19',
      fieldType: 'number-input',
      name: 'numberinput19',
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
    {
      id: 'checkbox19',
      fieldType: 'checkbox',
      name: 'checkbox19',
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
    {
      id: 'button19',
      fieldType: 'button',
      name: 'button19',
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
    {
      id: 'textinput20',
      fieldType: 'text-input',
      name: 'textinput20',
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
    {
      id: 'numberinput20',
      fieldType: 'number-input',
      name: 'numberinput20',
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
    {
      id: 'checkbox20',
      fieldType: 'checkbox',
      name: 'checkbox20',
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
    {
      id: 'button20',
      fieldType: 'button',
      name: 'button20',
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
    {
      id: 'textinput21',
      fieldType: 'text-input',
      name: 'textinput21',
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
    {
      id: 'numberinput21',
      fieldType: 'number-input',
      name: 'numberinput21',
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
    {
      id: 'checkbox21',
      fieldType: 'checkbox',
      name: 'checkbox21',
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
    {
      id: 'button21',
      fieldType: 'button',
      name: 'button21',
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
    {
      id: 'textinput22',
      fieldType: 'text-input',
      name: 'textinput22',
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
    {
      id: 'numberinput22',
      fieldType: 'number-input',
      name: 'numberinput22',
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
    {
      id: 'checkbox22',
      fieldType: 'checkbox',
      name: 'checkbox22',
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
    {
      id: 'button22',
      fieldType: 'button',
      name: 'button22',
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
    {
      id: 'textinput23',
      fieldType: 'text-input',
      name: 'textinput23',
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
    {
      id: 'numberinput23',
      fieldType: 'number-input',
      name: 'numberinput23',
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
    {
      id: 'checkbox23',
      fieldType: 'checkbox',
      name: 'checkbox23',
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
    {
      id: 'button23',
      fieldType: 'button',
      name: 'button23',
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
    {
      id: 'textinput24',
      fieldType: 'text-input',
      name: 'textinput24',
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
    {
      id: 'numberinput24',
      fieldType: 'number-input',
      name: 'numberinput24',
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
    {
      id: 'checkbox24',
      fieldType: 'checkbox',
      name: 'checkbox24',
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
    {
      id: 'button24',
      fieldType: 'button',
      name: 'button24',
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
    {
      id: 'textinput25',
      fieldType: 'text-input',
      name: 'textinput25',
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
    {
      id: 'numberinput25',
      fieldType: 'number-input',
      name: 'numberinput25',
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
    {
      id: 'checkbox25',
      fieldType: 'checkbox',
      name: 'checkbox25',
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
    {
      id: 'button25',
      fieldType: 'button',
      name: 'button25',
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
    {
      id: 'textinput26',
      fieldType: 'text-input',
      name: 'textinput26',
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
    {
      id: 'numberinput26',
      fieldType: 'number-input',
      name: 'numberinput26',
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
    {
      id: 'checkbox26',
      fieldType: 'checkbox',
      name: 'checkbox26',
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
    {
      id: 'button26',
      fieldType: 'button',
      name: 'button26',
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
    {
      id: 'textinput27',
      fieldType: 'text-input',
      name: 'textinput27',
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
    {
      id: 'numberinput27',
      fieldType: 'number-input',
      name: 'numberinput27',
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
    {
      id: 'checkbox27',
      fieldType: 'checkbox',
      name: 'checkbox27',
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
    {
      id: 'button27',
      fieldType: 'button',
      name: 'button27',
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
    {
      id: 'textinput28',
      fieldType: 'text-input',
      name: 'textinput28',
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
    {
      id: 'numberinput28',
      fieldType: 'number-input',
      name: 'numberinput28',
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
    {
      id: 'checkbox28',
      fieldType: 'checkbox',
      name: 'checkbox28',
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
    {
      id: 'button28',
      fieldType: 'button',
      name: 'button28',
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
    {
      id: 'textinput29',
      fieldType: 'text-input',
      name: 'textinput29',
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
    {
      id: 'numberinput29',
      fieldType: 'number-input',
      name: 'numberinput29',
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
    {
      id: 'checkbox29',
      fieldType: 'checkbox',
      name: 'checkbox29',
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
    {
      id: 'button29',
      fieldType: 'button',
      name: 'button29',
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
    {
      id: 'textinput30',
      fieldType: 'text-input',
      name: 'textinput30',
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
    {
      id: 'numberinput30',
      fieldType: 'number-input',
      name: 'numberinput30',
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
    {
      id: 'checkbox30',
      fieldType: 'checkbox',
      name: 'checkbox30',
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
    {
      id: 'button30',
      fieldType: 'button',
      name: 'button30',
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
    {
      id: 'textinput31',
      fieldType: 'text-input',
      name: 'textinput31',
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
    {
      id: 'numberinput31',
      fieldType: 'number-input',
      name: 'numberinput31',
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
    {
      id: 'checkbox31',
      fieldType: 'checkbox',
      name: 'checkbox31',
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
    {
      id: 'button31',
      fieldType: 'button',
      name: 'button31',
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
    {
      id: 'textinput32',
      fieldType: 'text-input',
      name: 'textinput32',
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
    {
      id: 'numberinput32',
      fieldType: 'number-input',
      name: 'numberinput32',
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
    {
      id: 'checkbox32',
      fieldType: 'checkbox',
      name: 'checkbox32',
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
    {
      id: 'button32',
      fieldType: 'button',
      name: 'button32',
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
    {
      id: 'textinput33',
      fieldType: 'text-input',
      name: 'textinput33',
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
    {
      id: 'numberinput33',
      fieldType: 'number-input',
      name: 'numberinput33',
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
    {
      id: 'checkbox33',
      fieldType: 'checkbox',
      name: 'checkbox33',
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
    {
      id: 'button33',
      fieldType: 'button',
      name: 'button33',
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
    {
      id: 'textinput34',
      fieldType: 'text-input',
      name: 'textinput34',
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
    {
      id: 'numberinput34',
      fieldType: 'number-input',
      name: 'numberinput34',
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
    {
      id: 'checkbox34',
      fieldType: 'checkbox',
      name: 'checkbox34',
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
    {
      id: 'button34',
      fieldType: 'button',
      name: 'button34',
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
    {
      id: 'textinput35',
      fieldType: 'text-input',
      name: 'textinput35',
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
    {
      id: 'numberinput35',
      fieldType: 'number-input',
      name: 'numberinput35',
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
    {
      id: 'checkbox35',
      fieldType: 'checkbox',
      name: 'checkbox35',
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
    {
      id: 'button35',
      fieldType: 'button',
      name: 'button35',
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
    {
      id: 'textinput36',
      fieldType: 'text-input',
      name: 'textinput36',
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
    {
      id: 'numberinput36',
      fieldType: 'number-input',
      name: 'numberinput36',
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
    {
      id: 'checkbox36',
      fieldType: 'checkbox',
      name: 'checkbox36',
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
    {
      id: 'button36',
      fieldType: 'button',
      name: 'button36',
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
    {
      id: 'textinput37',
      fieldType: 'text-input',
      name: 'textinput37',
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
    {
      id: 'numberinput37',
      fieldType: 'number-input',
      name: 'numberinput37',
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
    {
      id: 'checkbox37',
      fieldType: 'checkbox',
      name: 'checkbox37',
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
    {
      id: 'button37',
      fieldType: 'button',
      name: 'button37',
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
    {
      id: 'textinput38',
      fieldType: 'text-input',
      name: 'textinput38',
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
    {
      id: 'numberinput38',
      fieldType: 'number-input',
      name: 'numberinput38',
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
    {
      id: 'checkbox38',
      fieldType: 'checkbox',
      name: 'checkbox38',
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
    {
      id: 'button38',
      fieldType: 'button',
      name: 'button38',
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
    {
      id: 'textinput39',
      fieldType: 'text-input',
      name: 'textinput39',
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
    {
      id: 'numberinput39',
      fieldType: 'number-input',
      name: 'numberinput39',
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
    {
      id: 'checkbox39',
      fieldType: 'checkbox',
      name: 'checkbox39',
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
    {
      id: 'button39',
      fieldType: 'button',
      name: 'button39',
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
    {
      id: 'textinput40',
      fieldType: 'text-input',
      name: 'textinput40',
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
    {
      id: 'numberinput40',
      fieldType: 'number-input',
      name: 'numberinput40',
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
    {
      id: 'checkbox40',
      fieldType: 'checkbox',
      name: 'checkbox40',
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
    {
      id: 'button40',
      fieldType: 'button',
      name: 'button40',
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
    {
      id: 'textinput41',
      fieldType: 'text-input',
      name: 'textinput41',
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
    {
      id: 'numberinput41',
      fieldType: 'number-input',
      name: 'numberinput41',
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
    {
      id: 'checkbox41',
      fieldType: 'checkbox',
      name: 'checkbox41',
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
    {
      id: 'button41',
      fieldType: 'button',
      name: 'button41',
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
    {
      id: 'textinput42',
      fieldType: 'text-input',
      name: 'textinput42',
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
    {
      id: 'numberinput42',
      fieldType: 'number-input',
      name: 'numberinput42',
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
    {
      id: 'checkbox42',
      fieldType: 'checkbox',
      name: 'checkbox42',
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
    {
      id: 'button42',
      fieldType: 'button',
      name: 'button42',
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
    {
      id: 'textinput43',
      fieldType: 'text-input',
      name: 'textinput43',
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
    {
      id: 'numberinput43',
      fieldType: 'number-input',
      name: 'numberinput43',
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
    {
      id: 'checkbox43',
      fieldType: 'checkbox',
      name: 'checkbox43',
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
    {
      id: 'button43',
      fieldType: 'button',
      name: 'button43',
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
    {
      id: 'textinput44',
      fieldType: 'text-input',
      name: 'textinput44',
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
    {
      id: 'numberinput44',
      fieldType: 'number-input',
      name: 'numberinput44',
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
    {
      id: 'checkbox44',
      fieldType: 'checkbox',
      name: 'checkbox44',
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
    {
      id: 'button44',
      fieldType: 'button',
      name: 'button44',
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
    {
      id: 'textinput45',
      fieldType: 'text-input',
      name: 'textinput45',
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
    {
      id: 'numberinput45',
      fieldType: 'number-input',
      name: 'numberinput45',
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
    {
      id: 'checkbox45',
      fieldType: 'checkbox',
      name: 'checkbox45',
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
    {
      id: 'button45',
      fieldType: 'button',
      name: 'button45',
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
    {
      id: 'textinput46',
      fieldType: 'text-input',
      name: 'textinput46',
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
    {
      id: 'numberinput46',
      fieldType: 'number-input',
      name: 'numberinput46',
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
    {
      id: 'checkbox46',
      fieldType: 'checkbox',
      name: 'checkbox46',
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
    {
      id: 'button46',
      fieldType: 'button',
      name: 'button46',
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
    {
      id: 'textinput47',
      fieldType: 'text-input',
      name: 'textinput47',
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
    {
      id: 'numberinput47',
      fieldType: 'number-input',
      name: 'numberinput47',
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
    {
      id: 'checkbox47',
      fieldType: 'checkbox',
      name: 'checkbox47',
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
    {
      id: 'button47',
      fieldType: 'button',
      name: 'button47',
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
    {
      id: 'textinput48',
      fieldType: 'text-input',
      name: 'textinput48',
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
    {
      id: 'numberinput48',
      fieldType: 'number-input',
      name: 'numberinput48',
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
    {
      id: 'checkbox48',
      fieldType: 'checkbox',
      name: 'checkbox48',
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
    {
      id: 'button48',
      fieldType: 'button',
      name: 'button48',
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
    {
      id: 'textinput49',
      fieldType: 'text-input',
      name: 'textinput49',
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
    {
      id: 'numberinput49',
      fieldType: 'number-input',
      name: 'numberinput49',
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
    {
      id: 'checkbox49',
      fieldType: 'checkbox',
      name: 'checkbox49',
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
    {
      id: 'button49',
      fieldType: 'button',
      name: 'button49',
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
  ],
};
