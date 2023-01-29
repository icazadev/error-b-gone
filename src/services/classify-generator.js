const inputs = require('./inputs/inputs.json').inputs;
const cohere = require('cohere-ai');
cohere.init('OnxV2tg7Hf9NFAled53D9YPNUXx0jC57dOxLyRGz')

module.exports = {
    getClasfify: getClasfify
}

async function getClasfify(text){
    const response = await cohere.classify({
        model: 'multilingual-22-12',
        inputs: [text],
        examples: inputs
      });
      console.log('--> type '+response.body.classifications[0].prediction);
      return JSON.stringify(response.body.classifications[0].prediction);
}