function random() {
  document.getElementById("number").innerHTML = Math.floor(Math.random() * 10);
}

function random2() {
  document.getElementById("number2").innerHTML = Math.floor(Math.random() * 10);
}

function multiply() {
  document.getElementById("answer").innerHTML =
    document.getElementById("number").innerHTML *
    document.getElementById("number2").innerHTML;
}

function verifyq() {
  const uans = document.getElementById("uans").value;
  const cans = (document.getElementById("ans").innerHTML =
    document.getElementById("q1").innerHTML *
    document.getElementById("q2").innerHTML);

  const uans1 = document.getElementById("uans-1").value;
  const cans1 = (document.getElementById("ans-1").innerHTML =
    document.getElementById("q1-1").innerHTML *
    document.getElementById("q2-1").innerHTML);

  const uans2 = document.getElementById("uans-2").value;
  const cans2 = (document.getElementById("ans-2").innerHTML =
    document.getElementById("q1-2").innerHTML *
    document.getElementById("q2-2").innerHTML);

  let counter = 0;

  // Q1
  if (uans == cans) {
    counter++;
    console.log("Correct");
    document.getElementById("ans-status").innerHTML = "Correct";
  } else {
    console.log("Wrong");
    document.getElementById("ans-status").innerHTML = "Wrong";
  }

  // Q2
  if (uans1 == cans1) {
    counter++;
    console.log("Correct");
    document.getElementById("ans-status-1").innerHTML = "Correct";
  } else {
    console.log("Wrong");
    document.getElementById("ans-status-1").innerHTML = "Wrong";
  }

  // Q3
  if (uans2 == cans2) {
    counter++;
    console.log("Correct");
    document.getElementById("ans-status-2").innerHTML = "Correct";
  } else {
    console.log("Wrong");
    document.getElementById("ans-status-2").innerHTML = "Wrong";
  }

  //counter
  document.getElementById("marks").innerHTML = counter;

  //showTable
  document.getElementById("showHide").style.display = "flex";

  //showAns
  document.getElementById("firstans").innerHTML =
    document.getElementById("uans").value;
  document.getElementById("secans").innerHTML =
    document.getElementById("uans-1").value;
  document.getElementById("thirdans").innerHTML =
    document.getElementById("uans-2").value;
}

document.getElementById("ans-status").onclick = verifyq();