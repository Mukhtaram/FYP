import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCAbin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperation";
import MainHeading from "../ui/MainHeading";
import { HiOutlineHomeModern } from 'react-icons/hi2'


function Cabins() {
  return (
    <>
      <MainHeading>
        <Heading as="h1">
          <HiOutlineHomeModern size="31px" style={{ marginRight: '8px' }} /><span>All cabins</span>
        </Heading>
        <AddCAbin />
        <CabinTableOperations />
      </MainHeading>
      <Row>
        <CabinTable />
      </Row>
    </>

  );
}

export default Cabins;
