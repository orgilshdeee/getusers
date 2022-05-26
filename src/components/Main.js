import Loading from "./Loading";
import Error from "./Error";
import useFetch from "../API/fetchHook";
import Hover from "./subComponents/Hover";
import { useEffect, useState } from "react";
import moment from "moment";

function Main() {
  const { data, loading, error } = useFetch("https://randomuser.me/api/");
  const names = ["Instragram", "Facebook", "Twitter"];
  const [selected, setIsSelected] = useState(names[0]);
  const [para, setPara] = useState("");
  if (loading) return <Loading />;
  if (error) return <Error />;
  function genPara(e) {
    console.log(e);
    setPara(e);
  }
  const now = new Date();
  // console.log(moment(now).format("YYYY/MM/DD"));
  // console.log(data.result[0].dob.date);
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <p>player1</p>
          <p>{data?.results[0].phone}</p>
          <img src={data?.results[0].picture.large} />
        </div>
        <div>{moment(data?.results[0].dob.date).format("YYYY/MM/DD")}</div>
      </div>
      <div style={{ display: "flex" }}>
        {names.map((name, i) => {
          return (
            <Hover
              data={name}
              key={i}
              getPara={genPara}
              isSelected={selected === name}
              onClick={() => setIsSelected(name)}
            />
          );
        })}
      </div>
      <div>{selected}</div>
    </>
  );
}

export default Main;
