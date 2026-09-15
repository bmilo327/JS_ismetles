import HajoModell from "../MODELL/HajoModell.js";
import HajoKompakt from "../VIEW/HajoKompakt.js";
import Hajok from "../VIEW/Hajok.js";
import HajoTeljes from "../VIEW/HajoTeljes.js";

export default class HajoController{

    #hajoModell={};
    #hajoView={};

    constructor(){
        this.#hajoModell=new HajoModell();
        this.ARTICLEELEM=document.querySelectorAll(".tarolo")[0];
        this.rendezGomb=document.querySelector(".rendezNev");
        this.szuresGomb=document.querySelector(".szuresFilm");
        this.KOSARELEM=document.querySelectorAll(".kosarTartalom")[0];
        this.#hajoView=new Hajok(this.#hajoModell.getLista(), this.ARTICLEELEM);
        console.log(this.#hajoModell.rendezLista());
        console.log(this.#hajoModell.szurtLista());
        this.szuresRendezesEsemenykezelok();
        this.leirasKosarEsemenykezelok();
    }

    szuresRendezesEsemenykezelok(){
        this.rendezGomb.addEventListener("click", ()=>{
            this.ARTICLEELEM.innerHTML="";
            new Hajok(this.#hajoModell.rendezLista(), this.ARTICLEELEM);
        });
        this.szuresGomb.addEventListener("click",()=>{
            this.ARTICLEELEM.innerHTML="";
            new Hajok(this.#hajoModell.szurtLista(), this.ARTICLEELEM);
        });
    }

    leirasKosarEsemenykezelok(){
         window.addEventListener("leiras", (event)=>{
            console.log(event.detail);
            const adat = this.#hajoModell.getAdat(event.detail);
            console.log(adat);
            this.ARTICLEELEM.innerHTML="";
            new HajoTeljes(adat, this.ARTICLEELEM);
        });
        window.addEventListener("vissza", ()=>{
            this.ARTICLEELEM.innerHTML="";
            new Hajok(this.#hajoModell.getLista(), this.ARTICLEELEM);
        });
        window.addEventListener("kosarba", (event)=>{
            this.#hajoModell.kosarbaTesz(event.detail);
            this.KOSARELEM.innerHTML = "";
            const kosar = this.#hajoModell.getKosar();
            kosar.forEach((elem)=>{
                new HajoKompakt(elem, this.KOSARELEM);
            })
        });
    }
}