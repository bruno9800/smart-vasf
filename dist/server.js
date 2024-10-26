import { parse } from 'url';
import next from 'next';
import { WebSocketServer, WebSocket } from 'ws';
import http from 'http';
const app = next({ dev: process.env.NODE_ENV !== "production" });
const clients = new Set();
const PORT = 3000;
const HOST = "http://localhost";
app.prepare().then(() => {
    const server = http.createServer((req, res) => {
        const handle = app.getRequestHandler();
        handle(req, res);
    });
    const wss = new WebSocketServer({ noServer: true });
    wss.on("connection", (ws) => {
        clients.add(ws);
        console.log("New client connected");
        ws.on("message", async (message) => {
            let messageObj;
            try {
                messageObj = JSON.parse(message.toString());
            }
            catch (error) {
                console.error("Mensagem inválida, não é um JSON válido.", error);
                return;
            }
            const expectedProperties = ['value_a', 'value_b'];
            const hasAllProperties = expectedProperties.every((prop) => prop in messageObj);
            if (!hasAllProperties) {
                console.error('A mensagem não contém todas as propriedades necessárias.');
                return;
            }
            // Broadcast message to all clients
            clients.forEach((client) => {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(message.toString());
                }
            });
            console.log(`Message received: ${message}`);
        });
        ws.on("close", () => {
            clients.delete(ws);
            console.log("Client disconnected");
        });
    });
    server.on("upgrade", (req, socket, head) => {
        const { pathname } = parse(req.url || "/", true);
        // Hot module reloading
        if (pathname === "/_next/webpack-hmr") {
            app.getUpgradeHandler()(req, socket, head);
        }
        // Upgrade to WebSocket
        if (pathname === "/api/ws") {
            wss.handleUpgrade(req, socket, head, (ws) => {
                wss.emit("connection", ws, req);
            });
        }
    });
    server.listen(PORT, () => {
        console.log(`Server is running on ${HOST}:${PORT}`);
    });
});
