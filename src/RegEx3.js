import { useRef, useEffect } from "react";

const InnerValueKeep2 = () => {
  const myButtonRef = useRef(null); // 특정한 DOM의 위치를 가리키기 위해서 사용

  useEffect(() => {
    if (myButtonRef.current) {
      myButtonRef.current.innerText = "클릭하세요";
    }
  }, []);

  // 컴포넌트 내부 변수값 유지
  // let을 썼어도 랜더링이 일어나지 않았기 때문에 정상적으로 동작하는것처럼 보임
  let count = 0;

  const handleClick = () => {
    count += 1;
    alert(`클릭횟수 : ${count}`);
  };

  return (
    <>
      <button ref={myButtonRef} onClick={handleClick}>
        확인
      </button>
    </>
  );
};

export default InnerValueKeep2;
