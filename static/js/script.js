const dropdowns = document.querySelectorAll('.dropdown');
const drowpdownsElems = document.querySelectorAll('.dropdown-elem');

dropdowns.forEach(e => {
    e.addEventListener('click', (ev) => {
        btn = ev.target.className == 'dropdown' ? ev.target : ev.target.parentNode;
        btn.querySelector('.dropdown-content').classList.toggle('hide');
        btn.querySelector('.dropdown-part').classList.toggle('hide');
        btn.querySelectorAll('.arrow').forEach(e => {e.classList.toggle('hide')});
    })
});

drowpdownsElems.forEach(e => {
    e.addEventListener('click', (ev) => {
        elem = ev.target;
        content = elem.parentNode;
        nowPicked = content.querySelector('.picked');
        if (nowPicked) {nowPicked.classList.remove('picked')};
        elem.classList.add('picked');
        content.parentNode.querySelector('.dropdown-text').innerHTML = elem.innerHTML;
        content.parentNode.style.color = 'black';
    })
})


const fullnameInput = document.querySelector('#fullname')
const maleInput = document.querySelector('#male')
const femaleInput = document.querySelector('#female')
const birthdayInput = document.querySelector('#birthday')
const tgInput = document.querySelector('#tg')
const phoneInput = document.querySelector('#phone-number')
const aboutInput = document.querySelector('#about-me')

fullnameInput.addEventListener('input', (ev) => {
    document.querySelector('#fullname-small').innerHTML = fullnameInput.value;
})

maleInput.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        document.querySelector('#gender-small').innerHTML = 'Парень';
    } else {
        document.querySelector('#gender-small').innerHTML = 'Девушка';
    }
  })

femaleInput.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        document.querySelector('#gender-small').innerHTML = 'Девушка';
    } else {
        document.querySelector('#gender-small').innerHTML = 'Парень';
    }
    })


const expandBtn = document.querySelector('.expand__description')
aboutInput.addEventListener('blur', (ev) => {
    el = document.querySelector('#description-small');
    el.innerHTML = aboutInput.value;
    if (el.offsetHeight != el.scrollHeight) {
        expandBtn.style.display = 'flex'
    }
    else {expandBtn.style.display = 'none'}
})

expandBtn.addEventListener('click', (ev) => {
    document.querySelector('#description-small').classList.toggle('collapsed')
    expandBtn.querySelectorAll('.arrow').forEach(e => {e.classList.toggle('hide')});
})

function getDaysNumber(year, month) {
    return 33 - new Date(year, month-1, 33).getDate();
}


const BDInput = document.querySelector('.input-date');
const realBDInput = BDInput.parentNode.querySelector('input')
const datePicker = document.querySelector('.date-picker');
const monthTranslate = {'Январь': '01',
                        'Февраль': '02',
                        'Март': '03',
                        'Апрель': '04',
                        'Май': '05',
                        'Июнь': '06',
                        'Июль': '07',
                        'Август': '08',
                        'Сентябрь': '09',
                        'Октябрь': '10',
                        'Ноябрь': '11',
                        'Декабрь': '12'
                    }
const monthTranslate2 = {
                        1: 'Январь',
                        2: 'Февраль',
                        3: 'Март',
                        4: 'Апрель',
                        5: 'Май',
                        6: 'Июнь',
                        7: 'Июль',
                        8: 'Август',
                        9: 'Сентябрь',
                        10: 'Октябрь',
                        11: 'Ноябрь',
                        12: 'Декабрь',
}
let pickedDate = {year: 0, month: 0, day: 0};
let dateStage = 0; // 0 - not started, 1 - started

BDInput.addEventListener('click', (el) => {
    field = el.target.className == 'input-date' ? el.target : el.target.parentNode;
    input = field.parentNode
    if (dateStage > 0) {
        dateStage = 0;
        pickedDate = {year: 0, month: 0, day: 0};
        input.querySelectorAll('.date-picker, .year-picker, .month-picker, .day-picker').forEach(element => {
            element.classList.add('hide')
        });;
        return
    }
    dateStage = 1;  
    input.querySelectorAll('.date-picker, .year-picker').forEach(element => {
        element.classList.remove('hide')
    });
})

datePicker.addEventListener('click', (el) => {
    target = el.target;
    if (target.className == 'year-number') {
        pickedDate.year = target.innerHTML;
        datePicker.querySelector('.year-picker').classList.add('hide');
        datePicker.querySelector('.month-picker').classList.remove('hide');
        datePicker.querySelector('.year-switcher p').innerHTML = pickedDate.year;
    }
    else if (target.className == 'month-name') {
        pickedDate.month = target.innerHTML;
        datePicker.querySelector('.month-picker').classList.add('hide')
        datePicker.querySelector('.day-picker').classList.remove('hide')
        datePicker.querySelector('.month-switcher p').innerHTML = pickedDate.month + ' ' + pickedDate.year;
        days = getDaysNumber(pickedDate.year, Number(monthTranslate[pickedDate.month]))
        document.querySelectorAll('.last').forEach((el) => el.classList.add('hide'))
        document.querySelector('.last-' + days).classList.remove('hide')
    }
    else if (target.className == 'day-number') {
        pickedDate.day = target.innerHTML;
        datePicker.querySelector('.day-picker').classList.add('hide')
        realBDInput.value = pickedDate.year+'-'+monthTranslate[pickedDate.month]+'-'+pickedDate.day.padStart(2, '0')
        title = BDInput.querySelector('p');
        title.innerHTML = realBDInput.value;
        title.classList.remove('gray');
        dateStage = 0;
        pickedDate = {year: 0, month: 0, day: 0};
        input.querySelectorAll('.date-picker, .year-picker, .month-picker, .day-picker').forEach(element => {
            element.classList.add('hide')
        });;
    }
    else if (target.className == 'right') {
        if (target.parentNode.className == 'year-switcher') {
            pickedDate.year = +pickedDate.year + 1;
            target.parentNode.querySelector('p').innerHTML = pickedDate.year
        }
        else {
            monthNum = Number(monthTranslate[pickedDate.month]) + 1
            if (monthNum == 13) {
                monthNum = 1;
                pickedDate.year = +pickedDate.year + 1;
            }
            pickedDate.month = monthTranslate2[monthNum]
            days = getDaysNumber(pickedDate.year, Number(monthTranslate[pickedDate.month]))
            document.querySelectorAll('.last').forEach((el) => el.classList.add('hide'))
            document.querySelector('.last-' + days).classList.remove('hide')
            target.parentNode.querySelector('p').innerHTML = pickedDate.month + ' ' + pickedDate.year;
        }
    }
    else if (target.className == 'left') {
        if (target.parentNode.className == 'year-switcher') {
            pickedDate.year = +pickedDate.year - 1;
            target.parentNode.querySelector('p').innerHTML = pickedDate.year
        }
        else {
            monthNum = Number(monthTranslate[pickedDate.month]) - 1
            if (monthNum == 0) {
                monthNum = 12;
                pickedDate.year = +pickedDate.year - 1;
            }
            pickedDate.month = monthTranslate2[monthNum]
            days = getDaysNumber(pickedDate.year, Number(monthTranslate[pickedDate.month]))
            document.querySelectorAll('.last').forEach((el) => el.classList.add('hide'))
            document.querySelector('.last-' + days).classList.remove('hide')
            target.parentNode.querySelector('p').innerHTML = pickedDate.month + ' ' + pickedDate.year;
        }
    }
})

window.addEventListener('click', (ev) => {
    if (ev.target.className != 'dropdown' && ev.target.parentNode.className != 'dropdown') {
        dropdowns.forEach(element => {
            element.querySelector('.dropdown-content').classList.add('hide');
            element.querySelector('.dropdown-part').classList.add('hide');
            element.querySelector('.arrow-down').classList.remove('hide');
            element.querySelector('.arrow-up').classList.add('hide');
        });
    }
});

djangoForm = document.querySelector('#django-form')

function validateForm() {
    validationRes = true;
    // Fullname
    if (fullnameInput.value == '') {
        fullnameInput.classList.add('invalid');
        fullnameInput.parentNode.querySelector('.error-msg').firstChild.innerText = 'Обязательное поле'
        validationRes = false;
    }
    else if (!fullnameInput.value.match(/^[а-яA-Я ]+$/)) {
        fullnameInput.classList.add('invalid');
        fullnameInput.parentNode.querySelector('.error-msg').firstChild.innerText = 'Ответ должен состоять только из русских букв и пробелов'
        validationRes = false;
    }
    else {
        fullnameInput.classList.remove('invalid');
        fullnameInput.parentNode.querySelector('.error-msg').firstChild.innerText = '';
    }

    // gender
    if (!(maleInput.checked || femaleInput.checked)) {
        radioGroup = maleInput.parentNode.parentNode;
        radioGroup.classList.add('invalid');
        radioGroup.querySelector('.error-msg').firstChild.innerText = 'Обязательное поле'
    }
    else {
        radioGroup = maleInput.parentNode.parentNode;
        radioGroup.classList.remove('invalid');
        radioGroup.querySelector('.error-msg').firstChild.innerText = ''
    }

    //tg 
    if (tgInput.value == '') {
        tgInput.classList.add('invalid');
        tgInput.parentNode.querySelector('.error-msg').firstChild.innerText = 'Обязательное поле'
        validationRes = false;
    }
    else if (!tgInput.value.match(/^.*?\B@\w{5}.*$/)) {
        tgInput.classList.add('invalid');
        tgInput.parentNode.querySelector('.error-msg').firstChild.innerText = 'Формат ответа: @username'
        validationRes = false;
    }
    else {
        tgInput.classList.remove('invalid');
        tgInput.parentNode.querySelector('.error-msg').firstChild.innerText = '';
    }

    //phone
    if (phoneInput.value == '') {
        phoneInput.classList.add('invalid');
        phoneInput.parentNode.querySelector('.error-msg').firstChild.innerText = 'Обязательное поле'
        validationRes = false;
    }
    else if (!phoneInput.value.match(/^[+][\d]+$/)) {
        phoneInput.classList.add('invalid');
        phoneInput.parentNode.querySelector('.error-msg').firstChild.innerText = 'Введите номер без скобок начиная с +7'
        validationRes = false;
    }
    else {
        phoneInput.classList.remove('invalid');
        phoneInput.parentNode.querySelector('.error-msg').firstChild.innerText = '';
    }
    return validationRes
}

function copyToDjango() {
    for (let e of djangoForm.childNodes) {
        if (e.name=='fullname') {e.value = fullnameInput.value;}
        if (e.name=='gender') {e.value = maleInput.checked ? 'm':'w';}
        if (e.name=='birthday') {e.value = realBDInput.value;}
        if (e.name=='tg') {e.value = tgInput.value;}
        if (e.name=='phone_number') {e.value = phoneInput.value;}
        if (e.name=='about') {e.value = aboutInput.value;}
    }
}


function submitForm() {
    if (!validateForm()) {return;}
    copyToDjango();
    djangoForm.submit();
}