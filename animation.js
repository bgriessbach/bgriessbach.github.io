window.onload=function(){
var languages = document.getElementById('table_languages');
languages.addEventListener("mouseover", function(event) {
  document.getElementById('display_languages').innerHTML = '<img class="flags" src="images/Germany.png" alt="Icon for Germany"><img class="flags" src="images/Japan.png" alt="Icon for Japan"><img class="flags" src="images/United-Kingdom.png" alt="Icon for UK">';
});

var extension = document.getElementById('table_extension');
extension.addEventListener("mouseover", function(event) {
  document.getElementById('display_extension').innerHTML = '<img class="picture" src="images/layout_New.PNG" alt="Screenshot of Chrome Extension"><br /> a Chrome Weather Forecast Extension';
});

var jobs = document.getElementById('table_jobs');
jobs.addEventListener("mouseover", function(event) {
  document.getElementById('display_jobs').innerHTML = '<img class="picture" src="images/it.gif" alt="IT Crowd Gif"> <br /> Escalated Global Technical Support <br /><img class="picture" src="images/PMlogo.jpg" alt="Image for Project Management"> <br /> Project Management for Circuit Installations<br /><img class="picture" src="images/BTTC.PNG" alt="Bloomberg Technical Training Certification"><br /> Event Planner and Presenter for Technical Training Seminars';
});

var python = document.getElementById('table_python');
python.addEventListener("mouseover", function(event) {
  document.getElementById('display_python').innerHTML = '<img class="picture" src="images/python_icon.png" alt="Python icon">';
});

  var videos = document.getElementById('table_videos');
videos.addEventListener("mouseover", function(event) {
  document.getElementById('display_videos').innerHTML = '<iframe class="picture" width="560" height="315" src="https://www.youtube.com/embed/7nXfybcgm6g" frameborder="0" allowfullscreen></iframe><iframe width="560" height="315" src="https://www.youtube.com/embed/eQo_uOH5jSA" frameborder="0" allowfullscreen></iframe><iframe width="560" height="315" src="https://www.youtube.com/embed/zEj5Quzhktc" frameborder="0" allowfullscreen></iframe>';
});

}
