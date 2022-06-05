const rollDice = () => {
    let goldCoins = 0;
    const goldCoinElement = document.getElementById('goldCoins');
    for (i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 7);
        alert(`The dice rolled ${roll}.`);

        if (roll === 1) {
            alert(`Game over, no more rolls ${goldCoins >1 ? 'Total gold coins: ' + goldCoins : 'You luck is horrible you got zero coins!'}`);
            break;
        }
        if (roll < 5) {
            alert(`${goldCoins ? 'You have ' + goldCoins + ' gold coins': 'No gold coins yet'}`);
            continue;
        }
        goldCoins += roll;
        alert(`Congrations you won ${roll} gold coins!` + '\n' + `You have ${goldCoins} gold coins.` );
    }
    goldCoinElement.innerHTML = `You have ${goldCoins} gold coins!`;
    alert(`You have won ${goldCoins} gold coins!`)
}