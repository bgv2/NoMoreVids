console.info("Nothing yet");
document.querySelector("button.ytp-large-play-button.ytp-button").addEventListener("click", () => {
    document.querySelector("div.ytp-pause-overlay.ytp-scroll-min").remove();
    console.info("step 1");
    document.querySelector("div.html5-endscreen.ytp-player-content.videowall-endscreen").remove();
    console.info("step 2");
})
//document.querySelector("a.ytp-title-channel-logo").style.transition = "none";
console.info("Everything worked!");