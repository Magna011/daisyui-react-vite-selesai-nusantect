import Footer from "../../komponents/Footer/Footer";
import PelatihanFinalQuis from "../../komponents/HomePage/PelatihanFinalQuis";
import FinalQuis from "../../komponents/Modul/FinalQuis";
import Navbar from "../../komponents/NavigationBar/NavigationBar";
import Nomer4 from "../../komponents/Pelatihan Serupa/Pelatihanserupa";
import ProgressCardFinalQuis from "../../komponents/ProgressCard/ProgressCardFinalQuis";
import UlasanFinalQuis from "../../komponents/Ulasan/UlasanFinalQuis";

const HomePageFinalQuis = () => {
  return (
    <div>
      <Navbar/>
      <PelatihanFinalQuis/>
      <div className="hero min-h-screen bg-base-200 p-3 m-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <div>
              <ProgressCardFinalQuis />
              <UlasanFinalQuis/>
            </div>
            <div></div>
          </div>
          <div className="card flex justify-left items-left w-[400px] h-[700px] m-2 ">
            <div className="card-body">
              <div>
                <FinalQuis />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Nomer4/>
      <Footer/>
    </div>
  );
};

export default HomePageFinalQuis;