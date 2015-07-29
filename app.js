var drawDeals = function(dataset){

  var multiplier = 4;
  var colorScale = ['blue', 'yellow', 'green'];

  var dataTotal = dataset.reduce(function(prev, curr){
    return prev + curr;
  }, 0);

  var dataAccumulates = [];
  var dataSofar = 0;
  for (var i = 0; i < dataset.length; i++){
    dataSofar += dataset[i];
    dataAccumulates.push(dataSofar / dataTotal);
  }
  console.log(dataAccumulates);
  var svg = d3.select('#scenario-chart').append('svg')
    .attr('width', 400)
    .attr('height', 300);


  svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x', function(d, i){
      return 0;
    })
    .attr('y', function(d, i){
      return 300 - dataAccumulates[i] * 300;
    })
    .attr('width', 10)
    .attr('height', function(d){
      return (d / dataTotal) * 300;
    })
    .attr('fill', function(d, i){
      return colorScale[i];
    })
    
};

new Vue({
  el: '#scenario-chart',
  data: {
    dataset : [30, 10, 15]
  },

  ready: function(){
    drawDeals(this.dataset);
  }
});