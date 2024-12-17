// Array de drinks (poderia vir de um arquivo JSON)
const drinksData = [
    {
      "name": "CandyPink",
      "image": "https://via.placeholder.com/150",
      "ingredients": [
        {"icon": "🍓", "name": "Morangos frescos"},
        {"icon": "🥛", "name": "Leite condensado"},
        {"icon": "🍓", "name": "Suco de morango"},
        {"icon": "🧊", "name": "Gelo"}
      ]
    },
    {
      "name": "CandyLemon",
      "image": "https://via.placeholder.com/150",
      "ingredients": [
        {"icon": "🍓", "name": "Morangos frescos"},
        {"icon": "🥄", "name": "Leite condensado"},
        {"icon": "🍋", "name": "Suco de limão"},
        {"icon": "🧊", "name": "Gelo"},
        {"icon": "🍋", "name": "Refrigerante de limão"}
      ]
    },
    {
      "name": "YellowHappy",
      "image": "https://via.placeholder.com/150",
      "ingredients": [
        {"icon": "🍹", "name": "Polpa de maracujá"},
        {"icon": "🍋", "name": "Suco de limão"},
        {"icon": "🍋", "name": "Refrigerante Sprite"},
        {"icon": "🧊", "name": "Gelo"}
      ]
    },
    {
      "name": "Blue Wave",
      "image": "https://via.placeholder.com/150",
      "ingredients": [
        {"icon": "🔵", "name": "Isotônico azul"},
        {"icon": "🌿", "name": "Hortelã fresca"},
        {"icon": "🍋", "name": "Suco de limão"},
        {"icon": "💧", "name": "Água com gás"},
        {"icon": "🍬", "name": "Açúcar"},
        {"icon": "🧊", "name": "Gelo"}
      ]
    },
    {
      "name": "Tropical",
      "image": "https://via.placeholder.com/150",
      "ingredients": [
        {"icon": "🍍", "name": "Abacaxi fresco"},
        {"icon": "🍋", "name": "Suco de limão"},
        {"icon": "🍬", "name": "Açúcar"},
        {"icon": "🌿", "name": "Hortelã"},
        {"icon": "💧", "name": "Água com gás"},
        {"icon": "🧊", "name": "Gelo"}
      ]
    }
  ];
  
  
  // Função para gerar e exibir os cards dos drinks
  function displayDrinks() {
    const drinksContainer = document.getElementById('drinks');
    
    // Itera sobre o array de drinks e cria o conteúdo para cada um
    drinksData.forEach(drink => {
      // Criação do card do drink
      const card = document.createElement('div');
      card.classList.add('bg-white', 'rounded-lg', 'shadow-lg', 'p-4', 'text-center', 'max-w-xs', 'm-4', 'shadow-lg');
  
      // Imagem do drink
      const image = document.createElement('img');
      image.src = drink.image;
      image.alt = drink.name;
      image.classList.add('w-full', 'h-48', 'object-cover', 'rounded-lg');
      card.appendChild(image);
  
      // Nome do drink
      const title = document.createElement('h3');
      title.classList.add('text-xl', 'font-semibold', 'mt-4');
      title.textContent = drink.name;
      card.appendChild(title);
  
      // Ingredientes do drink
      const ingredientsList = document.createElement('ul');
      ingredientsList.classList.add('mt-4', 'text-left');
      drink.ingredients.forEach(ingredient => {
        const ingredientItem = document.createElement('li');
        ingredientItem.classList.add('flex', 'items-center', 'mb-2');
        
        const emoji = document.createElement('span');
        emoji.classList.add('text-2xl', 'mr-2');
        emoji.textContent = ingredient.icon;
        ingredientItem.appendChild(emoji);
        
        const name = document.createElement('span');
        name.textContent = ingredient.name;
        ingredientItem.appendChild(name);
        
        ingredientsList.appendChild(ingredientItem);
      });
      card.appendChild(ingredientsList);
  
      // Adiciona o card ao contêiner
      drinksContainer.appendChild(card);
    });
  }
  
  // Chama a função para exibir os drinks quando a página for carregada
  window.onload = displayDrinks;
  