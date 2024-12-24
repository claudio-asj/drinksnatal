// Array de drinks (poderia vir de um arquivo JSON)
const drinksData = [
    {
      "name": "CandyPink",
      "image": "https://s2.glbimg.com/pQH17IXAJklSAE77G5_uvl2Md0w=/1200x/smart/filters:cover():strip_icc()/s.glbimg.com/po/rc/media/2013/06/26/11_48_34_433_batida_morango.jpg",
      "ingredients": [
        {"icon": "🍓", "name": "Morangos frescos"},
        {"icon": "🥛", "name": "Leite condensado"},
        {"icon": "🧃", "name": "Suco de morango"},
        {"icon": "🧊", "name": "Gelo"}
      ]
    },
    {
      "name": "CandyLemon",
      "image": "https://th.bing.com/th/id/R.e2f1230d8371a5c24f07da2e94b67aff?rik=xbTMhL3lOgkjuw&riu=http%3a%2f%2fwww.yes-restaurants.com%2fwinnipeg%2fimages%2fbuffet_winnipeg_menu_level_one_Strawberry-Smoothies.png&ehk=PYYWXoGxD%2fr7KaCH6NQJQtwBWSNy2N9OfJQtpAoPmTU%3d&risl=&pid=ImgRaw&r=0",
      "ingredients": [
        {"icon": "🍓", "name": "Morangos frescos"},
        {"icon": "🥛", "name": "Leite condensado"},
        {"icon": "🥤", "name": "Refrigerante de limão"},
        {"icon": "🧊", "name": "Gelo"},
      ]
    },
    {
      "name": "RubyLime",
      "image": "https://www.dicasdemulher.com.br/wp-content/uploads/2021/04/drinks-de-morango-00-595xh.png",
      "ingredients": [
        {"icon": "🍓", "name": "Morangos frescos"},
        {"icon": "🧃", "name": "Suco de morango"},
        {"icon": "🍋", "name": "Suco de limão"},
        {"icon": "💧", "name": "Água com gás ou Tônica"},
        {"icon": "🍬", "name": "Açúcar"},
        {"icon": "🧊", "name": "Gelo"},
      ]
    },
    {
      "name": "YellowHappy",
      "image": "https://images.lacucinaitaliana.it/gallery/85643/Big/acab6945-4213-4ef4-aceb-0ce94dc6f76e.jpg",
      "ingredients": [
        {"icon": "🟡", "name": "Polpa de maracujá"},
        {"icon": "🍋", "name": "Suco de limão"},
        {"icon": "💧", "name": "Água com gás ou Tônica"},
        {"icon": "🍬", "name": "Açúcar"},
        {"icon": "🧊", "name": "Gelo"}
      ]
    },
    {
      "name": "BlueWave",
      "image": "https://i0.wp.com/porkworld.com.br/wp-content/uploads/2021/11/receita-drink-lagoa-azul.jpg?fit=1200%2C675&ssl=1",
      "ingredients": [
        {"icon": "🔵", "name": "Isotônico azul"},
        {"icon": "🌿", "name": "Hortelã fresca"},
        {"icon": "🍋", "name": "Suco de limão"},
        {"icon": "🥤", "name": "Refrigerante de limão"},
        {"icon": "🍬", "name": "Açúcar"},
        {"icon": "🧊", "name": "Gelo"}
      ]
    },
    {
      "name": "Tropical",
      "image": "https://th.bing.com/th/id/OIP.t98IUVhO1CFzT9JPCujpVgHaHa?rs=1&pid=ImgDetMain",
      "ingredients": [
        {"icon": "🍍", "name": "Abacaxi fresco"},
        {"icon": "🍋", "name": "Suco de limão"},
        {"icon": "🌿", "name": "Hortelã"},
        {"icon": "💧", "name": "Água com gás ou Tônica"},
        {"icon": "🍬", "name": "Açúcar"},
        {"icon": "🧊", "name": "Gelo"}
      ]
    },
    {
      "name": "GreenMirage",
      "image": "https://insanelygoodrecipes.com/wp-content/uploads/2021/10/Kiwi-Lime-Mojito-Cocktail-in-a-Glass-683x1024.jpg",
      "ingredients": [
        {"icon": "🥝", "name": "Kiwi fresco"},
        {"icon": "🍋", "name": "Suco de limão"},
        {"icon": "🌿", "name": "Hortelã"},
        {"icon": "💧", "name": "Água com gás ou Tônica"},
        {"icon": "🍬", "name": "Açúcar"},
        {"icon": "🧊", "name": "Gelo"}
      ]
    },
    {
      "name": "Caipirinha",
      "image": "https://th.bing.com/th/id/OIP.Tq88Felj4pQiEUzkNtrijAHaEK?rs=1&pid=ImgDetMain",
      "ingredients": [
        {"icon": "🍋", "name": "Suco de limão"},
        {"icon": "🍬", "name": "Açúcar"},
        {"icon": "🍾", "name": "Cachaça"},
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
      card.classList.add('bg-white', 'rounded-lg', 'shadow-lg', 'p-4', 'text-center', 'max-w-xs', 'm-4', 'shadow-lg', 'fade-in');
  
      // Imagem do drink
      // const image = document.createElement('img');
      // image.src = drink.image;
      // image.alt = drink.name;
      // image.classList.add('w-full', 'h-48', 'object-cover', 'rounded-lg');
      // card.appendChild(image);
  
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
  