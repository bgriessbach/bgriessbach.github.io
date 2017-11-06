
// only start listening when html is loaded

window.onload=function(){

//display flags when mouse hovers over the text
var languages = document.getElementById('tableLanguages');
languages.addEventListener("mouseover", function(event) {
  document.getElementById('displayLanguages').innerHTML = '<img class="flags" src="images/Germany.png" alt="Icon for Germany"><img class="flags" src="images/Japan.png" alt="Icon for Japan"><img class="flags" src="images/United-Kingdom.png" alt="Icon for UK">';
},{once : true});

//display projects when mouse hovers over text
var extension = document.getElementById('tableExtension');
extension.addEventListener("mouseover", function(event) {
  document.getElementById('displayExtension').innerHTML = '<img class="picture" src="images/layout_New.PNG" alt="Screenshot of Chrome Extension"><br />Chrome Weather Forecast Extension';
}, {once : true});

//display job history when mouse hovers over text
var jobs = document.getElementById('tableJobs');
jobs.addEventListener("mouseover", function(event) {
  document.getElementById('displayJobs').innerHTML = '<img class="picture" src="images/it.gif" alt="IT Crowd Gif"> <br /> Escalated Global Technical Support <br /><img class="picture" src="images/PMlogo.jpg" alt="Image for Project Management"> <br /> Project Management for Circuit Installations<br /><img class="picture" src="images/BTTC.PNG" alt="Bloomberg Technical Training Certification"><br /> Event Planner and Presenter for Technical Training Seminars';
}, {once : true});

//display python when mouse hovers over text
var python = document.getElementById('tablePython');
python.addEventListener("mouseover", function(event) {
  document.getElementById('displayPython').innerHTML = '<img class="picture" src="images/python_icon.png" alt="Python icon">';
}, {once : true});

//display youtube videos when mouse hovers over text
  var videos = document.getElementById('tableVideos');
videos.addEventListener("mouseover", function(event) {
  document.getElementById('displayVideos').innerHTML = '<iframe class="picture" width="560" height="315" src="https://www.youtube.com/embed/7nXfybcgm6g" frameborder="0" allowfullscreen></iframe><iframe class="picture" width="560" height="315" src="https://www.youtube.com/embed/eQo_uOH5jSA" frameborder="0" allowfullscreen></iframe><iframe class="picture" width="560" height="315" src="https://www.youtube.com/embed/zEj5Quzhktc" frameborder="0" allowfullscreen></iframe>';
}, {once : true});

}
