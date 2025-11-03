## Tecnologias utilizadas

- React
- Vite
- Material UI (biblioteca de componentes Material Design)
- Material Icons(biblioteca de ícones do material ui)
- React Hook Form (para formulários)
- Zod (validação e tipagem de dados)
- date-fns (manipulação de datas)
- React Hot Toast (notificações toast)
- Docker (para containerização)
- (Tailwind CSS pode ser incorporado se necessário)

---

## Estrutura de Pastas
```text
/src
│
├── assets/ # Imagens, ícones, estilos globais, fontes etc.
├── pages/ # Páginas principais da aplicação (views)
├── routes/ # Configuração das rotas da aplicação
├── shared/ # Recursos compartilhados
│ ├── components/ # Componentes reutilizáveis (botões, inputs, tabelas etc.)
│ ├── contexts/ # Contextos React (Context API)
│ ├── hooks/ # Custom hooks reutilizáveis
│ ├── interfaces/ # Tipagens e interfaces TypeScript
│ ├── layout/ # Layouts padrão (menus, cabeçalhos etc.)
│ ├── services/ # Serviços de API e requisições HTTP
│ ├── themes/ # Temas e configurações de estilo (MUI Theme)
│ └── utils/ # Utilitários e funções auxiliares
│
├── App.tsx # Componente principal da aplicação
├── main.tsx # Ponto de entrada do React
```

---

## Como rodar localmente

### Rodando em ambiente de desenvolvimento (sem Docker)

1. Clone este repositório:
```bash
git clone https://github.com/ceos-jr/MP_Web.git
```

2. Acesse a pasta do projeto
```bash
cd mp_web
```
m
3. Instale as dependências
```bash
npm install
```

4. Rode a aplicação em modo desenvolvimento
```bash
npm run dev
```

---
## Rodando com o Docker
### Se quiser rodar a aplicação dentro de um container Docker, siga os passos abaixo:
#### Pré-requisitos: 
- Docker e Docker Compose instalados e rodando no seu computador.
### Passos
1. Subir a aplicação
```bash
docker compose up --build
```

2. Derrubar a aplicação
```bash
docker compose down
```

3. Agora acesse no navegador 
```bash
http://localhost
```

---

## Comandos úteis para gerenciar os containers

1. Listar containers rodando
```bash
docker ps
```
2. Listar todos os containers (parados ou rodando)
```bash
docker ps -a
```
3. Parar container / ex:
```bash
docker stop mp_web_frontend_container
```
4. Iniciar container parado
```bash
docker start mp_web_frontend_container
```
5. Remover/Apagar container
```bash
docker rm mp_web_frontend_container
```

---

## Estrutura de commits

1. Para mudanças de manutenção ou algo que não altera a funcionalidade da aplicação
```bash
"chore:"
```
2. Para funcionalidades novas
```bash
"feat:"
```
3. Para correção de bugs
```bash
"fix:"
```
4. Para alterações na documentação
```bash
"docs:"
```
5. Para melhorias no código que não mudam comportamento
```bash
"refactor:"
```
6. Exemplo:
```bash
git commit -m "feat: adiciona página de login"
```
---