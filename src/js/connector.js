//console.log('Hello World!');

window.TrelloPowerUp.initialize({
    'card-buttons': function(t, options){
        //return an array at card-badges 
        return [{
            icon: './testicon.png',
            text: 'Estimate Size',
        }];
    }
});