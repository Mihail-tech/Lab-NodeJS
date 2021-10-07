const greeting = (req, res) => {
  if (req.query.name) {
    res.send(`<p> hello ${req.query.name}<p>`);
  } else {
    res.status(400).json({ name: "null", message: "You should write name" });
  }
};

export default greeting;
