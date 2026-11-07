# Sambas Lado B

Site com a lista de sambas "lado B": músicas muito boas, de disco, que não são os sambas famosões e hoje quase ninguém canta. O foco é nos compositores.

Feito com Astro + Tailwind. Cada commit na branch `main` sobe sozinho na Vercel.

## Como adicionar um samba

Edite só o arquivo `src/data/sambas.json` e acrescente um bloco no final:

```json
{
  "titulo": "Nome do samba",
  "cantor": "Quem gravou",
  "compositores": ["Compositor 1", "Compositor 2"],
  "disco": "Nome do disco",
  "ano": 1990
}
```

Se não souber o cantor, o disco ou o ano, use `null` (sem aspas). As páginas de música e de compositor são geradas sozinhas a partir desse arquivo.

## Rodar localmente

```bash
npm install
npm run dev
```

## Vercel

Importe o repositório na Vercel. O Astro é detectado sozinho (comando `npm run build`, pasta de saída `dist`).
