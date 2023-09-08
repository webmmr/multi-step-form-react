import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import ThankYou from "../components/ThankYou";
import { useGlobalContext } from "../context/GlobalContext";

function AppLayout() {
  const { isSubmitted } = useGlobalContext();
  return (
    <>
      <div className="bg-magnolia py-10 md:min-h-[100vh]  items-center ">
        <section className="container mx-auto  p-5   rounded-lg min-h-[80vh] flex flex-col md:flex-row">
          <Sidebar />
          {isSubmitted ? <ThankYou /> : <Main />}
        </section>
      </div>
    </>
  );
}

export default AppLayout;
