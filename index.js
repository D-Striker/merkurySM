const sergej = require('./clients__sergej');
const nadezhda = require('./clients__nadezhda');
const gevorg = require('./clients__gevorg');
const erlan = require('./clients__erlan');
const zhukova = require('./clients__zhukova');
const zamostiyanina = require('./clients__zamostiyanina');
const kovalenko = require('./clients__kovalenko');
const kurushkin = require('./clients__kurushkin');
const makeev = require('./clients__makeev');
const mishina = require('./clients__mishina');
const roksana = require('./clients__roksana');
const horyakov = require('./clients__horyakov');
const chernyshova = require('./clients__chernyshova');

const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '6435467107:AAGeOwXvfYfDimOnuzCSWu-dW4_-N6RdjkE';

const bot = new TelegramBot(TOKEN, {polling: true});



const options = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
        [{ text: 'Связаться с менеджером', callback_data: '1' }],
        [{ text: 'Читать новости', url: 'https://t.me/MercuryVoshod' }],
        [{ text: 'Как проехать', callback_data: '3' }],
        ]
    })
};

bot.onText(/\/start/, function (msg) {
    bot.sendMessage(msg.chat.id, 'Выберите действие:', options);
});

// Обработчик нажатий на клавиатуру
bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;

    if (query.data === '1') { 
        bot.sendMessage(chatId, 'введите ваш ИНН');
        bot.sendMessage(msg.chat.id, 'Меню:', options);
    }
    if (query.data === '3') {
        bot.sendMessage(chatId, "Чтобы построить маршрут нажмите на карту"); 
        bot.sendLocation(chatId, 51.801683, 55.068901);
        bot.sendMessage(chatId, 'Другое действие:', options);
    }
});

// const managers = {
//     reply_markup: JSON.stringify({
//         keyboard: [
//         [{ text: 'Телефон: 123456789', }],
//         ]
//     })
// };

bot.on('message', async function (msg) {
    for(let i = 0; i < nadezhda.length; i++){
        if(msg.text == nadezhda[i]) {
            await bot.sendMessage(msg.chat.id, 'Другое действие:', options);
            await bot.sendMessage(msg.chat.id, 'Ваш менеджер - Барабанщикова Надежда Андреевна');
            await bot.sendMessage(msg.chat.id, 'Телефон для связи: +7123456789')
            
        }
    } 
    for(let i = 0; i < sergej.length; i++){
        if(msg.text == sergej[i]) {
            await bot.sendMessage(msg.chat.id, 'Другое действие:', options);
            await bot.sendMessage(msg.chat.id, 'Ваш менеджер - Аношин Сергей Вячеславович');
            await bot.sendMessage(msg.chat.id, 'Телефон для связи: +788877788777')
            
        }
    } 
    for(let i = 0; i < gevorg.length; i++){
        if(msg.text == gevorg[i]) {
            await bot.sendMessage(msg.chat.id, 'Другое действие:', options);
            await bot.sendMessage(msg.chat.id, 'Ваш менеджер - Велян Геворг Спартакович');
            await bot.sendMessage(msg.chat.id, 'Телефон для связи: +70000000000000')
        }
    } 
    for(let i = 0; i < erlan.length; i++){
        if(msg.text == erlan[i]) {
            await bot.sendMessage(msg.chat.id, 'Другое действие:', options);
            await bot.sendMessage(msg.chat.id, 'Ваш менеджер - Жанзаков Ерлан Нуржигитович');
            await bot.sendMessage(msg.chat.id, 'Телефон для связи: +71111111111')
        }
    } 
    for(let i = 0; i < zhukova.length; i++){
        if(msg.text == zhukova[i]) {
            await bot.sendMessage(msg.chat.id, 'Другое действие:', options);
            await bot.sendMessage(msg.chat.id, 'Ваш менеджер - Жукова Татьяна Викторовна');
            await bot.sendMessage(msg.chat.id, 'Телефон для связи: +72222222222')
        }
    }  
    for(let i = 0; i < zamostiyanina.length; i++){
        if(msg.text == zamostiyanina[i]) {
            await bot.sendMessage(msg.chat.id, 'Другое действие:', options);
            await bot.sendMessage(msg.chat.id, 'Ваш менеджер - Замостиянина Марина Сергеевна');
            await bot.sendMessage(msg.chat.id, 'Телефон для связи: +73333333333')
        }
    } 
    for(let i = 0; i < kovalenko.length; i++){
        if(msg.text == kovalenko[i]) {
            await bot.sendMessage(msg.chat.id, 'Другое действие:', options);
            await bot.sendMessage(msg.chat.id, 'Ваш менеджер - Коваленко Татьяна Геннадьевна');
            await bot.sendMessage(msg.chat.id, 'Телефон для связи: +74444444444')
        }
    }   
    for(let i = 0; i < kurushkin.length; i++){
        if(msg.text == kurushkin[i]) {
            await bot.sendMessage(msg.chat.id, 'Другое действие:', options);
            await bot.sendMessage(msg.chat.id, 'Ваш менеджер - Курушкин Александр Владимирович');
            await bot.sendMessage(msg.chat.id, 'Телефон для связи: +75555555555')
        }
    }  
    for(let i = 0; i < makeev.length; i++){
        if(msg.text == makeev[i]) {
            await bot.sendMessage(msg.chat.id, 'Другое действие:', options);
            await bot.sendMessage(msg.chat.id, 'Ваш менеджер - Макеев Владимир Юрьевич');
            await bot.sendMessage(msg.chat.id, 'Телефон для связи: +76666666666')
        }
    } 
    for(let i = 0; i < mishina.length; i++){
        if(msg.text == mishina[i]) {
            await bot.sendMessage(msg.chat.id, 'Другое действие:', options);
            await bot.sendMessage(msg.chat.id, 'Ваш менеджер - Мишина Мария Юрьевна');
            await bot.sendMessage(msg.chat.id, 'Телефон для связи: +77777777777')
        }
    } 
    for(let i = 0; i < roksana.length; i++){
        if(msg.text == roksana[i]) {
            await bot.sendMessage(msg.chat.id, 'Другое действие:', options);
            await bot.sendMessage(msg.chat.id, 'Ваш менеджер - Тукабайова Роксана Петровна');
            await bot.sendMessage(msg.chat.id, 'Телефон для связи: +78888888888')
        }
    } 
    for(let i = 0; i < horyakov.length; i++){
        if(msg.text == horyakov[i]) {
            await bot.sendMessage(msg.chat.id, 'Другое действие:', options);
            await bot.sendMessage(msg.chat.id, 'Ваш менеджер - Хорьяков Алексей Викторович');
            await bot.sendMessage(msg.chat.id, 'Телефон для связи: +7999999999')
        }
    }
    for(let i = 0; i < chernyshova.length; i++){
        if(msg.text == chernyshova[i]) {
            await bot.sendMessage(msg.chat.id, 'Другое действие:', options);
            await bot.sendMessage(msg.chat.id, 'Ваш менеджер - Чернышова Марина Александровна');
            await bot.sendMessage(msg.chat.id, 'Телефон для связи: +710101010101010')
        }
    }
});


 






 

      

// bot.on('message', (msg) => {
// const chatId = msg.chat.id;

// bot.sendMessage(chatId, 'Received your message');
// bot.sendAudio(chatId, 'audio/rap.mp3');
// bot.sendPhoto(chatId, 'img/cat.jpg');
// });