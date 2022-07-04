import getBasisOfGames from '../index.js';
import getRandomIn from '../random.js';

// noteToGameCalc(Вопрос задачи),  taskCalc(вопрос, Решение)(решение задачи), Random1/Random2

const startGame = () => {
  const noteToGame = 'What is the result of the expression?';

  const getTaskcalc = () => {
    const random1 = getRandomIn(10);
    const random2 = getRandomIn(10);

    const operand = ['-', '+', '*'];
    const randomoperand = operand[getRandomIn(3)];

    const expression = `${random1} ${randomoperand} ${random2}`;

    let result = 0;
    switch (randomoperand) {
      case '-':
        result = random1 - random2;
        break;
      case '+':
        result = random1 + random2;
        break;
      case '*':
        result = random1 * random2;
        break;
      default:
        result = null;
    }
    return [expression, result];
  };
  getBasisOfGames(noteToGame, getTaskcalc);
};

export default startGame;
