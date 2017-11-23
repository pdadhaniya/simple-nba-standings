
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
  "Warriors":[13,5,18],
  "Celtics":[16,3,19],
  "Rockets":[14,4,18],
  "Spurs":[11,7,18],
  "Cavaliers":[11,7,18],
  "Thunder":[8,9,17],
  "Timberwolves":[11,7,18],
  "Wizards":[10,8,18],
  "Bucks":[9,8,17],
  "Raptors":[11,6,17],
  "Bulls":[3,13,16],
  "Pistons":[11,6,17],
  "Jazz":[8,11,19],
  "Trail Blazers":[10,8,18],
  "Sixers":[10,7,17],
  "Hornets":[8,9,17],
  "Clippers":[6,11,17],
  "Heat":[8,9,17],
  "Pelicans":[10,8,18],
  "Nuggets":[10,8,18],
  "Hawks":[3,15,18],
  "Suns":[7,12,19],
  "Knicks":[10,7,17],
  "Kings":[5,13,18],
  "Nets":[6,11,17],
  "Pacers":[10,8,18],
  "Magic":[8,10,18],
  "Mavericks":[4,15,19],
  "Lakers":[8,11,19],
  "Grizzlies":[7,10,17],
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
var people = [
  {name: 'Zahid', teams: zahid},
  {name: 'Sunny', teams: sunny},
  {name: 'Mayur', teams: mayur},
  {name: 'Parag', teams: parag},
  {name: 'Sujay', teams: sujay},
  {name: 'Deevyang', teams: deevyang},
  {name: 'Neil', teams: neil},
  {name: 'Tejas', teams: tejas},
  {name: 'Ishan', teams: ishan},
  {name: 'Vivek', teams: vivek}
]
// var zahidWins = getWins(zahid)
function getWins(personName) {
  return personName.map((team) => winTotals[team][0]).reduce((sum, value) => sum + value)
}
function getGamesPlayed(personName) {
  return personName.map((team) => winTotals[team][2]).reduce((sum, value) => sum + value)
}
function getWinPercentage(personName) {
  return (getWins(personName) / getGamesPlayed(personName)) * 100
}
function personToWinPercentage(group) {
  var theStandings = {}
  group.map(person =>  {
    theStandings[person.name] = getWinPercentage(person.teams)
  })
  return theStandings
}
function getLabels() {
  return Object.keys(personToWinPercentage(people))
}
var participants = getLabels()

var data = {
  labels: [participants[0],participants[1],participants[2],participants[3],participants[4],participants[5],participants[6],participants[7],participants[8],participants[9]],
  datasets: [
    {
      label:"Team 1",
      data:[winTotals[zahid[0]][0],winTotals[sunny[0]][0],winTotals[mayur[0]][0],winTotals[parag[0]][0],winTotals[sujay[0]][0],winTotals[deevyang[0]][0],winTotals[neil[0]][0],winTotals[tejas[0]][0],winTotals[ishan[0]][0],winTotals[vivek[0]][0]],
      fill:false,
      backgroundColor: [WarriorsColors,CelticsColors,RocketsColors,SpursColors,CavaliersColors,ThunderColors,TimberwolvesColors,WizardsColors,BucksColors,RaptorsColors],
      borderWidth:1
    },
    {
      label:"Team 2",
      data:[winTotals[zahid[1]][0],winTotals[sunny[1]][0],winTotals[mayur[1]][0],winTotals[parag[1]][0],winTotals[sujay[1]][0],winTotals[deevyang[1]][0],winTotals[neil[1]][0],winTotals[tejas[1]][0],winTotals[ishan[1]][0],winTotals[vivek[1]][0]],
      fill:false,
      backgroundColor: [BullsColors,PistonsColors,JazzColors,BlazersColors,SixersColors,HornetsColors,ClippersColors,HeatColors,PelicansColors,NuggetsColors],
      borderWidth:1
    },
    {
      label:"Team 3",
      data:[winTotals[zahid[2]][0],winTotals[sunny[2]][0],winTotals[mayur[2]][0],winTotals[parag [2]][0],winTotals[sujay[2]][0],winTotals[deevyang[2]][0],winTotals[neil[2]][0],winTotals[tejas[2]][0],winTotals[ishan[2]][0],winTotals[vivek[2]][0]],
      fill:false,
      backgroundColor: [HawksColors,SunsColors,KnicksColors,KingsColors,NetsColors,PacersColors,MagicColors,MavericksColors,LakersColors,GrizzliesColors],
      borderWidth:1
    }
  ]
}

var data2 = {
  labels: [participants[0],participants[1],participants[2],participants[3],participants[4],participants[5],participants[6],participants[7],participants[8],participants[9]],
  datasets: [
    {
      label:"Win Percentage",
      data:[getWinPercentage(zahid),getWinPercentage(sunny),getWinPercentage(mayur),getWinPercentage(parag),getWinPercentage(sujay),getWinPercentage(deevyang),getWinPercentage(neil),getWinPercentage(tejas),getWinPercentage(ishan),getWinPercentage(vivek)],
      fill:false,
      backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)"],
      borderColor:["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)"],
      hoverBackgroundColor:["rgba(255, 99, 132, 0.6)","rgba(255, 159, 64, 0.6)","rgba(75, 192, 192, 0.6)","rgba(54, 162, 235, 0.6)","rgba(153, 102, 255, 0.6)","rgba(255, 99, 132, 0.6)","rgba(255, 159, 64, 0.6)","rgba(75, 192, 192, 0.6)","rgba(54, 162, 235, 0.6)","rgba(153, 102, 255, 0.6)"],
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

var options2 = {
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
var ctx2 = document.getElementById("myChartPercent");
var myBarChart = new Chart(ctx2, {
  type: 'bar',
  data: data2,
  options: options2
});



