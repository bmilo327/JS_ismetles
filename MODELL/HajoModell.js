import { HAJOLISTA } from "./adatok.js";

export default class HajoModell{
    #lista= [];
    #kosarLista=[];
    constructor(){
        this.#lista=HAJOLISTA;
        this.#kosarLista=[];

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
        return SZURT;
    }

    getAdat(id){
        return this.#lista.find((a)=>{
            return a.id==id;
        });
    }

    getKosar(){
        return this.#kosarLista;
    }

    kosarbaTesz(id){
        const adat = this.getAdat(id);
        if (adat) {
            this.#kosarLista.push(adat);
        }
    }
}