type Props = {};

export default function SubmitButton({}: Props) {
  return (
    <div>
      <button
        type="submit"
        className=" bg-green-600 text-white w-full py-4 font-bold rounded-lg mt-10"
      >
        Submit
      </button>
    </div>
  );
}
