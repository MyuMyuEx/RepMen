const movies = [
  { id: 1, title: "Film 1" },
  { id: 2, title: "Film 2" },
  { id: 3, title: "Film 3" },
];

export default (req, res) => {
  res.status(200).json(movies);
};
