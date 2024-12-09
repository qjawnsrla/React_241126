import { useState, useMemo, useCallback } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산중");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  // 마운트될떄 한번만 만들어주겠다는 의미
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList); // 새로 만들어진 배열로 상태 변경
    setNumber(""); // 입력창을 비우기 위해서
  }, [list, number]);

  //   const avg = getAverage(list);

  // 리랜더링 시 값이 바뀌어지는것을 방지하기 위한 코드
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>{list && list.map((val, index) => <li key={index}>{val}</li>)}</ul>
      <p>평귶값 : {avg}</p> {/*즉시호출*/}
    </>
  );
};

export default Average;
