// const carros = ["BMW", "Volvo", "Celta", "Palio","Chevet"]
// let i = 0
// while(i<carros.length){
//     document.write(carros[i]+"<br>")
//     i++
// }


// document.write(carros+"<br>")
// document.write("||---||"+"<br>")
// document.write(carros[2])

// const carros = ["BMW", "Volvo", "Celta", "Palio","Chevet"]
// for (i=0; i<carros.length; i++){
//     document.write(carros[i]+"<br>")
// }

const carros = ["BMW", "Volvo", "Celta", "Palio","Chevet"]
for (i in carros){
    document.write(i+" - ")
    document.write(carros[i]+"<br>")
}