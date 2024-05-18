import express from 'express';
import router from './routes/routes';
import methodOverride from 'method-override';
import db from './db';

const app = express();
const port = parseInt(`${process.env.PORT}`);

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(router);
app.set('view engine','pug');
app.set('views','./views');


db.sync().then(()=>{
    console.log('Conectado ao banco');
}).then(()=>{
    app.listen(port, () => {
        console.log('Servidor funcionando');
    });
})