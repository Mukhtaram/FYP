import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCAbin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperation";


function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>
      <Row>
        <CabinTable />
        <AddCAbin />
      </Row>
    </>

  );
}

export default Cabins;
