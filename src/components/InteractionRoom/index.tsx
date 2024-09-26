import Button from "../Button";

export default function InteractionRoom() {
    return (
        <div className="w-1/2 flex justify-center flex-col gap-[50px]">
            <div className="self-center">
                <img src="/images/3d-room.svg" alt="Sala Interativa" />
            </div>
            <div className="flex self-center gap-4">
                <Button label="Abrir porta" />
                <Button label="Acender luz" />
                <Button label="Histórico" />
            </div>
        </div>
    );
}