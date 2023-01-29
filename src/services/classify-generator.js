import inputs from './inputs.json';
import cohere from 'cohere-ai';
import axios from 'axios';
cohere.init('OnxV2tg7Hf9NFAled53D9YPNUXx0jC57dOxLyRGz')

module.exports = {
    getClasfify: getClasfify
}

async function getClasfify(text){
    const options = {
        
    }
    const response = await cohere.classify({
        model: 'multilingual-22-12',
        inputs: [text],
        examples: inputs.inputs
      });
      return response.body.classifications[0].prediction;
}

export const requestCohere = async(text, API_KEY) => {
    const options = {
        method: 'POST',
        url: 'https://api.cohere.ai/classify',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        data: JSON.stringify({
            model: "multilingual-22-12",
            inputs: [text],
            examples: inputs.inputs
        })
    }

    const response = await axios.request(options)
    return response.data.text
}