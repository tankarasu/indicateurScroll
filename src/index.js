import "./styles.css";

window.addEventListener("scroll", fill);

function fill() {
  let winScroll = document.documentElement.scrollTop;

  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let scroll = (winScroll / height) * 100;

  document.getElementById("myBar").style.width = `${scroll}%`;
}