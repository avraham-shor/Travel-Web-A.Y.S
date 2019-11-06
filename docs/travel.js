console.log('travelon app start');

let destinations = [
    { code: 11, name: "London", price: 350 },
    { code: 33, name: "Israel", price: 900 },
    { code: 08, name: "America", price: 1200 },
    { code: 07, name: "Australya", price: 1650 },
    { code: 62, name: "Kyev", price: 200 },
    { code: 01, name: "Varsha", price: 190 },
    { code: 15, name: "Frankfort", price: 450 },
    { code: 07, name: "Levov", price: 220 },
    { code: 20, name: "Vilnius", price: 320 },
    { code: 31, name: "Turkay", price: 150 },
]
let destHTML = document.querySelector('.destination tbody')
let dest = "<tr><td>#CODE</td><td>#NAME</td><td>$#PRICE</td></tr>"
let dest_to_update = "";
destinations.forEach(dItem => {
    dest_to_update += dest
        .replace('#CODE', dItem.code)
        .replace('#NAME', dItem.name)
        .replace('#PRICE', dItem.price)
});
destHTML.innerHTML = dest_to_update;

console.log('travelon app end');


let orderHTML = document.querySelector('.list-orders tbody');
orderHTML.innerHTML = ""
let template_order = `<tr><td>#ID</td><td id="n">#NAME</td><td>#ZEUT</td>
<td>#TRAVEL-NAME</td><td>#PASENGERS</td><td>$#TOTAL-PRICE</td></tr>`
let update_order = "";

let orders = [];
let ordernung = [];
add_order('avraham', '012', 3, 62, destinations);
add_order('moshe', '666', 2, 20, destinations);
add_order('chaim', '123', 10, 11, destinations);
add_order('pinchas', '033', 1, 1, destinations);
add_order('דניאל', '828', 3, 31, destinations);
add_order('Rubi', '207832692', 3, 7, destinations);
add_order('a', '207832692', 3, 7, destinations);
add_order('a', '207832692', 10, 11, destinations);
add_order('רובינשטיין', '207832692', יחל, 7, destinations);









function send() {
    console.log('function send start');
    try {
        let user_name = document.getElementById('name').value;
        let user_zeut = document.getElementById('zeut').value;
        let user_travel_id = document.getElementById('travel_id').value * 1;
        let user_passengers = document.getElementById('passengers').value;
        add_order(user_name, user_zeut, user_passengers, user_travel_id, destinations);
        document.getElementById('name').value = "";
        document.getElementById('zeut').value = "";
        document.getElementById('travel_id').value = "";
        document.getElementById('passengers').value = "";
    } catch (error) {
        console.error('function send error:', error);
    }

    console.log('function send end');
}



function add_order(name, zeut, pasengers, travel_id, destinations) {
    console.log('function add_order start parameters:', name, zeut, pasengers, travel_id);

    try {

        let travel = destinations.find(dItem => dItem.code == travel_id)
        let update = template_order
            .replace('#ID', orders.length + 1)
            .replace('#NAME',uperCaseFirst(name))
            .replace('#ZEUT', zeut)
            .replace('#NAME', name)
            .replace('#PASENGERS', pasengers)
            .replace('#TRAVEL-NAME', travel.name)
            .replace('#TOTAL-PRICE', travel.price * pasengers)
        orders.push(update)
        orderHTML.innerHTML += update;

        ordernung.push({
            zeut: zeut, name: uperCaseFirst(name), id_travel: travel_id, pasengers: pasengers,
            destination: travel.name, total_price: travel.price * pasengers
        })



    } catch (error) {
        console.error('function add_order error', error);
    }
    console.log('function add_order end');

}

function find() {
    console.log('function find start');
    try {
        let findHTML = document.querySelector('.select tbody');
        let template_find = `<tr><td>#ZEUT</td><td>#NAME</td>
        <td>#ID-TRAVEL</td><td>#DESTINATION</td><td>#PASSENGERS</td><td>$#TOTAL-PRICE</td></tr>`

        let update_find = "";
        let user_find = document.getElementById('select_name').value;
        let sum_price = 0;
        let sumHtml = document.getElementById('sum_price_name');
        sumHtml.innerHTML = "";
        ordernung.forEach(ordItem => {
            if (ordItem.name == uperCaseFirst(user_find)) {

                update_find += template_find
                    .replace('#ZEUT', ordItem.zeut)
                    .replace('#NAME', ordItem.name)
                    .replace('#ID-TRAVEL', ordItem.id_travel)
                    .replace('#DESTINATION', ordItem.destination)
                    .replace('#PASSENGERS', ordItem.pasengers)
                    .replace('#TOTAL-PRICE', ordItem.total_price)
                sum_price += ordItem.total_price;
            }

        });

        findHTML.innerHTML = update_find;
        sumHtml.innerHTML = '<h2>$' + sum_price + '</h2>';


    } catch (error) {
        console.error('function find error:', error)
    }
    console.log('function find end');

}
function find_destination() {
    console.log('function find_destination start');
    try {
        let findHTML = document.querySelector('.table_select_destination tbody');
        let template_find = `<tr><td>#ZEUT</td><td>#NAME</td>
        <td>#ID-TRAVEL</td><td>#DESTINATION</td><td>#PASSENGERS</td><td>$#TOTAL-PRICE</td></tr>`

        let update_find = "";
        let user_find = document.getElementById('select_destination').value;
        let sum_price = 0;
        let sumHtml = document.getElementById('sum_price_Destination');
        ordernung.forEach(ordItem => {
            
            if (ordItem.destination == user_find){
               
                update_find += template_find
                    .replace('#ZEUT', ordItem.zeut)
                    .replace('#NAME', ordItem.name)
                    .replace('#ID-TRAVEL', ordItem.id_travel)
                    .replace('#DESTINATION', ordItem.destination)
                    .replace('#PASSENGERS', ordItem.pasengers)
                    .replace('#TOTAL-PRICE', ordItem.total_price)
                    console.log("update_find=",update_find)
                    sum_price += ordItem.total_price;
            }
        });

        findHTML.innerHTML = update_find;
        sumHtml.innerHTML = '<h2>$' + sum_price + '</h2>';


    } catch (error) {
        console.error('function find_destination error:', error)
    }
    console.log('function find_destination end');

}
function uperCaseFirst(str) {
    console.log('function uperCaseFirst. string:', str);
    return str.replace(str.charAt(0), str.charAt(0).toUpperCase())

}



