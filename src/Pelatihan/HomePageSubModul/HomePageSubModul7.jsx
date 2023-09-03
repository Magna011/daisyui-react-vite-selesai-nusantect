import Footer from "../../komponents/Footer/Footer";
import PelatihanSubmodul7 from "../../komponents/HomePage/PelatihanSubmodul7";
import Navbar from "../../komponents/NavigationBar/NavigationBar";
import Nomer4 from "../../komponents/Pelatihan Serupa/Pelatihanserupa";
import ProgressCardSubModul7 from "../../komponents/ProgressCard/ProgressCardSubmodul7";
import SubModul7 from "../../komponents/SubModul/SubModul7";
import UlasanSubmodul7 from "../../komponents/Ulasan/UlasanSubmodul7";

const HomePageSubModul7 = () => {
  return (
    <div>
      <Navbar/>
      <PelatihanSubmodul7/>
      <div className="hero min-h-screen bg-base-200 p-3 m-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <div>
              <ProgressCardSubModul7 />
              <UlasanSubmodul7/>
            </div>
            <div></div>
          </div>
          <div className="card flex justify-left items-left w-[400px] h-[700px] m-2 ">
            <div className="card-body">
              <div>
                <SubModul7 />
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

export default HomePageSubModul7;