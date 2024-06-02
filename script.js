const createButton = () => {
  const button = document.createElement("button");
  button.id = "searchKitty";
  button.innerText = "Wyświetl kotka";
  document.body.appendChild(button);
  return button;
};
const clickedButton = createButton();
const errorInfo = document.createElement("p");
errorInfo.innerText =
  "Nie można obecnie wyświetlić obrazu. Spróbuj ponownie później.";
errorInfo.id = "error-info";

clickedButton.addEventListener("click", () => {
  const exisitingErrorInfo = document.getElementById("error-info");
  if (exisitingErrorInfo) {
    document.body.removeChild(exisitingErrorInfo);
  }
  const url = "https://api.thecatapi.com/v1/images/search";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const urlImg = data?.[0]?.url;
      if (urlImg) {
        const img = document.createElement("img");
        img.src = urlImg;
        img.setAttribute("data-test", "img-kitty");
        document.body.appendChild(img);
        return img;
      } else {
        document.body.appendChild(errorInfo);
      }
    })
    .catch((error) => {
      document.body.appendChild(errorInfo);
      console.error(error);
    });
});
