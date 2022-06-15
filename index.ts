class hotel {
    suite_presidencial: boolean;
    quartos : number;
    funcionarios: number;
    café_da_manha: boolean;
    almoço: boolean;
    jantar: boolean;
    piscinas: boolean;
    parque_de_diversão: boolean;
    garagem: number;
    hospedes : number;
    private precos: number;

    constructor(suite_presidencial: boolean,quartos : number,funcionarios: number,café_da_manha: boolean,
        almoço: boolean,jantar: boolean,piscinas: boolean,parque_de_diversão: boolean,garagem: number,hospedes: number, precos: number){
    
            this.suite_presidencial = suite_presidencial,
            this.quartos = quartos,
            this.funcionarios = funcionarios,
            this.café_da_manha = café_da_manha,
            this.almoço = almoço,
            this.jantar = jantar,
            this.piscinas = piscinas,
            this.parque_de_diversão = parque_de_diversão,
            this.garagem = garagem,
            this.precos = precos,
            this.hospedes = hospedes
    }

    get hospedagem(){
        return  this.hospedes * this.precos
    }
}

const hotel_olivença = new hotel(true ,26 ,26 ,true , false, true, true, true, 32, 14, 850)

console.log(hotel_olivença.hospedagem);
console.log(hotel_olivença);


class resorte extends hotel{
    protected bloco: string;
    constructor(suite_presidencial: boolean,quartos : number,funcionarios: number,café_da_manha: boolean,
        almoço: boolean,jantar: boolean,piscinas: boolean,parque_de_diversão: boolean,garagem: number,hospedes: number, precos: number, bloco: string){
            super(suite_presidencial, quartos, funcionarios,café_da_manha, almoço, jantar, piscinas, parque_de_diversão, garagem, hospedes, precos);
            this.bloco = bloco;
        }
}

const resorte_Carioca = new resorte(false, 60, 120, true, true, true, true, true, 170, 80, 2500, "A");

console.log(resorte_Carioca);
console.log( resorte_Carioca.hospedagem);

