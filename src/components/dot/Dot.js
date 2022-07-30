import "./dot.css";
function Dot() {
  const word = {
    ا: 0,
    آ: 0,
    ب: 1,
    پ: 3,
    ت: 2,
    ث: 3,
    ج: 1,
    چ: 3,
    ح: 0,
    خ: 1,
    د: 0,
    ذ: 1,
    ر: 0,
    ز: 1,
    ژ: 3,
    س: 0,
    ش: 3,
    ص: 0,
    ض: 1,
    ظ: 1,
    ع: 0,
    غ: 1,
    ف: 1,
    ق: 2,
    ک: 0,
    گ: 0,
    ل: 0,
    م: 0,
    ن: 1,
    و: 0,
    ه: 0,
    ی: 2,
  };
  const keyDown = (e) => {
    const letter = e.target.value,
      letterSplit = letter.split("");
    let count = 0;
    for (const key in word) {
      for (const iterator of letterSplit) {
        if (iterator == key) {
          count += word[key];
        }
      }
    const counts = document.querySelector('.count');
    counts.innerHTML = count
    }
  };
  return (
    <figure className="wrapper">
      <img src={"Pashe.jpeg"} alt={"Hello Pashe"} className="pashe"></img>
      <p className="text"> یه جمله بده بزنیم </p>
      <input className="input-text" onChange={keyDown} type="text" />
      <div className="counter">
        <span className="count">0</span>
        <p>تعداد نقاط</p>
      </div>
    </figure>
  );
}

export default Dot;
