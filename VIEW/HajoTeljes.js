export default class HajoTeljes {
    #obj= {};
    #szuloElem="";
    constructor(obj, szuloElem){
        this.#obj=obj;
        this.#szuloElem=szuloElem;
        //console.log(this.#szuloElem)
        this.megjelenit();
        this.buttonElem=document.querySelector(".hajo:last-child button");
        console.log(this.buttonElem);
        this.esemenykezelo();
    }

    megjelenit(){
        const SZOVEG=`
        <div class="hajo">
            <h2>${this.#obj.nev}</h2>
            <p><span>Kapitány neve: ${this.#obj.kapitany}</span></p>
            <p><span>Hajó színe: ${this.#obj.szin}</span></p>
            <p><span>Valódi-e: ${this.#obj.valodi}</span></p>
            <p><span>${this.#obj.leiras}</span></p>
            <button>Kosárba</button>
        </div>`;
        this.#szuloElem.insertAdjacentHTML("beforeend", SZOVEG);
    }

    esemenykezelo(){
        this.buttonElem.addEventListener("click", ()=>{
            const e = new CustomEvent("kosarba", {detail:this.#obj.id});
            window.dispatchEvent(e);
            console.log(this.#obj)
        })
    }
}