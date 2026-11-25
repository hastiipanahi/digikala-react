import { useDispatch, useSelector } from "react-redux";
import { setPicture } from "../Redux/Picture/Action";
import { useEffect } from "react";

const Picture = () => {
  const dispatch = useDispatch();
  const { picture } = useSelector((state) => state.picture);
  const fetchPicture = async () => {
    try {
      const data = await fetch(
        "https://hastiipanahi.github.io/digikala-react/db.json",
      );
      const res = await data.json();
      
      dispatch(setPicture(res.picture));
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchPicture();
  }, []);

  return (
    <div className="w-full h-auto  flex md:flex-row flex-col justify-center gap-2 pt-14">
      {picture.map((item) => {
        return (
          <div className="">
            <img className="w-96 rounded-2xl" src={item.img} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Picture;
