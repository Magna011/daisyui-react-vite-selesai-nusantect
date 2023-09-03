import Footer from "../../komponents/Footer/Footer";
import PelatihanModul1 from "../../komponents/HomePage/PelatihanModul1";
import Modul1 from "../../komponents/Modul/Modul1";
import Navbar from "../../komponents/NavigationBar/NavigationBar";
import Nomer4 from "../../komponents/Pelatihan Serupa/Pelatihanserupa";
import ProgressCardModul1 from "../../komponents/ProgressCard/ProgressCardModul1";
import UlasanModul1 from "../../komponents/Ulasan/UlasanModul1";

const HomePageModul1 = () => {
  return (
    <div>
      <Navbar/>
      <PelatihanModul1/>
      <div className="hero min-h-screen bg-base-200 p-3 m-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <div>
              <ProgressCardModul1 />
              <UlasanModul1/>
            </div>
            <div></div>
          </div>
          <div className="card flex justify-left items-left w-[400px] h-[700px] m-2 ">
            <div className="card-body">
              <div>
                <Modul1 />
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

export default HomePageModul1;
