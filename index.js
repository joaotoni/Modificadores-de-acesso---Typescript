var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Hotel = /** @class */ (function () {
    function Hotel(suite_presidencial, quartos, funcionarios, café_da_manha, almoço, jantar, piscinas, parque_de_diversão, garagem, hospedes, precos) {
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
            this.hospedes = hospedes;
    }
    Object.defineProperty(Hotel.prototype, "hospedagem", {
        get: function () {
            return this.hospedes * this.precos;
        },
        enumerable: false,
        configurable: true
    });
    return Hotel;
}());
var hotel_Olivença = new Hotel(true, 26, 26, true, false, true, true, true, 32, 14, 850);
console.log(hotel_Olivença.hospedagem);
console.log(hotel_Olivença);
var Resorte = /** @class */ (function (_super) {
    __extends(Resorte, _super);
    function Resorte(suite_presidencial, quartos, funcionarios, café_da_manha, almoço, jantar, piscinas, parque_de_diversão, garagem, hospedes, precos, bloco) {
        var _this = _super.call(this, suite_presidencial, quartos, funcionarios, café_da_manha, almoço, jantar, piscinas, parque_de_diversão, garagem, hospedes, precos) || this;
        _this.bloco = bloco;
        return _this;
    }
    return Resorte;
}(Hotel));
var Resorte_Carioca = new Resorte(false, 60, 120, true, true, true, true, true, 170, 80, 2500, "A");
console.log(Resorte_Carioca);
console.log(Resorte_Carioca.hospedagem);
