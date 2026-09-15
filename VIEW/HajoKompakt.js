export default class HajoKompakt {
    #obj={};
    #szuloElem="";
    constructor(obj, szuloElem){
        this.#obj=obj;
        this.#szuloElem=szuloElem;
        this.megjelenit();
    }

    megjelenit(){
        const SZOVEG=`
        <div class="hajo">
            <h4>${this.#obj.nev}</h4>
            <p>Kapitány neve: ${this.#obj.kapitany}</p>
        </div>`;
        this.#szuloElem.insertAdjacentHTML("beforeend", SZOVEG);
    }
}