do {
    var num1 = +prompt('vvidete chislo kotoroe nujno vozvesti v stepen:')

}
while (isNaN(num1)) {

}
do {
    var num2 = +prompt('vvedite ee stepen:')
}
while (isNaN(num2)) {

}
num1NachalZnach = num1

    for (i = 1; i < num2; i++) {
        num1 = num1 * num1NachalZnach
    }
    alert(num1)

