const myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("请输入你的名字。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `欢迎光临, ${myName}`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `欢迎光临, ${storedName}`;
}
myButton.onclick = function () {
  setUserName();
};
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/结弦偷拍.jpg") {
    myImage.setAttribute("src", "images/ah.jpg");
  } else {
    myImage.setAttribute("src", "images/结弦偷拍.jpg");
  }
};

