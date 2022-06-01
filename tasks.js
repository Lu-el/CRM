'use strict';

{
  const rain = Math.round(Math.random());

  console.log(rain ? 'Пошёл дождь. Возьмите зонт!' : 'Дождя нет!');
}

{
  const mathematic = +prompt('Введите кол-во баллов по математике:');

  if (!Number.isNaN(mathematic)) {
    const physical = +prompt('Введите кол-во баллов по физкультуре:');

    if (!Number.isNaN(physical)) {
      const biology = +prompt('Введите кол-во баллов по биологии:');

      if (!Number.isNaN(biology)) {
        const summ = mathematic + physical + biology;
        if (summ >= 265) {
          alert('Поздравляю, вы поступили на бюджет!');
        } else {
          alert('Провал( Но зато у вас есть целый год, чтоб подготовиться!');
        }
      } else {
        alert('Введены некорректные данные. Обновите страницу и попробуйте снова');
      }
    } else {
      alert('Введены некорректные данные. Обновите страницу и попробуйте снова');
    }
  } else {
    alert('Введены некорректные данные. Обновите страницу и попробуйте снова');
  }
}


{
  const amountMoney = +prompt('Сколько денег вы хотите снять?');

  //предполагается, что в банкомате можно ввести только цифры, поэтому порверки на "цифренность" нет

  console.log(amountMoney % 100 ? 'Такой суммы нет. Введите сумму кратную 100' : 'Деньги будут Вам выданы');
}
