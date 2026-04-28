const data = [
  {
    data: [
      {
        row_number: 2,
        Producto: "Camiseta Negra",
        Talla: "S",
        Inventario: 2
      },
      {
        row_number: 3,
        Producto: "Camiseta Negra",
        Talla: "M",
        Inventario: 5
      },
      {
        row_number: 4,
        Producto: "Camiseta Negra",
        Talla: "L",
        Inventario: 3
      }
    ]
  }
];

function procesarInventario(data) {
  const productos = data[0].data;

  for (const item of productos) {
    console.log(`Producto: ${item.Producto}, Talla: ${item.Talla}, Inventario: ${item.Inventario}`);
  }

  return productos;
}

const resultado = procesarInventario(data);
console.log("Total productos:", resultado.length);