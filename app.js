Vue.component('projection', {
  template: '#projection-template',

  // Vue automatically convert to Carmel-case as 'getProjection'
  props: ['get-projection'],

  data: function(){
    return {
      username: 'mikeyao',
      message: ''
    }
  },

  methods: {
    whenUsernameHasBeenEntered: function(){
      this.validate();
    },

    validate: function(){
      if (this.username === 'mikeyao'){
        // this.getProjection refer to props 'get-projection', which points to function 'getProjectionByUsername' in Vue parent instance
        return this.message = 'Projection: ' + this.getProjection(this.username);
        
      }
      this.message = "This username is not invalid! 'mikeyao' is the only valid user! ";
    }
  }
});


Vue.component('projection-chart', {
  template: 
  "<div>" + 
    "<h3>Projection: </h3>" +
    "<h4 v-text='projection'></h4>" +
    "<input type='text' v-model='projection'>" + 
    "{{$data | json}}" +
  "</div>",

  data: function(){
    return {
      projection: '32,000,000'
    };
  }


});




new Vue({
  el: '#scenarios',

  methods: {
    getProjectionByUsername: function(username){
      this.$set('username', username);
      var projection = 100; // Simulate API Call to get projection data
      this.$set('projection', projection);
      return this.projection;
    }
  }
});