const cohere = require('cohere-ai');
const translate = require('@vitalets/google-translate-api');
cohere.init('OnxV2tg7Hf9NFAled53D9YPNUXx0jC57dOxLyRGz')


module.exports = {
    getTraduction: getTraduction
}

async function getTraduction(textReq){
    let textResponse;
    console.log(`--> Text: ${textReq}`)
    let texts = [];
    texts.push(textReq);
    const response = await cohere.detectLanguage({texts: texts});
    textResponse = response.body.results[0].language_code !== 'en' ? await translateText(textReq) : textReq;
    console.log(`--> Response: ${textResponse}`);
    return textResponse;
}


async function translateText(text) {
    let en; 
    await translate.translate(text, {to: 'en'}).then(res => {
        en = res.text;
    }).catch(err => {
        console.log(text);
        console.error(err);
        throw err;
    });
    return en;
  }