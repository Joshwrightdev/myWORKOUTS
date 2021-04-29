const newFormHandler = async (event) => {
    event.preventDefault();


const title = document.getElementById("workout-title").nodeValue.trim();
const desc = document.getElementById("workout-description").nodeValue.trim();
const rating = document.getElementById("workout-rating").nodeValue.trim();
const type = document.getElementById("workout-type").nodeValue.trim();
const zone = document.getElementById("body-zone").nodeValue.trim();
const duratioin = document.getElementById("workout-duration").nodeValue.trim();
const owner = document.getElementById("owner-id").nodeValue.trim();
