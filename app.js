// gerado por site_real.js — roda no cliente, sem dependencias
"use strict";

document.getElementById("ano").textContent = new Date().getFullYear();

// exemplo real de utilidade: calcula o proximo aniversario em dias
function diasAte(mes, dia) {
  const hoje = new Date();
  const alvo = new Date(hoje.getFullYear(), mes - 1, dia);
  if (alvo < hoje) alvo.setFullYear(hoje.getFullYear() + 1);
  return Math.ceil((alvo - hoje) / 86400000);
}

let n = 0;
document.getElementById("btn").addEventListener("click", () => {
  n += 1;
  const d = diasAte(1, 1);
  document.getElementById("saida").textContent =
    `clique #${n} · faltam ${d} dia(s) para 1 de janeiro · ` +
    `resolucao ${window.screen.width}x${window.screen.height}`;
});
