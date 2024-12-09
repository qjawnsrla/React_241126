import { useRef } from "react"; // 랜더링을 유발하지 않는다

const CreateRef = () => {
  const inputRef = useRef(null); // 참조하는 DOM 요소가 없음

  const handleFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  return (
    <>
      <input disabled type="text" ref={inputRef} />
      <button onClick={handleFocus}>활성화</button>
    </>
  );
};
export default CreateRef;
