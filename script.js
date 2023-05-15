const container = document.querySelector('.container');

container.addEventListener('change', handleInputChange);

const button = document.querySelector("button");
button.addEventListener('click', handleInputChange);

const result = document.getElementById('result');

function handleInputChange(event) {
  const target = event.target;
  
  // Здесь можно выполнить нужные вам действия для обновления или обработки значений полей
  // Например, вызвать функцию calcWeldingTime():
  const weldingTime = secToHour(calcWeldingSec());
  console.log('Новое значение времени сварки:', weldingTime);
  result.textContent = `Время сварки: ${weldingTime}`;
  button.style.display = 'none';
}

function calcWeldingSec() {
  
  // выбираем тип сварки
  const weldingType = document.getElementById("migOrMag");
  let weldingTypeValue =
    weldingType.options[weldingType.selectedIndex].textContent;
  weldingTypeValue;

  // скорость сварки - см в сек
  const weldingSpeed = weldingTypeValue === 'Mig' ? 11 : 12;

  // Диаметр трубы
  const tubeD = document.getElementById("tubeD");
  let tubeDValue = tubeD.value;

  //Длинна шва в см
  shovLength = 3.14 * tubeDValue / 10;

  // Количество швов

  const shovNo = document.getElementById("shovNo");
  let shovNoValue = shovNo.value;
  shovNoValue;

  return shovLength * weldingSpeed * (shovNoValue > 0 ? shovNoValue : 0);
}

function secToHour(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  let formattedTime = '';

  if (hours > 0) {
    formattedTime += hours.toString().padStart(2, '0') + ' час ';
  }

  formattedTime += minutes.toString().padStart(2, '0') + ' мин ';
  formattedTime += remainingSeconds.toString().padStart(2, '0') + ' сек';

  return formattedTime;
}