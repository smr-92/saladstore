# React Cart Application

This is a simple react application where I have used react hooks, redux and react-bootstrap.

# Installation Process

```
$ mkdir cart (make a directory of your choice)
$ cd cart
$ git clone https://github.com/smr-92/saladstore.git
$ cd saladstore
$ npm install

```
# To sart the project
```
$ npm start

```
The application will open in your default browser from localhost.

### The application consist of :-
 * Home Page
    * Welcome Message
    * Order Salad Button
 * Ingredients Page
    * Lists of Ingredients
        * Ingredient Name
        * Ingredient price
        * Add to Salad Button
    * Proceed to Checkout Button
 * Oder Details Page
    * Order Summery (if ingredients added to Salad)
        * List of Items with price, quantity and total price
        * Total Order Ammount
    * Customer Details Form (if ingredients added to Salad)
        * Email Input Field (required)
        * Name Input Feild (required)
        * Additional Notes (optional)
        * Order Button
    * No Ingredients Message (if no ingredient is added to Salad) 
    * Back to Ingredients Button
 * Confirmation Modal
    * Thank you message
    * Order Details
    * Close Button
