//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM


document.querySelector('button').addEventListener('click', run)

function run(){
    const drink = document.querySelector('input').value.split(' ').join('_')
    


fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.drinks)
        let i = 0
        let drinkNum = 1
        let totalDrinks = data.drinks.length
        
        document.querySelector('.cocktail').innerText = data.drinks[i].strDrink
        document.querySelector('img').src = data.drinks[i].strDrinkThumb
        document.querySelector('.instruct').innerText = data.drinks[i].strInstructions
        document.querySelector('li').innerText = data.drinks[i].strMeasure1 + data.drinks[i].strIngredient1
        
        document.querySelector('#next').onclick = function(){
            drinkNum++
            i++
            if (drinkNum > totalDrinks){
                drinkNum = totalDrinks
                i = totalDrinks
            } else {
                document.querySelector('#quantity').innerText = `${drinkNum} of ${totalDrinks}`
            }
            
        document.querySelector('.cocktail').innerText = data.drinks[i].strDrink
        document.querySelector('img').src = data.drinks[i].strDrinkThumb
        document.querySelector('.instruct').innerText = data.drinks[i].strInstructions
        document.querySelector('li').innerText = data.drinks[i].strMeasure1 + data.drinks[i].strIngredient1
        }
        document.querySelector('#previous').onclick = function(){
            drinkNum--
            i--
            if (drinkNum === totalDrinks){
                alert('NO MORE DRINKS')
            } else {
                document.querySelector('#quantity').innerText = `${drinkNum} of ${totalDrinks}`
            }
            document.querySelector('#quantity').innerText = `${i+1} of ${data.drinks.length}`
        document.querySelector('.cocktail').innerText = data.drinks[i].strDrink
        document.querySelector('img').src = data.drinks[i].strDrinkThumb
        document.querySelector('.instruct').innerText = data.drinks[i].strInstructions
        document.querySelector('li').innerText = data.drinks[i].strMeasure1 + data.drinks[i].strIngredient1
        }
        
        

    
        
    })
    .catch(err =>{
        console.log(`error ${err}`)
    })
}

