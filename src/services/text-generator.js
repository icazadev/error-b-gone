require('dotenv').config()
const cohere = require('cohere-ai')

cohere.init(process.env.API_KEY)


const generateText = async(prompt) => {
    const response = await cohere.generate({
        model: "command-xlarge-nightly",
        prompt: prompt,
        max_tokens: 300,
        temperature: 0.4,
        k: 0,
        p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        return_likelihoods: 'NONE'
    });
    console.log(response.body.generations[0].text)   
}