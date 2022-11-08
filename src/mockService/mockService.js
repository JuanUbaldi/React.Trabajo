
    const itemsDB = [
        {
          id: 1,
          titulo: "Anzuelo",
          precio: 200,
          stock: 150,
          descripcion: "tamaño 1.0",
          categoria: "Anzuelos",
          imagen: "/Img/Anzuelo1.jpg",
        },
        {
          id: 2,
          titulo: "Anzuelo",
          precio: 220,
          stock: 160,
          descripcion: "tamaño 2.0",
          categoria: "Anzuelos",
          imagen: "/Img/Anzuelo1.jpg",
        },
        {
          id: 3,
          titulo: "Anzuelo",
          precio: 250,
          stock: 100,
          descripcion: "tamaño 3.0",
          categoria: "Anzuelos",
          imagen: "/Img/Anzuelo1.jpg",
        },
        {
          id: 4,
          titulo: "Anzuelo",
          precio: 270,
          stock: 158,
          descripcion: "tamaño 4.0",
          categoria: "Anzuelos",
          imagen: "/Img/Anzuelo1.jpg",
        },
        {
          id: 5,
          titulo: "Anzuelo",
          precio: 280,
          stock: 140,
          descripcion: "tamaño 5.0",
          categoria: "Anzuelos",
          imagen: "/Img/Anzuelo1.jpg",
        },
        {
          id: 6,
          titulo: "Anzuelo",
          precio: 290,
          stock: 157,
          descripcion: "tamaño 6.0",
          categoria: "Anzuelos",
          imagen:"/Img/Anzuelo1.jpg",
        },
        {
          id: 7,
          titulo: "Anzuelo",
          precio: 300,
          stock: 109,
          descripcion: "tamaño 7.0",
          categoria: "Anzuelos",
          imagen: "/Img/Anzuelo1.jpg",
        },
        {
          id: 8,
          titulo: "Anzuelo",
          precio: 310,
          stock: 150,
          descripcion: "tamaño 8.0",
          categoria: "Anzuelos",
          imagen:"/Img/Anzuelo1.jpg",
        },
        {
          id: 9,
          titulo: "plomadas",
          precio: 40,
          stock: 50,
          descripcion: "peso 10 gr",
          categoria: "plomadas",
          imagen:"/Img/plomada1.jpg",
        },
        {
          id: 10,
          titulo: "plomadas",
          precio: 50,
          stock: 60,
          descripcion: "peso 20 gr",
          categoria: "plomadas",
          imagen: "/Img/plomada1.jpg",
        },
        {
          id: 11,
          titulo: "plomadas",
          precio: 50,
          stock: 100,
          descripcion: "peso 25 gr",
          categoria: "plomadas",
          imagen: "/Img/plomada1.jpg",
        },
        {
          id: 12,
          titulo: "plomadas",
          precio: 65,
          stock: 104,
          descripcion: "peso 30gr",
          categoria: "plomadas",
          imagen:"/Img/plomada1.jpg",
        },
        {
          id: 13,
          titulo: "plomadas",
          precio: 75,
          stock: 110,
          descripcion: "peso 40 gr.",
          categoria: "plomadas",
          imagen:"/Img/plomada1.jpg",
        },
        {
          id: 14,
          titulo: "plomadas",
          precio: 90,
          stock: 65,
          descripcion: "peso 50 gr.",
          categoria: "plomadas",
          imagen: "/Img/plomada1.jpg",
        },
        {
          id: 15,
          titulo: "plomadas",
          precio: 100,
          stock: 80,
          descripcion: "peso 70 gr.",
          categoria: "plomadas",
          imagen: "/Img/plomada1.jpg",
        },
      ];
     
      export default function getItemsFromAPI (){  return new Promise((resolve) => {
        setTimeout(()=>{
            resolve (itemsDB);
        }, 1000)
      })
}

export function getItemFromAPI (){  return new Promise((resolve) => {
    setTimeout(()=>{
        resolve (itemsDB[2]);
    }, 1000)
  })
}