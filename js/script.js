const tab_headerItem = document.getElementsByClassName("tab_header-item"); //Получим элементы
const tabs_content = document.getElementsByClassName("tabs_content")[0]; //[0] - означает получить только один элемент на странице
const tab_close = document.getElementsByClassName("tab_close")[0];
const tab_header = document.getElementsByClassName("tab_header")[0];
const tab_phoneImages = document.getElementsByClassName("tab_phone-images")[0]; //Получим элемент по классу

//script когда звонят
const tabs_phoneNumber = document.getElementsByClassName("tabs_phoneNumber")[0]; //script когда звонят
const tabs_phoneNumber1 = document.getElementsByClassName("tabs_phoneNumber1")[0]; //script когда звонят
const display_none = document.getElementsByClassName("display_none");
const tabs_contentitemImages = document.getElementsByClassName("tabs_content-itemImages");

//script когда звонят

tabs_phoneNumber.style.display = "none";
tabs_phoneNumber1.style.display = "none";

for (let i = 0; i < display_none.length; i++) {
  display_none[i].style.display = "block";
}

for (let i = 0; i < tabs_contentitemImages.length; i++) {
  tabs_contentitemImages[i].style.display = "none";
}

for (let i = 0; i < tab_headerItem.length; i++) {
  //Циклом проходимся по всем элементам tab_headerItem
  const tab_headerItems = tab_headerItem[i]; //Получим все элементы
  tab_headerItems.addEventListener("click", function () {
    //Тут мы по весим событие клик на все элементы
    tabs_content.getElementsByClassName("active")[0].classList.remove("active"); // Получим класс active и потом мы его удаляем класс active при клике
    tabs_content.getElementsByClassName("tabs_content-item")[i].classList.add("active"); //Получим класс с помощью цикла добавим class active
    tabs_content.classList.add("opend"); //Добавили class в обьект tabs_content

    tab_bottomHeader.style.display = "none";

    tab_header.style.display = "none"; //Удалили  при клике
    tabs_content.style.transition = "all .6s";

    tab_phoneImages.style.display = "none"; //При клике на элементы срабатывает инструкция
  });
}

const js_contentBtn = document.querySelector("#js_content-btn"); //Получим элемент
const js_contentBtn1 = document.querySelector("#js_content-btn1");
const js_contentBtn2 = document.querySelector("#js_content-btn2");
const js_contentBtn3 = document.querySelector("#js_content-Btn3");
const js_contentBtn4 = document.querySelector("#js_content-Btn4");

const tab_contentInput = document.getElementsByClassName("tab_content-input")[0]; //Получим элемент по классу в html документе
const tab_contentInput1 = document.getElementsByClassName("tab_content-input1")[0];
const tab_contentInput2 = document.getElementsByClassName("tab_content-input2")[0];
const tab_contentInput3 = document.getElementsByClassName("tab_content-input3")[0];
const tab_contentInput4 = document.getElementsByClassName("tab_content-input4")[0];

const js_contentBlocks = document.getElementsByClassName("tab_content-btnJs"); //Получим у обьекта js_contentBlock все его элементы
const js_contentBlocks1 = document.getElementsByClassName("tab_content-btnJs1");

const tab_contentblockImages = document.getElementsByClassName("tab_content-blockImages")[0];

js_contentBtn.addEventListener("click", function () {
  //Повесим на элемент событие по клику
  tab_contentInput.classList.add("input"); //По клику будет добавляться класс
  tab_contentblockImages.classList.add("opend");

  for (let i = 0; i < js_contentBlocks.length; i++) {
    //Пройдемся циклом по всем элементам
    const e = js_contentBlocks[i]; //С помощью цикла мы получили все элементы обьекта  js_contentBlocks
    e.classList.remove("input"); //При клике на js_contentBtn удаляем класс у js_contentBlocks
  }
});

js_contentBtn1.addEventListener("click", function () {
  //Повесим на элемент событие по клику
  tab_contentInput1.classList.add("input"); //По клику будет добавляться класс
  tab_contentblockImages.classList.add("opend1");
  for (let i = 0; i < js_contentBlocks.length; i++) {
    //Циклом пройдемся по элементам
    const e = js_contentBlocks[i]; // С помощью цикла получим все элементы массива
    e.classList.remove("input");
  }
});

js_contentBtn2.addEventListener("click", function () {
  tab_contentInput2.classList.add("input");
  tab_contentblockImages.classList.add("opend2");

  for (let i = 0; i < js_contentBlocks.length; i++) {
    const e = js_contentBlocks[i];
    e.classList.remove("input");
  }
});

js_contentBtn3.addEventListener("click", function () {
  //вешаем событие по клику на элемент
  tab_contentInput3.classList.add("input"); //При клике будет добавляться класс элементу. Будет выполняться такая инструкция.
  tab_contentInput3.style.height = "211px";
  tab_contentInput3.style.display = "block";

  for (let i = 0; i < js_contentBlocks.length; i++) {
    const e = js_contentBlocks[i];
    e.classList.remove("input");
  }

  for (let i = 0; i < js_contentBlocks1.length; i++) {
    const e = js_contentBlocks1[i];
    e.classList.add("input1");
  }
});

js_contentBtn4.addEventListener("click", function () {
  tab_contentInput4.classList.add("input");
  tab_contentInput3.style.overflowY = null;
  tab_contentInput3.style.height = null;
  tab_contentInput3.style.display = "none";

  for (let i = 0; i < js_contentBlocks1.length; i++) {
    const e = js_contentBlocks1[i];
    e.classList.remove("input1");
  }
});

const tab_contentInput1Btn = document.getElementsByClassName("tab_content-input1Btn");
const tab_contentInputCars = document.getElementsByClassName("tab_content-inputCars")[0];

for (let i = 0; i < tab_contentInput1Btn.length; i++) {
  tab_contentInput1Btn[i].addEventListener("click", function () {
    tab_contentInputCars.classList.add("input");

    for (let i = 0; i < tab_contentInput1Btn.length; i++) {
      tab_contentInput1Btn[i].classList.remove("none");
    }
  });
}

//Действия по крестику
tab_close.addEventListener("click", function () {
  //Добавили клик по крестику
  tab_contentInput.classList.remove("input"); //При клике на крестик удаляеться класс
  tab_contentInput1.classList.remove("input");
  tab_contentInput2.classList.remove("input");
  tab_contentInput3.classList.remove("input");
  tab_contentInput4.classList.remove("input");
  tab_contentInput3.style.display = "none";

  tab_bottomHeader.style.display = "flex";

  tab_contentblockImages.classList.remove("opend");
  tab_contentblockImages.classList.remove("opend1");
  tab_contentblockImages.classList.remove("opend2");

  tab_contentInputCars.classList.remove("input");
  for (let i = 0; i < tab_contentInput1Btn.length; i++) {
    tab_contentInput1Btn[i].classList.add("none");
  }

  //При клике на крестик добовляеться цикл из элементов и добавляеться класс
  for (let i = 0; i < js_contentBlocks.length; i++) {
    //Пройдемся циклом по всем элементам
    const e = js_contentBlocks[i]; //С помощью цикла мы получили все элементы обьекта  js_contentBlocks
    e.classList.add("input");
  }
  tabs_content.classList.remove("opend"); //Удалили class из обьекта tabs_content
  tabs_content.style.transition = "none";
  tab_header.style.display = "block"; //Добавили класс при закрытии крестика

  tab_phoneImages.style.display = "block"; //при клике на крестик мы пропишем display:block изоображению
});



//увелечение и уменьшение инпута
const tab_contentInputDown = document.getElementsByClassName("tab_content-inputDown")[0]; //Получим элементы по классу
const tab_contentInputTxt = document.getElementsByClassName("tab_content-inputTxt")[0];
const tab_contentInputUp = document.getElementsByClassName("tab_content-inputUp")[0];

tab_contentInputUp.addEventListener("click", function () {
  //добавим элементу событие по клику
  tab_contentInputTxt.value++; //При каждом клике будет увеличиваться на один
});

tab_contentInputDown.addEventListener("click", function () {
  if (tab_contentInputTxt.value == 1) {
    //Если свойство value равно 1
    tab_contentInputDown; //То будет выполняться инструкция
    return; //С помощью return наша функция перестает работать
  }

  tab_contentInputTxt.value--; //Умешьшаем на один при клике
});



//Кастомный scroll

(function ($) {
  $(window).on("load", function () {
    $(".tab_content-input3, .textarea, .robox_scrol, .scrollbar, .scrollbar1").mCustomScrollbar({
      theme: "dark",
    });
  });
})(jQuery);

const textarea = document.getElementsByClassName("textarea")[0]; //Получим один элемент по классу
const code = document.getElementsByClassName("code")[0];

const text = document.createElement("div");
const code_text = document.createElement("div"); //Создадим новый элемент

code_text.classList.add("code_text"); //добавим класс этому элементу
code_text.textContent = "Lorem ipsum dolor sit amet";

text.classList.add("text");
text.textContent = "აკრიფეთ სასურველი ტექსტი";

textarea.append(text);
code.append(code_text); //переместим в обьект элемент создадим в нем узел

textarea.addEventListener("click", function () {
  text.style.display = "none";
});

code.addEventListener("click", function () {
  code_text.style.display = "none";
  code.style.paddingLeft = "19px";
});

//tab_bottom

const tab_bottomHeader = document.getElementsByClassName("tab_bottom-header")[0]; //Получим элементы по классу со страницы
const tab_bottomItem = tab_bottomHeader.getElementsByClassName("tab_bottom-item");
const tab_bottomContent = document.getElementsByClassName("tab_bottom-content")[0];
const tab_bottomClose = document.getElementsByClassName("tab_bottomClose");


//Клик на иконки

for (let i = 0; i < tab_bottomItem.length; i++) {
  tab_bottomItem[i].addEventListener("click", function () {
    tab_bottomContent.getElementsByClassName("active1")[0].classList.remove("active1"); // Получим класс active и потом мы его удаляем класс active при клике
    tab_bottomContent.getElementsByClassName("tab_bottom-contentBlock")[i].classList.add("active1");
    tab_bottomContent.classList.add("opend");

    tab_bottomHeader.style.display = "none";
    tab_header.style.display = "none"; //Удалили  при клике
    tab_phoneImages.style.display = "none";
  });
}

//Клик крестик закрытие
for (let i = 0; i < tab_bottomClose.length; i++) {
  tab_bottomClose[i].addEventListener("click", function () {
    tab_bottomContent.classList.remove("opend");

    for (let i = 0; i < tab_bottom1InputSms.length; i++) {
      tab_bottom1InputSms[i].classList.remove("input");
    }

    for (let i = 0; i < tab_bottom1InputSms2.length; i++) {
      tab_bottom1InputSms2[i].classList.remove("input");
    }

    for (let i = 0; i < tab_bottom1contentbtn.length; i++) {
      tab_bottom1contentbtn[i].classList.add("none");
    }

    for (let i = 0; i < tab_bottom1Btn.length; i++) {
      tab_bottom1Btn[i].classList.add("none");
    }

    for (let i = 0; i < tab_bottom1Item.length; i++) {
      tab_bottom1Item[i].classList.add("none");
    }

    for (let i = 0; i < tab_bottom1InputSmsMessage.length; i++) {
      tab_bottom1InputSmsMessage[i].classList.add("none");
    }

    for (let i = 0; i < tab_bottom1InputSmsFlex.length; i++) {
      tab_bottom1InputSmsFlex[i].classList.add("none");
    }

    for (let i = 0; i < scrollbar.length; i++) {
      scrollbar[i].classList.add("none");
    }

    for (let i = 0; i < tab_bottom1Img.length; i++) {
      tab_bottom1Img[i].classList.remove("img");
    }

    for (let i = 0; i < tab_bottom1Img1.length; i++) {
      tab_bottom1Img1[i].classList.remove("img");
    }

    tab_bottomHeader.style.display = "flex";
    tab_header.style.display = "block"; //Удалили  при клике
    tab_phoneImages.style.display = "block";
  });
}

const tab_bottom1Header = document.getElementsByClassName("tab_bottom-1-header")[0];
const tab_bottom1Item = tab_bottom1Header.getElementsByClassName("tab_bottom-1-item");
const tab_bottom1Content = document.getElementsByClassName("tab_bottom-1-content")[0];

//tab_bottom
for (let i = 0; i < tab_bottom1Item.length; i++) {
  //Пройдемся циклом по всем элементам
  const e = tab_bottom1Item[i]; //С помощью цикла получим эти элементы
  e.addEventListener("click", function () {
    //Добавим событие по клику элементом

    tab_bottom1Header.getElementsByClassName("active")[0].classList.remove("active");
    tab_bottom1Item[i].classList.add("active");

    tab_bottom1Content.getElementsByClassName("active")[0].classList.remove("active");
    tab_bottom1Content.getElementsByClassName("tab_bottom-1-contentItem")[i].classList.add("active");
  });
}




//Набор цифр

const tab_bottom1Txt = document.getElementsByClassName("tab_bottom-1Txt")[0];
const tab_bottom1Icon = document.getElementsByClassName("clear")[0];

console.log(tab_bottom1Txt);

function revers(name) {
  tab_bottom1Txt.value = tab_bottom1Txt.value + name;
}

let reset = function () {
  tab_bottom1Txt.value = null;
};




//Timer

const timer = document.getElementsByClassName("timer")[0];
const timer_none = document.getElementsByClassName("timer_none")[0];
const minut = document.getElementsByClassName("minut")[0];
const secund = document.getElementsByClassName("secund")[0];
let time;

console.log(timer);

timer_none.addEventListener("click", function () {
  tabs_phoneNumber1.style.display = "none";

  tab_bottomHeader.style.display = "flex";
  tab_header.style.display = "block"; //Удалили  при клике
  tab_phoneImages.style.display = "block";

  clearInterval(time);
  secund.innerHTML = "00";
  minut.innerHTML = "00";
});

timer.addEventListener("click", function () {
  if (tab_bottom1Txt.value.length >= 1) {
    tab_bottomContent.classList.remove("opend");
    tabs_phoneNumber1.style.display = "block";

    time = setInterval(form, 1000);

    function form() {
      secund.innerHTML++;

      if (secund.innerHTML == 60) {
        secund.innerHTML = "0";
        minut.innerHTML++;
      }

      if (secund.innerHTML < 10) {
        secund.innerHTML = "0" + secund.innerHTML++;
      }

      if (minut.innerHTML < 10) {
        minut.innerHTML = "0" + minut.innerHTML++;
      }
    }
  }
});



//Сообщение

let tab_bottom1contentbtn = document.getElementsByClassName("tab_bottom-1_content-btn");
const tab_bottom1Message = document.getElementsByClassName("tab_bottom-1Message");

for (let i = 0; i < tab_bottom1contentbtn.length; i++) {
  tab_bottom1contentbtn[i].addEventListener("click", function () {
    tab_bottom1Message[i].classList.toggle("opend");

    tab_bottom1contentbtn[i].classList.toggle("color");
  });
}



//Контакты

const tab_bottom1Btn = document.getElementsByClassName("tab_bottom-1Btn");
const tab_bottom1MikeBox = document.getElementsByClassName("tab_bottom-1MikeBox");

for (let i = 0; i < tab_bottom1Btn.length; i++) {
  tab_bottom1Btn[i].addEventListener("click", function () {
    tab_bottom1MikeBox[i].classList.toggle("opend");

    tab_bottom1Btn[i].classList.toggle("color");
  });
}

//Клик сообщение

const tab_bottom1SmsClick = document.getElementsByClassName("tab_bottom-1SmsClick");
const tab_bottom1InputSms = document.getElementsByClassName("tab_bottom-1InputSms");
const tab_bottom1Img = document.getElementsByClassName("tab_bottom-1Img");
const tab_bottom1Img1 = document.getElementsByClassName("tab_bottom-1Img1");

for (let i = 0; i < tab_bottom1SmsClick.length; i++) {
  tab_bottom1SmsClick[i].addEventListener("click", function () {
    for (let i = 0; i < tab_bottom1Img1.length; i++) {
      tab_bottom1Img1[i].classList.add("img");
    }

    for (let i = 0; i < tab_bottom1Img.length; i++) {
      tab_bottom1Img[i].classList.add("img");
    }

    for (let i = 0; i < tab_bottom1InputSms.length; i++) {
      tab_bottom1InputSms[i].classList.add("input");
    }

    for (let i = 0; i < tab_bottom1contentbtn.length; i++) {
      tab_bottom1contentbtn[i].classList.remove("none");
    }

    for (let i = 0; i < tab_bottom1Btn.length; i++) {
      tab_bottom1Btn[i].classList.remove("none");
    }

    for (let i = 0; i < tab_bottom1Item.length; i++) {
      tab_bottom1Item[i].classList.remove("none");
    }
  });
}

const tab_bottom1InputSmsMessage = document.getElementsByClassName("tab_bottom-1InputSmsMessage");
const tab_bottom1InputSmsFlex = document.getElementsByClassName("tab_bottom-1InputSmsFlex");
const tab_bottom1InputSms2 = document.getElementsByClassName("tab_bottom-1InputSms2");
const scrollbar = document.getElementsByClassName("scrollbar");

for (let i = 0; i < tab_bottom1InputSmsMessage.length; i++) {
  tab_bottom1InputSmsMessage[i].addEventListener("click", function () {
    for (let i = 0; i < tab_bottom1InputSms2.length; i++) {
      tab_bottom1InputSms2[i].classList.add("input");
    }

    for (let i = 0; i < tab_bottom1InputSmsMessage.length; i++) {
      tab_bottom1InputSmsMessage[i].classList.remove("none");
    }

    for (let i = 0; i < tab_bottom1InputSmsFlex.length; i++) {
      tab_bottom1InputSmsFlex[i].classList.remove("none");
    }

    for (let i = 0; i < scrollbar.length; i++) {
      scrollbar[i].classList.remove("none");
    }
  });
}

//отправка сообщения

const tab_bottom1InputSmsTxt = document.getElementsByClassName("tab_bottom-1InputSmsTxt");
const tab_bottom1InputSmsButton = document.getElementsByClassName("tab_bottom-1InputSmsButton");

for (let i = 0; i < tab_bottom1InputSmsButton.length; i++) {
  tab_bottom1InputSmsButton[i].addEventListener("click", function () {
    const create = document.createElement("div");

    create.innerHTML = tab_bottom1InputSmsTxt[i].value;
    create.classList.add("tab_bottom-1InputSmsText");
    create.classList.add("hidden");
    tab_bottom1InputSmsMessage[i].appendChild(create);

    if (tab_bottom1InputSmsTxt[i].value == 0) {
      create.classList = "";
    }

    function form() {
      create.classList.remove("hidden");
    }

    setTimeout(form, 50);

    const span = document.createElement("span");
    const span1 = document.createElement("span");
    span.classList.add("createSpan");
    span1.classList.add("createSpan1");
    span.innerHTML = "35363463";

    create.appendChild(span);
    create.appendChild(span1);

    const forItem = new Date();

    //Часы
    const span2 = document.createElement("span");
    span2.innerHTML = forItem.getHours();
    span1.append(span2);

    if (span2.innerHTML < 10) {
      span2.innerHTML = "0" + forItem.getHours();
    }

    //Двоеточие
    const span3 = document.createElement("span");
    span3.innerHTML = ":";
    span1.append(span3);

    //Минуты
    const span4 = document.createElement("span");
    span4.innerHTML = forItem.getMinutes();
    span1.append(span4);

    if (span4.innerHTML < 10) {
      span4.innerHTML = "0" + forItem.getMinutes();
    }
  });
}

//отправка сообщения 1

const tab_bottom1InputSms2Button = document.getElementsByClassName("tab_bottom-1InputSms2Button");
const tab_bottom1InputSms2Txt = document.getElementsByClassName("tab_bottom-1InputSms2Txt");
const tab_bottom1InputSms2Message = document.getElementsByClassName("tab_bottom-1InputSms2Message");

for (let i = 0; i < tab_bottom1InputSms2Button.length; i++) {
  tab_bottom1InputSms2Button[i].addEventListener("click", function () {
    const create = document.createElement("div");

    create.textContent = tab_bottom1InputSms2Txt[i].value;

    create.classList.add("tab_bottom-1InputSms2MessageText");
    create.classList.add("hidden");

    tab_bottom1InputSms2Message[i].append(create);

    if (tab_bottom1InputSms2Txt[i].value == 0) {
      create.classList = "";
    }

    function form() {
      create.classList.remove("hidden");
    }

    setTimeout(form, 50);

    const date_block = document.createElement("div");
    date_block.classList.add("date_block");
    create.append(date_block);

    //Price

    const span = document.createElement("span");
    date_block.append(span);

    const forTime = new Date();

    span.innerHTML = forTime.getDate();

    //Moth

    let span1 = document.createElement("span");
    span1.classList.add("Moth");
    date_block.append(span1);

    Moths = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ];

    span1.innerHTML = Moths[forTime.getMonth()];

    //Подчеркивание

    const span2 = document.createElement("span");
    span2.innerHTML = "-";
    date_block.append(span2);

    //Год
    const span3 = document.createElement("span");
    span3.classList.add("God");
    date_block.append(span3);

    span3.innerHTML = forTime.getFullYear();

    //Подчеркивание
    const span4 = document.createElement("span");
    span4.innerHTML = "-";
    date_block.append(span4);

    //Часы
    const span5 = document.createElement("span");
    span5.classList.add("Hours");
    date_block.append(span5);

    span5.innerHTML = forTime.getHours();

    if (span5.innerHTML < 10) {
      span5.innerHTML = "0" + forTime.getHours();
    }

    //Двоеточие
    const span6 = document.createElement("span");
    span6.innerHTML = ":";
    date_block.append(span6);

    //Минуты
    const span7 = document.createElement("span");
    span7.classList.add("minutes");
    date_block.append(span7);

    span7.innerHTML = forTime.getMinutes();

    if (span7.innerHTML < 10) {
      span7.innerHTML = "0" + forTime.getMinutes();
    }
  });
}
