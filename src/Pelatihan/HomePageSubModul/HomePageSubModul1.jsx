import Footer from "../../komponents/Footer/Footer";
import PelatihanSubmodul1 from "../../komponents/HomePage/PelatihanSubmodul1";
import Navbar from "../../komponents/NavigationBar/NavigationBar";
import Nomer4 from "../../komponents/Pelatihan Serupa/Pelatihanserupa";
import ProgressCardSubModul1 from "../../komponents/ProgressCard/ProgressCardSubmodul1";
import SubModul1 from "../../komponents/SubModul/SubModul1";
import UlasanSubmodul1 from "../../komponents/Ulasan/UlasanSubmodul1";

const HomePageSubModul1 = () => {
  return (
    <div>
      <Navbar/>
      <PelatihanSubmodul1/>
      <div className="hero min-h-screen bg-base-200 p-3 m-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <div>
              <ProgressCardSubModul1 />
              <UlasanSubmodul1/>
            </div>
            <div></div>
          </div>
          <div className="card flex justify-left items-left w-[400px] h-[700px] m-2 ">
            <div className="card-body">
              <div>
                <SubModul1 />
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

export default HomePageSubModul1;