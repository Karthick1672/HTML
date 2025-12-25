for (let i = 0; i <= 80; i++) {
  const stars = document.createElement("div");
  stars.id = "star";
  let randx = Math.floor(Math.random() * (window.innerWidth - 15));
  let randy = Math.floor(Math.random() * (window.innerHeight - 15));
  stars.style.position = "absolute";
  stars.style.left = randx + "px";
  stars.style.top = randy + "px";
//   for size
  let starSize = (Math.floor(Math.random()*3) + 2);
  stars.style.width = starSize+"px";
  stars.style.height = starSize+"px";
  stars.style.animationDelay = Math.random() * 5 + "s";
  document.body.appendChild(stars);
}
// let ran =Math.floor(Math.random()*4) + 1;
// console.log(ran);