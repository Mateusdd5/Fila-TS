"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fila = void 0;
var Fila = /** @class */ (function () {
    function Fila() {
        this.itens = [];
    }
    Fila.prototype.adicionar = function (item) {
        this.itens.push(item);
    };
    // Remove o item mais antigo da fila
    Fila.prototype.remover = function () {
        return this.itens.shift();
    };
    Fila.prototype.exibir = function () {
        console.log("Fila:", this.itens);
    };
    return Fila;
}());
exports.Fila = Fila;
