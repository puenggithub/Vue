<template>

  <dynamic-form
    v-model="data"
    :descriptors="descriptors"
    style="margin: 20px;">
  </dynamic-form>
</template>

<script>

import DynamicForm from 'vue-dynamic-form-component'
export default {
  data () {
    return {
      descriptors: {
        array: {
          type: 'array',
          label: 'card',
          defaultField: {
            type: 'object',
            fields: {
              active: { type: 'boolean', required: true },
              type: { type: 'string', required: true, pattern: /^test$/g },
              action: {
                type: 'array',
                defaultField: {
                  type: 'object',
                  fields: {
                    test: { type: 'boolean', required: true },
                    string: { type: 'string', required: true, pattern: /^test$/g }
                  }
                }
              }
            }
          }
        },
        multiSelect: {
          type: 'array',
          label: 'multi-select',
          required: true,
          defaultField: {
            type: 'enum',
            multiple: true,
            enum: [0, 1, 2, 3],
            options: [
              { label: 'option-0', value: 0, disabled: true },
              { label: 'option-1', value: 1 },
              { label: 'option-2', value: 2 },
              { label: 'option-3', value: 3 }
            ]
          }
        }
      },
      data: {}
    }
  }
}
</script>