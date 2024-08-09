const genres = [
  "zatsudan",
  "fps/tps",
  "valorant",
  "mahjong",
  "gta",
  "moba",
  "variety",
  "karaoke",
  "art",
  "asmr",
  "sf6",
] as const;

const frequencies = ["frequent", "infrequent", "rare"] as const;

const tags = [
  "korean",
  "bilingual",
  "multilingual",
  "fast-speaker",
  "slow-speaker",
  "chill",
  "voice-changer",
  "babiniku",
] as const;

type Genre = (typeof genres)[number];
export type Frequency = (typeof frequencies)[number];
type Tag = (typeof tags)[number];

export interface VTuber {
  id: number;
  name: string;
  org: string;
  imgName: string;
  description: string;
  genres: Partial<{ [genre in Genre]: Frequency }>;
  tags: Tag[];
  links: Partial<{ [link in "youtube" | "twitch" | "twitter"]: string }>;
}

export const vtubers: VTuber[] = [
  {
    name: "Nekomata Okayu",
    org: "hololive",
    imgName: "nekomata_okayu.jpg",
    description:
      "Possibly the most beginner-friendly VTuber in hololive. Speaks clearly and slowly. Also pretty soft-spoken and occasionally does ASMR streams.",
    genres: {
      sf6: "frequent",
      gta: "frequent",
      variety: "frequent",
      zatsudan: "rare",
    },
    tags: [],
    links: {
      youtube: "https://www.youtube.com/@NekomataOkayu",
      twitter: "https://twitter.com/nekomataokayu",
    },
  },
  {
    name: "Shirona Shizuku",
    org: "neo-porte",
    imgName: "shirona_shizuku.jpg",
    description:
      "Has a very unique and soft speaking style. Consistently does long talk/game streams that are perfect for background listening.",
    genres: {
      valorant: "frequent",
      zatsudan: "infrequent",
      variety: "infrequent",
    },
    tags: [],
    links: {
      youtube: "https://www.youtube.com/@ShironaShizuku",
      twitch: "https://www.twitch.tv/shirona_shizuku",
      twitter: "https://twitter.com/shizuku_shirona",
    },
  },
  {
    name: "Kanae",
    org: "nijisanji",
    imgName: "kanae.jpg",
    description: `One half of Nijisanji music unit ChroNoiR. Very chill streams on a wide variety of games. Currently playing a lot of SF6 on Twitch. Highly recommended for female viewers.`,
    genres: {
      gta: "frequent",
      "fps/tps": "frequent",
      zatsudan: "infrequent",
      variety: "infrequent",
      karaoke: "infrequent",
    },
    tags: [],
    links: {
      youtube: "https://www.youtube.com/@Kanae",
      twitch: "https://www.twitch.tv/kanae_2434",
      twitter: "https://twitter.com/Kanae_2434",
    },
  },
  {
    name: "Nekota Tsuna",
    org: "vspo!",
    imgName: "nekota_tsuna.jpg",
    description: `Experienced in a wide variety of FPS games. Korean native, but speaks very natural Japanese and is a great example of a (near) native-level speaker.`,
    genres: {
      "fps/tps": "frequent",
      zatsudan: "infrequent",
      variety: "infrequent",
    },
    tags: ["korean", "bilingual"],
    links: {
      youtube: "https://www.youtube.com/@tsuna_nekota",
      twitch: "https://www.twitch.tv/tsuna_nekota",
    },
  },
  {
    name: "Tsumugi Kokage",
    org: "vspo!",
    imgName: "tsumugi_kokage.jpg",
    description:
      "One of vspo!'s newest members and one of its best Valorant players alongside [Yumeno Akari](https://twitter.com/AKARINdaooo), peaking at Immortal 3. Highly recommended if you enjoy watching Valorant streams and want to learn basic terminology and callouts.",
    genres: {
      valorant: "frequent",
      zatsudan: "infrequent",
      variety: "infrequent",
    },
    tags: [],
    links: {
      youtube: "https://www.youtube.com/@Kokage_Tsumugi",
      twitter: "https://twitter.com/kokage_tsumugi",
    },
  },
  {
    name: "Amane Kanata",
    org: "hololive",
    imgName: "amane_kanata.jpg",
    description:
      "Arguably one of the most challenging vtubers in Hololive. Very energetic and hyper resulting in really fast slurred speech with lots of fillers. However it's this very quality that makes her gameplay and storytelling streams entertaining. Plays a variety of games but often plays soulslikes.",
    genres: {
      variety: "frequent",
      zatsudan: "rare",
    },
    tags: [],
    links: {
      youtube: "https://www.youtube.com/@AmaneKanata",
      twitter: "https://twitter.com/amanekanatach",
    },
  },
  {
    name: "Shirayuki Reid",
    org: "neo-porte",
    imgName: "shirayuki_reid.jpg",
    description:
      "A Mahjong and FPS player, his Jantama streams are some of the most entertaining on the platform. Rages regularly. Watching his streams (and reading the chat) is more than enough to learn Japanese Mahjong terminology if you're familiar with the game.",
    genres: {
      mahjong: "frequent",
      "fps/tps": "frequent",
    },
    tags: [],
    links: {
      youtube: "https://www.youtube.com/@Shirayuki_Reid",
      twitch: "https://www.twitch.tv/shirayuki_reid",
      twitter: "https://twitter.com/Shirayuki_Reid",
    },
  },
  {
    name: "Kaga Nazuna",
    org: "vspo!",
    imgName: "kaga_nazuna.jpg",
    description: `Former CS:GO and PUBG player, peak immortal in Valorant. Currently addicted to GTA5 RP, and is a great entry to the genre.`,
    genres: {
      gta: "frequent",
      "fps/tps": "frequent",
      zatsudan: "infrequent",
      variety: "infrequent",
      karaoke: "infrequent",
    },
    tags: ["fast-speaker"],
    links: {
      youtube: "https://www.youtube.com/@nazunakaga",
      twitch: "https://www.twitch.tv/nazunakaga",
      twitter: "https://www.twitter.com/nazuna_kaga",
    },
  },
].map((vtuber, index) => {
  (vtuber as VTuber).id = index + 1;
  return vtuber as VTuber;
});

// {
//   name: "Usada Pekora",
//   org: "hololive",
//   imgName: "pekora",
//   description: `Usada Pekora (兎田ぺこら) is a female Japanese Virtual YouTuber associated with hololive, debuting as part of its third generation of VTubers under the name of \"hololive Fantasy\" (ホロライブファンタジー) alongside Uruha Rushia, Shiranui Flare, Shirogane Noel and Houshou Marine.`,
//   genres: {
//     variety: "frequent",
//     zatsudan: "frequent",
//     karaoke: "infrequent",
//   },
//   tags: [],
//   links: {
//     youtube: "https://www.youtube.com/@usadapekora",
//     twitch: "https://www.twitch.tv/usadapekora_hololive",
//   },
// },
// {
//   name: "Komori Met",
//   org: "vspo!",
//   imgName: "met",
//   description: `Komori Met (小森めと) is a female Japanese Virtual YouTuber, associated with VSPO!. Formerly, she was associated with 774inc. under the company's branch group VApArt before the group's disband in January 2023.`,
//   genres: {
//     zatsudan: "frequent",
//     variety: "frequent",
//     "fps/tps": "frequent",
//   },
//   tags: [],
//   links: {
//     youtube: "https://www.youtube.com/@Met_Komori",
//     twitch: "https://www.twitch.tv/met_komori",
//   },
// },
// {
//   name: "Tomari Mari",
//   org: "indie",
//   imgName: "tomari",
//   description: `Tomari Mari (兎鞠まり) is a female Japanese Virtual YouTuber that was formerly affiliated with Upd8.`,
//   genres: {
//     zatsudan: "frequent",
//     variety: "frequent",
//   },
//   tags: ["babiniku", "voice-changer"],
//   links: {
//     youtube: "https://www.youtube.com/@TOMARI_MARI",
//   },
// },
// {
//   name: "Nachoneko",
//   org: "indie",
//   imgName: "nacho",
//   description: `VTuber persona of illustrator Amashiro Natsuki, known for designing Hololive EN's [Gawr Gura](https://hololive.wiki/wiki/Gawr_Gura). Avid enjoyer of pineapple pizza ~~and other weird food~~.`,
//   genres: {
//     "fps/tps": "infrequent",
//     moba: "infrequent",
//     zatsudan: "infrequent",
//     variety: "infrequent",
//     art: "rare",
//   },
//   tags: [],
//   links: {
//     twitch: "https://www.twitch.tv/nacho_dayo",
//     youtube: "https://www.youtube.com/@Nachoneko_dayo",
//     homepage: "https://amashiro.com/",
//   },
// },
