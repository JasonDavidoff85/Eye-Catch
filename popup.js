// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeColor = document.getElementById('changeColor');

changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

//document.write("<button id='mybutton'>click me</button>");
var button = document.getElementById('mybutton');
button.onclick = function() {
    webgazer.begin();
          
    webgazer.setGazeListener(function(data, elapsedTime) {
    if (data == null) {
        return;
    }
    var xprediction = data.x; //these x coordinates are relative to the viewport 
    var yprediction = data.y; //these y coordinates are relative to the viewport
    console.log(elapsedTime); //elapsed time is based on time since begin was called
    }).begin();
    /*var prediction = webgazer.getCurrentPrediction();
    if (prediction) {
      var x = prediction.x;
      var y = prediction.y;
    }
    else if (!prediction){
      window.close();
    }*/
    webgazer.showPredictionPoints();
};

/*@inproceedings{papoutsaki2016webgazer,
author = {Alexandra Papoutsaki and Patsorn Sangkloy and James Laskey and Nediyana Daskalova and Jeff Huang and James Hays},
title = {WebGazer: Scalable Webcam Eye Tracking Using User Interactions},
booktitle = {Proceedings of the 25th International Joint Conference on Artificial Intelligence (IJCAI)},
pages = {3839--3845},
year = {2016},
organization={AAAI}
} */