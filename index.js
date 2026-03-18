const express = require('express');
const app = express();

const { v4: uuidv4 } = require('uuid');

const novoId = uuidv4();

// MIDDLEWARE ESSENCIAL - Adicione SEMPRE no início!
app.use(express.json());


// Dados em memória
let produtos = [
    { id: 1, nome: "Notebook Dell", preco: 3500, categoria: "Informática", estoque: 15 },
    { id: 2, nome: "Mouse Logitech", preco: 150, categoria: "Informática", estoque: 50 },
    { id: 3, nome: "Livro JavaScript", preco: 89, categoria: "Livros", estoque: 30 },
    { id: 4, nome: "Teclado Mecânico", preco: 450, categoria: "Informática", estoque: 20 }
];

let categorias = [
    { id: uuidv4(), nome: "Informática" },
    { id: uuidv4(), nome: "Livros" }
];

let usuarios = [
    { id: uuidv4(), nome: "Admin", email: "admin@api.com" }
];

let vendas = [];

// GET /api/produtos - Listar com filtros, ordenação e paginação
app.get('/api/produtos', (req, res) => {
    const { categoria, preco_max, preco_min, ordem, direcao, pagina = 1, limite = 10 } = req.query;
    
    let resultado = produtos;
    
    // Filtros
    if (categoria) resultado = resultado.filter(p => p.categoria === categoria);
    if (preco_max) resultado = resultado.filter(p => p.preco <= parseFloat(preco_max));
    if (preco_min) resultado = resultado.filter(p => p.preco >= parseFloat(preco_min));
    
    // Ordenação
    if (ordem) {
        resultado = resultado.sort((a, b) => {
            if (ordem === 'preco') {
                return direcao === 'desc' ? b.preco - a.preco : a.preco - b.preco;
            }
            if (ordem === 'nome') {
                return direcao === 'desc' ? b.nome.localeCompare(a.nome) : a.nome.localeCompare(b.nome);
            }
        });
    }
    
    // Paginação
    const paginaNum = parseInt(pagina);
    const limiteNum = parseInt(limite);
    const inicio = (paginaNum - 1) * limiteNum;
    const paginado = resultado.slice(inicio, inicio + limiteNum);
    
    res.json({
        dados: paginado,
        paginacao: {
            pagina_atual: paginaNum,
            itens_por_pagina: limiteNum,
            total_itens: resultado.length,
            total_paginas: Math.ceil(resultado.length / limiteNum)
        }
    });
});

// GET /api/produtos/:id - Buscar por ID
app.get('/api/produtos/:id', (req, res) => {
    const produto = produtos.find(p => p.id === req.params.id);
    if (!produto) return res.status(404).json({ erro: "Produto não encontrado" });
    res.json(produto);
});



app.post('/api/categorias', (req, res) => {
    const { nome } = req.body;

    if (!nome) {
        return res.status(400)
    }

    const novaCategoria = {
        id: uuidv4(),
        nome: nome
    };

    categorias.push(novaCategoria);

    res.status(201).json(novaCategoria);
});

app.post('/api/usuarios', (req, res) => {
    const { nome, email } = req.body;

    if (!nome || !email) {
        return res.status(400)
    }

    const novoUsuario = {
        id: uuidv4(),
        nome: nome,
        email: email
    };

    usuarios.push(novoUsuario);

    res.status(201).json(novoUsuario);
});

app.post('/api/vendas', (req, res) => {
    const { produtoId, quantidade } = req.body;

    if (!produtoId || !quantidade) {
        return res.status(400)
    }

    const produtoExiste = produtos.find(p => p.id === produtoId);

    if(!produtoExiste) {
        return res.status(404)
    }

    const novaVenda = {
        id: uuidv4(),
        produtoId,
        quantidade,
        data: new Date()
    };

    vendas.push(novaVenda);

    res.status(201).json(novaVenda);
});

app.post('/api/produtos', (req, res) => {
    // 1. Extrair dados do body
    const { nome, preco, categoria } = req.body;
    
    // 2. VALIDAÇÕES - Campos obrigatórios
    if (!nome || !preco || !categoria) {
        return res.status(400).json({
            erro: "Campos obrigatórios: nome, preco, categoria"
        });
    }
    
    // 3. VALIDAÇÕES - Tipo de dado
    if (typeof preco !== 'number') {
        return res.status(400).json({
            erro: "Preço deve ser um número"
        });
    }
    
    // 4. VALIDAÇÕES - Regra de negócio (preço positivo)
    if (preco <= 0) {
        return res.status(400).json({
            erro: "Preço deve ser maior que zero"
        });
    }
    
    // 5. VALIDAÇÕES - Tamanho mínimo
    if (nome.length < 3) {
        return res.status(400).json({
            erro: "Nome deve ter pelo menos 3 caracteres"
        });
    }
    
    // 6. Se passou em TODAS as validações, criar produto
    const novoProduto = {
        id: uuidv4(),
        nome,
        preco,
        categoria
    };
    
    // 7. Adicionar ao array
    produtos.push(novoProduto);
    
    // 8. Retornar sucesso com 201 Created
    res.status(201).json(novoProduto);
});

app.listen(3000, () => console.log('🚀 API rodando na porta 3000'));