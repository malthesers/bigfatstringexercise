"use strict";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");

  document.querySelector("#button").addEventListener("click", generateOutput);
  document
    .querySelector("#input")
    .addEventListener("keydown", generateOutputKey);
});

const inputField = document.querySelector("#input");
const outputField = document.querySelector("#output");
const methodField = document.querySelector("#method");
let input;
let output;
let method;
let splitArray;
let spaceFilter;
let hyphenFilter;

function generateOutputKey(event) {
  if (event.keyCode == "13") {
    generateOutput();
  }
}

function generateOutput() {
  method = methodField.value;
  input = inputField.value;

  if (method === "Capitalator") {
    output = `${input[0].toUpperCase()}${input.substring(1).toLowerCase()}`;
  } else if (method === "Forenamator") {
    output = input.slice(0, input.indexOf(" "));
  } else if (method === "Forelengthiator") {
    output = input.slice(0, input.indexOf(" ")).length;
  } else if (method === "Middlizer") {
    output = `${input.substring(
      input.indexOf(" ") + 1,
      input.lastIndexOf(" ")
    )}`;
  } else if (method === "Extensionator") {
    if (input.endsWith(".jpg") === true) {
      output = "The file is a Juxtaposed Powerful Gimmick";
    } else if (input.endsWith(".png") === true) {
      output = "The file is a Propagandistic Nihilist Gauntlet";
    } else {
      output =
        "The file could not be identified and is most likely an intergalatic virus.";
    }
  } else if (method === "Asteriskifier") {
    output = "*".repeat(input.length);
  } else if (method === "caPitalator") {
    output = `${input.substring(
      0,
      2
    )}${input[2].toUpperCase()}${input.substring(3)}`;
  } else if (method === "Ca-Pi-Ta-La-Tor") {
    spaceFilter = input
      .split(" ")
      .map((space) => {
        return space[0].toUpperCase() + space.substring(1);
      })
      .join(" ");

    hyphenFilter = spaceFilter.split("-").map((hyphen) => {
      return hyphen[0].toUpperCase() + hyphen.substring(1);
    });

    output = hyphenFilter.join("-");
  }

  outputField.value = output;
}
