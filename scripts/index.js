const initialCards = [
  {
    title: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
    alt: "Yosemite Valley",
  },
  {
    title: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
    alt: "Lake Louise",
  },
  {
    title: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
    alt: "Bald Mountains",
  },
  {
    title: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
    alt: "Latemar",
  },
  {
    title: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
    alt: "Vanoise National Park",
  },
  {
    title: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
    alt: "Lago di Braies",
  },
];

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditCloseButton = profileEditModal.querySelector(".modal_close");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileTitleInput = document.querySelector("#profile-title");
const profileSubtitleInput = document.querySelector("#profile-subtitle");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardTemplate =
  document.querySelector("#cards-template").content.firstElementChild;
const cardListEl = document.querySelector(".cards__list");

const addCardModal = document.querySelector("#add-popup");
const cardAddButton = document.querySelector("#add-button");
const addCardCloseButton = addCardModal.querySelector(".modal_close");
const addCardForm = document.querySelector("#add-card-form");

const imageModal = document.querySelector("#image-modal");
const imageModalEl = document.querySelector("#image-big");
const imageModalText = document.querySelector("#image-text");
const imageCloseButton = document.querySelector("#close-image");

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

function closePopup(modal) {
  modal.classList.remove("modal_opened");
}

function openPopup(modal) {
  modal.classList.add("modal_opened");
}

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileSubtitle.textContent = profileSubtitleInput.value;
  closePopup(profileEditModal);
}

function enlargeImage(cardData) {
  imageModalEl.src = cardData.link;
  imageModalText.textContent = cardData.title;
  imageModalEl.alt = cardData.title;
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".cards__image");
  const cardTitleEl = cardElement.querySelector(".cards__name");
  const likeButton = cardElement.querySelector(".cards__pad-button");
  const deleteButton = cardElement.querySelector(".delete__button");
  cardTitleEl.textContent = cardData.title;
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.title;

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("cards__pad-button_active");
  });

  deleteButton.addEventListener("mouseenter", () => {
    deleteButton.classList.add("delete__button_active");
  });

  deleteButton.addEventListener("mouseleave", () => {
    deleteButton.classList.remove("delete__button_active");
  });
  deleteButton.addEventListener("click", () => {
    const cardElement = deleteButton.closest(".cards__item");
    cardElement.remove();
  });

  cardImageEl.addEventListener("click", () => {
    enlargeImage(cardData);
    imageModal.classList.add("imageModal__preview_opened");
  });

  return cardElement;
}

addCardForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = e.target.title.value;
  const link = e.target.link.value;
  const cardElement = getCardElement({
    title: title,
    link: link,
    alt: title,
  });
  cardListEl.prepend(cardElement);
  closePopup(addCardModal);
});

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileSubtitleInput.value = profileSubtitle.textContent;

  openPopup(profileEditModal);
});

profileEditCloseButton.addEventListener("click", () => {
  closePopup(profileEditModal);
});

cardAddButton.addEventListener("click", () => {
  openPopup(addCardModal);
});

addCardCloseButton.addEventListener("click", () => closePopup(addCardModal));

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.append(cardElement);
});

imageCloseButton.addEventListener("click", () => {
  imageModal.classList.remove("imageModal__preview_opened");
});
