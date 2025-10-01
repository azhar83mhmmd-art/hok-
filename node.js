const axios = require('axios');

async function Ai4Chat(prompt) {
    const url = new URL("https://yw85opafq6.execute-api.us-east-1.amazonaws.com/default/boss_mode_15aug");
    url.search = new URLSearchParams({
        text: prompt,
        country: "Europe",
        user_id: "Av0SkyG00D" // Thanks To Avosky
    }).toString();

    try {
        const response = await axios.get(url.toString(), {
            headers: {
                "User-Agent": "Mozilla/5.0 ..."
            }
        });