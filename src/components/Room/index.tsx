import { useWebSocket } from "@/context/WebsocketProvider";

export default function Room() {
    const { message, sendMessage } = useWebSocket();

    return (
        <div className="w-1/2">
            <div className="text-5xl font-extrabold text-[#232528]">Sala</div>
            <div className="mt-8 rounded-[32px] bg-gray-200 p-6 min-h-[400px]">
                Recebido pelo ws: {message || "Nada recebido"}
            </div>
            <button
                className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                onClick={() => sendMessage('olar ws')}
            >
                Enviar mensagem para o ws
            </button>
        </div>
    )
};
