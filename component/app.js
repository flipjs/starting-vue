Vue.component('alert', {

  template: '#alert-template',

  props: ['type'],

  data: function () {
    return {
      show: true
    }
  },

  computed: {

    alertClasses: function () {
      var type = this.type
      return {
        'alert': true,
        'alert--success': type === 'success',
        'alert--error': type === 'error'
      }
    }
  }
})

/*eslint no-new: 0*/

new Vue({

  el: 'body',

  data: {
    test: 'hello world'
  }

})
