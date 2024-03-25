import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";
import MainHeading from "../ui/MainHeading";

function NewUsers() {
  return (
    <>
      <MainHeading>
        <Heading as="h1">Create a new user</Heading>
      </MainHeading>
      <SignupForm />
    </>
  )
}

export default NewUsers;
