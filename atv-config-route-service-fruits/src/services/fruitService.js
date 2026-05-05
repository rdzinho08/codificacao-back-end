 import { pool } from "../config/db.js"

class FrutasService {
    async getAll() {
        try {
            const query = "SELECT * FROM frutas"
            const res = await pool.query(query)
            return res.rows
        } catch (error) {
            console.error(error)
            throw error; // Lançar o erro permite que a rota responda com status 500
        }
    }

    async create(data) {
        try {
            // Ajuste "nome" para as colunas reais da sua tabela (ex: nome, preco)
            const query = "INSERT INTO frutas (nome) VALUES ($1) RETURNING *"
            const values = [data.nome]
            const res = await pool.query(query, values)
            return res.rows[0]
        } catch (error) {
            console.error(error)
            throw error;
        }
    }

    async update(id, data) {
        try {
            // Ajuste "nome" para as colunas que deseja atualizar por completo
            const query = "UPDATE frutas SET nome = $1 WHERE id = $2 RETURNING *"
            const values = [data.nome, id]
            const res = await pool.query(query, values)
            return res.rows[0]
        } catch (error) {
            console.error(error)
            throw error;
        }
    }

    async updatePartial(id, data) {
        try {
            // Lógica para montar o PATCH dinamicamente com base nos campos enviados
            const keys = Object.keys(data);
            const values = Object.values(data);
            
            // Cria a string "campo1 = $1, campo2 = $2" dinamicamente
            const setClause = keys.map((key, index) => `${key} = $${index + 1}`).join(', ');
            values.push(id); // Adiciona o ID como o último parâmetro
            
            const query = `UPDATE frutas SET ${setClause} WHERE id = $${values.length} RETURNING *`;
            const res = await pool.query(query, values);
            return res.rows[0];
        } catch (error) {
            console.error(error)
            throw error;
        }
    }

    async delete(id) {
        try {
            const query = "DELETE FROM frutas WHERE id = $1 RETURNING *"
            const res = await pool.query(query, [id])
            return res.rows[0]
        } catch (error) {
            console.error(error)
            throw error;
        }
    }
}

export const frutasService = new FrutasService()