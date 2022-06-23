const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '860babcf51msh95cb7aad9c79e8cp177742jsn83dc651616e5',
		'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
	}
};

fetch('https://yummly2.p.rapidapi.com/feeds/auto-complete?q=chicken%20soup', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

	const searchBtn = document.getElementById('search-btn');
	const mealList = document.getElementById('meal');
	const mealDetailsContent = document.querySelector('.meal-details-content');
	const recipeCloseBtn = document.getElementById('recipe-close-btn');





//     function fetchFood(){
//         fetch('https://yummly2.p.rapidapi.com/feeds/auto-complete?q=chicken%20soup')
//         .then(response => response.json())
//         .then(food =>{
//             console.log(food)
//         })
//     }
//     fetchFood()


// let menu = document.querySelector('#menu-bar');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () =>{

//   menu.classList.toggle('fa-times');
//   navbar.classList.toggle('active');

// }

// window.onscroll = () =>{

//   menu.classList.remove('fa-times');
//   navbar.classList.remove('active');

//   if(window.scrollY > 60){
//     document.querySelector('#scroll-top').classList.add('active');
//   }else{
//     document.querySelector('#scroll-top').classList.remove('active');
//   }

// }

// function loader(){
//   document.querySelector('.loader-container').classList.add('fade-out');
// }

// function fadeOut(){
//   setInterval(loader, 3000);
// }

// window.onload = fadeOut();