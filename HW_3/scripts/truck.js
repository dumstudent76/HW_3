(function (window) {
    'use strict';
    var App = window.App || {};

    function Truck(truckId, db) {
        // McCarthy rewritten as:
        // function Truck(truckcustId, db) {
        // console.log('In truck constructor');
        // this.truckcustId = truckcustId;
        this.truckId = truckId;
        this.db = db;
    }

    Truck.prototype.createOrder = function (order) {
        console.log('Adding order for ' + order.emailAddress);
        this.db.add(order.emailAddress, order)
    };

    Truck.prototype.deliverOrder = function (customerId) {
        // Truck.prototype.deliverOrder = function (customerId) {
        // could rewrite customerId as:
        // var id = customerId
        // console.log('Delivering order for ' + id);
        console.log('Delivering order for ' + customerId);
        this.db.remove(customerId);
    };

    Truck.prototype.printOrders = function () {
        var customerIdArray = Object.keys(this.db.getAll());

        console.log('Truck #' + this.truckId + ' has pending orders: ');
        customerIdArray.forEach(function (id) {
            console.log(this.db.get(id));
        }.bind(this));
    };

    App.Truck = Truck;
    window.App = App;

  })(window);