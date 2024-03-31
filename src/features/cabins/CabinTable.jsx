/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Spinner from '../../ui/Spinner'
import Table from '../../ui/Table'
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

const TableHeader = styled.div`
  display: grid;
    grid-template-columns: 0.42fr 1.1fr 1.25fr 0.6fr 1.25fr;
    background-color: #F9FAFB; 
    color: #4B5563; 
    padding: 10px;
    font-weight: 750; 
    text-transform: uppercase; 
    border-bottom: 2px solid #E5E7EB;
    font-size: 17px;
`;


function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />
  if (!cabins.length) return
  <Empty resourseName="cabins" />
  //1) for filter
  const filterValue = searchParams.get('discount') || "all";
  let filterCabins;
  if (filterValue === "all") filterCabins = cabins;
  if (filterValue === "no-discount") filterCabins = cabins.filter(cabin => cabin.discount === 0);
  if (filterValue === "with-discount") filterCabins = cabins.filter(cabin => cabin.discount > 0);

  //for Sorting
  const sortBy = searchParams.get('sortBy') || "startDate-asc"
  const [field, direction] = sortBy.split('-');
  const modifier = direction === 'asc' ? 1 : -1;
  const sortedCabins = filterCabins.sort((a, b) => (a[field] - b[field]) * modifier);

  return (
    <Menus>
      <Table columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
        <TableHeader>
          <div>Picture</div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </TableHeader>
        <Table.Body
          //data={cabins}
          data={sortedCabins}
          render={(cabin) =>
            <CabinRow cabin={cabin} key={cabin.id} />
          } />
      </Table>
    </Menus>
  );
}
export default CabinTable;