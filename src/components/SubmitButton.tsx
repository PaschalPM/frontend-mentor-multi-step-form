type Props = {
    text: string
    handleClick?: () => void
};

export default function SubmitButton({text, handleClick}: Props) {
  return (
    <button
      className="px-7 py-2.5 bg-marine-blue text-magnolia rounded-lg tracking-tight font-medium hover:bg-purplish-blue hover:opacity-75"
      type="submit"
      onClick={handleClick && handleClick}
    >
      {text}
    </button>
  );
}
