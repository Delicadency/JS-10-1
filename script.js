/* Przygotuj przycisk z atrybutem id=”searchKitty”. Spraw aby po kliknięciu w niego wysłane zostało zapytanie typu GET pod API dostępne pod wskazanym adresem:
https://api.thecatapi.com/v1/images/search 

API zwraca tablicę, wyciągnij z niej pierwszy element (jest to obiekt), a adres do losowego kociaka znajdzie się pod właściwością “url”.

Teraz wystarczy dodać dynamicznie element <img> z parametrem src wskazującym na wyciągnięty wcześniej link do zdjęcia kota. Nadaj elementowi <img> atrybut data-test=”img-kitty”. */

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
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});
