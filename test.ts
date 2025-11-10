const sayilar = [1, 2, 3, 4, 5];
sayilar.push(6);

console.log(sayilar);
console.log("--- BU BİR TEST ÇIKTISIDIR ---");

interface MenuItem {
    title: string
    cost: number
}

function printMenuItem(item: MenuItem) {
    console.log(item.title, ':', item.cost)
}

printMenuItem({ title: 'Cacik', cost: 72.5})