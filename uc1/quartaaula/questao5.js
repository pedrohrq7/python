let val = prompt("Insira um valor")
if (val.trim() == "") {
    alert("Digite algo!")
} else {
    if (parseInt(val % 2) == 0) {
        document.write("É par")
    } else {
        document.write("É impar")
    }
} 