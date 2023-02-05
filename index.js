//Идентефикация нажатой клавиши для подсветки-подтверждения 
for (var i = 0; i < document.querySelectorAll(".prod-button").length; i++) {  
    document.querySelectorAll(".prod-button")[i].addEventListener("click", function() {
        var selectedButton = this.innerHTML;
        clickAnimation(selectedButton);
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
        
})
//Обновление табла
document.querySelector(".update-button").addEventListener("click", function refreshPage(){   
    location.reload();
} 
);

const denominations = [1, 5, 10, 50, 100, 500];

//Присваивание цен продуктам
const products = [                       
    { name: 'sprite', price: 89 },
    { name: 'fanta', price: 99 },
    { name: 'cocaCola', price: 109 },
    { name: 'schweppes', price: 149 },
    { name: 'lipton', price: 90 },
    { name: 'конфетка', price: 10 },
    { name: 'жвачка', price: 5 },
    { name: 'зубочистка', price: 1 }
];


for (var i = 0; i < document.querySelectorAll(".prod-button").length; i++) {  
    document.querySelectorAll(".prod-button")[i].addEventListener("click", function() {
        
    })
}

function dispenceProduct (selectedProduct) {

}


















// var products = ['Sprite', 'Fanta', 'CocaCola', 'Schweppes', 'Lipton', 'Конфетка', 'Жвачка', 'Зубочистка'];
// function calculateChange () {
//     var amountChange = 0;
//     if (TotalRubbles() != 0) {
//         return (amountChange = (TotalRubbles() - document.querySelectorAll(".prod-buttin")[i].value))
//     }
//     return amountChange;
// }

// function getProd (product) {
//     MessageElement.innerHTML = "";
//     change = 0;
//     var selectedProduct = products(product);
//     change = calculateChange();

//     if (change < 0) {
//         msg = "Внесённых средств не достаточно. " + change + " ₽ возвращено";
//         TotalRubbles() = 0;
//         change = 0;
//         clearCounting();
//         clearData();
//         MessageElement.innerHTML = msg;
//     }
// }













// document.querySelector(".change-button").addEventListener("click", function calculateChange (position, amountMoneyNotes) {
//     const positions = [                       //Присваивание цен продуктам
//     { name: 'Sprite', price: 89 },
//     { name: 'Fanta', price: 99 },
//     { name: 'CocaCola', price: 109 },
//     { name: 'Schweppes', price: 149 },
//     { name: 'Lipton', price: 90 },
//     { name: 'Конфетка', price: 10 },
//     { name: 'Жвачка', price: 5 },
//     { name: 'Зубочистка', price: 1 }
// ];

//     var change = 0;
//     if (TotalRubbles() != 0) {
//         return (change = TotalRubbles() - price);
//     }
// })

// const selectedPosition = position.find(item => item.name === positions);
// if (selectedPosition) {
//     if (selectedPosition.price === amountMoneyNotes)
//         return "Ваш " 
// }

// });





    

