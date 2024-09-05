import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import path from 'path';
// import "/styles/layout.css";
// import "/styles/content.css";
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/',(req,res)=>{
    res.render('index.ejs');
})

app.get('/about', (req, res) => {
    res.render('about.ejs'); 
  });

app.get('/contact', (req, res) => {
    res.render('contact.ejs'); 
  });

app.listen( 3005 , ()=>{
    console.log("server is started");
});
