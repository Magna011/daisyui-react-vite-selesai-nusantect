import './Style.css';
import {useNavigate} from 'react-router-dom';

const SubModul5 = () => {
  const navigate = useNavigate()

  return (
    <div>
      <table className="table border border-black border-t-2 w-[300px] h-[650px]">
        <tbody>
          <table className="table border border-black border-t-2 w-full h-[130px]">
            <div>
              <div className="grid place-content-left font-bold p-2 m-2">
                Progress
              </div>
              <div className="grid place-content-left p-1 px-5">33%</div>
              <div className="grid place-content-center">
                <progress
                  className="progress w-[300px]"
                  value="33"
                  max="100"
                ></progress>
              </div>
            </div>
          </table>
          <div className="bg-base-100">
          <label
            className="block w-[300px] py-1 border border-black border-t-2 text-md font-bold custom-label"
          >
            <a onClick={() => navigate('/homepagemodul1') }>Modul 1</a>
          </label>
          </div>
          <div className="flex justify-center items-center py-2">
            <label
              className="block w-[280px] border border-black border-t-2 bg-primary-content text-md subcustom-label"
            >
              <a onClick={() => navigate('/homepagesubmodul1')}>SubModul 1</a>
            </label>
          </div>
          <div className="flex justify-center items-center py-2">
            <label
              className="block w-[280px] border border-black border-t-2 bg-primary-content text-md"
            >
              <a onClick={() => navigate('/homepagesubmodul2') }>SubModul 2</a>
            </label>
          </div>
          <div className="flex justify-center items-center py-2">
            <label
              className="block w-[280px] border border-black border-t-2 bg-primary-content text-md"
            >
              <a onClick={() => navigate('/homepagesubmodul3') }>SubModul 3</a>
            </label>
          </div>
          <div className="flex justify-center items-center py-2">
            <label
              className="block w-[280px] border border-black border-t-2 bg-primary-content text-md"
            >
              <a onClick={() => navigate('/homepagesubmodul4') }>SubModul 4</a>
            </label>
          </div>

          <label
            className="block w-[300px] border border-black border-t-2 bg-primary-content text-md font-bold custom-label"
          >
            <a onClick={() => navigate('/homepagemodul2') }>Modul 2</a>
          </label>
          <div className="flex justify-center items-center py-2">
            <label
              className="block w-[280px] border border-black border-t-2 bg-primary-content text-md"
            >
              <a onClick={() => navigate('/homepagesubmodul5') }>SubModul 1</a>
            </label>
          </div>
          <div className="flex justify-center items-center py-2">
            <label
              className="block w-[280px] border border-black border-t-2 bg-primary-content text-md "
            >
              <a onClick={() => navigate('/homepagesubmodul6') }>SubModul 2</a>
            </label>
          </div>
          <div className="flex justify-center items-center py-2">
            <label
              className="block w-[280px] border border-black border-t-2 bg-primary-content text-md"
            >
              <a onClick={() => navigate('/homepagesubmodul7') }>SubModul 3</a>
            </label>
          </div>
          <div className="flex justify-center items-center py-2">
            <label
              className="block w-[280px] border border-black border-t-2 bg-primary-content text-md "
            >
              <a onClick={() => navigate('/homepagesubmodul8') }>SubModul 4</a>
            </label>
          </div>

          <div className="py-3">
            <label
              className="block w-[300px] border border-black border-t-2 bg-primary-content text-md font-bold custom-label"
            >
              <a onClick={() => navigate('/homepagefinalquis') }>Final Quis</a>
            </label>
          </div>
        </tbody>
      </table>
    </div>
  );
};
export default SubModul5;
