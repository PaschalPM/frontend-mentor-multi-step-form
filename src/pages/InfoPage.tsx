import InfoForm from "../components/forms/InfoForm";
import HeaderText from "../components/HeaderText";

export default function InfoPage() {
  return (
    <>
      <HeaderText text="Personal Info" />
      <HeaderText
        text="Please provide your name, email address and phone number."
        type="paragraph"
      />

      <InfoForm />
    </>
  );
}
