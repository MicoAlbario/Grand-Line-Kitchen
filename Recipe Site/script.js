// ======= LIGHT / DARK MODE TOGGLE =======
const modeToggle = document.getElementById("modeToggle");
const body = document.body;
const recipeContainer = document.getElementById("recipeContainer");

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  updateMode();
});

function updateMode() {
  if (body.classList.contains("dark-mode")) {
    // DARK MODE → Expert Recipes
    modeToggle.textContent = "☀️ Light Mode";
    showExpertRecipes();
  } else {
    // LIGHT MODE → Basic Recipes
    modeToggle.textContent = "🌙 Dark Mode";
    showBasicRecipes();
  }
}
// ====== RECIPE OF THE DAY ======
const recipes = [
  { 
    name: "Fried Rice", 
    description: "Classic fried rice with a sunny-side-up egg.",
    image: "assets/Fried Rice.png"
  },
  { 
    name: "Pancakes", 
    description: "Soft and fluffy pancakes topped with syrup.",
    image: "assets/Pancakes.png"
  },
  { 
    name: "Baked Cinnamon Apples", 
    description: "Warm baked apples with cinnamon.",
    image: "assets/Baked Cinnamon Apples.png"
  }
];

function showRecipeOfTheDay() {
  const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
  const container = document.getElementById("recipeOfTheDay");
  container.innerHTML = `
    <img src="${randomRecipe.image}" alt="${randomRecipe.name}">
    <h3>${randomRecipe.name}</h3>
    <p>${randomRecipe.description}</p>
  `;
}

showRecipeOfTheDay();

// ====== SLIDESHOW ======
const images = ["assets/Fried Rice.png", "assets/Pancakes.png", "assets/Baked Cinnamon Apples.png"];
let currentSlide = 0;
setInterval(() => {
  currentSlide = (currentSlide + 1) % slideImages.length;
  document.getElementById("slideImage").src = slideImages[currentSlide];
}, 4000);

// ======= DISPLAY FUNCTIONS =======
function showBasicRecipes() {
  recipeContainer.innerHTML = "";
  basicRecipes.forEach(recipe => createRecipeCard(recipe));
}

function showExpertRecipes() {
  recipeContainer.innerHTML = "";
  expertRecipes.forEach(recipe => createRecipeCard(recipe));
}

function createRecipeCard(recipe) {
  const card = document.createElement("div");
  card.classList.add("recipe-card");
  card.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.name}">
    <h3>${recipe.name}</h3>
    <p>${recipe.description}</p>
    <div class="tags">
      ${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
    </div>
  `;
  recipeContainer.appendChild(card);
}

// ======= INITIAL LOAD =======
updateMode();