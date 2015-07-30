Vue.component('coupon', {
  template: '#coupon-template',

  props: ['when-applied'],

  data: function(){
    return {
      coupon: 'yaotime',
      message: ''
    }
  },

  methods: {
    whenCouponHasBeenEntered: function(){
      this.validate();
    },

    validate: function(){
      if (this.coupon === 'yaotime'){
        console.log('Alert box!');
        var response = this.whenApplied(this.coupon);
        console.log('response: ' + response);

        return this.message = '20% Off!';
      }
      this.message = "This coupon is invalid!";
    }
  }
});

new Vue({
  el: '#scenario-chart',

  methods: {
    setCoupon: function(coupon){
      console.log('Set coupon:'+ coupon);
      this.$set('coupon', coupon);

      return 'thanks';
    }
  }
});