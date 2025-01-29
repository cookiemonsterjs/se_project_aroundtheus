const initialCards = [
    {
      name: "Yosemite Valley",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
    },
    {
      name: "Lake Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
    },
    {
      name: "Bald Mountains",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
    },
    {
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
    },
    {
      name: "Vanoise National Park",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
    },
  ];


  const profileEditButton = document.querySelector("#profile-edit-button");
  const profileEditModal = document.querySelector("#profile-edit-modal");
  const profileEditCloseButton = profileEditModal.querySelector(".modal__close");
  const profileTitle = document.querySelector(".profile__title");
  const profileSubtitle = document.querySelector(".profile__subtitle"); 
  const profileTitleInput = document.querySelector("#profile-title");
  const profileSubtitleInput = document.querySelector("#profile-subtitle"); 
  const profileEditForm = profileEditModal.querySelector(".modal__form");
  const cardTemplate = document.querySelector("#cards-template").content.firstElementChild;
  const cardListEl = document.querySelector(".cards__list");


  function closePopup() {
    profileEditModal.classList.remove("modal_opened");
  }

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent= profileTitleInput.value;
  profileSubtitle.textContent = profileSubtitleInput.value;
  closePopup()

}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".cards__image");
  const cardTitleEl = cardElement.querySelector(".cards__name");
  cardTitleEl.textContent = cardData.name;
  cardImageEl.src =cardData.link;
  return cardElement;
}



  profileEditButton.addEventListener("click", () => {
    profileTitleInput.value = profileTitle.textContent;
    profileSubtitleInput.value= profileSubtitle.textContent; 
    
  profileEditModal.classList.add("modal_opened"); 
  });
  

  profileEditCloseButton.addEventListener("click", closePopup);
  
profileEditForm.addEventListener("submit", (e) => {

})
 

profileEditForm.addEventListener("submit", handleProfileEditSubmit);
 
initialCards.forEach((cardData)=> {
  const cardElement = getCardElement(cardData);
  cardListEl.append(cardElement);


})