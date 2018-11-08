Nova.booting((Vue, router) => {
    Vue.component('index-italian-date-time', require('./components/Index/DateTimeField'))
    Vue.component('detail-italian-date-time', require('./components/Detail/DateTimeField'))
    Vue.component('form-italian-date-time', require('./components/Form/DateTimeField'))
})
