const express = require("express");
const recipeModel = require("./model/recipeDb");
const cors = require('cors');
var multer = require('multer')
const path = require('path');
const app = new express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use(express.static(path.join(__dirname, '/build')));


app.use(express.static('public'));
app.use('/files', express.static('files'));
// const upload = multer({ dest: 'public/files' })

// const upload = multer({
//     dest: 'public/files',
//     filename: function(req, file, cb) {
//         //req.body is empty...
//         //How could I get the new_file_name property sent from client here?
//         cb(null, file.originalname);
//     }
// });
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/files')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname) //Appending .jpg
    }
})

var upload = multer({ storage: storage });

app.post('/addRecipe', upload.single('image'), async(req, res) => {
    console.log(req.file)
    var data = await recipeModel(req.body);
    data.image = req.file.originalname
    console.log(data)

    data.save();
    res.send({ status: "Data saved" })
})

//to view all books
app.get('/viewRecipe', async(req, res) => {
    var data = await recipeModel.find();
    res.json(data);
})

app.get('/viewCusine/:id', async(req, res) => {
    let id = req.params.id;
    var data = await recipeModel.find({ "type": { $eq: id } });
    // db.games.find({ "players.status": { $ne:"accepted" } })
    res.json(data);
})

app.get('/viewoneRecipe', async(req, res) => {
    let id = req.body._id
    var data = await recipeModel.findOne(id)
    res.json(data);
})

//delete
app.delete('/deleteRecipe/:id', async(req, res) => {
    console.log(req.params);
    let id = req.params.id;
    await recipeModel.findByIdAndDelete(id);
    res.json({ status: "deleted" })

})

//update
app.put("/edit/:id", upload.single('image'), async(req, res) => {
    let id = req.params.id;
    try {
        req.body.image = req.file.originalname;
        var data = await recipeModel.findByIdAndUpdate(id, req.body)
        res.json({ status: "updated" })
    } catch (err) {
        res.status(500).send(err)
    }

})
app.get('/*', function(req, res) { res.sendFile(path.join(__dirname, '/build/index.html')); });

app.listen(3008, () => {
    console.log("Port 3008 is up and running");
})