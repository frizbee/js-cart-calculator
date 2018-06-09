


document.addEventListener('click', function (event) {
    if ( event.target.classList.contains( 'button_inc' ) ) {
      // increment or decrement value
      incrementer(event);
      // get value and name
      let childNode = event.target.parentNode.childNodes[1];
      let myVal = childNode.value;
      let incName = childNode.id;
      find_and_update(myVal, incName);
    }
}, false);

function calculate_total(result, cur_total) {
  return result + cur_total;
}
function calculate_value(amount, value) {
  return amount * value;
}
function update_quantity(value,incName) {
  let quantity = document.getElementById('quantity_' + incName);
  quantity.innerHTML = value;
}

function find_and_update(value, incName) {
  var result,
      total,
      rest_result,
      total_cost = document.getElementById('total_cost');

  for (var key of Object.keys(price)) {
    if(key == incName) {
      update_quantity(value, incName);
      result = calculate_value(price[key], document.getElementById('quantity_' + incName).textContent);
    } else {
      rest_result =+ calculate_value(price[key], document.getElementById('quantity_' + key).textContent);
    }
  }
  total = calculate_total(rest_result,  result);
  total_cost.innerHTML = total;
}

var price = {
  adults: document.getElementById('price_adults').value,
  children: document.getElementById('price_children').value
  
}

function incrementer(event) {
  let target = event.target;
  let oldValue = event.target.parentNode.childNodes[1].value;
  let newVal;

  if(target.textContent == "+") {
    newVal = parseFloat(oldValue) + 1;
  }else {
    if(oldValue > 1) {
      newVal = parseFloat(oldValue) - 1;
    }else {
      newVal = 0;
    }
  }
  target.parentNode.childNodes[1].value = newVal;
}
    