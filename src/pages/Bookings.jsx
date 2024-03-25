import Heading from "../ui/Heading";
import BookingTable from "../features/bookings/BookingTable"
import BookingTableOperations from "../features/bookings/BookingTableOperations"
import AddBooking from "../features/bookings/AddBooking";
import MainHeading from "../ui/MainHeading";


function Bookings() {

  return (
    <>
      <MainHeading>
        <Heading as="h1">All bookings</Heading>
        <AddBooking />
        <BookingTableOperations />
      </MainHeading>
      <BookingTable />
    </>
  );
}

export default Bookings;
