
var imgs = ['bmw.jpg', 'bugatti.jpg', 'classic.jpg', 'concept.jpg', 'corvette.jpg', 'dino.jpg', 'lambo.jpg', 'mcclaren.jpg', 'p1.jpg', 'porsche.jpg', 'rally.jpg', 'audi.jpg'];
// var imgs_count = {'bmw.jpg': 0, 'bugatti.jpg': 0, 'classic.jpg': 0, 'concept.jpg': 0, 'corvette.jpg': 0, 'dino.jpg': 0, 'lambo.jpg': 0, 'mcclaren.jpg': 0, 'p1.jpg': 0, 'porsche.jpg': 0,'rally.jpg': 0, 'audi.jpg':0}

// for (var i in imgs_count) {
//   imgs_count[i]
// }

var allCars = [];
var votes;
var data;

function Car(file) {
  this.file = file;
  this.votes = 0;
  allCars.push(this);
}

// function checkLocal() {
//   if(localStorage.storeData && localStorage.allCars) {
//     data = JSON.parse(localStorage.storeData);
//     allCars = JSON.parse(localStorage.allCars);
//   } else {

    var bmw = new Car('bmw.jpg');
    var bugatti = new Car('bugatti.jpg');
    var classic = new Car('classic.jpg');
    var concept = new Car('concept.jpg');
    var corvette = new Car('corvette.jpg');
    var dino = new Car('dino.jpg');
    var lambo = new Car('lambo.jpg');
    var mcclaren = new Car('mcclaren.jpg');
    var p1 = new Car('p1.jpg');
    var porsche =new Car('porsche.jpg');
    var rally = new Car('rally.jpg');
    var audi = new Car('audi.jpg');
    // localStorage.setItem('allCars', JSON.stringify(allCars));
    var data = {
        labels: ['bmw', 'bugatti', 'classic', 'concept', 'corvette', 'dino', 'lambo', 'mcclaren', 'p1', 'porsche', 'rally', 'audi'],
          datasets: [
              {
                  label: "My First dataset",
                  fillColor: "rgba(220,220,220,0.5)",
                  strokeColor: "rgba(220,220,220,0.8)",
                  highlightFill: "rgba(220,220,220,0.75)",
                  highlightStroke: "rgba(220,220,220,1)",
                  data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
              },
          ]
    }
//   }
// }
// checkLocal();

var idx1 = 0;
var idx2 = 0;

var path = 'cars/';
var done = false;

function getRandomImage() {
  idx1 = Math.floor(Math.random()*imgs.length);
  var img1 = imgs[idx1];
  idx2 = idx1;
  while (idx2 == idx1) {
    idx2 = Math.floor(Math.random()*imgs.length);
  }
  img2 = imgs[idx2];
  document.getElementById('choice1').setAttribute('src', path + img1);
  document.getElementById('choice2').setAttribute('src', path + img2);

}

function setOnClicks(id) {
  document.getElementById(id).addEventListener('click', function(event) {
    var choice = event.target.id;
    if (choice === 'choice1') {
      var img = document.getElementById(id).getAttribute('src');
      allCars[idx1].votes += 1;
      console.log(idx1);
      console.log(allCars[idx1].votes)
      data.datasets[0].data[idx1] = allCars[idx1].votes;
      myBarChart.datasets[0].bars[idx1].value = allCars[idx1].votes;
      localStorage.setItem('storeData',JSON.stringify(data));
      localStorage.setItem('allCars', JSON.stringify(allCars));
      myBarChart.update();
      if ( allCars[idx1].votes==11) {

          done = true;

      }
    }
    if (choice === 'choice2') {
      var img = document.getElementById(id).getAttribute('src');
      console.log(idx2);
      console.log(allCars[idx2].votes);
      allCars[idx2].votes += 1;
      data.datasets[0].data[idx2] = allCars[idx2].votes;
      myBarChart.datasets[0].bars[idx2].value = allCars[idx2].votes;
      localStorage.setItem('storeData',JSON.stringify(data));
      localStorage.setItem('allCars', JSON.stringify(allCars));
      myBarChart.update();
      if (allCars[idx2].votes == 12) {
        done = true;
      }
    }
    if (!done)
      getRandomImage();
  });
}



getRandomImage();
setOnClicks('choice1');
setOnClicks('choice2');



    var context = document.getElementById('cars').getContext('2d');



    var options = {
        //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
        scaleBeginAtZero : true,

        //Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines : true,

        //String - Colour of the grid lines
        scaleGridLineColor : "rgba(0,0,0,.05)",

        //Number - Width of the grid lines
        scaleGridLineWidth : 1,

        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,

        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,

        //Boolean - If there is a stroke on each bar
        barShowStroke : true,

        //Number - Pixel width of the bar stroke
        barStrokeWidth : 2,

        //Number - Spacing between each of the X value sets
        barValueSpacing : 5,

        //Number - Spacing between data sets within X values
        barDatasetSpacing : 1,

        //String - A legend template
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

    }





      var myBarChart = new Chart(context).Bar(data, options);

      // +++++++++++++


      // var dData = function() {
      //   return Math.round(Math.random() * 90) + 10;
      // };

      // var barData = {
      //   labels: ['bmw', 'bugatti', 'classic', 'concept', 'corvette', 'dino', 'lambo', 'mcclaren', 'p1', 'porsche', 'rally', 'audi'],
      //   datasets: [{
      //     fillColor: 'rgba(0,60,100,1)',
      //     strokeColor: 'black',
      //     data: [dData(), dData(), dData(), dData(),
      //            dData(), dData(), dData(), dData()]
      //   }]
      // }


      // var index = 11;
      // var ctx = document.getElementById('canvas').getContext('2d');
      // var barDemo = new Chart(ctx).Bar(barData, {
      //   responsive: true
      // });

      // setInterval(function() {
      //   barDemo.removeData();
      //   barDemo.addData([dData()], 'dD ' + index);
      //   index++;
      // }, 3000);








