const ventas = [
  {
    titulo: "Venta 1",
    categoria: "Tecnología",
    estado: getEstadoVenta(),
    precio: 150,
  },
  {
    titulo: "Venta 2",
    categoria: "Hogar",
    estado: getEstadoVenta(),
    precio: 100,
  },
  {
    titulo: "Venta 3",
    categoria: "Moda",
    estado: getEstadoVenta(),
    precio: 200,
  },
  {
    titulo: "Venta 4",
    categoria: "Deportes",
    estado: getEstadoVenta(),
    precio: 250,
  },
  {
    titulo: "Venta 5",
    categoria: "Juguetes",
    estado: getEstadoVenta(),
    precio: 80,
  },
];

// Función para asignar aleatoriamente el estado de la venta
function getEstadoVenta() {
  const estados = ["Pendiente", "Completada", "Cancelada"];
  const randomIndex = Math.floor(Math.random() * estados.length);
  return estados[randomIndex];
}

console.log(ventas);
