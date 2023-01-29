const cohere = require('cohere-ai');
const translate = require('@vitalets/google-translate-api');
cohere.init('OnxV2tg7Hf9NFAled53D9YPNUXx0jC57dOxLyRGz')


module.exports = {
    getTraduction: getTraduction
}

async function getTraduction(textReq, language){
    let textResponse;
    let texts = [];
    let language_code;
    texts.push(textReq);
    const response = await cohere.detectLanguage({texts: texts});
    language_code = response.body.results[0].language_code;
    if(language === null)
        textResponse = language_code !== 'en' ? await translateText(textReq, null) : textReq;
    else
        textResponse = await translateText(textReq, language);
    return {
        text: textResponse,
        language: language_code
    };
}


async function translateText(text, language) {
    let en; 
    await translate.translate(text, language === null ? {to: 'en'}: {to: language}).then(res => {
        en = res.text;
    }).catch(err => {
        console.log(text);
        console.error(err);
        throw err;
    });
    return en;
  }