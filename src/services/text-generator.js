import axios from 'axios'

export const requestCohere = async(prompt, API_KEY) => {
    const options = {
        method: 'POST',
        url: 'https://api.cohere.ai/generate',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        data: JSON.stringify({
            model: "command-xlarge-nightly",
            prompt: prompt,
            max_tokens: 300,
            temperature: 0.4,
            k: 0,
            p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            return_likelihoods: 'NONE'
        })
    }

    const response = await axios.request(options)
    return response.data.text
}