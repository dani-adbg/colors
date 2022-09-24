let randomColor = Math.floor(Math.random()*16777215).toString(16);

addEventListener('DOMContentLoaded', () => {
  const doc = document;
  let container = doc.querySelector(".container");
  container.style.background=`#${randomColor}`;
  let t = doc.querySelector("#color");
  t.textContent=`#${randomColor}`;
  t.style.color=`#${randomColor}`;

  doc.querySelector("#main").style.color=`#${randomColor}`;

  const btn = doc.querySelector("#btn");
  btn.style.background=`#${randomColor}`;
  btn.addEventListener('click', () => {
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    container.style.background=`#${randomColor}`;
    t.textContent=`#${randomColor}`;
    t.style.color=`#${randomColor}`;
    btn.style.background=`#${randomColor}`;

    doc.querySelector("#main").style.color=`#${randomColor}`;
  });

});