window.ondblclick = function dropScroll() {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'auto'
      });
      
}

console.log(window.innerWidth)
function removeCover(num){
  num.classList.remove("cover");
}

function playVideo(vid){
  vid.play();

}

var cover;
function pauseVideo(vid){
  if (vid.id == "myVideo1") {
    cover = document.getElementById("1");
  } else if(vid.id == "myVideo2") {
    cover = document.getElementById("2");
  } else if(vid.id == "myVideo3") {
    cover = document.getElementById("3");
  } else if(vid.id == "myVideo4") {
    cover = document.getElementById("4");
  }
  cover.classList.add("cover");
  vid.pause();
}
