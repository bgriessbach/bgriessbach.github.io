var languages = document.getElementById('table_languages');
languages.addEventListener("mouseover", function(event) {
  document.getElementById('display_languages').innerHTML = '<img class="flags" src="images/Germany.png" alt="Icon for Germany"><img class="flags" src="images/Japan.png" alt="Icon for Japan"><img class="flags" src="images/United-Kingdom.png" alt="Icon for UK">';
});


var extension = document.getElementById('table_extension');
extension.addEventListener("mouseover", function(event) {
  document.getElementById('display_extension').innerHTML = '<img class="screenshot" src="images/layout_New.PNG" alt="Screenshot of Chrome Extension"><br /> a Chrome Weather Forecast Extension';
});

var jobs = document.getElementById('table_jobs');
jobs.addEventListener("mouseover", function(event) {
  document.getElementById('display_jobs').innerHTML = '<img src="images/it.gif" alt="IT Crowd Gif"> <br /> Escalated Global Technical Support <br /><img src="images/pmlogo.jpg" alt="Image for Project Management"> <br /> Project Management for Circuit Installations<br /><img src="images/BTTC.PNG" alt="Bloomberg Technical Training Certification"><br /> Planned and executed Technical Training Seminars';
});
