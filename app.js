const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

// Serve static files
app.use(express.static(__dirname));

// Route to load index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check (for Kubernetes/Prometheus)
app.get('/health', (req, res) => {
    res.json({ status: 'UP' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
