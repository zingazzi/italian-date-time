<template>
    <input ref="italianDatepickerInput"
           :disabled="disabled"
           :dusk="field.attribute"
           :class="{'!cursor-not-allowed': disabled}"
           :value="value"
           :name="field.name"
           :placeholder="placeholder"
           type="text">
</template>

<script>
    import flatpickr   from 'flatpickr'
    import {Italian} from 'flatpickr/dist/l10n/it'

    export default {
        props: {
            field:          {
                type: Object,
                required: true,
            },
            value:          {
                type: String,
                required: false,
                default: ''
            },
            placeholder:    {
                type:    String,
                default: () => {
                    return moment().format('DD-MM-YYYY')
                },
            },
            disabled:       {
                type:    Boolean,
                default: false,
            },
            dateFormat:     {
                type:    String,
                default: 'd-m-Y H:i:S',
            },
            twelveHourTime: {
                type:    Boolean,
                default: false,
            },
            enableTime:     {
                type:    Boolean,
                default: true,
            },
            enableSeconds:  {
                type:    Boolean,
                default: true,
            }
        },

        data() {
            return {
                flatpickr: null
            }
        },

        mounted() {
            this.$nextTick(() => {
                this.flatpickr = flatpickr(this.$refs.italianDatepickerInput, {
                    enableTime:    this.enableTime,
                    enableSeconds: this.enableSeconds,
                    onClose:       this.onChange,
                    dateFormat:    this.dateFormat,
                    allowInput:    true,
                    time_24hr:     true,
                    locale:        Italian
                })
            })
        },

        methods: {
            onChange() {
                this.$emit('change', this.$refs.italianDatepickerInput.value)
            },
        },
    }
</script>

<style scoped>
    .\!cursor-not-allowed {
        cursor: not-allowed !important;
    }
</style>
