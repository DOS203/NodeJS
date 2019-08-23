if(process.env.NODE_ENV == 'production'){
    module.exports = {mongoURI:
        'mongodb://newdown2:newdown2@ds163517.mlab.com:63517/heroku_c4k6ns9h'}
        

}else{
    module.exports = {mongoURI: 'mongodb://localhost/LocalDev'}

}