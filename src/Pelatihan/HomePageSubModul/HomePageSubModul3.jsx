import Footer from "../../komponents/Footer/Footer";
import PelatihanSubmodul3 from "../../komponents/HomePage/PelatihanSubmodul3";
import Navbar from "../../komponents/NavigationBar/NavigationBar";
import Nomer4 from "../../komponents/Pelatihan Serupa/Pelatihanserupa";
import ProgressCardSubModul3 from "../../komponents/ProgressCard/ProgressCardSubmodul3";
import SubModul3 from "../../komponents/SubModul/SubModul3";
import UlasanSubmodul3 from "../../komponents/Ulasan/UlasanSubmodul3";

const HomePageSubModul3 = () => {
  return (
    <div>
      <Navbar/>
      <PelatihanSubmodul3/>
      <div className="hero min-h-screen bg-base-200 p-3 m-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <div>
              <ProgressCardSubModul3/>
              <UlasanSubmodul3/>
            </div>
            <div></div>
          </div>
          <div className="card flex justify-left items-left w-[400px] h-[700px] m-2 ">
            <div className="card-body">
              <div>
                <SubModul3 />
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

export default HomePageSubModul3;