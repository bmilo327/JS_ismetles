import { HAJOLISTA } from "./adatok.js";

export default class HajoModell{
    #lista= [];
    constructor(){
        this.#lista=HAJOLISTA;

    }

    getLista(){
        return this.#lista;
    }

    rendezLista(){
        return this.#lista.sort((a,b)=>{
            if (a.nev > b.nev) {
                return 1;
            }else {
                return -1;
            }
        })
    }

    szurtLista(){
        const SZURT=this.#lista.filter((a)=>{
            return a.valodi==false;
        });
        return SZURT
    }

    getAdat(id){
        return this.#lista.find((a)=>{
            return a.id==id;
        });
    }

    getKosar(){

    }
}