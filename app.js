//const { number } = require('yargs');
const yargs = require('yargs');
const students=require('./students.js')
yargs.command({
    command: 'add',
    describe: 'add student id and name degrees comment/op you will find total',
    builder:{
        id:
        {
            describe:'student id',
            demandOption:true,
            type:'number'
        },
        name:
        {
            describe:'student name',
            demandOption:true,
            type:'string'
        },
        degrees:
        {
            describe:'marks',
            demandOption:true,
            type:'array'
        },
        comment:
        {
            describe:'comment',
            demandOption:false,
            type:'string'
        },
        total:
        {
            describe:'sumOfdegrees',
            demandOption:false,
            type:'string'
        }
    },
    handler:(argv)=>{
        let sum=0;
        for(let degree of argv.degrees){
            sum +=degree
        }
        students.addNew(argv.id, argv.name, argv.degrees, argv.comment, sum)
    
        // students.addNew(`student id ${argv.id} name is ${argv.name} degrees is${argv.degrees} anther comment ${argv.comment}` )
       // console.log(`d`)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove student',
    builder: {
        id: {
            describe:'delet the student',
            demandOption:true,
            type:'number'
        }
    },
    handler:(argv)=>{
        students.remove(argv.id)
        //console.log(`its for remove`)
    }

})

yargs.command({
    command: 'read',
    describe: 'read all',
    builder:{
        id:{
            describe:"key to read",
            demandOption:true,
            type: 'number'
        }
    },
    handler:(argv)=>{
        students.read(argv.id)
    }
})

yargs.command({
    command: 'list',
    describe: 'list student ',
    handler:(argv)=>{
        //console.log('list')
        students.list(argv)
    }
})

yargs.command({
    command:'*',
    describe:'match all',
    handler:()=>{
        console.log('error is not command try add ,remove ,list  ')
    }
})
yargs.parse()

 //console.log(yargs.argv)
 //node app.js add --id='1' --name='hossam' --degrees 10 --degrees 10 --degrees 10 --comment='any'