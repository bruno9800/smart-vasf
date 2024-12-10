import { useWebSocket } from "@/context/WebsocketProvider";

export default function History() {
    const { message, sendMessage } = useWebSocket();

    const history = [
        {
            name: "Rodrigo Leandro",
            action: "Desligar o ar condicionado",
            time: "Há 5 minutos",
        },
        {
            name: "Ana Clara",
            action: "Acender a luz",
            time: "Há 10 minutos",
        },
        {
            name: "Lucas Silva",
            action: "Abrir a janela",
            time: "Há 15 minutos",
        },
        {
            name: "Mariana Costa",
            action: "Fechar a porta",
            time: "Há 20 minutos",
        },
        {
            name: "João Pedro",
            action: "Ligar o ventilador",
            time: "Há 25 minutos",
        },
        {
            name: "Beatriz Souza",
            action: "Desligar o projetor",
            time: "Há 30 minutos",
        },
        {
            name: "Carlos Oliveira",
            action: "Aumentar a temperatura",
            time: "Há 35 minutos",
        },
    ];

    const resolveAvatar = (name: string) => `https://avatar.oxro.io/avatar.svg?name=${name.toUpperCase()}`;

    return (
        <div className="flex flex-col gap-4">
            <div>
                <div className="text-3xl mb-4 font-extrabold text-[#232528]">Histórico</div>
                <div className="max-h-[400px] md:max-h-[600px] overflow-y-scroll mb-4 border border-gray-200 rounded-lg bg-gray-50">
                    <ol className="divide-y divider-gray-200">
                        {history.map(({ name, action, time }, index) => (
                            <li key={index}>
                                <a href="#" className="items-center block p-6 sm:flex hover:bg-gray-100">
                                    <img className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0" src={resolveAvatar(name)} />
                                    <div className="text-gray-600">
                                        <div className="text-base font-normal">
                                            <span className="font-medium text-gray-900">{name}</span> realizou a ação de
                                            <span className="font-medium text-gray-900"> {action}</span>
                                        </div>
                                        <div className="text-sm font-normal">{time}</div>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
};
