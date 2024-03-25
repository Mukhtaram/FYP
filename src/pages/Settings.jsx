import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../ui/Heading";
import MainHeading from "../ui/MainHeading";
import Row from "../ui/Row"
//import { HiOutlineCog6Tooth } from 'react-icons/hi2'


function Settings() {
  return (
    <Row>
      <MainHeading>
        <Heading as="h1">
          Update hotel settings
        </Heading>
      </MainHeading>
      <UpdateSettingsForm />
    </Row>
  )
}

export default Settings;
{        /*  <HiOutlineCog6Tooth size="35px" {{ marginRight: '8px' }} /><span>Update hotel settings</span>*/ }
