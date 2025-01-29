import "./styles.scss";
import Markup from "./Markup";
import React from "react";

function App() {
  const copyText = () => {
    const copyBtnEl = document.querySelector(".copy-btn");
    const copyTextEl = document.querySelector(".copied");
    const passwordText = document.querySelector(".password").textContent;

    navigator.clipboard.writeText(passwordText);
    copyBtnEl.classList.add("copy-active");
    copyTextEl.classList.remove("copied-hidden");

    setTimeout(() => {
      copyBtnEl.classList.remove("copy-active");
      copyTextEl.classList.add("copied-hidden");
    }, 2500);
  };

  const changeSettings = (event) => {
    if (!(event?.target.type === "checkbox") && event?._reactName === "onClick") return;

    const rangeBoxEl = document.querySelector(".range-box");
    const value = document.querySelector(".range-widget").value;
    const charLength = value / 5;
    document.getElementById("length").textContent = charLength;
    rangeBoxEl.style.setProperty("--widget-current-size", `${value}%`);

    const uppcase = document.getElementById("uppercase").checked;
    const lowcase = document.getElementById("lowercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;
    const cond = [uppcase, lowcase, numbers, symbols].filter((c) => c).length;

    const strengthTextEl = document.querySelector(".strength-box__level");
    const strengthBoxEl = document.querySelector(".strength-box__box");

    const setTooWeak = () => {
      strengthTextEl.textContent = "Too weak!";
      strengthBoxEl.classList.remove("rd", "or", "yel", "gr");
      strengthBoxEl.classList.add("rd");
    };

    const setWeak = () => {
      strengthTextEl.textContent = "Weak";
      strengthBoxEl.classList.remove("rd", "or", "yel", "gr");
      strengthBoxEl.classList.add("or");
    };

    const setMedium = () => {
      strengthTextEl.textContent = "Medium";
      strengthBoxEl.classList.remove("rd", "or", "yel", "gr");
      strengthBoxEl.classList.add("yel");
    };

    const setStrong = () => {
      strengthTextEl.textContent = "Strong";
      strengthBoxEl.classList.remove("rd", "or", "yel", "gr");
      strengthBoxEl.classList.add("gr");
    };

    if (
      (charLength > 15 && cond >= 4) ||
      (charLength > 17 && cond >= 3) ||
      (charLength === 20 && cond >= 2)
    ) {
      setStrong();
      return;
    }

    if (
      (charLength > 9 && cond >= 3) ||
      (charLength > 12 && cond >= 2) ||
      (charLength > 15 && cond >= 1)
    ) {
      setMedium();
      return;
    }

    if ((charLength > 5 && cond >= 2) || (charLength > 8 && cond >= 1)) {
      setWeak();
      return;
    }

    setTooWeak();
  };

  React.useEffect(() => changeSettings(), []);

  const generatePassword = () => {
    const pwLength = document.querySelector(".range-widget").value / 5;
    if (pwLength === 0) return;

    const uppcase = document.getElementById("uppercase").checked;
    const lowcase = document.getElementById("lowercase").checked;
    const nums = document.getElementById("numbers").checked;
    const syms = document.getElementById("symbols").checked;
    const cond = [uppcase, lowcase, nums, syms].filter((c) => c).length;
    if (cond === 0) return;

    const lis = document.querySelectorAll(".li");
    const passwordEl = document.querySelector(".password");

    // prettier-ignore
    const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    // prettier-ignore
    const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // prettier-ignore
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    // prettier-ignore
    const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '[', ']', ';', ':', '"', '<', '>', '?', ',', '.', '/', '|', '`', '~', '-', '='];

    let allCharacter = [];

    lis.forEach((li) => {
      const checked = li.querySelector("input").checked;
      const type = li.dataset.type;

      if (checked && type === "uppercase") allCharacter = allCharacter.concat(uppercase);

      if (checked && type === "lowercase") {
        allCharacter = allCharacter.concat(lowercase);
      }

      if (checked && type === "numbers") {
        allCharacter = allCharacter.concat(numbers);
      }

      if (checked && type === "symbols") {
        allCharacter = allCharacter.concat(symbols);
      }
    });

    let randomNum = Math.floor(Math.random() * allCharacter.length - 1);
    const set = new Set();

    if (allCharacter == []) return;

    const onlyNums = allCharacter.every((char) => typeof char === "number");
    if (onlyNums) allCharacter = allCharacter.concat(numbers);

    while (set.size < pwLength) {
      set.add(randomNum);
      randomNum = Math.floor(Math.random() * allCharacter.length - 1);
    }

    const uniqueNumbers = [...set];
    const password = uniqueNumbers.map((n) => allCharacter[n]).join("");

    passwordEl.textContent = password;
    passwordEl.classList.remove("password-empty");
  };

  return <Markup copyText={copyText} changeSettings={changeSettings} generate={generatePassword} />;
}

export default App;
