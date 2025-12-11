let number = "";
let operator = "";
let a = "";
let answer = false;
let g = 9.81;

const wrapper = document.getElementById("wrapper");

wrapper.addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  }

  // Get the ID of the clicked button
  const buttonId = event.target.id;

  // Log the button ID to the console
  console.log(`Button clicked: ${buttonId}`);
  if (buttonId == "volume") {
    h = document.getElementById("height").value;
    w = document.getElementById("width").value;
    wt = document.getElementById("walls").value;
    l = document.getElementById("length").value;
    console.log(hollowVolume(h, w, wt, l));

    const vV = document.getElementById("vV");
    if (vV) {
      vV.textContent = hollowVolume(h, w, wt, l);
      +"mm^3";
    } else console.log("false");
  }

  if (buttonId == "mass") {
    d = document.getElementById("density").value;
    v = document.getElementById("vol").value;
    const mV = document.getElementById("mV");
    if (mV) {
      mV.textContent = MassCalc(d, v) + "g";
    } else console.log("false");
  }

  if (buttonId == "range") {
    h0 = document.getElementById("y0").value;
    angle = document.getElementById("theta").value;
    iV = document.getElementById("v0").value;
    const rV = document.getElementById("rV");
    if (rV) {
      rV.textContent = RangeCalc(iV, h0, angle) + "m";
    } else console.log("false");
  }
  if (buttonId == "force") {
    pm = document.getElementById("Pm").value;
    am = document.getElementById("Am").value;
    k = document.getElementById("k").value;
    v0 = document.getElementById("v0").value;
    sL = document.getElementById("sl").value;
    const fV = document.getElementById("fV");
    if (fV) {
      fV.textContent = ForceCalc(pm, v0, k, sL) + "times L";
    } else console.log("false");
  }

  if (
    buttonId == "+" ||
    buttonId == "-" ||
    buttonId == "*" ||
    buttonId == "/"
  ) {
    operator = buttonId;

    if (a == "") {
      a = number;
      number = "";
    } else if (number != "") {
      a = calculate(a, number, operator);
      number = "";
    }
  } else if (buttonId == "=") {
    if (operator != "") {
      a = calculate(a, number, operator);
      number = "";
      operator = "";
      answer = true;
    }
  } else if (buttonId == "C") {
    number = "";
    operator = "";
    a = "";
  } else {
    if (answer == true && operator == "") {
      a = "";
      answer = false;
    }
    number += buttonId;
  }

  function calculate(num1, num2, operator) {
    //da funny
    const negOrPos = () => (Math.floor(Math.random() * 2) === 1 ? -1 : 1);

    switch (operator) {
      case "+":
        return parseInt(a) + parseInt(number);
        break;
      case "-":
        return parseInt(a) - parseInt(number);
        break;
      case "*":
        return parseInt(a) * parseInt(number);
        break;
      case "/":
        return parseInt(a) / parseInt(number);
        break;
    }
  }

  function DegreeToRadians(angle) {
    //da funny
    return angle * (Math.PI / 180);
  }

  function hollowVolume(height, width, thickness, length) {
    let a = height * width * length;
    let b = (height - thickness * 2) * (width - thickness * 2) * length;
    return Number(a - b).toFixed(2);
  }

  function MassCalc(volume, density) {
    d = density * Math.pow(10, -6);
    return volume * d;
  }

  function RangeCalc(v0, y0, angle) {
    vx = v0 * CosDegree(angle);
    t =
      (v0 * SinDegree(angle) +
        Math.sqrt(Math.pow(v0 * SinDegree(angle), 2) + 2 * g * y0)) /
      g;
    vy = v0 * SinDegree(angle) - g * t;
    r =
      (vx *
        (v0 * SinDegree(angle) +
          Math.sqrt(Math.pow(v0 * SinDegree(angle), 2) + 2 * g * y0))) /
      g;
    yMax = (((y0 + v0 * SinDegree(angle)) ^ 2) / 2) * g;

    return r;
  }

  function ForceCalc(m, v, k, sL) {
    x = Math.sqrt((m * 0.001 * Math.pow(v, 2)) / k);
    sl = sL * 0.001;
    return Number(x / sl).toFixed(3);
  }

  function CosDegree(angle) {
    //da funny
    return Math.cos(DegreeToRadians(angle));
  }

  function SinDegree(angle) {
    //da funny
    return Math.sin(DegreeToRadians(angle));
  }

  const display = document.getElementById("display");
  if (display) {
    display.textContent = a + operator + number;
  }
});
