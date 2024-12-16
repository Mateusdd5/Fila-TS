"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Fila_1 = require("./Fila");
var fila = new Fila_1.Fila();
fila.adicionar(10);
fila.adicionar(20);
fila.adicionar(30);
fila.adicionar(40);
fila.adicionar(50);
fila.adicionar(60);
fila.adicionar(70);
fila.adicionar(80);
// Itens da fila após inserção
console.log("Itens na fila após inserção:");
fila.exibir();
fila.remover();
fila.remover();
// Itens da fila após remoção
console.log("Itens na fila após remoção de dois itens:");
fila.exibir();
