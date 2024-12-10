import { useWebSocket } from "@/context/WebsocketProvider";
import { Button } from "../Button";
import { useState } from "react";

export default function InteractionRoom() {
  const { message, sendMessage } = useWebSocket();
  const [ lightState, setLightState ] = useState(false);
  const [ doorState, setDoorState ] = useState(false);
  const [ airConditioningState, setAirConditioningState ] = useState(false);

  return (
    <div className="max-w-[420px] flex justify-center flex-col gap-[50px]">
      <div className="self-center">
        <img src="/images/3d-room.svg" alt="Sala Interativa" />
      </div>
      <div className="flex self-center gap-4 w-full flex-wrap">
        <Button
          label={doorState ? 'Fechar porta' : 'Abrir porta'}
          Icon="Door"
          onClick={() => setDoorState(!doorState)}
        />
        <Button
          label={lightState ? 'Desligar luz' : 'Acender luz'}
          Icon="Lightbulb"
          onClick={() => setLightState(!lightState)}
        />
        <Button
          label={airConditioningState ? 'Desligar ar condicionado' : 'Ligar ar condicionado'}
          Icon="Thermometer"
          onClick={() => setAirConditioningState(!airConditioningState)}
        />
      </div>
    </div>
  );
}
