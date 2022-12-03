const mongoose = require("mongoose")
const Schema = mongoose.Schema

let envioSchema = new Schema({
    Fecha: {
        type: Date,
        required: true,
    },

    Hora: {
        type: Number,
        required: true,
    },

    Largo: {
        type: Number,
        required: true,
    },

    Ancho: {
        type: Number,
        required: true,
    },

    Largo: {
        type: Number,
        required: true,
    },

    Peso: {
        type: Number,
        required: true,
    },

    Direccionrecogida : {
        type: String,
        required: true,
    },

    Ciudadderecogida: {
        type: String,
        required: true,
    },

    Nombredeldestinatario: {
        type: String,
        required: true,
    },

    CCNITdestinatario: {
        type: Number,
        required: true,
    },

    Direcciondeentrega: {
        type: String,
        required: true,
    },

    Ciudaddeentrega: {
        type: String,
        required: true,
    }
}, {
    Collection: "envios"
}) 
module.exports=mongoose.model("envio",envioSchema) 