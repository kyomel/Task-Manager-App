const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    }, 
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid!')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if(value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"!')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) {
                throw new Error('Age must be a positive number');
            }
        }
    }
})

// const me = new User({
//     name: ' Michael ',
//     email: '    TEST@MAIL.COM   ',
//     password: 'phone098'
// })

// me.save().then((res) => {
//     console.log(me);
// }).catch((err) => {
//     console.log('Error!', err);
// })

const Task = mongoose.model('Task', {
    desription: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Task({
    desription: '   Eat lunch with friends'
})

task.save().then((res) => {
    console.log(task);
}).catch((err) => {
    console.log('Error!', err);
})
