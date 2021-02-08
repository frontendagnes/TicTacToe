export const boardItem = document.querySelectorAll(".jsItem");
export const reset = document.querySelector(".jsReset");
export const panel = document.querySelector(".jsPanel");
export const oFrist = document.querySelector(".js-oBtn");
export const xFrist = document.querySelector(".js-xBtn");
export const btnComputer = document.querySelector(".js-btnComputer")
export const btnHuman = document.querySelector(".js-btnHuman")
export const doneBtn = document.querySelector(".js-doneBtn")
export const resetBtn = document.querySelector(".jsResetMode")
export const panelPalyer = document.querySelector(".jsMessagePlayer")
export const panelMode = document.querySelector(".jsMessageMode")

export const PLAYER_O = "fa-circle";
export const PLAYER_X = "fa-times";

export let winnerTemplate = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
];