export default function createCard(img, title, desc, repoLink, liveLink) {
    // Create new card    
    const newCard = document.createElement('div');

    // add the class name to the card
    newCard.classList.add('card');

    // append the img to the card
    newCard.appendChild(img);

    // Create middle section
    const middleSection = document.createElement('div');
    middleSection.classList.add('cardMiddle');

    // Create title
    const titleText = document.createElement('h3');
    titleText.classList.add('cardTitle');
    titleText.textContent = title;

    // create links
    const links = document.createElement('div');
    links.classList.add('links');

    const repoReference = document.createElement('a');
    repoReference.setAttribute('href', repoLink);
    const repoIcon = new Image()
    repoIcon.src = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg";
    repoReference.appendChild(repoIcon);    
    links.appendChild(repoReference);

    const liveReference = document.createElement('a');
    liveReference.setAttribute('href', liveLink);
    links.appendChild(liveReference);
    const liveIcon = new Image()
    liveIcon.src = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-plain.svg";
    liveReference.appendChild(liveIcon);    
    links.appendChild(liveReference);
    
    middleSection.appendChild(titleText);
    middleSection.appendChild(links);

    // Create description node
    const description = document.createElement('div');
    description.classList.add('cardDescription');
    description.classList.add('cardDescription');
    description.textContent = desc;

    // append middle section and description to card
    newCard.appendChild(middleSection);
    newCard.appendChild(description);

    return newCard;
}