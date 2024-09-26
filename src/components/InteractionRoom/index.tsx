import Button from "../Button";

export default function InteractionRoom() {
  return (
    <div className="max-w[420px] flex justify-center flex-col gap-[50px]">
      <div className="self-center">
        <img src="/images/3d-room.svg" alt="Sala Interativa" />
      </div>
      <div className="flex self-center gap-4 w-full flex-wrap">
        <Button label="Abrir porta" Icon="Door" />
        <Button label="Acender luz" Icon="Lightbulb" />
        <Button label="Histórico" Icon="List" />
      </div>
    </div>
  );
}
