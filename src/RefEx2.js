import { useRef, useEffect, useState } from "react";

const InnerValueKeep = () => {
  const myButtonRef = useRef(null); // 특정한 DOM의 위치를 가리키기 위해서 사용

  useEffect(() => {
    if (myButtonRef.current) {
      myButtonRef.current.innerText = "클릭하세요";
    }
  }, []);

  // 컴포넌트 내부 변수값 유지
  const count = useRef(0); // 내부값을 유지하기 위해 count가 아닌 count.current에 대입하는 부분이다
  const [state, setState] = useState(false);

  const handleClick = () => {
    count.current += 1;
    setState(!state);
    alert(`클릭횟수 : ${count.current}`);
  };

  return (
    <>
      <button ref={myButtonRef} onClick={handleClick}>
        확인
      </button>
    </>
  );
};

export default InnerValueKeep;
