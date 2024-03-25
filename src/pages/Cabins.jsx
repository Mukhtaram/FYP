import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCAbin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperation";
import MainHeading from "../ui/MainHeading";


function Cabins() {
  return (
    <>
      <MainHeading>
        <Heading as="h1">All cabins</Heading>
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
