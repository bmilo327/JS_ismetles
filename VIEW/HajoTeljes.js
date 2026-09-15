export default class HajoTeljes {
    #obj= {};
    #szuloElem="";
    constructor(obj, szuloElem){
        this.#obj=obj;
        this.#szuloElem=szuloElem;
        //console.log(this.#szuloElem)
        this.megjelenit();
        this.kosarButtonElem=this.#szuloElem.querySelector(".kosarButton");
        this.visszaButtonElem=this.#szuloElem.querySelector(".visszaButton");
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
            <button class="kosarButton">Kosárba</button>
        </div>
        <button class="visszaButton">Vissza</button>`;
        this.#szuloElem.insertAdjacentHTML("beforeend", SZOVEG);
    }

    esemenykezelo(){
        this.kosarButtonElem.addEventListener("click", ()=>{
            const e = new CustomEvent("kosarba", {detail:this.#obj.id});
            window.dispatchEvent(e);
            console.log(this.#obj)
        });
        this.visszaButtonElem.addEventListener("click", ()=>{
            const e = new CustomEvent("vissza");
            window.dispatchEvent(e);
        });
    }
}