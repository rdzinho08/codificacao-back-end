 import pool from '../config/db.js';

class FilmesService {
  async listarTodos() {
    try {
      const resultado = await pool.query('SELECT * FROM filmes ORDER BY id;');
      return resultado.rows;
    } catch (error) {
      console.error('Erro ao buscar filmes no banco:', error);
      throw new Error('Erro ao buscar dados no banco de dados.');
    }
  }
}

export default new FilmesService();