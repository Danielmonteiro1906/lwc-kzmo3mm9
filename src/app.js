import { LightningElement } from "lwc";

export default class App extends LightningElement {
 pessoas = {
   nome: "Daniel",
   tel: "1556684",
   idade:  41,
   status: true
 };

 pokemons = [
      {cod: 1, nome: "Pikachu", tipo:"raio", nivel:52},
      {cod: 2, nome: "Charmander", tipo:"fogo", nivel:35},
      {cod: 3, nome: "Chicorita", tipo:"planta", nivel:21},
      {cod: 4, nome: "Mew", tipo:"Psiquico", nivel:11},
      {cod: 5, nome: "Charizard", tipo:"fogo", nivel:26},
      {cod: 6, nome: "Taurus", tipo:"Normal", nivel:46},
      {cod: 7, nome: "Articuno", tipo:"lendário", nivel:12}
    ];

    cavernaDragao = [
      {cod: 1, nome: "Hank", arma:"arco mágico", forca:78, agilidade: 81, inteligencia: 87, estamina:90},
      {cod: 2, nome: "Eric", arma:"Escudo mágico", forca:32, agilidade: 21, inteligencia: 27, estamina:50},
      {cod: 3, nome: "Diana", arma:"Bastão mágico", forca:62, agilidade: 97, inteligencia: 82, estamina:90},
      {cod: 4, nome: "Sheila", arma:"Capuz mágico", forca:22, agilidade: 92, inteligencia: 82, estamina:66},
      {cod: 5, nome: "Presto", arma:"Chapéu de Feiticeiro", forca:20, agilidade: 72, inteligencia: 68, estamina:48},
      {cod: 6, nome: "Bobby ", arma:"tacape mágico", forca:99, agilidade: 82, inteligencia: 78, estamina:42},
      {cod: 7, nome: "Mestre dos Magos ", arma:"Mestre em mágias", forca:100, agilidade: 98, inteligencia: 99, estamina:40},
      {cod: 8, nome: "Vingador ", arma:"feiticeiro do mal", forca:97, agilidade: 98, inteligencia: 95, estamina:82},

    ]
}
