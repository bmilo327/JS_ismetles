import HajoModell from "../MODELL/HajoModell.js";
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
        this.#hajoView=new Hajok(this.#hajoModell.getLista(), this.ARTICLEELEM);
        console.log(this.#hajoModell.rendezLista());
        console.log(this.#hajoModell.szurtLista());
        this.szuresRendezesEsemenykezelok();
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
        window.addEventListener("leiras", (event)=>{
            console.log(event.detail);
            const adat = this.#hajoModell.getAdat(event.detail);
            console.log(adat);
            this.ARTICLEELEM.innerHTML="";
            new HajoTeljes(adat, this.ARTICLEELEM);
        });
        window.addEventListener("kosarba", (event)=>{
            console.log(event.detail);
            const adat = this.#hajoModell.getAdat(event.detail);
            console.log(adat);
            this.ARTICLEELEM.innerHTML="";
            new HajoTeljes(adat, this.ARTICLEELEM);
        });
    }
}