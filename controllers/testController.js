exports.test = (req, res) => {
  let name = req.query.name;

  if (!name) {
    name = 'Ram';
  }

  const names = ['Ram', 'Sita', 'Laxman', 'Hanuman'];

  if (names.includes(name)) {
    res.json({ user: name });
  } else {
    throw new Error(`No user found with name ${name}`);
  }
};
