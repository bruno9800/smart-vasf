"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

export interface dataType {
  adc: number;
  adcPercent: number;
  voltage: number;
  resistance: number;
  pwm: number;
  pwmPercent: number;
  date: Date;
}
interface WebSocketContextType {
  sendMessage: (message: string) => void;
  messages: string[];
  data: dataType[];
}

export const WebSocketContext = createContext<WebSocketContextType | undefined>(undefined);

export const WebSocketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [webSocket, setWebSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [data, setData] = useState<dataType[]>([]);

  useEffect(() => {
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    const ws = new WebSocket(`${protocol}//${window.location.host}/api/ws`);

    ws.onopen = () => {
      console.log("Conexão estabelecida");
    };

    ws.onmessage = (event) => {
      if (event.data === "connection established") return;
      
      const message = event.data;
      setMessages((prevMessages) => [...prevMessages, message]);
      console.log("Received message:", message);
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = () => {
      console.log("WebSocket closed, tentarei reconectar...");
      setTimeout(() => {
        setWebSocket(
          new WebSocket(`${protocol}//${window.location.host}/api/ws`)
        );
      }, 5000);
    };

    setWebSocket(ws);

    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = (message: string) => {
    if (webSocket && webSocket.readyState === WebSocket.OPEN) {
      webSocket.send(message);
    } else {
      console.error("WebSocket não está aberto");
    }
  };

  return (
    <WebSocketContext.Provider value={{ sendMessage, messages, data }}>
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
