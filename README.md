# Cyklops: Video/Image to Text Conversational Agent

Cyklops is an intelligent conversational agent that provides video/image-to-text capabilities. It utilizes the FastAPI framework along with the open-source LLaVA model for efficient image-to-caption processing. This repo contains the frontend of Cyklops based on Next JS . For backend , visit [Cyklops-Backend](https://github.com/Ghat0tkach/Cyklops_Backend)

## Getting Started
First , install the dependencies using
```bash
npm install
```

Second , make sure to add LLaVA API and Backend Endpoint in the [api file](https://github.com/Ghat0tkach/Cyklops_Frontend/blob/main/app/api/GetSummary.js)
```javascript
const LLAVA_API_URL = " "; //Your ngrok or hosted LLaVA model url here
const FASTAPI_API_URL = ""; //Your FastAPI Url Here
const github_repo = ``; //Your username/repo which you will work as storage bucket
```

Now, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# You are all set , Visualise , Mesmerise and Converse with Videos like never before

Proudly open source



