const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;



const session = new Schema({
    refreshToken: {
        type: String,
        default: ''
    }
})

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    isAdmin: {type: Boolean, default: false},
    firstName: {type: String, default: ''},
    lastName: {type: String, default: ''},
    puesto: {
        type: String,
        enum: [
            'Recepcionista', 
            'Programador', 
            'Gerente de Operaciones', 
            'Gerente de Mantenimiento', 
            'Contador', 
            'Auxiliar Contable', 
            'Ejecutivo de Mantenimiento y Almacen',
            'Ejecutivo de Almacen y Diesel', 
            'Supervisor de Coordinadores', 
            'Auxiliar de Operaciones',
            'Supervisor de Mantenimiento',
            'Jefe de Mecánicos',
            'Analista de Procesos',
            'Ejecutivo de Compras',
        ],
        required: true
    },
    employeeNumber: Number,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    authStrategy: {
        type: String,
        default: 'local'
    },
    points: {
        type: Number,
        default: 50
    },
    refreshToken: {
        type: [session]
    }
});

UserSchema.virtual('fullname').get(function(){
    const fullname = `${this.firstName} ${this.lastName}`
    return fullname
})

UserSchema.set('toJSON', {
    transform: function(doc, ret, options) {
        delete ret.refreshToken
        return ret
    }
})

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', UserSchema);