
const monedaEl_one = document.getElementById('moneda-uno');
const monedaEl_two = document.getElementById('moneda-dos');
const cantidadEl_one = document.getElementById('cantidad-uno');
const cantidadEl_two = document.getElementById('cantidad-dos');
const cambioEl = document.getElementById('cambio');
const tazaEl = document.getElementById('taza');



function calculate() {
    const moneda_one = monedaEl_one.value;
    const moneda_two = monedaEl_two.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_one}`)
        .then(res => res.json())
        .then(data => {
            const taza = data.rates[moneda_two];

            cambioEl.innerText = `1 ${moneda_one} = ${taza} ${moneda_two}`;

            cantidadEl_two.value = (cantidadEl_one.value * taza).toFixed(2);

        });

}
const entrada = document.getElementById("cantidad-uno")
entrada.addEventListener("keydown", function () {
    console.log("tecla presionada")
})

monedaEl_one.addEventListener('change', calculate);
cantidadEl_one.addEventListener('input', calculate);
monedaEl_two.addEventListener('change', calculate);
cantidadEl_two.addEventListener('input', calculate);

taza.addEventListener('click', () => {
    const temp = monedaEl_one.value;
    monedaEl_one.value = monedaEl_two.value;
    monedaEl_two.value = temp;
    calculate();
});


calculate();

guardar_localstorage();

function guardar_localstorage() {
    let moneda = {
        nombre: "Dolar",
        valor: 162.4,
    }
};
let nombre = "Dolar"
localStorage.setItem("nombre", nombre);

const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active")
});