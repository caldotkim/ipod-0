const videoId = new URLSearchParams(location.search).get("videoId");
document.querySelector(".player").innerHTML =
  `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&cc_load_policy=0" allow="autoplay"></iframe>`;
