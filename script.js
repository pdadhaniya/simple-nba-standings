
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
  "Warriors": 71,
  "Celtics": 48,
  "Rockets": 60,
  "Spurs": 58,
  "Cavaliers": 55,
  "Thunder": 54,
  "Timberwolves": 49,
  "Wizards": 49,
  "Bucks": 47,
  "Raptors": 45,
  "Bulls": 21,
  "Pistons": 38,
  "Jazz": 45,
  "Trail Blazers": 45,
  "Sixers": 41,
  "Hornets": 43,
  "Clippers": 44,
  "Heat": 45,
  "Pelicans": 39,
  "Nuggets": 46,
  "Grizzlies": 37,
  "Lakers": 33,
  "Mavericks": 34,
  "Magic": 33,
  "Pacers": 32,
  "Nets": 28,
  "Kings": 31,
  "Knicks": 30,
  "Suns": 28,
  "Hawks": 24,
}

var data = {
  labels: ["Zahid","Sunny","Mayur","Parag","Sujay","Deevyang","Neil", "Tejas", "Ishan", "Vivek"],
  datasets: [
    {
      label:"Team 1",
      data:[winTotals['Warriors'],winTotals['Celtics'],winTotals['Rockets'],winTotals['Spurs'],winTotals['Cavaliers'],winTotals['Thunder'],winTotals['Timberwolves'],winTotals['Wizards'],winTotals['Bucks'],winTotals['Raptors']],
      fill:false,
      backgroundColor: [WarriorsColors,CelticsColors,RocketsColors,SpursColors,CavaliersColors,ThunderColors,TimberwolvesColors,WizardsColors,BucksColors,RaptorsColors],
      borderWidth:1
    },
    {
      label:"Team 2",
      data:[winTotals['Bulls'],winTotals['Pistons'],winTotals['Jazz'],winTotals['Trail Blazers'],winTotals['Sixers'],winTotals['Hornets'],winTotals['Clippers'],winTotals['Heat'],winTotals['Pelicans'],winTotals['Nuggets']],
      fill:false,
      backgroundColor: [BullsColors,PistonsColors,JazzColors,BlazersColors,SixersColors,HornetsColors,ClippersColors,HeatColors,PelicansColors,NuggetsColors],
      borderWidth:1
    },
    {
      label:"Team 3",
      data:[winTotals['Hawks'],winTotals['Suns'],winTotals['Knicks'],winTotals['Kings'],winTotals['Nets'],winTotals['Pacers'],winTotals['Magic'],winTotals['Mavericks'],winTotals['Lakers'],winTotals['Grizzlies']],
      fill:false,
      backgroundColor: [HawksColors,SunsColors,KnicksColors,KingsColors,NetsColors,PacersColors,MagicColors,MavericksColors,LakersColors,GrizzliesColors],
      borderWidth:1
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
          beginAtZero: true
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

