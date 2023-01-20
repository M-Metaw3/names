const main = document.querySelector("body");

main.addEventListener("mousemove", () => {
  const xx = event.offsetX;
  const yy = event.offsetY;
  const nw = document.createElement("div");
  nw.innerText = " Marwa Omar the most beautiful girl";
  // nw.innerText = "metawea";

  nw.style.left = xx + "px";
  nw.style.top = yy + "px";
  const size = Math.floor(Math.random() * 80);
  nw.style.width = size + "px";
  nw.style.height = size + "px";

  main.appendChild(nw);
  setTimeout(() => {
    nw.remove();
  }, 3000);
});
