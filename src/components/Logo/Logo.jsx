import { useDispatch, useSelector } from "react-redux";
import { setLogo } from "../Redux/Logo/Action";
import { useEffect } from "react";

const Logo = () => {
  const dispatch = useDispatch();
  const { logo } = useSelector((state) => state.logo);
  const fetchLogo = async () => {
    try {
      const data = await fetch(
        "https://hastiipanahi.github.io/digikala-react/db.json/logo",
      );
      const res = await data.json();
      dispatch(setLogo(res));
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchLogo();
  }, []);
  return (
    <>
      {logo?.map((item) => {
        return (
          <div className=" flex mt-9 justify-between " key={item.id}>
            <span id="top"></span>
            <div className="flex gap-4 ml-96">
              <img src={item.img} alt="" className="w-56" />
              <div className="flex gap-1 w-120 rounded-[10px] h-10 p-3 bg-taupe-200">
                <img src={item.img1} alt="" className="w-7" />
                <h5 className="text-zinc-400">{item.text}</h5>
              </div>
            </div>
            <div className="flex gap-3 ml-11">
              <i className="fa fa-bell-o mt-3 text-[40px]"></i>
              <div className="w-48 h-10 gap-2 rounded-2xl border border-zinc-400 flex justify-center items-center">
                <img className="" src={item.img2} alt="" />
                <h5>{item.text1}</h5>
              </div>
              <img className="" src={item.img3} alt="" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Logo;
