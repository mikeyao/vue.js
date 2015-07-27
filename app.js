new Vue({
  el: '#demo',
  data: {
    name: 'Mike',
    names: ['Yao', 'Raymond', 'Matt']
  },
  methods: {
    addName: function(){
      this.names.push(this.newName);
      this.newName = "";
    },

    onKeyup: function(){
      console.log('Key up!');
    },

    onBlur: function(){
      console.log('Tab!')
    }
  }
});