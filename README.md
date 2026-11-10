# Sambas Lado B

Catálogo de sambas com foco nos compositores e na história das gravações. Cada página separa a composição, a primeira gravação identificada e o vídeo escolhido como gravação em destaque.

Feito com Astro + Tailwind. Cada commit na branch `main` inicia automaticamente a publicação configurada na Vercel.

## Como adicionar um samba

Edite `src/data/sambas.json` e acrescente um objeto seguindo esta estrutura:

```json
{
  "titulo": "Nome do samba",
  "cantor": "Artista da gravação do YouTube escolhida",
  "compositores": ["Compositor 1", "Compositor 2"],
  "youtube": "ID_DO_VIDEO",
  "gravacaoOriginal": {
    "status": "confirmada",
    "artista": "Artista ou intérprete da primeira gravação",
    "ano": 1990,
    "album": "Nome do álbum ou lançamento",
    "fonte": "https://endereco-da-fonte",
    "fonteNome": "Nome da fonte"
  },
  "letra": "Letra fornecida e autorizada para cadastro"
}
```

### Regras editoriais

- `cantor` é sempre o artista da versão do vídeo do YouTube escolhida para a página. Não substituir pelo intérprete original.
- `gravacaoOriginal` registra separadamente quem gravou a obra primeiro, com ano, álbum e fonte quando confirmados.
- Não presumir a primeira gravação. Se a pesquisa não for conclusiva, usar `"status": "em_apuracao"`, `"artista": null`, `"ano": null` e explicar a pendência em `observacao`.
- Os compositores são créditos da composição, não da gravação específica. Conferir os créditos antes de cadastrar.
- Preservar a letra exatamente como foi fornecida pelo usuário; não copiar letras integrais de sites externos.
- `youtube` recebe somente o ID do vídeo, não a URL completa.
- Não duplicar uma composição já cadastrada. Atualizar o registro existente quando for outra gravação da mesma obra.

## Rodar localmente

```bash
npm install
npm run dev
```

## Vercel

O projeto usa Astro. A configuração padrão de build é `npm run build`, com saída em `dist`.
