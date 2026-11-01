const express = require("express")
const models = require("./models/notes.models")
const app = express();

app.use(express.json())

const notes = [];


  app.get("/notes",async(req,res)=>{
   const notes = await models.find()
    res.status(200).json({message:"Notes fetched successfully",notes});
  });
  app.post("/notes", async (req,res)=>{
    const {title,description} = req.body;
   const note = await models.create(
        {title,description,Date: new Date()

        })

    res.status(201).json({message:"Note created successfully",note});
  });

module.exports = app;