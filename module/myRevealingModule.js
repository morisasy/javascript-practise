var myRevealingModule = (() => {
    var start = 0;

    function incrementNumberPrivate(){
        start++;
    }
    function incrementNumberPublic(){
        incrementNumberPrivate();
    }
    function initialize(){
        incrementNumberPublic();
    }
    function getPrivateNumber(){
        return start;
    }

    return {
        init: initialize,
        add: incrementNumberPublic,
        status: getPrivateNumber
    }
})()
