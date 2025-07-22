// export const Bonzais: bonzaiType[] = [
//   { id: "About me", message: "this is me" },
//   { id: "My pic", message: "This is Frederik Sorg-Taylor." },
// ];

type bonzaiType = {
  [key: string]: string;
};

export const Bonzais: bonzaiType = {
  "My pic": "this is me",
  "About me": "This is about me",
};
