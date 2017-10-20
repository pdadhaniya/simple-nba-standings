
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
var NuggetsColors = "rgba(189,60,75,0.9)"
var PelicansColors = "rgba(189,60,75,0.9)"
var HeatColors = "rgba(189,60,75,0.9)"
var ClippersColors = "rgba(189,60,75,0.9)"
var HornetsColors = "rgba(189,60,75,0.9)"
var SixersColors = "rgba(189,60,75,0.9)"
var BlazersColors = "rgba(189,60,75,0.9)"
var JazzColors = "rgba(189,60,75,0.9)"
var PistonsColors = "rgba(189,60,75,0.9)"
var BullsColors = "rgba(189,60,75,0.9)"
var HawksColors = "rgba(189,60,75,0.9)"
var SunsColors = "rgba(189,60,75,0.9)"
var KnicksColors = "rgba(189,60,75,0.9)"
var KingsColors = "rgba(189,60,75,0.9)"
var NetsColors = "rgba(189,60,75,0.9)"
var PacersColors = "rgba(189,60,75,0.9)"
var MagicColors = "rgba(189,60,75,0.9)"
var MavericksColors = "rgba(189,60,75,0.9)"
var LakersColors = "rgba(189,60,75,0.9)"
var GrizzliesColors = "rgba(189,60,75,0.9)"
var winTotals = {
  "Warriors": 1,
  "Celtics": 0,
  "Rockets": 2,
  "Spurs": 1,
  "Cavaliers": 1,
  "Thunder": 1,
  "Timberwolves": 0,
  "Wizards": 1,
  "Bucks": 1,
  "Raptors": 1,
  "Bulls": 0,
  "Pistons": 1,
  "Jazz": 1,
  "Trail Blazers": 1,
  "Sixers": 0,
  "Hornets": 0,
  "Clippers": 1,
  "Heat": 0,
  "Pelicans": 0,
  "Nuggets": 0,
  "Grizzlies": 1,
  "Lakers": 0,
  "Mavericks": 0,
  "Magic": 1,
  "Pacers": 1,
  "Nets": 0,
  "Kings": 0,
  "Knicks": 0,
  "Suns": 0,
  "Hawks": 1,
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

