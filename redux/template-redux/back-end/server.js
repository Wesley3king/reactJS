const app = require("express")();
const cors = require("cors")

app.use(cors());
app.use((req, res, next)=> {
    console.log(" requisição ");

    next();
})
app.get('/', (req, res) => {
    res.json({bebidas: ['cerveja', 'soda', 'refri', 'todinho', 'leite fermentado', 'yorgute', 'suco']});
});

app.listen(process.env.PORT || 4000, ()=> console.log("servidor funcionando !"));