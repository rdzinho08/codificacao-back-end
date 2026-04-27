  import fs from "fs/promises";

// 1. Ler o arquivo
async function readFruits() {
  const data = await fs.readFile("./fruits.json", "utf-8");
  return JSON.parse(data);
}

// 2. Salvar no arquivo
async function writeFruits(fruits) {
  const data = JSON.stringify(fruits, null, 2);
  await fs.writeFile("./fruits.json", data, "utf-8");
}

// 3. Listar todas
async function getAllFruits() {
  return await readFruits();
}

// 4. Buscar por ID
async function getFruitById(id) {
  const fruits = await readFruits();
  return fruits.find(item => item.id === Number(id));
}

// 5. Cadastrar (Com desafio de não repetir nome)
async function createFruit(nome) {
  const fruits = await readFruits();
  const alreadyExists = fruits.some(
    item => item.nome.toLowerCase() === nome.toLowerCase()
  );

  if (alreadyExists) {
    console.log(`\n[AVISO]: A fruta "${nome}" já existe!`);
    return null;
  }

  const newFruit = {
    id: fruits.length > 0 ? fruits[fruits.length - 1].id + 1 : 1,
    nome: nome
  };
  fruits.push(newFruit);
  await writeFruits(fruits);
  return newFruit;
}

// 6. Atualizar
async function updateFruit(id, novoNome) {
  const fruits = await readFruits();
  const index = fruits.findIndex(item => item.id === Number(id));
  if (index === -1) return null;
  fruits[index].nome = novoNome;
  await writeFruits(fruits);
  return fruits[index];
}

// 7. Remover
async function deleteFruit(id) {
  const fruits = await readFruits();
  const index = fruits.findIndex(item => item.id === Number(id));
  if (index === -1) return false;
  fruits.splice(index, 1);
  await writeFruits(fruits);
  return true;
}

// --- BLOCO DE TESTES ---
console.log("--- INICIANDO TESTES ---");

console.log("Lista Inicial:", await getAllFruits());

const novaFruta = await createFruit("Abacaxi");
console.log("Tentativa de criar Abacaxi:", novaFruta);

const busca = await getFruitById(1);
console.log("Busca ID 1:", busca);

const atualizada = await updateFruit(1, "Maçã Gala");
console.log("Fruta Atualizada:", atualizada);

const removida = await deleteFruit(2);
console.log("Removido ID 2?", removida);

console.log("Lista Final:", await getAllFruits());