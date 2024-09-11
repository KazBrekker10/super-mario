const config = {
    type: Phaser.AUTO,
    width: 256,
    height: 244,
    backgroundColor: '#049',
    parent:'game',
    
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

new Phaser.Game(config);

function preload(){
    
}

