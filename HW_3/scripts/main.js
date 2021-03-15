(function(window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';

    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var CheckList = App.CheckList;

    var myTruck = new Truck('ncc-1701', new DataStore());
    window.myTruck = myTruck;
    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(function (data) {
        myTruck.createOrder.call(myTruck, data);
        checkList.addRow.call(checkList, data);
    });
    console.log(formHandler);

    function thanksMessage(){
        var page = document.getElementById('thanks');
        var name = document.getElementById('name1').value;
        var title = document.getElementsByName('Prefix');
        
        for (i = 0; i < title.length; i++) {
        if (title[i].checked)
            var myTitle = title[i].value;
        }
    
        var msg = "Thank you for your purchase ";
        page.textContent = msg  + myTitle+ " " + name;   
    }

})(window);  



