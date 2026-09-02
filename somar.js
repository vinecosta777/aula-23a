function calcularSoma() {
    const campoA = document.getElementById("valorA").value;
    const campoB = document.getElementById("valorB").value;

    const numeroA = parseFloat(campoA);
    const numeroB = parseFloat(campoB);

    const total = numeroA + numeroB;

    document.getElementById("resultado").innerText = `total: ${total}`;
    console.log(`Caulculo efetuado: ${numeroA} + ${numeroB} = ${total}`);
}