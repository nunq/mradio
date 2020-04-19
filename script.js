"use strict";

const navbar = document.getElementById("navbar");
const player = document.getElementById("player");
const loadingindicator = document.getElementById("loading");
const channellist = document.getElementById("channellist");

document.addEventListener("DOMContentLoaded", function() {
  loadchannels();
}, false);

function stop() {
  player.pause();
  navbar.style.display = "none";
  document.title = "mradio";
}

function playchannel(url, name) {
  document.getElementById("playertitle").innerHTML = name;
  document.title = "Playing " + name;
  navbar.style.display = "flex";
  player.src = url;
  player.load();
  player.play();
}

function loadchannels() {
  for (var i=0; i<streams.length; i++) {
    channellist.insertAdjacentHTML("beforeend", "<div onclick='playchannel(\""+streams[i][1]+"\", \""+streams[i][0]+"\")' class='channel'><img class='logo' src="+streams[i][2]+"><div class='info'><p class='channelname'>"+streams[i][0]+"</p></div></div>");
  }
  loadingindicator.style.display = "none";
}
