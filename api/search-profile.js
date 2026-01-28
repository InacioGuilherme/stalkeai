const https = require('https');

const API_KEY = process.env.SEARCHAPI_KEY || 'AHZyZZs5YrMXeh2Tc6TFLCvv';

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { username } = req.query;

  if (!username || typeof username !== 'string') {
    return res.status(400).json({ error: 'Username é obrigatório' });
  }

  // Sanitização: só letras, números, pontos e underscores (padrão Instagram)
  const clean = username.trim().replace(/^@+/, '');
  if (!/^[a-zA-Z0-9._]{1,30}$/.test(clean)) {
    return res.status(400).json({ error: 'Username inválido' });
  }

  try {
    const url = `https://www.searchapi.io/api/v1/search?engine=instagram_profile&username=${encodeURIComponent(clean)}&api_key=${API_KEY}`;

    const data = await new Promise((resolve, reject) => {
      const request = https.get(url, { timeout: 8000 }, (response) => {
        if (response.statusCode !== 200) {
          return reject(new Error(`API retornou status ${response.statusCode}`));
        }

        const chunks = [];
        response.on('data', chunk => chunks.push(chunk));
        response.on('end', () => {
          try {
            resolve(JSON.parse(Buffer.concat(chunks).toString()));
          } catch {
            reject(new Error('Resposta inválida da API'));
          }
        });
        response.on('error', reject);
      });

      request.on('error', reject);
      request.on('timeout', () => {
        request.destroy();
        reject(new Error('Timeout'));
      });
    });

    res.setHeader('Cache-Control', 'public, max-age=300');
    res.status(200).json(data);
  } catch (error) {
    res.status(502).json({ error: error.message });
  }
};
