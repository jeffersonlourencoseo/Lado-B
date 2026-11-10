import data from '../data/sambas.json';

export interface GravacaoOriginal {
  status: 'confirmada' | 'em_apuracao';
  artista: string | null;
  ano: number | null;
  album: string | null;
  fonte: string;
  fonteNome: string;
  observacao?: string;
}

export interface Samba {
  titulo: string;
  cantor: string | null;
  compositores: string[];
  letras?: string;
  youtube?: string;
  letra?: string | null;
  gravacaoOriginal: GravacaoOriginal;
  slug: string;
}

export function slugify(texto: string): string {
  return texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export const sambas: Samba[] = (data as Omit<Samba, 'slug'>[])
  .map((s) => ({ ...s, slug: slugify(s.titulo) }))
  .sort((a, b) => a.titulo.localeCompare(b.titulo, 'pt-BR'));

export interface Compositor {
  nome: string;
  slug: string;
  sambas: Samba[];
}

export const compositores: Compositor[] = (() => {
  const mapa = new Map<string, Compositor>();
  for (const s of sambas) {
    for (const nome of s.compositores) {
      const slug = slugify(nome);
      if (!mapa.has(slug)) mapa.set(slug, { nome, slug, sambas: [] });
      mapa.get(slug)!.sambas.push(s);
    }
  }
  return [...mapa.values()].sort(
    (a, b) => b.sambas.length - a.sambas.length || a.nome.localeCompare(b.nome, 'pt-BR'),
  );
})();

export const youtubeUrl = (s: Samba) =>
  'https://www.youtube.com/results?search_query=' +
  encodeURIComponent(`${s.titulo} ${s.cantor ?? s.compositores[0]}`);

export const letrasUrl = (s: Samba) =>
  s.letras ??
  'https://www.letras.com/?q=' + encodeURIComponent(`${s.titulo} ${s.cantor ?? s.compositores[0]}`);
