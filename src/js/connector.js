//console.log('Hello World!');

window.TrelloPowerUp.initialize({
    'card-buttons': function(t, options){
        //return an array at card-badges 
        return [{
            icon: 'https://github.com/CoderJana3/testcard-powerup/blob/main/src/testicon.png',
            text: 'Estimate Size',
        }];
    }
});