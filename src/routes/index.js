const { db } = require('../firebase')
const { Router } = require('express')
const router = Router()

router.get('/', async(req, res) => {
    try {
        const querySnapshot = await db.collection(contacts).get()
        const contacts = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))
        res.render('index', { contacts })
    } catch (error) {
        console.log('Error ', error)
    }
})