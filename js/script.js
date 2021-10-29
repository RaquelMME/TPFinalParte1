data = [
  {
    id: 1,
    nombre: "Clase de Ingles",
    precio: "$250",
    imagen: "ppal.jpg",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    nombre: "Clase de Matematicas",
    precio: "$300",
    imagen: "mate3.jpg",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    nombre: "Clase de Frances",
    precio: "$200",
    imagen: "ppal.jpg",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 4,
    nombre: "Clase de Algebra",
    precio: "$350",
    imagen: "ppal.jpg",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 5,
    nombre: "Clase de Historia",
    precio: "$200",
    imagen: "ppal.jpg",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 6,
    nombre: "Clase de Geometría",
    precio: "$250",
    imagen: "ppal.jpg",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 7,
    nombre: "Clase de Química",
    precio: "$250",
    imagen: "ppal.jpg",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 5,
    nombre: "Clase de Probabilidad y Estadística",
    precio: "$250",
    imagen: "ppal.jpg",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 5,
    nombre: "Clase de Programación",
    precio: "$400",
    imagen: "ppal.jpg",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

function armoListaArticulos() {
  for (var k in data) {
    document.getElementById("divContenidoArticulos").innerHTML +=
      ' <div class="articulo" onclick="abroDetalle(' +
      k +
      ');">' +
      '<div class="articuloImagen" style=" background-image: url(../img/' +
      data[k].imagen +
      ');">"' +
      "<h2>" +
      data[k].nombre +
      "</h2>" +
      "</div>" +
      '<div class="articuloContenido">' +
      '<div class="articuloPrecio">' +
      "<span>" +
      data[k].precio +
      "</span>" +
      "</div>" +
      '<div class="articuloDescripcion">' +
      "<p>" +
      data[k].descripcion +
      "</p>" +
      "</div>" +
      "</div>" +
      "</div>";
    console.log(k, data[k]);
    console.log(k, data[k].id);
  }
}


function cargoDetalle(k){
   document.getElementById("divContenidoDetalle").innerHTML +=
   ' <div class="imagenPrincipalDetalle"  style=" background-image: url(../img/' +
   data[k].imagen +
   ')">' + ' <div class="tituloPrincipal example">'+
   '<h1>' +
   data[k].nombre +
   '</h1><p>Detalle del curso</p>' +
   '</div> </div> ' +
   '<div class="articuloContenido">' +
   '<div class="articuloPrecio">' +
   "<span>" +
   data[k].precio +
   "</span>" +
   "</div>" +
   '<div class="articuloDescripcion">' +
   //"<p>" +
   data[k].descripcion +
   //"</p>" +
   "</div>" +
   "</div>";
  }

  function abroDetalle(detalle){
      console.log(location.href)
      // location.href='../pg/detalle.html?idDetalle=' + detalle;
      window.open('pg/detalle.html?idDetalle='+ detalle,'_self')
  }

