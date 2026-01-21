class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    create() {
        this.player = this.add.rectangle(100, 300, 40, 60, 0xffffff);
        this.speed = 150;

        this.combo = 0;
        this.text = this.add.text(10, 10, 'Combo: 0', { color: '#fff' });

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update(time, delta) {
        this.player.x += this.speed * delta / 1000;

        if (Phaser.Input.Keyboard.JustDown(this.cursors.space)) {
            this.combo++;
            this.text.setText('Combo: ' + this.combo);
        }
    }
}

new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: GameScene
});
