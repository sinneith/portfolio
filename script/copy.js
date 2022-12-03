const address = document.getElementById("mail");

address.addEventListener("click", () => {
  const tempArea = document.createElement("textarea");
  document.body.appendChild(tempArea);
  tempArea.value = address.innerText;
  tempArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempArea);
  alert("이메일 주소가 복사되었습니다.");
});
