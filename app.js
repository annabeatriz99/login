/*importacao*/
require('dotenv').config()
const express =require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app= express()

//configuracao json 
app.use(express.json())

//models
const User = require('./model/User')
const { response } = require('express')

//rota
app.get('/',(req, res)=>{
    res.status(200).json({msg ='minha api'})
})

//registrar usuario
app.post('/auth/resgister', async(req,res)=>{
    const{usuario, password} = req.body

    //validacao
if(!usuario){
    return res.status(442).json({msg= 'usuario obrigatorio'})
}
if(!password){
    return res.status(442).json({msg='senha obrigatorio'})
}

if(password!==confirmpassword){
    return res.status(422).json(msg= 'senha nao valida')
}
})

//checar usuario exixtente
const userExists = await User.findOne({usuario:usuario
    if(userExists){
        return res.Status(422).jason({msg ='outro usuario'})
    }
    //criar senha
    const salt =await bcrypt.genSalt(12)
    const passwordHash =await bcrypt.hash(password, salt)

//criar usuario
const use =new User({
    nome,
    password: passwordHash;
})
try{
    await user.save()
    res.status(2001).json(msg = 'usuario cadastrado com sucesso')

    catch(error){
        console.log(error)
        res.status(500).json({msg = 'erro'})
    }
}

})
//credenciais
const dbUser = process.env.DB_user
const dbPassword = process.env.DB_PASS
//ainda fazer a conexao com atlas

mongoose.connect().then(()=>{
app.listen(3000)
console.log("conectou")}
).catch((err)=> console.log(err))


app.listen(3000)