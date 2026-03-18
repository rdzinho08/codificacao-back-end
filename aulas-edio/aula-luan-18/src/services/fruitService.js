const fruits = [
    {id:1, nome:"morango", cor:"vermelha",preco:"10.00"},
    {id:2, nome:"banana", cor:"amarela",preco:"10.00"}
]

function getAllFruits(){
    return fruits;
}

function getFruitById(id){
    const fruit = fruits.find(f => f.id === id);
    if(!fruit){
        throw new Error("Fruta não encontrada");
    }
    return fruit;
}

function addFruit(fruit){
    const newFruit = {
        id: fruits.length + 1,
        nome: fruit.nome,
        cor: fruit.cor,
        preco: fruit.preco
    };
    fruits.push(newFruit);
    return newFruit;
}

function updateFruit(id, updatedFruit){
    const fruitIndex = fruits.findIndex(f => f.id === id);
    if(fruitIndex === -1){
        throw new Error("Fruta não encontrada");
    }
    fruits[fruitIndex] = { ...fruits[fruitIndex], ...updatedFruit };
    return fruits[fruitIndex];
}

function deleteFruit(id){
    const fruitIndex = fruits.findIndex(f => f.id === id);
    if(fruitIndex === -1){
        throw new Error("Fruta não encontrada");
    }
    return fruits.splice(fruitIndex, 1)[0];
}

module.exports = {
    getAllFruits,
    getFruitById,
    addFruit,
    updateFruit,
    deleteFruit
}  
