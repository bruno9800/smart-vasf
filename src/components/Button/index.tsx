type ButtonProps = {
    label: string;
    onClick?: () => void;
};
  
export default function Button({ label, onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
            {label}
        </button>
    );
}
