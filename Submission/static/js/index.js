import { fullName, listHTML, albumText } from "./script.js";

const nameEl = document.getElementById("name");
nameEl.innerText = fullName || "";

const fruitEl = document.getElementById("fruit");
fruitEl.innerHTML = listHTML || "";

const albumEl = document.getElementById("album");
albumEl.innerHTML = albumText || "";
