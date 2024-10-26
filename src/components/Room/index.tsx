import { useWebSocket } from "@/context/WebSocketProvider";

export default function Room() {
    const { messages } = useWebSocket();

    console.log('messages', messages)
    return (
        <div className="w-1/2">
            <div className="text-5xl font-extrabold text-[#232528]">Sala</div>
            <div className="mt-8 rounded-[32px] bg-gray-200 p-6 min-h-[400px]">
                Texto bacana

                Recebido: {messages || "vazio"}
            </div>
        </div>
    )
};
