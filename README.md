<h1 align="center">API REST</h1>

<br>

## <font color="#808080">Endpoints da Aplicação</font>

Abaixo estão as rotas disponíveis na nossa API, categorizadas pelas suas respectivas operações:

- **<font color="#4CAF50">GET</font>** `/api/produtos` &rarr; Lista os produtos com filtro.
- **<font color="#4CAF50">GET</font>** `/api/produto/:id` &rarr; Busca um produto pelo seu ID.
- **<font color="#FFC107">POST</font>** `/api/produtos` &rarr; Cadastra um produto.
- **<font color="#FFC107">POST</font>** `/api/categorias` &rarr; Cadastra uma categoria.
- **<font color="#FFC107">POST</font>** `/api/usuarios` &rarr; Cadastra um novo usuário.
- **<font color="#FFC107">POST</font>** `/api/vendas` &rarr; Registra a venda de um produto.
- **<font color="#2196F3">PUT</font>** `/api/produtos/:id` &rarr; Atualiza os dados de um produto existente.
- **<font color="#F44336">DELETE</font>** `/api/produtos/:id` &rarr; Remove um produto do sistema.

<br>

## <font color="#808080">Sobre a Arquitetura e Validações</font>

> Os tipos e as validações dos campos dentro dos métodos **<font color="#FFC107">POST</font>**, **<font color="#4CAF50">GET</font>**, **<font color="#2196F3">PUT</font>** e **<font color="#F44336">DELETE</font>** da API garantem a integridade dos dados inseridos e manipulados. Isso permite aplicar as regras de negócio com rigor, invalidando informações incorretas, evitando erros de processamento e resultando em uma API robusta e funcional. Além disso, o sistema valida e confirma a existência de IDs gerados via **UUID**, o que confere um padrão profissional à arquitetura e assegura a correta comunicação e consistência entre as entidades do sistema.

<br>
<hr>
<br>

## <font color="#808080">Demonstração das Requisições</font>

Abaixo estão os testes realizados em cada rota da API, demonstrando o funcionamento das validações, atualizações, remoções e o retorno dos dados.

<br>

### **<font color="#FFC107">POST</font>** em Categorias.
<img src="https://github.com/user-attachments/assets/e2bddf7a-f9cf-45c0-bfa4-7ced53a4bd0b" width="1000" />
<br><br><br>

### **<font color="#FFC107">POST</font>** em Usuários.
<img src="https://github.com/user-attachments/assets/0373ce72-aa7b-4036-9999-60c5d9b1dd3e" width="1000" />
<br><br><br>

### **<font color="#FFC107">POST</font>** em Produtos.
<img src="https://github.com/user-attachments/assets/0071c0c9-49f0-4961-8e36-dcf16cac4e3f" width="1000" />
<br><br><br>

### **<font color="#FFC107">POST</font>** em Produtos (Validação de Regras).
<img src="https://github.com/user-attachments/assets/063bffb9-16b3-4346-ba32-40bb041f5121" width="1000" />
<br><br><br>

### **<font color="#FFC107">POST</font>** em Vendas.
<img src="https://github.com/user-attachments/assets/9ad268b3-eca3-4951-981e-5f1eb0b2e4a7" width="1000" />
<br><br><br>

### **<font color="#4CAF50">GET</font>** em Produtos.
<img src="https://github.com/user-attachments/assets/6fdd5c3f-5cfa-446f-b29a-72db1189b8e9" width="1000" />
<br><br><br>

### **<font color="#2196F3">PUT</font>** em Produtos.
<img src="https://github.com/user-attachments/assets/80de46cd-32d7-455e-9baf-8ce669c206e9" width="1000" />
<br><br><br>

### **<font color="#2196F3">PUT</font>** em Usuários.
<img src="https://github.com/user-attachments/assets/ee8d4d81-5e65-40fa-b812-a0fddfc7c856" width="1000" />
<br><br><br>

### **<font color="#F44336">DELETE</font>** em Produtos.
<img src="https://github.com/user-attachments/assets/0399b506-e673-41fc-b5ae-af2203dba308" width="1000" />
<br><br><br>

### **<font color="#F44336">DELETE</font>** em Usuários.
<img src="https://github.com/user-attachments/assets/402c3873-0ba4-4d40-b2c2-c6389458149e" width="1000" />
<br><br><br>

### **<font color="#4CAF50">GET</font>** em Produtos (Pós-Remoção).
<img src="https://github.com/user-attachments/assets/806d87da-6dfe-4c22-b0e7-d160511f8c23" width="1000" />
<br><br><br>

### **<font color="#4CAF50">GET</font>** em Usuários (Pós-Remoção).
<img src="https://github.com/user-attachments/assets/33b1043a-770a-4aeb-8e83-61f7b4989c08" width="1000" />
