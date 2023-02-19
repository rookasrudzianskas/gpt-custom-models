import openai from './chatgpt';

const query = async (prompt: string, chatId: string, model: string) => {
  const res = await openai.createCompletion({
    model: model,
    prompt: prompt,
    temperature: 0.9,
    top_p: 1,
    max_tokens: 1000,
    frequency_penalty: 0,
    presence_penalty: 0,
  })
}
