# FSW Donalds

Cardápio digital para restaurantes desenvolvido durante a **Full Stack Week**. Permite que clientes naveguem pelo menu e façam pedidos diretamente pelo celular, com uma interface inspirada no iFood.

## Tecnologias

- **Next.js 14** — App Router, Server Components e Server Actions
- **Prisma** + **PostgreSQL** — banco de dados relacional com ORM tipado
- **Shadcn/UI** + **Radix UI** — componentes de UI acessíveis
- **TailwindCSS** — estilização
- **TypeScript**

## Funcionalidades

- Listagem de restaurantes e categorias de produtos
- Página de produto com detalhes e personalização
- Carrinho de compras com cálculo automático
- Finalização de pedido
- Interface responsiva (mobile-first)

## Como rodar

```bash
# Instalar dependências
npm install

# Variáveis de ambiente
cp .env.example .env
# Configure a DATABASE_URL no .env

# Criar banco de dados
npx prisma migrate dev
npx prisma db seed

# Desenvolvimento
npm run dev
```

Acesse `http://localhost:3000`
