"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

// mudar de acordo com o que virá do websocket
// export interface dataType {
//     lightStatus: boolean;
//     date: Date;
// };

interface WebSocketContextType {
    sendMessage: (message: object) => void;
    message: object;
};

export const WebSocketContext = createContext<WebSocketContextType | undefined>(undefined);

export const WebSocketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
    const [webSocket, setWebSocket] = useState<WebSocket | null>(null);
    const [message, setMessage] = useState<object>({});

    useEffect(() => {
        const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
        const ws = new WebSocket(`${protocol}//${process.env.NEXT_PUBLIC_WEBSOCKET_HOST}`);

        ws.onopen = () => {
            console.log("Conexão estabelecida");
        };

        ws.onmessage = ({ data }) => {
            if (data === "connection established") {
                return;
            }

            console.log("Received message:", data);
            setMessage(data);
        };

        ws.onerror = (error) => {
            console.error("WebSocket error:", error);
        };

        ws.onclose = () => {
            console.log("WebSocket closed, try to reconnect...");
            setTimeout(() => setWebSocket(
                new WebSocket(`${protocol}//${process.env.NEXT_PUBLIC_WEBSOCKET_HOST}`)
            ), 1000);
        };

        setWebSocket(ws);

        return () => ws.close();
    }, []);

    const sendMessage = (message: object) => {
        if (webSocket && webSocket.readyState === WebSocket.OPEN) {
            webSocket.send(JSON.stringify(message));
            return;
        }

        console.error("WebSocket não está aberto");
    };

    return (
        <WebSocketContext.Provider value={{ sendMessage, message }}>
            {children}
        </WebSocketContext.Provider>
    );
};

export const useWebSocket = (): WebSocketContextType => {
    const context = useContext(WebSocketContext);

    if (!context) {
        throw new Error("useWebSocket must be used within a WebSocketProvider");
    }

    return context;
};
