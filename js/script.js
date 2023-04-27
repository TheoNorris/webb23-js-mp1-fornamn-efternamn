document.querySelector("body").style.padding = "10% 20%";

for (let i = 0; i < 5; i++) {
  const textP = document.createElement("p");
  document.body.append(textP);
  textP.innerText = `Rad ${[i + 1]}`;
  textP.style.color = "#3189B2";
  textP.style.textAlign = "center";
  textP.style.margin = `${i * 5}px 0`;
  textP.style.fontSize = (i + 1) * 10;
  textP.style.backgroundColor = `hsl(${(i + 5) * 20}, 80%, 80%)`;
}

const boxDiv = document.createElement("div");
document.body.append(boxDiv);
boxDiv.style.display = "flex";
boxDiv.style.flexDirection = "row";
boxDiv.style.justifyContent = "center";
boxDiv.style.padding = "5% 10%";
boxDiv.style.border = "1px solid black";

const numbers = [
  "ett",
  "två",
  "tre",
  "fyra",
  "fem",
  "sex",
  "sju",
  "åtta",
  "nio",
  "tio",
];

for (let i = 0; i < 3; i++) {
  const miniDiv = document.createElement("div");

  boxDiv.appendChild(miniDiv);
  miniDiv.style.width = "10%";
  miniDiv.style.margin = "0 auto";
  miniDiv.style.border = "10px solid #BA95F4";
  if (i == 0) {
    for (let i = 0; i < 10; i++) {
      const innerP = document.createElement("p");
      miniDiv.appendChild(innerP);

      innerP.innerText = i;
      innerP.style.margin = "0";
      if (i == 4) {
        innerP.style.backgroundColor = "#BA95F4";
      } else if (i % 2 == 0) {
        innerP.style.backgroundColor = "black";
        innerP.style.color = "white";
      }
    }
  } else if (i == 1) {
    for (let i = 9; i >= 0; i--) {
      const innerP = document.createElement("p");
      miniDiv.appendChild(innerP);
      innerP.innerText = i;
      innerP.style.margin = "0";
      innerP.style.textAlign = "center";
      if (i == 8) {
        innerP.style.backgroundColor = "#BA95F4";
      } else if (i % 2 == 0) {
        innerP.style.backgroundColor = "black";
        innerP.style.color = "white";
      }
    }
  } else {
    for (let i = 0; i < 10; i++) {
      const innerP = document.createElement("p");
      miniDiv.appendChild(innerP);
      innerP.innerText = numbers[i];
      innerP.style.margin = "0";
      innerP.style.textAlign = "right";
      if (i == 5) {
        innerP.style.backgroundColor = "#BA95F4";
      } else if (i % 2 == 0) {
        innerP.style.backgroundColor = "black";
        innerP.style.color = "white";
      }
    }
  }
}
