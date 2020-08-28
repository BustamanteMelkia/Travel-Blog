// window.addEventListener('load',function(){
    // Obtener todos los enlaces y asignarles una nueva clase
    // let enlaces = document.getElementsByTagName('a');
    // for(let i = 0; i< enlaces.length; i++){
    //     enlaces[i].setAttribute('class','new');
    // }


    /**Seleccionar los enlaces del sidebar y modificar las url's para que apunten a Google*/
    // let enlacesSideBar= document.getElementById('sidebar').getElementsByTagName('a');
    // for(let i =0; i<enlacesSideBar.length; i++){
    //     enlacesSideBar[i].setAttribute('target','_blank');
    //     enlacesSideBar[i].setAttribute('href','http://www.google.com');
    // }



    // query selector
    // let logo =  document.querySelector('#logo');
    // console.log(logo);
    //______________________________________________________________________________________________
    /** obtener un h2 en el documento, al haber varios h2 en el document, querySelector sólo nos devuelve 
     * el primer hijo, si queremos obtener todos los h2, podemos poner: querySelectorAll 
     * En el siguiente ejemplo, obtenemos el primero h2 y mostramos su contenido usando la propiedad 
     * innerText**/
    // let hdos = document.querySelector('h2');
    // console.log(hdos.innerText);

    //________________________________________________________________________________________

    // let enlaces = document.querySelectorAll('.navegacion-principal a');
    // console.log(enlaces[0].nodeType);
    // console.log(enlaces[0].attributes);
    // enlaces[0].firstChild.nodeValue = 'Melkia';

    //___________________________________________________________________________________________

    // Create Element
    // let sidebar = document.querySelector('#sidebar');
    // let newElement = document.createElement('h1');

    // let texto = document.createTextNode('melkia bus');
    // newElement.appendChild(texto)   //o simplemente newElemento.appemd('melkia bus');
    
    // sidebar.append(newElement);


    //____________________________________________________________________________________________
    // Crear un nuevo enlace en el sidebar
    // let enlaces = document.querySelector('.sidebar section ul');

    // //creando el enlace: a
    // let enlace = document.createElement('a');
    // enlace.append('Entrada 6');
    // enlace.setAttribute('href','#');

    // let itemLi = document.createElement('LI');
    // itemLi.appendChild(enlace);

    // enlaces.appendChild(itemLi);


    // _____________________________________________________________________________________________
    // // Clonar el sidebar:
    // let sidebar = document.querySelector(".sidebar");
    // let nuevoSidebar =  sidebar.cloneNode(true);
    // console.log(nuevoSidebar);
    
    // //Agregar el sidebar clonado al footer
    // let itemFooter = document.querySelector('.site-footer');
    // console.log(itemFooter);
    // itemFooter.insertBefore(nuevoSidebar, itemFooter.childNodes[2]);


    // Obtener los post y colocarlos en etiquetas li
    /*
    let hdos =  document.createElement('h2');
    hdos.append("Títulos de posts");
    
    let sidebar = document.querySelector('.sidebar');
    sidebar.insertBefore(hdos, sidebar.childNodes[0]);//inserción controlada, primer param: item, segundo: pos

    let titlePosts =  document.querySelectorAll('main h2');
    for(let i=0; i<titlePosts.length; i++){
        let p = document.createElement('p');
        p.append( titlePosts[i].firstChild.nodeValue);
        sidebar.insertBefore(p, sidebar.childNodes[1]);
    }
    */

    // ____________________________________________________________________________________
    // Eliminar elemento (post)
    /*
    let post = document.querySelector('main article');
    console.log(post);
    post.parentNode.removeChild(post);
    */

    //_____________________________________________________________________________________
    //Reemplazar nodo
    /*
    let nodoviejo = document.querySelector('main h2');
    console.log(nodoviejo);
    let nodonuevo =  document.querySelector('footer h2');
    console.log(nodonuevo);
    nodoviejo.parentNode.replaceChild(nodonuevo, nodoviejo);
    */

    //remplazo por un nuevo nodo
    /* 
    let encabezadoPost = document.createElement('h1');
    encabezadoPost.append("Nuevo Texto");
    let nodoviejo = document.querySelector('main h2');
    nodoviejo.parentNode.replaceChild(encabezadoPost,nodoviejo);

    **/

// });