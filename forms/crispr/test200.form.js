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
    'textinput10',
    'numberinput10',
    'checkbox10',
    'button10',
    'textinput11',
    'numberinput11',
    'checkbox11',
    'button11',
    'textinput12',
    'numberinput12',
    'checkbox12',
    'button12',
    'textinput13',
    'numberinput13',
    'checkbox13',
    'button13',
    'textinput14',
    'numberinput14',
    'checkbox14',
    'button14',
    'textinput15',
    'numberinput15',
    'checkbox15',
    'button15',
    'textinput16',
    'numberinput16',
    'checkbox16',
    'button16',
    'textinput17',
    'numberinput17',
    'checkbox17',
    'button17',
    'textinput18',
    'numberinput18',
    'checkbox18',
    'button18',
    'textinput19',
    'numberinput19',
    'checkbox19',
    'button19',
    'textinput20',
    'numberinput20',
    'checkbox20',
    'button20',
    'textinput21',
    'numberinput21',
    'checkbox21',
    'button21',
    'textinput22',
    'numberinput22',
    'checkbox22',
    'button22',
    'textinput23',
    'numberinput23',
    'checkbox23',
    'button23',
    'textinput24',
    'numberinput24',
    'checkbox24',
    'button24',
    'textinput25',
    'numberinput25',
    'checkbox25',
    'button25',
    'textinput26',
    'numberinput26',
    'checkbox26',
    'button26',
    'textinput27',
    'numberinput27',
    'checkbox27',
    'button27',
    'textinput28',
    'numberinput28',
    'checkbox28',
    'button28',
    'textinput29',
    'numberinput29',
    'checkbox29',
    'button29',
    'textinput30',
    'numberinput30',
    'checkbox30',
    'button30',
    'textinput31',
    'numberinput31',
    'checkbox31',
    'button31',
    'textinput32',
    'numberinput32',
    'checkbox32',
    'button32',
    'textinput33',
    'numberinput33',
    'checkbox33',
    'button33',
    'textinput34',
    'numberinput34',
    'checkbox34',
    'button34',
    'textinput35',
    'numberinput35',
    'checkbox35',
    'button35',
    'textinput36',
    'numberinput36',
    'checkbox36',
    'button36',
    'textinput37',
    'numberinput37',
    'checkbox37',
    'button37',
    'textinput38',
    'numberinput38',
    'checkbox38',
    'button38',
    'textinput39',
    'numberinput39',
    'checkbox39',
    'button39',
    'textinput40',
    'numberinput40',
    'checkbox40',
    'button40',
    'textinput41',
    'numberinput41',
    'checkbox41',
    'button41',
    'textinput42',
    'numberinput42',
    'checkbox42',
    'button42',
    'textinput43',
    'numberinput43',
    'checkbox43',
    'button43',
    'textinput44',
    'numberinput44',
    'checkbox44',
    'button44',
    'textinput45',
    'numberinput45',
    'checkbox45',
    'button45',
    'textinput46',
    'numberinput46',
    'checkbox46',
    'button46',
    'textinput47',
    'numberinput47',
    'checkbox47',
    'button47',
    'textinput48',
    'numberinput48',
    'checkbox48',
    'button48',
    'textinput49',
    'numberinput49',
    'checkbox49',
    'button49',
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
    textinput10: {
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
    numberinput10: {
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
    checkbox10: {
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
    button10: {
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
    textinput11: {
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
    numberinput11: {
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
    checkbox11: {
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
    button11: {
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
    textinput12: {
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
    numberinput12: {
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
    checkbox12: {
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
    button12: {
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
    textinput13: {
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
    numberinput13: {
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
    checkbox13: {
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
    button13: {
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
    textinput14: {
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
    numberinput14: {
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
    checkbox14: {
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
    button14: {
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
    textinput15: {
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
    numberinput15: {
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
    checkbox15: {
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
    button15: {
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
    textinput16: {
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
    numberinput16: {
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
    checkbox16: {
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
    button16: {
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
    textinput17: {
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
    numberinput17: {
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
    checkbox17: {
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
    button17: {
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
    textinput18: {
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
    numberinput18: {
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
    checkbox18: {
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
    button18: {
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
    textinput19: {
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
    numberinput19: {
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
    checkbox19: {
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
    button19: {
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
    textinput20: {
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
    numberinput20: {
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
    checkbox20: {
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
    button20: {
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
    textinput21: {
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
    numberinput21: {
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
    checkbox21: {
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
    button21: {
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
    textinput22: {
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
    numberinput22: {
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
    checkbox22: {
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
    button22: {
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
    textinput23: {
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
    numberinput23: {
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
    checkbox23: {
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
    button23: {
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
    textinput24: {
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
    numberinput24: {
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
    checkbox24: {
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
    button24: {
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
    textinput25: {
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
    numberinput25: {
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
    checkbox25: {
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
    button25: {
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
    textinput26: {
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
    numberinput26: {
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
    checkbox26: {
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
    button26: {
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
    textinput27: {
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
    numberinput27: {
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
    checkbox27: {
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
    button27: {
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
    textinput28: {
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
    numberinput28: {
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
    checkbox28: {
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
    button28: {
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
    textinput29: {
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
    numberinput29: {
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
    checkbox29: {
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
    button29: {
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
    textinput30: {
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
    numberinput30: {
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
    checkbox30: {
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
    button30: {
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
    textinput31: {
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
    numberinput31: {
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
    checkbox31: {
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
    button31: {
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
    textinput32: {
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
    numberinput32: {
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
    checkbox32: {
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
    button32: {
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
    textinput33: {
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
    numberinput33: {
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
    checkbox33: {
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
    button33: {
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
    textinput34: {
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
    numberinput34: {
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
    checkbox34: {
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
    button34: {
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
    textinput35: {
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
    numberinput35: {
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
    checkbox35: {
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
    button35: {
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
    textinput36: {
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
    numberinput36: {
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
    checkbox36: {
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
    button36: {
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
    textinput37: {
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
    numberinput37: {
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
    checkbox37: {
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
    button37: {
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
    textinput38: {
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
    numberinput38: {
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
    checkbox38: {
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
    button38: {
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
    textinput39: {
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
    numberinput39: {
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
    checkbox39: {
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
    button39: {
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
    textinput40: {
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
    numberinput40: {
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
    checkbox40: {
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
    button40: {
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
    textinput41: {
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
    numberinput41: {
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
    checkbox41: {
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
    button41: {
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
    textinput42: {
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
    numberinput42: {
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
    checkbox42: {
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
    button42: {
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
    textinput43: {
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
    numberinput43: {
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
    checkbox43: {
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
    button43: {
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
    textinput44: {
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
    numberinput44: {
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
    checkbox44: {
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
    button44: {
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
    textinput45: {
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
    numberinput45: {
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
    checkbox45: {
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
    button45: {
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
    textinput46: {
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
    numberinput46: {
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
    checkbox46: {
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
    button46: {
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
    textinput47: {
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
    numberinput47: {
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
    checkbox47: {
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
    button47: {
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
    textinput48: {
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
    numberinput48: {
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
    checkbox48: {
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
    button48: {
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
    textinput49: {
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
    numberinput49: {
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
    checkbox49: {
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
    button49: {
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
  },
  action: '/adobe/forms/af/submit/L2NvbnRlbnQvZm9ybXMvYWYveHdhbGsvdGVzdDE=',
};
