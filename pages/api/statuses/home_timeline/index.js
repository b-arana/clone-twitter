const timeline = [
  {
    id: "0",
    avatar:
      "https://gravatar.com/avatar/543be505c755ef5c49013a628345ab82?s=400&d=robohash&r=x.jpg",
    username: "pepe",
    message: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
  
  (gzipped size went from 16.6 KB down to 2.7 KB!!)
  
  * Chrome 79+, Safari 14+, Firefox 68+`,
  },
  {
    id: "1",
    avatar:
      "https://gravatar.com/avatar/76361d709872f8ffea9329ae82e27500?s=400&d=robohash&r=x.jpg",
    username: "midudev",
    message: "Wow, devter está funcionando y vivo 🦉",
    name: "Miguel Ángel Durán",
  },
  {
    id: "2",
    username: "barana",
    name: "Borja",
    avatar:
      "https://gravatar.com/avatar/28bdf42b0b0fe811c584e9ccc1f9d4b0?s=400&d=robohash&r=x.jpg",
    message: `Abro paraguas Paraguas
  
  Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`,
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(timeline));
};
