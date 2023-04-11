/* variables dom */
const $title_1 = document.querySelector('#title_1')
const $title_2 = document.querySelector('#title_2')
const $title_3 = document.querySelector('#title_3')
const $subtitle_1 = document.querySelector('#subtitle_1')
const $subtitle_2 = document.querySelector('#subtitle_2')
const $subtitle_3 = document.querySelector('#subtitle_3')
const $p_1 = document.querySelector('#p_1')
const $p_2 = document.querySelector('#p_2')
const $p_3 = document.querySelector('#p_3')
/* contenedores img */
const $divImg_1 = document.querySelector('#divImg_1')
const $divImg_2= document.querySelector('#divImg_2')
const $divImg_3 = document.querySelector('#divImg_3')

/* crear */
const imagen_1 = document.createElement('img')
const imagen_2= document.createElement('img')
const imagen_3 = document.createElement('img')

/* api */

const dataApi = async ()=>{
    const data = await fetch('https://rickandmortyapi.com/api/character/?page=19')
    console.log("respuesta...")
    console.log(data)
    const json = await data.json()
    console.log("procesando...")
    console.log(json.results[0])
    const respuesta_1 = json.results[0]
    const respuesta_2 = json.results[1]
    const respuesta_3 = json.results[3]
    /* views */
    /* title */
    $title_1.innerHTML = respuesta_1.name
    $title_2.innerHTML = respuesta_2.name
    $title_3.innerHTML = respuesta_3.name
    /* subtitle */
    $subtitle_1.innerHTML = respuesta_1.created
    $subtitle_2.innerHTML = respuesta_2.created
    $subtitle_3.innerHTML = respuesta_3.created
    /* p */
    $p_1.innerHTML = respuesta_1.type
    $p_2.innerHTML = respuesta_2.type
    $p_3.innerHTML = respuesta_3.type

    imagen_1.setAttribute('src', respuesta_1.image)
    imagen_2.setAttribute('src', respuesta_2.image)
    imagen_3.setAttribute('src', respuesta_3.image)
    /* jerarquia */
    $divImg_1.appendChild(imagen_1)
    $divImg_2.appendChild(imagen_2)
    $divImg_3.appendChild(imagen_3)

}
dataApi()