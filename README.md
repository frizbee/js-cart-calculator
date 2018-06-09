# JS Cart Calculator

### Screenshot
![alt text](/js-cart-calculate.png)

### Add more fields
Just Add another form-group:
```
<div class="form-group">
	<label>Pets</label>
	<div class="numbers-row">
	<input type="text" value="0" id="pets" class="qty2 form-control" name="order_item[quantity_pets]">
	<div class="inc button_inc">+</div><div class="dec button_inc">-</div>
	</div>
</div>
```
After that add new object item in js file:
```
var price = {
  adults: document.getElementById('price_adults').value,
  children: document.getElementById('price_children').value,
  pets: 14.50
}
```
Please feel free to improve
