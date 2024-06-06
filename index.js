let libros = [
    {
        titulo: "Bajo la misma estrella",
        autor: "John Green",
        genero: "Novela",
        idioma : "Ingles",
        precio : 14.47,
        formato : "Tapa dura",
        isbn : 6073114230,
        descripcion : "azul",
        estado : "Nuevo",
        ubicacion : "Centro",
        fecha_publicacion : "10 de enero del 2012",
        editorial : "Punto de lectura ",
        paginas : 304,
        dimensiones: "19*13cm",
        peso : "300 Gramos",
    }, 
    
    {
        titulo: "1984",
        autor: "George",
        genero: "Ficcion",
        idioma : "Ingles",
        precio : 11.95,
        formato : "Tapa blanda",
        isbn : 97084524935,
        descripcion : "Novela clasica que describe un futuro disoptico",
        estado : "Nuevo",
        ubicacion : "Londres Reino Unido",
        fecha_publicacion : "1994-06-08",
        editorial : "Punto de lectura ",
        paginas : 328,
        dimensiones: "42*69 Pulgadas",
        peso : "7.2 Onzas",
    },
    
    {
        titulo: "Principito",
        autor: "Antoine de Saint",
        genero: "Fabula",
        idioma : "Frances",
        precio : 14.99,
        formato : "Tapa dura",
        isbn : 978001560121,
        descripcion : "Un cuento filosofico sobre un viajero espacial que encuentra un pequeño principe en un asteroide",
        estado : "Usado",
        ubicacion : "Paris,Francia",
        fecha_publicacion : "1943-04-06",
        editorial : "Punto de lectura ",
        paginas : 96,
        dimensiones: "44*75 Pulgadas",
        peso : "72 Onzas",
    }, 
    
    {
        titulo: "Harry Potter y la piedra filosofal",
        autor: "J.K. Rowling",
        genero: "Fantasia",
        idioma : "Español",
        precio : 25.95,
        formato : "Ebook",
        isbn : 97884788,
        descripcion : "Es el primer libro de la serie de Harry Potter que sigue las aventuras de un joven mago",
        estado : "Nuevo",
        ubicacion : "Londre Reino Unido",
        fecha_publicacion : "1997-06-26",
        editorial : "Punto de lectura ",
        paginas : 256,
        dimensiones: "Variable",
        peso : "Variable",
    }, 
    
    {
        titulo: "Don Quijote de la mancha",
        autor: "Miguel de Cervantes",
        genero: "Novela",
        idioma : "Español",
        precio : 30.00,
        formato : "Tapa blanda",
        isbn : 9784273003,
        descripcion : "Una obra clasica que narra las aventuras de un hidalgo enloquecido",
        estado : "Usado",
        ubicacion : "Madrid España",
        fecha_publicacion : "1605-01-16",
        editorial : "Punto de lectura ",
        paginas : 1040,
        dimensiones: "6.1*9.2 Pulagadas",
        peso : "1.8 Libras",
    }, 
    
    {
        titulo: "Orgullo y prejuicio",
        autor: "Jane Austen",
        genero: "Romance",
        idioma : "Ingles",
        precio : 14.40,
        formato : "Tapa Blanda",
        isbn : 6073112580,
        descripcion : "Una novela que sigue las vicisitudes de la familia Bennet en especial las de la hija mayor",
        estado : "Usado",
        ubicacion : "Reino Unido ",
        fecha_publicacion : "1813-01-28",
        editorial : "Penguin Classics",
        paginas : 304,
        dimensiones: "19*13cm",
        peso : "320 Gramos",
    }, 
    
    {
        titulo: "The Catcher in the Rye",
        autor: "J.D. Salinger",
        genero: "Ficcion",
        idioma : "Ingles",
        precio : 12.41,
        formato : "Tapa blanda",
        isbn : 7336978230,
        descripcion : "La hiistoria de Holden Caulfield, un adolescente rebelde que lucha contra la hipocresia y la superficialidad",
        estado : "Nuevo",
        ubicacion : "Nueva York",
        fecha_publicacion : "1951-07-16",
        editorial : "Penguin Classics",
        paginas : 224,
        dimensiones: "55*82cm",
        peso : "8.8 Onzas",
    }, 
    
    {
        titulo: "Moby- Dick",
        autor: "Herman Melville",
        genero: "Aventura clasica",
        idioma : "Ingles",
        precio : 9.99,
        formato : "Tapa blanda",
        isbn : 8961142241,
        descripcion : "La obsesiva busqueda del capitan Ahab vengaese de la ballena blanca que le arrebato una pierna",
        estado : "Nuevo",
        ubicacion : "Centro",
        fecha_publicacion : "10 de enero del 2012",
        editorial : "Penguin Classics ",
        paginas : 304,
        dimensiones: "19*13cm",
        peso : "300 Gramos",
    }, 
    
    {
        titulo: "The Lord of the Rings",
        autor: "J.R.R Tolkin",
        genero: "Fantasia",
        idioma : "Ingles",
        precio : 19.36,
        formato : "Tapa dura",
        isbn : 970618640,
        descripcion : "Una trilogica clasica que sigue la busqueda de un grupo de personajes para destruir un anillo magico ",
        estado : "Nuevo",
        ubicacion : "Nantucket EE.UU",
        fecha_publicacion : "1851-10-18",
        editorial : "Penguin Classics",
        paginas : 624,
        dimensiones: "5.5*8.5 Pulgadas",
        peso : "14 Libras",
    }, 
    
    {
        titulo: "El Alquimista",
        autor: "Paulo Coelho",
        genero: "Ficcion",
        idioma : "Español",
        precio : 3.99,
        formato : "Ebook",
        isbn : 9700623160,
        descripcion : "Una novela inspiradora que sigue el viaje de un joven pastor en busca de su destino y de la verdadera felicidad",
        estado : "Nuevo",
        ubicacion : "Rio de Janeiro, Brazil",
        fecha_publicacion : "1988-09-01",
        editorial : "Penguin Classics",
        paginas : 208,
        dimensiones: "N/A",
        peso : "N/A",
    }, 
    
    {
        titulo: "The Great Gatsby",
        autor: "F. Scott Fitzgerald",
        genero: "Novela",
        idioma : "Ingles",
        precio : 21.99,
        formato : "Tapa dura",
        isbn : 9780743273,
        descripcion : "Una historia ambientada en la decada 1920 que explora la decadencia moral",
        estado : "Nuevo",
        ubicacion : "Estanteria3",
        fecha_publicacion : "1925",
        editorial : "Scribner",
        paginas : 180,
        dimensiones: "10.8*1.17cm",
        peso : "136 Gramos",
    }, 
    
    {
        titulo: "El nombre del viento",
        autor: "Patrick Rothfuss",
        genero: "Fantasia",
        idioma : "Español",
        precio : 7.99,
        formato : "Tapa blamda",
        isbn : 978840351,
        descripcion : "La historia de Kvtohe un legendario Musico y mago",
        estado : "Nuevo",
        ubicacion : "Estanteria4",
        fecha_publicacion : "2007",
        editorial : "Scribner",
        paginas : 880,
        dimensiones: "15.5*23.4cm",
        peso : "780 Gramos",
    }, 
     
    {
        titulo: "To Kill a Mockingbird",
        autor: "Harper Lee",
        genero: "Novela",
        idioma : "Ingles",
        precio : 4.95,
        formato : "Tapa dura",
        isbn : 978006112120,
        descripcion : "Una poderosa historia sobre racismo, injusticia y moralidad",
        estado : "Nuevo",
        ubicacion : "Estanteria5",
        fecha_publicacion : "1960",
        editorial : "Scribner",
        paginas : 336,
        dimensiones: "14*21cm",
        peso : "450 Gramos",
    }, 
    
    {
        titulo: "The Hobbit",
        autor: "J.R.R Tolkien",
        genero: "Fantasia",
        idioma : "Ingles",
        precio : 78.95,
        formato : "Tapa dura",
        isbn : 97800345625,
        descripcion : "La historia de Bilbo Boston, un hobbit traqnuilo que se embarca en una aventura",
        estado : "Seminuevo",
        ubicacion : "Estanteria7",
        fecha_publicacion : "1937",
        editorial : "Scribner",
        paginas : 320,
        dimensiones: "10.8*17.1cm",
        peso : "227 Gramos",
    }, 
    
    {
        titulo: "Crime and Punishment",
        autor: "Fyodor Dostoevsky",
        genero: "Novela",
        idioma : "Ingles",
        precio : 65.00,
        formato : "Tapa blanda",
        isbn : 97807409136,
        descripcion : "La historia de un estudiante que comete un crimen ",
        estado : "Semiuevo",
        ubicacion : "Estanteria8",
        fecha_publicacion : "1886",
        editorial : "Scribner",
        paginas : 3576,
        dimensiones: "12.9*19.8cm",
        peso : "408 Gramos",
    }, 
    
    {
        titulo: "The Road",
        autor: "Comarc McCathy",
        genero: "Ficcion",
        idioma : "Ingles",
        precio : 10.00,
        formato : "Tapa dura",
        isbn : 6073114230,
        descripcion : "Una triste historia de un padre que lucha por su hijo para sobrevivir en un mundo devastado",
        estado : "Nuevo",
        ubicacion : "Estanteria5",
        fecha_publicacion : "2006",
        editorial : "Alianza Editorial ",
        paginas : 287,
        dimensiones: "13.1*20.3cm",
        peso : "204 Gramos",
    }, 
    
    {
        titulo: "El retrato de Dorian Gray",
        autor: "Oscar Wilde",
        genero: "Novela",
        idioma : "Español",
        precio : 90.00,
        formato : "Bolsillo",
        isbn : 978842067,
        descripcion : "La historia de un hombre joven cuya belleza eterna queda en un retrato",
        estado : "Nuevo",
        ubicacion : "Estaneria14",
        fecha_publicacion : "1980",
        editorial : "Alianza Editorial ",
        paginas : 304,
        dimensiones: "11*18cm",
        peso : "200 Gramos",
    }, 
    {
        titulo: "The Hunger Games",
        autor: "Suzanne Collins",
        genero: "Ciencia",
        idioma : "Ingles",
        precio : 80.00,
        formato : "Tapa blanda",
        isbn : 9786425210,
        descripcion : "En un futuro distopico, el personaje principal se ve obligado a participar en los juegos del hambre",
        estado : "Nuevo",
        ubicacion : "Estaneria14",
        fecha_publicacion : "2008",
        editorial : "Alianza Editorial",
        paginas : 384,
        dimensiones: "19*13cm",
        peso : "295 Gramos",
    }, 
    {
        titulo: "La sombra del viento",
        autor: "Carlos Ruiz",
        genero: "Novela",
        idioma : "Español",
        precio : 75.00,
        formato : "Tapa dura",
        isbn : 9875662853,
        descripcion : "En el misterioso cementerio de libros olvidadados hau un libro que cambiara vidas",
        estado : "Nuevo",
        ubicacion : "Estaneria16",
        fecha_publicacion : "2001",
        editorial : "Alianza Editorial ",
        paginas : 552,
        dimensiones: "19*13cm",
        peso : "748 Gramos",
    }, 
    {
        titulo: "El vaiaje de los Mil Mundos",
        autor: "Laura Gomez",
        genero: "Fantasia",
        idioma : "Español",
        precio : 50.00,
        formato : "Tapa dura",
        isbn : 9783161484,
        descripcion : "En un mundo donde la magia esta prohibida, una joven descubre un portal secreto.",
        estado : "Nuevo",
        ubicacion : "Estaneria15",
        fecha_publicacion : "15 de marzo del 2023",
        editorial : "Alianza Editorial",
        paginas : 432,
        dimensiones: "23*13cm",
        peso : "650 Gramos",
    }, 
    ]
// find
let buscarPorAutor = (autor) => {
    return libreria.fnd(libro => libro.autor.toLowerCase() === autor.toLowerCase());
};
let buscarPorFechaPublicacion = (fecha) => {
    return libreria.find(libro => libro.fecha_publicacion === fecha);
};
let buscarPorGenero = (genero) => {
    return libreria.find(libro => libro.genero.toLowerCase() === genero.toLowerCase());
};
let buscarPorIdioma = (idioma) => {
    return libreria.find(libro => libro.idioma.toLowerCase() === idioma.toLowerCase());
};

let buscarPorISBN = (isbn) => {
    return libreria.find(libro => libro.isbn === isbn);
};
let buscarPorDescripcion = (descripcion) => {
    return libreria.find(libro => libro.descripcion.toLowerCase().includes(descripcion.toLowerCase()));
};
let buscarPorFormato = (formato) => {
    return libreria.find(libro => libro.formato.toLowerCase() === formato.toLowerCase());
};
let buscarPorPeso = (peso) => {
    return libreria.find(libro => libro.peso === peso);
};
let buscarPorPrecio = (precio) => {
    return libreria.fid(libro => libro.precio === precio);
};
let buscarPorEstado = (estado) => {
    return libreria.find(libro => libro.estado.toLowerCase() === estado.toLowerCase());
};
let buscarPorUbicacion = (ubicacion) => {
    return libreria.find(libro => libro.ubicacion.toLowerCase() === ubicacion.toLowerCase());
};
let buscarPorNumeroPaginas = (numeroPaginas) => {
    return libreria.find(libro => libro.paginas === numeroPaginas);
};
let buscarPorDimensiones = (dimensiones) => {
    return libreria.find(libro => libro.dimensiones.toLowerCase() === dimensiones.toLowerCase());
};
let buscarPorEditorial = (editorial) => {
    return libreria.find(libro => libro.editorial.toLowerCase() === editorial.toLowerCase());
};




    // menu
    let continuar= "si", menu;
    while (continuar === "si") 
    menu = "Menu\n\n";
    menu += "1-Ver libros\n";
    menu += "2-Agregar un libro\n";
    menu += "3-Eliminar un libro\n";
    menu += "4-Listar libros\n";
    menu += "4-Resumen de los segmentos\n";
    menu += "5-busqueda libros"
    menu += "ingrese un numero";
    numero = parseInt(prompt(menu));
    switch (decision) {
        case 1:
            libros.forEach((libro,index)=>{
                console.log("libro " + (index+1) +" Titulo: "+  (libro.titulo) +   " Autor: " +   (libro.autor) + " Genero: " + (libro.genero) + " Idioma: " + (libro.idioma) + " Precio: " + (libro.precio) + " Formato: " + (libro.formato) + " ISBN: " + (libro.isbn) + " Descripcion: " + (libro.descripcion) + " Estado: " + (libro.estado) + " Ubicacion:" + (libro.ubicacion) + " Fecha de publicacion: " + (libro.fecha_publicacion) + " Editorial: " + (libro.editorial) + "Paginas: " + (libro.paginas) + " Dimensiones: "  + (libro.dimensiones)) ;
            }
            )
            break;
        case 2:
            let nuevoLibro = {
                titulo: "The Book Thief",
                autor: "Markus Zusak",
                genero: "Ficcion",
                idioma : "Ingles",
                precio : 10.99,
                formato : "Tapa dura",
                isbn : 6073114230,
                descripcion : "Es la historia de una joven que roba libros y encuentra consuelo en la lectura",
                estado : "Nuevo",
                ubicacion : "Estanteria8",
                fecha_publicacion : "2005",
                editorial : "Alfred ",
                paginas : 576,
                dimensiones: "19*13cm",
                peso : "408 Gramos"
             }
             // agregar un libro
              libros.push(nuevoLibro);
              console.log(libros.length);
              libros.forEach((libro,index)=>{
                console.log("libro " + (index+1) +" Titulo: "+  (libro.titulo) +   " Autor: " +   (libro.autor) + " Genero: " + (libro.genero) + " Idioma: " + (libro.idioma) + " Precio: " + (libro.precio) + " Formato: " + (libro.formato) + " ISBN: " + (libro.isbn) + " Descripcion: " + (libro.descripcion) + " Estado: " + (libro.estado) + " Ubicacion:" + (libro.ubicacion) + " Fecha de publicacion: " + (libro.fecha_publicacion) + " Editorial: " + (libro.editorial) + "Paginas: " + (libro.paginas) + " Dimensiones: "  + (libro.dimensiones)) ;
            })
            break;
        case 3:
           libros.pop()
           console.log("eliminado con exito");
           console.table(libros)
         break;

        case 4:
           // Inicio del manejo de array methods

            
    // Realizar uso del array Method .map y listar los libros por Titulo, Autor, Editorial y Precio
    let titulo = libros.map((libro)=>{
        return{
            titulo: libro.titulo,
            autor: libro.autor,
            editorial: libro.editorial,
            precio: libro.precio
        }
    })
    console.table(titulo)
  // Crear 10 iteraciones diferentes manteniendo el atributo Titulo
        titulo = libros.map((libro)=>{
            return{
                titulo: libro.titulo,
                genero: libro.genero,
            }
        } )
        console.table(titulo)

        titulo = libros.map((libro)=>{
            return{
                titulo: libro.titulo,
                idioma: libro.idioma,
            }
        }
        )
        console.table(titulo)
        
        titulo = libros.map((libro)=>{
            return{
                titulo: libro.titulo,
                formato: libro.formato,
            }
        }
        )
        console.table(titulo)
        
        titulo = libros.map((libro)=>{
            return{
                titulo: libro.titulo,
                isbn: libro.isbn,
            }
        }
        )
        console.table(titulo)
        
        titulo = libros.map((libro)=>{
            return{
                titulo: libro.titulo,
                descripcion: libro.descripcion,
                dimensiones: libro.dimensiones,
            }
        }
        )
        console.table(titulo)
        
        titulo = libros.map((libro)=>{
            return{
                titulo: libro.titulo,
                estado: libro.estado,
                peso: libro.peso,
            }
        }
        )
        console.table(titulo)
        
        titulo = libros.map((libro)=>{
            return{
                titulo: libro.titulo,
                ubicacion: libro.ubicacion,
            }
        }
        )
        console.table(titulo)
        
        titulo = libros.map((libro)=>{
            return{
                titulo: libro.titulo,
                fecha_publicacion: libro.fecha_publicacion,
            }
        }
        )
        console.table(titulo)
        
        titulo = libros.map((libro)=>{
            return{
                titulo: libro.titulo,
                idioma: libro.idioma,
            }
        }
        )
        console.table(titulo)
        
        titulo = libros.map((libro)=>{
            return{
                titulo: libro.titulo,
                paginas: libro.paginas,
            }
        }
        )
        console.table(titulo)

        //  Al array de objetos creado se debe agregar un atributo llamado descuento al cual tiene un valor del 20 porciento.  
let librosConDescuentos = libros.map((libros)=>{
    return{
        ...libros,
        descuento:20,
    }
})
console.log(librosConDescuentos)  

// Listar los libros por Titulo, Autor, Editorial, Precio y descuento.
 descuento = libros.map((libro)=>{
    return{
        titulo: libro.titulo,
        autor: libro.autor,
        editorial: libro.editorial,
        precio: libro.precio,
        descuento: libro.descuento
    }
})
console.table(librosConDescuentos)

            break;
       case 5: 
       // Obtener un array con los libros que tengan un precio mayor a 50 dolares
let librosCaros = libros.filter((libro) =>{
    return libro.precio > 11;
})
console.table(librosCaros);


// Realizar un array con el resumen de libros por numero mas alto de paginas mostrando, titulo, autor, editorial, paginas
let librosConMayorPaginas = libros.sort((a,b) =>b.paginas-a.paginas)
.map((titulo) =>{
    return{
    titulo: titulo.titulo,
    autor: titulo.autor,
    editorial: titulo.editorial,
    paginas: titulo.paginas
}});   
console.table(librosConMayorPaginas);
 
//Ordenar los libros por numero de paginas de mayor a menor
librosConMayorPaginas = libros.sort((a,b) =>b.paginas - a.paginas);
console.table(librosConMayorPaginas);
    
// Obtener un array de libros caros por titulo mayores de 11 dolares, resumirlos por titulo, autor, precio.
let librosCarosPorTitulosDesc = libros.filter((libro) =>{
    return libro.precio>11;
})
.map((titulo) => {
    return{
        titulo: titulo.titulo,
        autor: titulo.autor,
        precio: titulo.precio
    }
}
)
.sort((a,b)=> b.precio - a.precio);
console.table(librosCarosPorTitulosDesc);

// Realiza un resumen de libros que tengan menos de 100 paginas resumirlos por titulo, autor, editorial y paginas.
let libroMenosPaginas = libros.sort((a,b)=>b.paginas - a.paginas);
 libroMenosPaginas = libros.filter((libro)=>{
    return libro.paginas <100;
})
.map((titulo) => {
    return{
 titulo: titulo.titulo,
    autor: titulo.autor,
    editorial: titulo.editorial,
    paginas: titulo.paginas
    }
}
)
console.table(libroMenosPaginas)

// Realizar un resumen de libros caros mayores a 20 dolares de mayor a menor resumirlos por titulo, autor, precio.
librosCarosPorTitulosDesc = libros.filter((libro) =>{
    return libro.precio>20;
})
.map((titulo) => {
    return{
        titulo: titulo.titulo,
        autor: titulo.autor,
        precio: titulo.precio
    }
}
)
.sort((a,b)=> b.precio - a.precio);
console.table(librosCarosPorTitulosDesc);

// Realizar un resumen de libros por numero mas alto de paginas resumirlos por titulo, autor, editorial, paginas ordenados de mayor a menor.
 librosConMayorPaginas = libros.filter((a,b) =>b.paginas-a.paginas);
console.table(librosConMayorPaginas.map(titulo =>({
    titulo: titulo.titulo,
    autor: titulo.autor,
    editorial: titulo.editorial,
    paginas: titulo.paginas
})));   
break;
case "5":
    // let opcionBusqueda = prompt("Seleccione una opción de búsqueda:\n1. Por ISBN\n2. Por descripción\n3. Por formato\n4. Por peso\n5. Por precio\n6. Por estado\n7. Por ubicación\n8. Por número de páginas\n9. Por dimensiones\n10. Por editorial");
    menu = "Menu\n\n";
    menu += "1-Por ISBN\n";
    menu += "2-Por descripcion\n";
    menu += "3-Por formato\n";
    menu += "4-Por peso\n";
    menu += "5-Por precio \n";
    menu += "6-Por estado\n"
    menu += "7-Por ubicacion\n";
    menu += "8-Por numero de paginas\n";
    menu += "9-Por dimensiones\n";
    menu += "10-Por editorial\n\n";
    menu += "Seleccione una opcion de busqueda\n\n";
    numero = parseInt(prompt(menu));

            switch (opcionBusqueda) {
                case "1":
                    let isbnBusqueda = prompt("Ingrese el ISBN del libro:");
                    const libroPorISBN = buscarPorISBN(isbnBusqueda);
                    console.tatable(libroPorISBN);
                    break;
                case "2":
                    let descripcionBusqueda = prompt("Ingrese la descripción a buscar:");
                    const libroPorDescripcion = buscarPorDescripcion(descripcionBusqueda);
                    console.table(libroPorDescripcion);
                    break;
                case "3":
                    let formatoBusqueda = prompt("Ingrese el formato a buscar:");
                    const libroPorFormato = buscarPorFormato(formatoBusqueda);
                    console.table(libroPorFormato);
                    break;
                case "4":
                    let pesoBusqueda = prompt("Ingrese el peso a buscar:");
                    const libroPorPeso = buscarPorPeso(pesoBusqueda);
                    console.table(libroPorPeso);
                    break;
                case "5":
                    let precioBusqueda = prompt("Ingrese el precio a buscar:");
                    const libroPorPrecio = buscarPorPrecio(parseFloat(precioBusqueda));
                    console.table(libroPorPrecio);
                    break;
                case "6":
                    let estadoBusqueda = prompt("Ingrese el estado a buscar:");
                    const libroPorEstado = buscarPorEstado(estadoBusqueda);
                    console.table(libroPorEstado);
                    break;
                case "7":
                    let ubicacionBusqueda = prompt("Ingrese la ubicación a buscar:");
                    const libroPorUbicacion = buscarPorUbicacion(ubicacionBusqueda);
                    console.table(libroPorUbicacion);
                    break;
                case "8":
                    let paginasBusqueda = prompt("Ingrese el número de páginas a buscar:");
                    const libroPorNumeroPaginas = buscarPorNumeroPaginas(parseInt(paginasBusqueda));
                    console.table(libroPorNumeroPaginas);
                    break;
                case "9":
                    let dimensionesBusqueda = prompt("Ingrese las dimensiones a buscar:");
                    const libroPorDimensiones = buscarPorDimensiones(dimensionesBusqueda);
                    console.table(libroPorDimensiones);
                    break;
                case "10":
                    let editorialBusqueda = prompt("Ingrese la editorial a buscar:");
                    const libroPorEditorial = buscarPorEditorial(editorialBusqueda);
                    console.table(libroPorEditorial);
                    break;
                default:
                    console.table("Opción de búsqueda no válida.");
            }
    break;
       default:
        break;
    }
     
    
    
   
    
   
    
   
    
    
    


