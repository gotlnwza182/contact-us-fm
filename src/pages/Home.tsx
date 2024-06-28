import { useState } from "react";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";

interface Customer {
  firstName: string;
  lastName: string;
  email: string;
  queryType: "General Enquiry" | "Support Request" | "";
  message: string;
  acception: boolean;
}

type Props = {};

export default function Home({}: Props) {
  const [customer, setCustomer] = useState<Customer>({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    acception: false,
  });

  const [showAlert, setShowAlert] = useState<boolean>(false);

  const [errorFirstName, setErrorFirstName] = useState<boolean>(false);
  const [errorLastName, setErrorLasttName] = useState<boolean>(false);
  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  const [errorQueryType, setErrorQueryType] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [errorAcception, setErrorAcception] = useState<boolean>(false);

  const [checkedRadio, setCheckedRadio] = useState({ isChecked: "" });
  const [checkedBox, setCheckedBox] = useState(false);

  function handleChange(e: any) {
    const { name, value, type, checked } = e.target;
    setCustomer({
      ...customer,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    const { firstName, lastName, email, queryType, message, acception } =
      customer;
    if (!firstName) {
      setErrorFirstName(true);
    } else {
      setErrorFirstName(false);
    }
    if (!lastName) {
      setErrorLasttName(true);
    } else {
      setErrorLasttName(false);
    }
    if (!email) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
    if (!queryType) {
      setErrorQueryType(true);
    } else {
      setErrorQueryType(false);
    }
    if (!message) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
    }
    if (acception === false) {
      setErrorAcception(true);
    } else {
      setErrorAcception(false);
    }
    if (firstName && lastName && email && queryType && message && acception) {
      setShowAlert(true);
      setCustomer({
        firstName: "",
        lastName: "",
        email: "",
        queryType: "",
        message: "",
        acception: false,
      });
      setCheckedRadio({ isChecked: "" });
      setCheckedBox(false);
      setTimeout(() => setShowAlert(false), 3000);
    }
  }

  return (
    <div className="flex justify-center items-center bg-green-200 min-h-screen">
      <div className=" w-[21.375rem] mx-auto p-6 bg-white rounded-2xl relative md:w-[43.125rem] lg:w-[46rem]">
        <h1 className="text-grey-900 text-4xl mb-8">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="md:flex md:gap-4 md:w-full">
            <Input
              title="First Name"
              name="firstName"
              type="text"
              isRequired={true}
              value={customer.firstName}
              onChange={handleChange}
              error={errorFirstName}
            />
            <Input
              title="Last Name"
              name="lastName"
              type="text"
              isRequired={true}
              value={customer.lastName}
              onChange={handleChange}
              error={errorLastName}
            />
          </div>
          <Input
            title="Email Address"
            name="email"
            type="email"
            isRequired={true}
            value={customer.email}
            onChange={handleChange}
            error={errorEmail}
          />
          <div>
            <p className="mb-4 text-sm text-grey-900">
              Query Type <span className="text-green-600">*</span>
            </p>
            <Input
              type="radio"
              title="Query Type"
              name="queryType"
              id="queryType1"
              value="General Enquiry"
              isRequired={true}
              onChange={handleChange}
              error={errorQueryType}
              checkedRadio={checkedRadio}
              setCheckedRadio={setCheckedRadio}
            />
            <Input
              title="Query Type"
              name="queryType"
              type="radio"
              value="Support Request"
              id="queryType2"
              isRequired={true}
              onChange={handleChange}
              error={errorQueryType}
              checkedRadio={checkedRadio}
              setCheckedRadio={setCheckedRadio}
            />
          </div>
          <Input
            title="Message"
            name="message"
            type="textarea"
            isRequired={true}
            value={customer.message}
            onChange={handleChange}
            error={errorMessage}
          />
          <Input
            title="I consent to being contacted by the team"
            name="acception"
            type="checkbox"
            isRequired={true}
            onChange={handleChange}
            error={errorAcception}
            checked={checkedBox}
            setCheckedBox={setCheckedBox}
          />
          <SubmitButton />
        </form>
      </div>
      {showAlert && (
        <div className="bg-grey-900 text-white w-[20.473rem] p-6 rounded-xl fixed top-0 md:w-[28.125rem]">
          <div className="flex mb-2">
            <img
              src="./assets/images/icon-success-check.svg"
              alt="suggess icon"
              className="mr-[0.641rem]"
            />
            <h4 className="font-bold text-base">Message Sent!</h4>
          </div>
          <p className="text-sm text-green-200">
            Thanks for completing the form. We'll be in touch soon!
          </p>
        </div>
      )}
    </div>
  );
}
