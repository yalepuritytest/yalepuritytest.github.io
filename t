[1mdiff --git a/index.html b/index.html[m
[1mindex bc1cf28..1193d79 100644[m
[1m--- a/index.html[m
[1m+++ b/index.html[m
[36m@@ -11,9 +11,11 @@[m
             <p>Caution: This is not a bucket list. Completion of all items on this test will likely result in death.</p>[m
             <ol id="list">[m
             </ol>[m
[31m-            <button id="submit">Submit</button>[m
[32m+[m[32m            <button id="submit">Calculate my score!</button>[m
[32m+[m[32m            <button id="clear">Reset</button>[m
         </div>[m
         <div id="results">[m
[32m+[m[32m            <p>Your score is</p>[m
             <div id="score"></div>[m
         </div>[m
         <script src="scripts.js"></script>[m
[1mdiff --git a/scripts.js b/scripts.js[m
[1mindex a2487b7..2b2174b 100644[m
[1m--- a/scripts.js[m
[1m+++ b/scripts.js[m
[36m@@ -1,7 +1,8 @@[m
 const test = document.getElementById('test'),[m
       list = document.getElementById('list'),[m
       results = document.getElementById('results'),[m
[31m-      submit = document.getElementById('submit');[m
[32m+[m[32m      submit = document.getElementById('submit'),[m
[32m+[m[32m      reset = document.getElementById('reset');[m
 [m
 const questions = [[m
     'Held hands romantically', 'Been on a date', 'Been in a relationship', 'Danced without leaving room for Jesus',[m
[36m@@ -62,9 +63,12 @@[m [msubmit.onclick = function() {[m
     let points = 100;[m
     for (checkbox of document.getElementsByClassName('checkbox')) {[m
         if (checkbox.checked) points--;[m
[31m-        console.log(checkbox);[m
     }[m
     score.textContent = points;[m
     test.classList.remove('shown');[m
     results.classList.add('shown');[m
 };[m
[32m+[m
[32m+[m[32mreset.onclick = function() {[m
[32m+[m[32m    location.reload();[m
[32m+[m[32m}[m
[1mdiff --git a/styles.css b/styles.css[m
[1mindex b4b0f9c..fed4b9a 100644[m
[1m--- a/styles.css[m
[1m+++ b/styles.css[m
[36m@@ -17,6 +17,7 @@[m [mbody {[m
     padding: 10px;[m
     font-size: 16px;[m
     font-family: 'Montserrat', sans-serif;[m
[32m+[m[32m    text-align: center;[m
 }[m
 h1 {[m
     color: #09d;[m
[36m@@ -37,16 +38,19 @@[m [minput, button {[m
 }[m
 #test {[m
     display: none;[m
[32m+[m[32m    text-align: left;[m
 }[m
 #results {[m
[31m-    color: red;[m
[31m-    font-size: 40px;[m
     display: none;[m
 }[m
 #results.shown,[m
 #test.shown {[m
     display: block;[m
 }[m
[32m+[m[32m#results #score {[m
[32m+[m[32m    color: red;[m
[32m+[m[32m    font-size: 40px;[m
[32m+[m[32m}[m
 button {[m
     font: inherit;[m
     background: none;[m
