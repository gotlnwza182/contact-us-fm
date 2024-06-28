type Props = {
  title: string;
  name: string;
  type: string;
  isRequired?: boolean;
  value?: string;
  id?: string;
  onChange: (e: any) => void;
  error: boolean;
  checkedRadio?: any;
  setCheckedRadio?: any;
  checked?: boolean;
  setCheckedBox?: any;
};

export default function Input({
  title,
  name,
  isRequired,
  type,
  value,
  id,
  onChange,
  error,
  checkedRadio,
  setCheckedRadio,
  checked,
  setCheckedBox,
}: Props) {
  if (type === "text" || type === "email") {
    return (
      <div className="mb-6 w-full ">
        <label htmlFor={name} className="block text-sm text-grey-900 mb-2">
          {title}{" "}
          <span className="text-green-600">{isRequired ? "*" : ""}</span>
        </label>
        <input
          type={type}
          name={name}
          id={name}
          className={`border rounded-lg text-base px-8 py-4 mb-2 w-full focus:border-green-600 focus:outline-none  ${
            !error ? " border-grey-500" : "border-Red-error"
          } hover:border-green-600 cursor-pointer`}
          value={value}
          onChange={onChange}
        />
        <p className={`text-Red-error text-sm ${!error ? "hidden" : "block"}`}>
          {type === "text"
            ? "This field is required"
            : "Please enter a valid email address"}
        </p>
      </div>
    );
  } else if (type === "radio") {
    const { isChecked } = checkedRadio;
    return (
      <div className="mb-4 ">
        <label
          htmlFor={id}
          className={`flex items-center text-base text-grey-900 pl-4 cursor-pointer border border-grey-500" rounded-lg px-8 py-4 w-full has-[:checked]:border-green-600 has-[:checked]:bg-green-200 hover:border-green-600`}
        >
          <input
            type={type}
            name={name}
            id={id}
            className="peer mr-3 appearance-none w-5 h-5 border border-grey-500 rounded-full checked:bg-selected-icon bg-center"
            value={value}
            onChange={onChange}
            checked={isChecked == value}
            onClick={() => setCheckedRadio({ isChecked: value })}
          />
          {value}
        </label>
        <p className={`text-Red-error text-sm ${!error ? "hidden" : "block"}`}>
          Please select a query type
        </p>
      </div>
    );
  } else if (type === "checkbox") {
    return (
      <div>
        <label
          htmlFor={name}
          className="flex items-center justify-center  text-sm text-grey-900 mb-2 cursor-pointer select-none md:justify-start "
        >
          <input
            type={type}
            name={name}
            id={name}
            className="mr-4 appearance-none border-[3px] border-grey-500 w-[1.125rem] h-[1.125rem] checked:border-none checked:bg-checked-icon checked:bg-center "
            value={value}
            onChange={onChange}
            checked={checked}
            onClick={() => setCheckedBox(value)}
          />
          <p>
            {title}{" "}
            <span className="text-green-600">{isRequired ? "*" : ""}</span>
          </p>
        </label>
        <p className={`text-Red-error text-sm ${!error ? "hidden" : "block"}`}>
          To submit this form, please consent to being contacted
        </p>
      </div>
    );
  } else if (type === "textarea") {
    return (
      <div className="mb-6">
        <label htmlFor={name} className="block text-sm text-grey-900 mb-2">
          {title}{" "}
          <span className="text-green-600">{isRequired ? "*" : ""}</span>
        </label>
        <textarea
          name={name}
          id={name}
          className={`border  rounded-lg text-base px-8 py-4  w-full ${
            !error ? "border-grey-500" : "border-Red-error"
          }`}
          rows={8}
          value={value}
          onChange={onChange}
        />
        <p className={`text-Red-error text-sm ${!error ? "hidden" : "block"}`}>
          This field is required
        </p>
      </div>
    );
  }
}
