let number = 0;
let data = []; // Variable para almacenar los datos recuperados de ajax.json
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      data = request.response; // Almacenar los datos recuperados
      updateContent(); // Actualizar el contenido con los datos recuperados
    }
  }
  request.open("GET", "ajax.json");
  request.responseType = "json";
  request.send(null);
}

function updateContent() {
  titleArea.innerHTML = data[number].title;
  contentArea.innerHTML = data[number].content;
  videoArea.setAttribute("src", data[number].url);
  number = (number + 1) % data.length; // Asegurarse de que el índice se recicle correctamente
}

function changeVideo() {
  if (data.length === 0) {
    getData(); // Recuperar datos solo si no se han recuperado antes
  } else {
    updateContent(); // Actualizar contenido usando datos ya recuperados
  }
}

window.onload = function() {
  button.addEventListener('click', changeVideo);
}
