const greeting = (req, res) => {
  const {name} = req.query;
  if (name) {
    res.send(`<p> hello ${name}<p>`);
  } else {
    res.status(400).json({ name: "null", message: "You should write name" });
  }
};

export default greeting;
