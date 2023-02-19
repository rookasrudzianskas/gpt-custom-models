## Chat GPT custom models

This repository contains the code for training and using custom GPT models for the [Chat GPT](https://chatgpt.com) project.

### Training

To train a model, you need to have a dataset of conversations. The dataset should be a text file with one conversation per line. Each conversation should be a list of messages separated by the `|||` token. For example:

```
Hi!|||Hello! How are you?|||I'm fine, thanks!|||That's good to hear!
``` 

To train a model, run the following command:

```
python train.py --dataset <path to dataset> --model_name <model name>
```

The model will be saved in the `models` directory. The model name should be a unique identifier for the model. It will be used to identify the model when using it in the [Chat GPT](https://chatgpt.com) project.

### Live Version:

https://rookas-gpt-custom-models.vercel.app/

### Local Development:
    
    ```
    npm install
    npm run dev
    ```

### Deploy to Vercel:

    ```
    npm install -g vercel
    vercel
    ```

### By Rokas with ❤️
