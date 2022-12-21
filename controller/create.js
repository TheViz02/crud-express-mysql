const prisma = require('../prisma')

const showData = (req, res) => {
    (async function () {
        const data = await prisma.data.findMany();
        res.json({ res: data });
    })();
    // showData();
}

const addData = (req, res) => {
    let form = req.body;
    let age = parseInt(req.body.age);
    console.table(form);
    (async function () {
        await prisma.data.create({
            data: {
                name: form.name,
                email: form.email,
                age: age,
                gender: form.gender,
                address: form.address,
                about: form.about
            }
        });

    })().then(() => {
        console.log('entry submitted')
        res.json({ message: "entry submitted" });
    }).catch((err) => {
        console.error(err);
        res.json({ message: "Check Console", error: err })
    });
}

const updateData = (req, res)=>{
    (async function(){
        let id = req.body.id;
        await prisma.data.update({
            where:{
                id:id
            },
            data:{
                name: form.name,
                email: form.email,
                age: age,
                gender: form.gender,
                address: form.address,
                about: form.about
            }
        });
    })().then((res)=>{
        console.log('updated');
        res.json({ message:'Data Updated', id:id });
    }).catch((err) => {
        console.error(err);
        res.json({ message: "Check Console", error: err })
    });
};

const deleteData = (req, res)=>{
    (async function(){
        let key = req.body.id;
        await prisma.data.delete({
            where:{
                id:key
            }
        });
    })().then((res)=>{
        res.json({message:`Data Deleted at ${key}`});
    }).catch((err) => {
        console.error(err);
        res.json({ message: "Check Console", error: err })
    });
};

module.exports = {
    showData,
    addData,
    updateData,
    deleteData
};