const DEEPSEEK_URL = 'https://api.deepseek.com/chat/completions';

function sendJson(res, status, payload) {
  res.status(status).setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(payload));
}

function estimateTextSize(messages) {
  return messages.reduce((sum, msg) => sum + String(msg.content || '').length, 0);
}

module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(204).end();
    return;
  }

  if (req.method !== 'POST') {
    sendJson(res, 405, { error: { message: 'Method not allowed' } });
    return;
  }

  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    sendJson(res, 500, { error: { message: 'Server missing DEEPSEEK_API_KEY' } });
    return;
  }

  const body = req.body || {};
  const messages = Array.isArray(body.messages) ? body.messages : [];
  if (!messages.length) {
    sendJson(res, 400, { error: { message: 'messages is required' } });
    return;
  }

  if (estimateTextSize(messages) > 60000) {
    sendJson(res, 413, { error: { message: 'Prompt is too large' } });
    return;
  }

  try {
    const upstream = await fetch(DEEPSEEK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + apiKey,
      },
      body: JSON.stringify({
        model: body.model || 'deepseek-chat',
        messages,
        temperature: typeof body.temperature === 'number' ? body.temperature : 0.7,
        stream: false,
      }),
    });

    const text = await upstream.text();
    res.status(upstream.status).setHeader('Content-Type', upstream.headers.get('content-type') || 'application/json');
    res.setHeader('Cache-Control', 'no-store');
    res.end(text);
  } catch (error) {
    sendJson(res, 502, { error: { message: error.message || 'DeepSeek proxy failed' } });
  }
};
