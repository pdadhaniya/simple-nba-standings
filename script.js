
var WarriorsColors = 'rgba(56,99,161,0.9)'
var CelticsColors = "rgba(15,126,61,0.9)"
var RocketsColors = "rgba(189,60,75,0.9)"
var SpursColors = "rgba(60,59,60,0.9)"
var CavaliersColors = "rgba(102,46,57,0.9)"
var ThunderColors = "rgba(209,71,72,0.9)"
var TimberwolvesColors = "rgba(50,86,128,0.9)"
var WizardsColors = "rgba(67,71,89,0.9)"
var BucksColors = "rgba(52,86,66,0.9)"
var RaptorsColors = "rgba(189,60,75,0.9)"
var NuggetsColors = "rgba(81,132,191,0.9)"
var PelicansColors = "rgba(146,120,78,0.9)"
var HeatColors = "rgba(113,56,56,0.9)"
var ClippersColors = "rgba(182,179,177,0.9)"
var HornetsColors = "rgba(0,125,146,0.9)"
var SixersColors = "rgba(56,99,161,0.9)"
var BlazersColors = "rgba(195,62,73,0.9)"
var JazzColors = "rgba(67,71,89,0.9)"
var PistonsColors = "rgba(189,60,75,0.9)"
var BullsColors = "rgba(189,60,75,0.9)"
var HawksColors = "rgba(195,62,73,0.9)"
var SunsColors = "rgba(178,94,57,0.9)"
var KnicksColors = "rgba( 209, 85, 31 ,0.9)"
var KingsColors = "rgba( 107, 81, 140 ,0.9)"
var NetsColors = "rgba( 60, 59, 60 ,0.9)"
var PacersColors = "rgba( 252, 178, 63 ,0.9)"
var MagicColors = "rgba( 15, 92, 157 ,0.9)"
var MavericksColors = "rgba( 15, 92, 157 ,0.9)"
var LakersColors = "rgba( 126, 87, 144 ,0.9)"
var GrizzliesColors = "rgba( 106, 129, 164 ,0.9)"
var winTotals = {
  "Warriors":1,
  "Celtics":1,
  "Rockets":3,
  "Spurs":2,
  "Cavaliers":2,
  "Thunder":1,
  "Timberwolves":2,
  "Wizards":2,
  "Bucks":2,
  "Raptors":2,
  "Bulls":0,
  "Pistons":2,
  "Jazz":2,
  "Trail Blazers":2,
  "Sixers":0,
  "Hornets":1,
  "Clippers":2,
  "Heat":1,
  "Pelicans":1,
  "Nuggets":1,
  "Hawks":1,
  "Suns":0,
  "Knicks":0,
  "Kings":1,
  "Nets":2,
  "Pacers":1,
  "Magic":2,
  "Mavericks":0,
  "Lakers":1,
  "Grizzlies":2,
}
var zahid = ["Warriors", "Bulls", "Hawks"]
var sunny = ["Celtics", "Pistons", "Suns"]
var mayur = ["Rockets", "Jazz", "Knicks"]
var parag = ["Spurs", "Trail Blazers", "Kings"]
var sujay = ["Cavaliers", "Sixers", "Nets"]
var deevyang = ["Thunder", "Hornets", "Pacers"]
var neil = ["Timberwolves", "Clippers", "Magic"]
var tejas = ["Wizards", "Heat", "Mavericks"]
var ishan = ["Bucks", "Pelicans", "Lakers"]
var vivek = ["Raptors", "Nuggets", "Grizzlies"]



var data = {
  labels: ["Zahid","Sunny","Mayur","Parag","Sujay","Deevyang","Neil", "Tejas", "Ishan", "Vivek"],
  datasets: [
    {
      label:"Team 1",
      data:[winTotals[zahid[0]],winTotals[sunny[0]],winTotals[mayur[0]],winTotals[parag[0]],winTotals[sujay[0]],winTotals[deevyang[0]],winTotals[neil[0]],winTotals[tejas[0]],winTotals[ishan[0]],winTotals[vivek[0]]],
      fill:false,
      backgroundColor: [WarriorsColors,CelticsColors,RocketsColors,SpursColors,CavaliersColors,ThunderColors,TimberwolvesColors,WizardsColors,BucksColors,RaptorsColors],
      borderWidth:1
    },
    {
      label:"Team 2",
      data:[winTotals[zahid[1]],winTotals[sunny[1]],winTotals[mayur[1]],winTotals[parag[1]],winTotals[sujay[1]],winTotals[deevyang[1]],winTotals[neil[1]],winTotals[tejas[1]],winTotals[ishan[1]],winTotals[vivek[1]]],
      fill:false,
      backgroundColor: [BullsColors,PistonsColors,JazzColors,BlazersColors,SixersColors,HornetsColors,ClippersColors,HeatColors,PelicansColors,NuggetsColors],
      borderWidth:1
    },
    {
      label:"Team 3",
      data:[winTotals[zahid[2]],winTotals[sunny[2]],winTotals[mayur[2]],winTotals[parag [2]],winTotals[sujay[2]],winTotals[deevyang[2]],winTotals[neil[2]],winTotals[tejas[2]],winTotals[ishan[2]],winTotals[vivek[2]]],
      fill:false,
      backgroundColor: [HawksColors,SunsColors,KnicksColors,KingsColors,NetsColors,PacersColors,MagicColors,MavericksColors,LakersColors,GrizzliesColors],
      borderWidth:1
    }
  ]
}

var zahidData = {
  labels: ["Golden State Warriors", "Chicago Bulls", "Atlanta Hawks"],
  datasets: [
    {
      label: 'Zahid',
      data:[winTotals['Warriors'], winTotals['Bulls'], winTotals['Hawks']],
      fill:false,
      backgroundColor: [WarriorsColors,BullsColors,HawksColors],
      borderWidth: 1
    }
  ]
}

var sunnyData = {
  labels: ["Boston Celtics", "Detroit Pistons", "Phoenix Suns"],
  datasets: [
    {
      label: "Sunny",
      data:[winTotals['Celtics'], winTotals['Pistons'], winTotals['Suns']],
      fill:false,
      backgroundColor: [WarriorsColors,BullsColors,HawksColors],
      borderWidth: 1
    }
  ]
}

var mayurData = {
  labels: ["Golden State Warriors", "Chicago Bulls", "Atlanta Hawks"],
  datasets: [
    {
      data:[winTotals['Warriors'], winTotals['Bulls'], winTotals['Hawks']],
      fill:false,
      backgroundColor: [WarriorsColors,BullsColors,HawksColors],
      borderWidth: 1
    }
  ]
}

var paragData = {
  labels: ["Golden State Warriors", "Chicago Bulls", "Atlanta Hawks"],
  datasets: [
    {
      data:[winTotals['Warriors'], winTotals['Bulls'], winTotals['Hawks']],
      fill:false,
      backgroundColor: [WarriorsColors,BullsColors,HawksColors],
      borderWidth: 1
    }
  ]
}

var sujayData = {
  labels: ["Golden State Warriors", "Chicago Bulls", "Atlanta Hawks"],
  datasets: [
    {
      data:[winTotals['Warriors'], winTotals['Bulls'], winTotals['Hawks']],
      fill:false,
      backgroundColor: [WarriorsColors,BullsColors,HawksColors],
      borderWidth: 1
    }
  ]
}

var deevyangData = {
  labels: ["Golden State Warriors", "Chicago Bulls", "Atlanta Hawks"],
  datasets: [
    {
      data:[winTotals['Warriors'], winTotals['Bulls'], winTotals['Hawks']],
      fill:false,
      backgroundColor: [WarriorsColors,BullsColors,HawksColors],
      borderWidth: 1
    }
  ]
}

var neilData = {
  labels: ["Golden State Warriors", "Chicago Bulls", "Atlanta Hawks"],
  datasets: [
    {
      data:[winTotals['Warriors'], winTotals['Bulls'], winTotals['Hawks']],
      fill:false,
      backgroundColor: [WarriorsColors,BullsColors,HawksColors],
      borderWidth: 1
    }
  ]
}

var tejasData = {
  labels: ["Golden State Warriors", "Chicago Bulls", "Atlanta Hawks"],
  datasets: [
    {
      data:[winTotals['Warriors'], winTotals['Bulls'], winTotals['Hawks']],
      fill:false,
      backgroundColor: [WarriorsColors,BullsColors,HawksColors],
      borderWidth: 1
    }
  ]
}

var ishanData = {
  labels: ["Golden State Warriors", "Chicago Bulls", "Atlanta Hawks"],
  datasets: [
    {
      data:[winTotals['Warriors'], winTotals['Bulls'], winTotals['Hawks']],
      fill:false,
      backgroundColor: [WarriorsColors,BullsColors,HawksColors],
      borderWidth: 1
    }
  ]
}

var vivekData = {
  labels: ["Golden State Warriors", "Chicago Bulls", "Atlanta Hawks"],
  datasets: [
    {
      data:[winTotals['Warriors'], winTotals['Bulls'], winTotals['Hawks']],
      fill:false,
      backgroundColor: [WarriorsColors,BullsColors,HawksColors],
      borderWidth: 1
    }
  ]
}

var options = {
  responsive: true,
  scales: {
    xAxes: [
      {
        stacked: true
      }
    ],
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
          userCallback: function(label, index, labels) {
               // when the floored value is the same as the value we have a whole number
               if (Math.floor(label) === label) {
                   return label;
               }

           },
        }
      }
    ]
  }
}
var ctx = document.getElementById("myChart");
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options
});



