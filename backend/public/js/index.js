// form.js

// Definim un JSON de mòduls per cicle i curs
const moduls = {
    DAM: {
        1: ["Programació",
            "Bases de Dades",
            "Sistemes Informàtics",
            "Entorns de Desenvolupament",
            "Llenguatges de Marques i Sistemes de Gestió de la Informació",
            "Projecte Intermodular I",
            "Anglès Professional I",
            "Itinerari Personal per a l'Ocupabilitat I"],
        2: ["Accés a Dades", 
            "Desenvolupament d'Interfícies", 
            "Programació Multimèdia i Dispositius mòbils",
            "Programació de Serveis i Processos",
            "Sistemes de Gestió Emprssarial",
            "Projecte Intermodular II",
            "Itinerari Personal per a l'Ocupabilitat II"]
    },
    DAW: {
        1: ["Programació",
            "Bases de Dades",
            "Sistemes Informàtics",
            "Entorns de Desenvolupament",
            "Llenguatges de Marques i Sistemes de Gestió de la Informació",
            "Projecte Intermodular I",
            "Anglès Professional I",
            "Itinerari Personal per a l'Ocupabilitat I"],
        2: ["Desenvolupament Web en entorn client",
            "Desenvolupament web en entorn servidor", 
            "Desplegament d'aplicacions web",
            "Disseny d'interfícies web",
            "Projecte Intermodular II",
            "Itinerari Personal per a l'Ocupabilitat II"]
    }
};

// Referències als elements del formulari
const cicleSelect = document.getElementById('cicle');
const cursRadios = document.getElementsByName('curs');
const modulsFieldset = document.getElementById('modulsFieldset');
const form = document.getElementById('matriculaForm');

// Funció per actualitzar els mòduls
function actualitzarModuls() {
    // 
    const cicle = cicleSelect.value;

    // cursRadios és un NodeList (hem fet un getElementsByName), i no un vector
    // Amb l'operador ... (conegut com spread), convertim aquest nodelist en un vector
    // Amb el vector ja podem fer ús del mètode find.
    // 
    // Amb el find(radio=>radio.checked) el que fem és buscar quin dels radios està checked
    // Amb l'opció seleccionada (checked), ens quedem amb el se value (i per tant, ja tenim el curs)
    const curs = [...cursRadios].find(radio => radio.checked)?.value;

    // MODO DEPURAR
    console.log("Cicle seleccionant:", cicle);
    console.log("Curs seleccionant:", curs);

    // Si falta informació no fem res
    if (!cicle || !curs) return;

    // Netegem els mòduls anteriors
    modulsFieldset.innerHTML = '<legend>Mòduls</legend>';
    var llistaModulsDiv=document.createElement('div');
    llistaModulsDiv.classList.add("llistaModuls");
    modulsFieldset.appendChild(llistaModulsDiv);

    // TODO >>
        /*
        Recorre els diferents mòduls del cicle i curs seleccionat, i crea 
        el corresponent label i checkbox, amb l'estructura:
        <label>
            <input type="checkbox" name="moduls" value="Programació"> Programació
        </label>
        */
    
    /*
    Obtendremos los módulos del ciclo y curso seleccionando y almacenando en una variable.
    Se ha usado if anidados para comprobar cada uno de los ciclos y curso del modulo. En caso de que falle,
    esta se dejará vacio
    */

    let modulsSeleccionats; // Creamos variable para almacenar los módulos del ciclo => array

    // COMPROBACIÓN
    if (moduls[cicle]) { // Comprobamos si existe el ciclo
        if (moduls[cicle][curs]) { // Comprobar si existe el curso dentro del ciclo
            modulsSeleccionats = moduls[cicle][curs]; // Asignamos los modulos
            
            console.log("Modulos seleccionados:", modulsSeleccionats);// DEBUG
        } else {
            modulsSeleccionats = []; // Si no hay curso, dejamos array/vector vacio
        }
    } else {
        modulsSeleccionats = []; // Si no hay ciclo, dejamos array/vector vacio
    }

    // Comprobamos si hay modulos para mostrar y si tiene información dentro la variable que almacena la info de los modulos seleccionados
    if (modulsSeleccionats) {
        if (modulsSeleccionats.length > 0) {
            // Recorremos cada módulo del array/vector usando un bucle for ya que es finitio
            for (let i = 0; i < modulsSeleccionats.length; i++) { // Adaptamos el for defect al nuestro                
                const modul = modulsSeleccionats[i];
                
                const etiqueta = document.createElement('label');// Creamos un elemento <label> (HTML) para cada módulo obtenido al recorrer el for
                
                console.log("Modulos seleccionados:", modul);// DEBUG
                
                // Crear la estrucutra del html con innerHTML
                etiqueta.innerHTML = `<input type="checkbox" name="moduls" value="${modul}" checked> ${modul}`; // Añadido checked activo en las listas de módulos
                
                llistaModulsDiv.appendChild(etiqueta); // Añadimos el label (eriqueta) al contendor llistaModulsDiv
            }
        } else {
            console.log("Datos no encontrado")
        }
    } else {
        console.log("No hay datos");
    }
}

// Escoltem canvis en la selecció de cicle/curs
cicleSelect.addEventListener('change', actualitzarModuls);
cursRadios.forEach(radio => radio.addEventListener('change', actualitzarModuls));

// Enviar el formulari
form.addEventListener('submit', async (e) => {
    // Inhibim l'enviament automàtic del formulari
    e.preventDefault();

    // Agafem les dades del formulari en formData, com a parells clau/valir
    // Podeu consultar la documentació de la finterfície FormData en: 
    // https://developer.mozilla.org/en-US/docs/Web/API/FormData
    // Per agafar les propietats des d'aquesta interfície fem ús de form.get('nom_del_camp_del_formulari')

    const formData = new FormData(form);

    // TODO:
        /*
        Prepara un objece JSON amb la informació guardada al formulari
        */
    
    // Preparamos el objeto JSON con los datos guardados del formulario para enviarlos al srv    
    const jsonData = {
        nom: formData.get("nom"), // Nombre del alumno
        cognoms: formData.get("cognoms"), // Apellido del alumno
        email: formData.get("email"), // Correo electrónico del alumno
        adreca: formData.get("adreca"), // Dirección del alumno
        telefon: formData.get("telefon"), // Teléfono del alumno
        cicle: formData.get("cicle"), // Obtendremos el valor del ciclo
        curs: formData.get("curs"), // Obtendremos el valor del curso
        moduls: formData.getAll("moduls") // Obtendremos todos los modulos seleccionados
    }
    
    // todo >>
    // Preparem l'objecte amb les dades per enviar al servidor
    // I l'enviem, fent ús d'una petició POST
    // Recordeu convertir el JSON a un string per enviar-lo al servidor
    // Una vegada rebuda la resposta, creeu una URL amb ell, un enllaç
    // i forceu el clic en ell per descarregar el document.

    /* Ayuda para construir siguiendo un ejemplo
    https://github.com/joamuran/webapp_eljust_eat_pizza/blob/main/Sprint5_Backend/readme.md
    https://github.com/joamuran/webapp_eljust_eat_pizza/tree/main/Sprint5
    */
    try {

        /*
        * Construimos la estructura POST para enviar a una URL especifica
        * La url la podemos encontrar en el fichero ../backed/index.js
        * LInea >> app.post('/enviar-matricula', async (req, res) => { ...
        */

        const response = await fetch('/enviar-matricula', { //mejor sin el dominio delante
            method: 'POST', // Indicamos el tipo de petición
            headers: { // Indicar propiedades ...
                'Content-Type': 'application/json' // Especifica que enviem JSON
            },
            body: JSON.stringify(jsonData) // Tranformamos el jsonData en una string
        });
        
        // En caso de que 'response' no fuera valida
        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }
        
        /* >>>> BLOB <<<<
        * Convertimos la respuesta (response == promise) en un fichero Blob
        * Blob >> objeto tipo fichero de datos planos inmutables
        * https://developer.mozilla.org/es/docs/Web/API/Blob
        */

        const blob = await response.blob(); // Guardamos la respuesta

        // Creamos un objeto URL temporal con el blob para acceder a ella
        const url = URL.createObjectURL(blob);
        
        // Creamos un enlace y lo descargamos
        const a = document.createElement('a');
        a.href = url;
        a.download = "matricula.pdf"; // Nombre del archivo descargado
        document.body.appendChild(a); // Añadimos el enlace al documento
        a.click(); // Forzamos el clic para iniciar la descarga
        a.remove(); // Eliminamos la url del DOM para limpiar al page
        URL.revokeObjectURL(url); // Liberamos la memoria asociadao a la URL creada con el Blob
    }
    catch (error) {
        console.log("Error al enviar el formulario:", error)
    }
});
