"use strict";
// Pure calculation; no storage, tracking or network requests.
function calculateNeed(values) {
  const limits = { expenses:100000, income:100000, debt:10000000, assets:10000000, coverage:10000000, extra:1000000, years:40 };
  for (const [key, max] of Object.entries(limits)) {
    if (!Number.isFinite(values[key]) || !Number.isInteger(values[key]) || values[key] < (key === "years" ? 1 : 0) || values[key] > max) throw new Error("Bitte gib gültige ganze Zahlen innerhalb der Eingabegrenzen ein.");
  }
  const gap = Math.max(0, values.expenses - values.income);
  const replacement = gap * 12 * values.years;
  const deductions = values.assets + values.coverage;
  return {gap, replacement, deductions, total:Math.max(0, replacement + values.debt + values.extra - deductions)};
}
if (typeof module !== "undefined") module.exports = { calculateNeed };
if (typeof document !== "undefined") {
 const form = document.getElementById("calculator-form");
 const euro = value => new Intl.NumberFormat("de-DE", {style:"currency",currency:"EUR",maximumFractionDigits:0}).format(value);
 function update() {
   document.getElementById("years-value").textContent = document.getElementById("years").value;
   if (!form.checkValidity()) { document.getElementById("error").textContent="Bitte korrigiere die markierten Eingaben. Das Ergebnis zeigt noch die letzte gültige Berechnung."; return false; }
   try {
     const values = Object.fromEntries(["expenses","income","debt","assets","coverage","extra","years"].map(id=>[id,Number(document.getElementById(id).value)]));
     const r = calculateNeed(values);
     for (const [id,value] of Object.entries({total:r.total,gap:r.gap,replacement:r.replacement,"debt-result":values.debt,"extra-result":values.extra,deductions:-r.deductions})) document.getElementById(id).textContent=euro(value);
     document.getElementById("result-caption").textContent=r.total === 0 ? "Unter diesen Annahmen kein zusätzlicher rechnerischer Bedarf" : "Zusätzlicher rechnerischer Absicherungsbedarf";
     document.getElementById("error").textContent="";
     return true;
   } catch (error) { document.getElementById("error").textContent=error.message; return false; }
 }
 form.addEventListener("input",update);
 form.addEventListener("submit",event=>{event.preventDefault();if(update()) document.querySelector(".result").scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto":"smooth",block:"center"});});
 document.getElementById("reset").addEventListener("click",()=>{form.reset();update();});
 document.getElementById("print").addEventListener("click",()=>{if(update()) window.print();else form.reportValidity();});
 update();
}
