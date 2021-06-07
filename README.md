# Guentaí

# link back-end https://github.com/jovemdan/GuentaiAPI

## 1. Apresentação

Este projeto é o desenvolvimento de um sistema web em SPA (Single Page Application) focado na user experience (experiência do usuário), voltado para os restaurantes.
O sistema gerencia a fila de espera do restaurante, tornando mais rápido o atendimentos e organizado.

## 2. Especificação Funcional

Os administradores serão previamente cadastrados no sistema para que comecem a configurar o sistema, colocar os garçons, funcionários, mesas e o PDF do cardápio e gerar um QR code para que os clientes acessem o cardápio. 

- [x] Cadastrar funcionários
- [x] Consultar e editar funcionários
- [x] Cadastrar mesas 
- [x] Consultar e editar mesas
- [x] Cadastrar clientes na fila
- [x] Deletar clientes
- [x] Gerenciar cadastro de funcionários
- [ ] Upload do cardápio em PDf 
- [ ] gerar QR CODE do cardápio

## 3. Regras de Negócio

- **Ocupação de mesa**: Para ocupar uma mesa, precisa ter uma quantidade de acompanhantes que cabem na mesa e estar entre os primeiros da fila
- **Gerenciar funcionário**: Apenas os ADMs podem gerenciar eles mesmo, o cadastro e gerenciamento de garçons são feitos por qualquer um
- **Cadastro de clientes**: Todos podem incluir o cliente na fila 

## 4. Tecnologias envolvidas 
Para o front-end foi utilizado o framework Angular na sua versão 12, baseado no JavaScript, um framework SPA.
Para o back-end foi utilizado apenas o C# e para o banco o SQLite.
Para hospedar foi utilizado a [Netlify](https://www.netlify.com/) mas apenas o front-end está hospedado.

![image](https://user-images.githubusercontent.com/50180555/120945041-e840df80-c70d-11eb-8a87-cbf3bcb3efe7.png)

## 5. Entidades do banco
![image](https://user-images.githubusercontent.com/50180555/120945100-2ccc7b00-c70e-11eb-9089-18540e6e7da8.png)

## 6. Resultado
![image](https://user-images.githubusercontent.com/50180555/120945128-479eef80-c70e-11eb-9fe5-5b8770f84388.png)
![image](https://user-images.githubusercontent.com/50180555/120945143-538ab180-c70e-11eb-9bbe-988dcc0105f9.png)
![image](https://user-images.githubusercontent.com/50180555/120945161-6dc48f80-c70e-11eb-962f-d9dd89129ab3.png)
![image](https://user-images.githubusercontent.com/50180555/120945177-787f2480-c70e-11eb-92bb-2c58d62e6436.png)
![image](https://user-images.githubusercontent.com/50180555/120945188-7e750580-c70e-11eb-8323-c5eacb6d811c.png)

# Como instalar

Clonar o projeto https://github.com/KelvinTrigoni/Projeto-integrador.git
abrir o local do projeto no console e digitar o seguinte comando `npm i`

# Startar o projeto

Depois que terminou o `npm i` dar o seguinte comando `ng s` e abrir a seguinte url no browser `http://localhost:4200/`
