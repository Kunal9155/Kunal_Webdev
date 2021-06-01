fetch("https://api.covid19api.com/total/country/india")
.then((res)=>{
  return res.json();
})
.then((data)=>{
  var length = data.length
  var index = length - 1;
  var cases = data[index];
  // console.log(cases);
  var recovered = document.getElementById("recovered")
  var confirmed = document.getElementById("confirmed")
  var deaths = document.getElementById("deaths")
  var active = document.getElementById("active")
  recovered.innerText=(cases.Recovered)
confirmed.innerText = (cases.Confirmed)
deaths.innerText = (cases.Deaths)
active.innerText = (cases.Active)
// console.log(cases.Recovered)
})

