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
  },
  action: '/adobe/forms/af/submit/L2NvbnRlbnQvZm9ybXMvYWYveHdhbGsvdGVzdDE=',
};
