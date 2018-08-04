var myModule = (function() {

    // A private variable inside the scope of the IIFE that is 
    var privateVariable = "secret";

    // A private function inside the scope of the IIFE
    function privateFunction() {
        console.log("You just called the private function!");
    };

    // everything returned in the object is accessible publicly  
    return {
        // A public variable
        publicVariable: "You can see me!",

        // A public function utilizing privates
        displayPrivateVariable: function() {
            console.log(privateVariable);
        },
        invokePrivateFunction: function() {
            privateFunction();
        }
    };
})();

myModule.publicVariable; // "You can see me!"
myModule.displayPrivateVariable(); // "secret"

myModule.privateFunction; // undefined
myModule.privateVariable; // undefined
myModule.invokePrivateFunction(); // "You just called the private function!"