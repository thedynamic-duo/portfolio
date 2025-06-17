# Portfolio Pessoal

Um portfólio moderno e responsivo construído com Next.js e Tailwind CSS.

## Características

- Design moderno e responsivo
- Seções para apresentação, projetos e contato
- Formulário de contato
- Links para redes sociais
- Animações suaves
- Otimizado para SEO

## Tecnologias Utilizadas

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- ESLint

## Como Executar

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Personalização

### Imagens
- Substitua as imagens em `/public/`:
  - `profile-placeholder.jpg` - Sua foto de perfil
  - `project-placeholder.jpg` - Imagens dos seus projetos

### Conteúdo
1. Edite `src/app/page.tsx` para atualizar:
   - Seu nome
   - Título profissional
   - Descrição sobre você
   - Projetos

2. Edite `src/app/components/Contact.tsx` para atualizar:
   - Informações de contato
   - Links das redes sociais

### Estilo
- As cores principais podem ser alteradas no arquivo `tailwind.config.js`
- O tema atual usa tons de roxo e rosa como cores principais

## Estrutura do Projeto

```
portfolio/
├── public/              # Arquivos estáticos
├── src/
│   ├── app/            # Páginas e componentes
│   │   ├── components/ # Componentes reutilizáveis
│   │   └── page.tsx    # Página principal
│   └── styles/         # Estilos globais
└── package.json        # Dependências e scripts
```

## Contribuição

Sinta-se à vontade para contribuir com melhorias através de pull requests.

## Licença

MIT
