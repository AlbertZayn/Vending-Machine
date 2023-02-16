//Идентефикация нажатой клавиши для подсветки-подтверждения 
for (let i = 0; i < document.querySelectorAll(".prod-button").length; i++) {  
    document.querySelectorAll(".prod-button")[i].addEventListener("click", function() {
        // document.querySelector(".dispence-button").classList.add(document.querySelectorAll(".prod-button")[i].value);
        var selectedButton = this.innerHTML;
        var DispenceProduct = $(this).attr("value");
        clickAnimation(selectedButton);
        dispencedAnimation(DispenceProduct);
    })
}

//Подсветка-подтверждение выбранной клавиши
function clickAnimation (selectedButton) {                        
    var activeButton = document.getElementById(selectedButton);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 300);
}

//Присваивание постоянных значений купюрам
const value_50r = 50;     
const value_100r = 100;
const value_500r = 500;
const value_1000r = 1000;

//Купюры внесённые
var amountMoneyNotes = 0;   
function TotalRubbles() {
    var note_50r = Number(document.getElementById("50r").value);
    var note_100r = Number(document.getElementById("100r").value);
    var note_500r = Number(document.getElementById("500r").value);
    var note_1000r = Number(document.getElementById("1000r").value);
//подсчёт рублей от внесённых купюр
    if (note_50r > 0) {                             
        note_50r = note_50r * value_50r;
    }
    if (note_50r > 0) {
        note_100r = note_100r * value_100r;
    }
    if (note_500r > 0) {
        note_500r = note_500r * value_500r;
    }
    if (note_1000r > 0) {
        note_1000r = note_1000r * value_1000r;
    }
//Общее количество денег
    amountMoneyNotes = note_50r + note_100r + note_500r + note_1000r;
    return amountMoneyNotes;
}

//Деньги внесённые
var amountInserted = 0; 

//Вывод на экран общего количества денег    
function counting() {                                          
    amountInserted = TotalRubbles();
    document.getElementById("paid").innerHTML = amountInserted;
}
//Фнукция очистки подсчёта рублей
function clearCounting() {   
    amountInserted = 0;                                           
    document.getElementById("paid").innerHTML = amountInserted;
}
//Фнукция очистки введённых купюр
function clearData() {                                            
    document.getElementById("50r").value = 0;
    document.getElementById("100r").value = 0;
    document.getElementById("500r").value = 0;
    document.getElementById("1000r").value = 0;
}

var msg = "";
var MessageElement = document.getElementById("cancelMsg"); 
//активация очистки по кнопке "Отмена"                                                          
document.querySelector(".cancelButton").addEventListener("click", function cancel() { 
    TotalRubbles();                                      
    if (amountMoneyNotes > 0) {
        // добавление сообщения об отмене транзакции
        msg = "Транзакция отменена, " + amountMoneyNotes + " ₽ возвращено";  

        clearCounting();
        clearData();

        MessageElement.innerHTML = msg;
    } else if (amountMoneyNotes === 0) {
         // добавление сообщения о внесении купюр
        msg = "Помести деньги в приёмник и выбирай";    
    }
        MessageElement.innerHTML = msg;
})

//Обновление табла
document.querySelector(".update-button").addEventListener("click", function refreshPage(){   
    location.reload();
});

//Присваивание массива цен продуктам + генерация случайного числа доступного товара для products
const products = [
    {name: 'sprite', price: 89, quantity: Math.floor(Math.random() * 11)},
    {name: 'fanta', price: 99, quantity: Math.floor(Math.random() * 11)},
    {name: 'cocaCola', price: 109, quantity: Math.floor(Math.random() * 11)},
    {name: 'schweppes', price: 149, quantity: Math.floor(Math.random() * 11)},
    {name: 'lipton', price: 90, quantity: Math.floor(Math.random() * 11)},
    {name: 'конфета', price: 10},
    {name: 'жвачка', price: 5},
    {name: 'зубочистка', price: 1}
]

const buttons = document.querySelectorAll(".prod-button");
let remainingMoney = 0;

function dispencedAnimation (DispenceProduct) {
    $(".dispence-button").addClass(DispenceProduct);
    setTimeout(function() {
        $(".dispence-button").removeClass(DispenceProduct);
    }, 2000);
}

//Присвоение аттрибута `наличие количества продукта` каждой кнопке
//Добавление background картинки "недоступно" для продуктов, которых нет в аппарате
document.querySelectorAll(".prod-button").forEach((button, i) => {
    if (products[i].quantity === 0) {
        button.classList.add("visAvail");
    }
});

//* доделать код: чтоб можно было на сумму выбрать несколько/много продуктов подряд с подсчётом остатка
//Выдача сообщения об: отсутствии / выборе продукта + остаток / недостаточном кол-ве внесённых средств
buttons.forEach(button => {
    button.addEventListener("click", function distraction() {
        const productName = button.value;
        const product = products.find(p => p.name === productName);
        const quantityCheck = product.quantity === 0;
        const insertedMoney = TotalRubbles();
        remainingMoney = insertedMoney - product.price;
        let msg = "";
            if (quantityCheck) {
                msg = `Данный товар временно отсутствует`;
            }
            else if (insertedMoney >= product.price) {
                msg = `Вы выбрали продукт ${product.name} за ${product.price} ₽. Осталось  ${document.getElementById("paid").innerHTML = remainingMoney} ₽`;
            }
            else {
                msg = `Недостаточно денег. Необходимо ещё ${product.price - insertedMoney} ₽ для продукта ${product.name}.`;
            }
            MessageElement.innerHTML = msg;
    })
});


//Попытка выполнения условия:
// При отсутствии коппеек в аппарате, выдавать товары на сдачу с эквивалентной ценой
var MessageElement2 = document.getElementById("change"); 
const denominationsChange = [
    { rating: 500, denQuantity: "" },
    { rating: 100, denQuantity: "" },
    { rating: 50, denQuantity: "" },
    { rating: 10, denQuantity: Math.floor(Math.random() * 11) },
    { rating: 5, denQuantity: Math.floor(Math.random() * 11) },
    { rating: 1, denQuantity: Math.floor(Math.random() * 11) }
]; 

let residue = 0;

//Расчёт сдачи. Выдача как можно больших номиналов
document.querySelector(".change-button").addEventListener("click", function calculateChange() {
    var msg2 = "";
    const change = [];
    residue = remainingMoney;
    for (var i = 0; i < denominationsChange.length; i++) {
      while (residue >= denominationsChange[i].rating) {
        change.push(denominationsChange[i].rating);
        residue -= denominationsChange[i].rating;
      }
    }
    msg2 = `Ваша сдача ${document.getElementById("change").innerHTML = change.join('₽, ')}₽`;
    MessageElement2.innerHTML = msg2;
});

// for (i = 0; i < document.querySelectorAll(".prod-button").length; i++) {  
//     document.querySelectorAll(".prod-button")[i].addEventListener("click", function() {
//         if (quantityCheck !== 0) {
//             document.querySelector(".dispence-button").classList.add(document.querySelectorAll(".prod-button")[i].value);
//         } else {
//             document.querySelector(".dispence-button").classList.remove(document.querySelectorAll(".prod-button")[i].value);
//         }
//     })
// }
