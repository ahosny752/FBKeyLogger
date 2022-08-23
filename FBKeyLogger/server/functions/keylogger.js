const {db} = require("./admin");


exports.postCredentials = (request, response) => {
  const addCredentials = {
    email: request.body.email,
    password: request.body.password,
  };

  db
      .collection("credentials")
      .add(addCredentials)
      .then((doc) => {
        response.json({message: `document ${doc.id} created`});
      })
      .catch((err)=>{
        response.status(500).json({error: "something went wrong"});
        console.error(err);
      });
};

