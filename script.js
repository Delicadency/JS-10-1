const createButton = () => {
  const button = document.createElement("button");
  button.id = "searchKitty";
  button.innerText = "Wyświetl kotka";
  document.body.appendChild(button);
  return button;
};
const clickedButton = createButton();
clickedButton.addEventListener("click", () => {
  const url = "https://api.thecatapi.com/v1/images/search";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const urlImg = data[0].url;
      const img = document.createElement("img");
      img.src = urlImg;
      img.setAttribute("data-test", "img-kitty");
      document.body.appendChild(img);
      return img;
    })
    .catch((error) => console.error(error));
});
