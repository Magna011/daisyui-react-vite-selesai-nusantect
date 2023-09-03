import Footer from "../../komponents/Footer/Footer";
import PelatihanSubmodul8 from "../../komponents/HomePage/PelatihanSubmodul8";
import Navbar from "../../komponents/NavigationBar/NavigationBar";
import Nomer4 from "../../komponents/Pelatihan Serupa/Pelatihanserupa";
import ProgressCardSubModul8 from "../../komponents/ProgressCard/ProgressCardSubmodul8";
import SubModul8 from "../../komponents/SubModul/SubModul8";
import UlasanSubmodul8 from "../../komponents/Ulasan/UlasanSubmodul8";

const HomePageSubModul8 = () => {
  return (
    <div>
      <Navbar/>
      <PelatihanSubmodul8/>
      <div className="hero min-h-screen bg-base-200 p-3 m-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <div>
              <ProgressCardSubModul8 />
              <UlasanSubmodul8/>
            </div>
            <div></div>
          </div>
          <div className="card flex justify-left items-left w-[400px] h-[700px] m-2 ">
            <div className="card-body">
              <div>
                <SubModul8 />
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

export default HomePageSubModul8;