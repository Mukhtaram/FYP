import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";
import MainHeading from "../ui/MainHeading";


function Dashboard() {
  return (
    <>
      <MainHeading>
        <Heading as="h1">
          Dashboard
        </Heading>
        <DashboardFilter />
      </MainHeading>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
