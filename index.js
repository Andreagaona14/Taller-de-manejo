let libros = [
    {
        titulo: "Bajo la misma estrella",
        autor: "John Green",
        genero: "Novela",
        idioma : "Ingles",
        precio : 130000,
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
        precio : 190000,
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
        precio : 169000,
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
        precio : 178000,
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
        precio : 142000,
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
        precio : 128000,
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
        precio : 360000,
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
        precio : 236000,
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
        precio : 336000,
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
        precio : 153000,
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
        precio : 399000,
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
        precio : 456300,
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
        precio : 966000,
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
        precio : 789500,
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
        precio : 13.99,
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
        precio : 10.99,
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
        precio : 8.50,
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
        precio : 12.99,
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
        precio : 14.95,
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
        precio : 19.99,
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
        peso : "408 Gramos",
    
    }
    
    
    // agregar un libro
    libros.push("nuevoLibro");
    console.log(libros.length);
    
    // eliminar un libro
    let deleted = libros.pop()
    console.log(deleted);
    
    // mostrar la pila
    libros.forEach((libro,index)=>{
        console.log("libro " + (index+1) +" Titulo: "+  (libro.titulo) +   " Autor: " +   (libro.autor) + " Genero: " + (libro.genero) + " Idioma: " + (libro.idioma) + " Precio: " + (libro.precio) + " Formato: " + (libro.formato) + " ISBN: " + (libro.isbn) + " Descripcion: " + (libro.descripcion) + " Estado: " + (libro.estado) + " Ubicacion:" + (libro.ubicacion) + " Fecha de publicacion: " + (libro.fecha_publicacion) + " Editorial: " + (libro.editorial) + "Paginas: " + (libro.paginas) + " Dimensiones: "  + (libro.dimensiones)) ;
    }
    )
    // menu
    
    let continuar= "si"
    while (continuar === "si") {
        let menu= prompt("que quieres hacer \n1. ver libros disponibles\n2.agregar nuevo libro\n3.borrar un libro");
        switch (menu) {
            case "1":
                let decision= prompt("deseas ver los demas datos")
                if (decision === "si") {
                    libros.forEach((libro,index) =>{
                        console.log(`${index } titulo : ${libro.titulo} autor : ${libro.autor} genero : ${libro.genero} idioma : ${libro.idioma} formato: ${libro.formato } isb: ${libro.isbn} descripcion: ${libro.descripcion} estado: ${libro.estado} ubicacion: ${libro.ubicacion}  fecha de publicacion : ${libro.fecha_publicacion} editorial : ${libro.editorial} paginas: ${libro.paginas} dimensiones: ${libro.dimensiones} peso: ${libro.peso}`);
                    })
                }else{
                    libros.forEach((libro,index) =>{
                        console.log(`${index } titulo : ${libro.titulo}`);
                    })
                }
                break;
            case "2":
                let nuevo = {
                    titulo: prompt("titulo"),
                    autor: prompt("autor"),
                    genero: prompt("genero"),
                    idioma: prompt("idioma"),
                    formato: prompt("formato"),
                    isbn: prompt("isbn"),
                    descripcion: prompt("descripcion"),
                    estado: prompt("estado"),
                    ubicacion: prompt("ubicacion"),
                    fecha_publicacion: prompt("fecha de bublicacion  "),
                    editorial: prompt("editorial"),
                    paginas:prompt("paginas"),
                    dimensiones: prompt("dimensiones"),
                    peso: prompt("peso")
                }
                libros.push(nuevo)
                console.log("agregado con exito");
                libros.forEach((libro,index) =>{
                    console.log(`${index} titulo : ${libro.titulo}`);
                })
                break;
    case "3":
                    let indice=parseInt(prompt("ingresa el numero de el libro que quieres borrar"))
                    libros.splice(indice, 1)
                    console.log("borrado con exito");
                    break;
            default:
                break;
        }
        continuar= prompt("Deseas continuar")
    }
    
    
    let editorial = libros.map((libro)=>{
        return{
         editorial: libro.editorial,
            
        }
    }
    )
    console.table(editorial)
    
    // Realizar uso del array Method .map y listar los libros por Titulo, Autor, Editorial y Precio
    let titulo = libros.map((libro)=>{
        return{
            titulo: libro.titulo,
            autor: libro.autor,
            editorial: libro.editorial,
            precio: libro.precio
        }
    }
    )
    console.table(titulo)
    
    // Crear 10 iteraciones diferentes manteniendo el atributo Titulo
     titulo = libros.map((libro)=>{
        return{
            titulo: libro.titulo,
            genero: libro.genero,
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
    
    
    
    
    
    