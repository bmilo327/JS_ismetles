import Hajo from "./Hajo.js";

export default class Hajok{
    #lista=[];
    #szuloElem="";
    constructor(lista, szuloElem) {
        this.#lista=lista;
        this.#szuloElem=szuloElem;
        this.megjelenit();
    }

    megjelenit(){
        this.#lista.forEach((elem, index)=>{
            new Hajo(elem, this.#szuloElem);
        })
    }
}