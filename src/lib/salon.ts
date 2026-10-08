import hero from "@/assets/ss-hero.jpg";
import cilios from "@/assets/ss-cilios.jpg";
import micro from "@/assets/ss-micro.jpg";
import liso from "@/assets/ss-liso.jpg";
import coloracao from "@/assets/ss-coloracao.jpg";
import corte from "@/assets/ss-corte.jpg";
import unhas from "@/assets/ss-unhas.jpg";
import make from "@/assets/ss-make.jpg";

export const SALON = {
  name: "Studio Santana",
  tagline: "Minha missão é te deixar ainda mais linda",
  address: "R. Barão de Muribeca, 128 — Várzea, Recife/PE",
  hours: "Ter a sex · 9h às 18h  ·  Sáb · 8h às 17h",
  whatsapp: "5581987670016",
  whatsappLabel: "(81) 98767-0016",
  instagram: "https://www.instagram.com/studiosantana02/",
  instagramHandle: "@studiosantana02",
  maps: "https://www.google.com/maps/search/?api=1&query=Studio+Santana+R.+Bar%C3%A3o+de+Muribeca+128+V%C3%A1rzea+Recife",
  heroImg: hero,
};

export const waLink = (msg: string) => `https://wa.me/${SALON.whatsapp}?text=${encodeURIComponent(msg)}`;
export const WA_INFO = waLink("Olá! Vim pelo site e gostaria de mais informações sobre os serviços.");
export const WA_HELP = waLink("Olá! Vi os trabalhos no site e gostaria de ajuda para escolher um serviço.");

export type Category = "Olhar" | "Cabelos" | "Unhas & make";

export type Service = { id: string; title: string; short: string; category: Category; copy: string; cta: string; img: string; pros: string[] };

export const SERVICES: Service[] = [
  { id: "sobrancelhas", title: "Design de sobrancelhas", short: "SOBRANCELHAS", category: "Olhar", copy: "A especialidade da casa: desenho pensado para o formato do seu rosto.", cta: "Quero horário para sobrancelhas", img: hero, pros: [] },
  { id: "micropigmentacao", title: "Micropigmentação", short: "MICROPIGMENTAÇÃO", category: "Olhar", copy: "Procedimento de pigmentação na pele. Tire suas dúvidas com o salão antes de marcar.", cta: "Quero horário para micropigmentação", img: micro, pros: [] },
  { id: "cilios", title: "Cílios", short: "CÍLIOS", category: "Olhar", copy: "Atendimento em cílios para quem quer um olhar mais marcado.", cta: "Quero horário para cílios", img: cilios, pros: [] },
  { id: "progressiva", title: "Progressiva · Liso perfeito", short: "LISO PERFEITO", category: "Cabelos", copy: "“O liso perfeito você encontra aqui” — alisamento para fios lisos e alinhados.", cta: "Quero horário para progressiva", img: liso, pros: [] },
  { id: "coloracao", title: "Coloração & ombré hair", short: "OMBRÉ HAIR", category: "Cabelos", copy: "Mudança de cor ou degradê do escuro ao claro. O tom é combinado com você.", cta: "Quero horário para coloração", img: coloracao, pros: [] },
  { id: "corte", title: "Corte & escova", short: "CORTE & ESCOVA", category: "Cabelos", copy: "Para renovar o formato ou sair com os fios escovados e finalizados.", cta: "Quero horário para corte ou escova", img: corte, pros: [] },
  { id: "unhas", title: "Manicure & pedicure", short: "UNHAS", category: "Unhas & make", copy: "Mãos e pés cuidados, com a cor que você escolher.", cta: "Quero horário para unhas", img: unhas, pros: [] },
  { id: "make", title: "Maquiagem & penteados", short: "MAQUIAGEM", category: "Unhas & make", copy: "Produção para eventos e ocasiões especiais, da make ao penteado.", cta: "Quero horário para maquiagem", img: make, pros: [] },
];

export const CATEGORIES: ("Todos" | Category)[] = ["Todos", "Olhar", "Cabelos", "Unhas & make"];
export const PERIODS = ["Manhã", "Tarde"];
export const NO_PREF = "Sem preferência";

export function fmtDate(d: string) {
  if (!d) return "A combinar";
  const [y, m, dd] = d.split("-");
  return `${dd}/${m}/${y}`;
}

export function buildBookingMessage(o: { service: string; pro?: string | null; date: string; period: string; notes: string }) {
  return [
    `Olá, ${SALON.name}! Gostaria de solicitar um horário:`,
    ``,
    `• Serviço: ${o.service}`,
    ...(o.pro ? [`• Profissional: ${o.pro}`] : []),
    `• Data preferida: ${fmtDate(o.date)}`,
    `• Período preferido: ${o.period || "A combinar"}`,
    ...(o.notes.trim() ? [`• Observação: ${o.notes.trim()}`] : []),
    ``,
    `Aguardo a confirmação da disponibilidade.`,
  ].join("\n");
}

/** Local date (YYYY-MM-DD), avoiding UTC shift. */
export function todayLocal() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
