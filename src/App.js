import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonFilter from './Filters/ButtonFilter'
import RangeFilter from './Filters/RangeFilter'
import Button from './Filters/Button'


//Forma
import assche from './Assets/Forma/asscher.png'
import baguette from './Assets/Forma/baguette.png'
import cojijn from './Assets/Forma/cojijn.png'
import corazon from './Assets/Forma/corazon.png'
import esmeralda from './Assets/Forma/esmeralda.png'
import marquesa from './Assets/Forma/marquesa.png'
import ovalo from './Assets/Forma/ovalo.png'
import pera from './Assets/Forma/pera.png'
import princesa from './Assets/Forma/princesa.png'
import radiante from './Assets/Forma/radiante.png'
import redondo from './Assets/Forma/redondo.png'
import trillon from './Assets/Forma/trillon.png'

//Color
import amarilloc from './Assets/Color/amarillo-claro.png'
import amarillol from './Assets/Color/ligeramente-amarillo.png'
import cincoloro from './Assets/Color/casi-incoloro.png'
import incoloro from './Assets/Color/incoloro.png'
//Claridad
import imp10x from './Assets/Claridad/imperfecciones-10x.png'
import impnv from './Assets/Claridad/imperfecciones-no-visibles.png'
import imp from './Assets/Claridad/imperfecciones-simple-vista.png'
import perfecta from './Assets/Claridad/perfecta.png'
//Corte
import bueno from './Assets/Corte/bueno.png'
import excelente from './Assets/Corte/excelente.png'
import muybueno from './Assets/Corte/muy-bueno.png'
import regular from './Assets/Corte/regular.png'

//Slider
import grande from './Assets/Quilataje/grande.png'
import pequeno from './Assets/Quilataje/pequeno.png'

function App() {
  
  const ogFilter = ([{name: "asscher", img: assche, active: false},{name: "baguette", img: baguette,active: false},{name: "cojijn", img: cojijn,active: false},{name: "corazon", img: corazon,active: false},{name: "esmeralda",img: esmeralda,active: false},{name: "marquesa", img: marquesa,active: false},{name: "ovalo",img: ovalo ,active: false},{name: "pera",img: pera,active: false},{name: "princesa",img: princesa,active: false},{name: "radiante",img:radiante,active: false},{name: "redondo",img: redondo,active: false},{name:"trillon",img: trillon,active: false}]);
  const[filter, setFilter] = useState(ogFilter)
  const ogColor = ([{name: "Amarillo Claro", img:amarilloc,active: false},{name:"Ligeramente Amarillo", img: amarillol,active: false},{name:"Casi Incoloro",img:cincoloro,active: false},{name: "Transparente",img:incoloro,active: false}])
  const[color,setColor] = useState(ogColor)
  const ogClaridad = ([{name: "Perfecta",img:perfecta},{name: "Imperfecciones no Visibles", img:impnv},{name:"Imperfecciones Visibles a 10X",img:imp10x},{name: "Imperfecciones a Simple Vista",img: imp}])
  const[claridad,setClaridad] = useState(ogClaridad)
  
  const ogCorte = ([{name:"Bueno",img:bueno,active: false},{name:"Excelente",img:excelente,active: false},{name:"Muy Bueno",img:muybueno,active: false},{name:"Regular",img:regular,active: false}])
  const[corte,setCorte] = useState(ogCorte)
  //let fill = filter;

  const [carat,setCarat] = useState([0,30]);
  const [price, setPrice] = useState([200,50000]);

  //console.log(filter)
  let fforma = ""
  let fcolor = ""
  let fclaridad = ""
  let fcorte = ""
  const getForma = (forma) => {
    fforma = forma;
  }
  const getColor = (forma) => {
    fcolor = forma;
  }
  const getClaridad = (forma) => {
    fclaridad = forma;
  }
  const getCorte = (forma) => {
    fcorte = forma;
  }
  const getActive = (array) =>{
    console.log(array);
    let active = ""
    array.map((elements)=>{
      //console.log(elements.name+" "+elements.active)
      if (elements.active == true) {
        //console.log("active "+elements.name)
        active = elements.name
      }
      
    })
    return active
  }
  const print=()=>{
    console.log(

      {
        shape: getActive(filter),
        color: getActive(color),
        claridad: getActive(claridad),
        corte: getActive(corte),
        caratMin:carat[0],
        caratMax:carat[1],
        priceMin:price[0],
        priceMax:price[1]


    })
  }
  const clear=()=>{
    setFilter(ogFilter)
    setColor(ogColor)
    setClaridad(ogClaridad)
    setCorte(ogCorte)
    setCarat([0,30])
    setPrice([200,50000])
  }
  return (
    <div className="App" class="container">
      <header className="App-header">
      <div class= "row">
      <div class="half">
        <ButtonFilter position={"left"} setState={setFilter} title = {{title:"Forma"}} fill = {filter} class= "col"/>
        <ButtonFilter position={"left"} setState={setColor} title = {{title:"Color"}} fill = {color} class= "col"/>
        <ButtonFilter position={"left"} setState={setClaridad} title = {{title:"Claridad"}} fill = {claridad} class = "col"/>
        </div>
        <div class="half">
        <ButtonFilter position={"right"} setState={setCorte} title = {{title:"Corte"}} fill = {corte} class = "col"/>
        <RangeFilter position={"right"} imgLeft = {pequeno} imgRight = {grande} title={"Quilataje"} from={0} to={30} range={carat} setRange={setCarat}/>
        <RangeFilter position={"right"} title={"Precio"} from={200} to={50000} range={price} setRange={setPrice}/>
        </div>
      </div>
      <div class="ButtonContainer">
      <Button colorB={"white"} colorA = {"#1724ab"}name={"Filtrar"} onClick={print}/>
      <Button colorB={"#1724ab"} colorA = {"white"}name={"Clear"} onClick={clear}/>
      
      </div>
      
      </header>
    </div>
  );
}

export default App;
