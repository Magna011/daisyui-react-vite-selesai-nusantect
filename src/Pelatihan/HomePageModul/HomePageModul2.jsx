import Footer from "../../komponents/Footer/Footer";
import PelatihanModul2 from "../../komponents/HomePage/PelatihanModul2";
import Modul2 from "../../komponents/Modul/Modul2";
import Navbar from "../../komponents/NavigationBar/NavigationBar";
import Nomer4 from "../../komponents/Pelatihan Serupa/Pelatihanserupa";
import ProgressCardModul2 from "../../komponents/ProgressCard/ProgressCardModul2";
import UlasanModul2 from "../../komponents/Ulasan/UlasanModul2";

const HomePageModul2 = () => {
  return (
    <div>
      <Navbar/>
      <PelatihanModul2/>
      <div className="hero min-h-screen bg-base-200 p-3 m-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <div>
              <ProgressCardModul2 />
              <UlasanModul2/>
            </div>
            <div></div>
          </div>
          <div className="card flex justify-left items-left w-[400px] h-[700px] m-2 ">
            <div className="card-body">
              <div>
                <Modul2 />
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

export default HomePageModul2;