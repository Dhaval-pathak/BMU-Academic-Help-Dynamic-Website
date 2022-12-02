const { default: mongoose } = require("mongoose");
// const { isInt16Array } = require("util/types");

let schema = mongoose.Schema({
    question: {type:String,required:true,unique:true},
    choice1: {type:String,required:true},
    choice2: {type:String,required:true},
    choice3: {type:String,required:true},
    choice4: {type:String,required:true},

    answer:{type:String,required:true},
    qid:{type:String},
    link:{type:String}
})

const problem = new mongoose.model("problem",schema)
module.exports = problem

saveDoc1=()=>{
    let P1 =  new problem({
        question: "Which of the following operators should be preferred to overload as a global function rather than a member method?",
        choice1: "a)postfix++.",
        choice2: "b)comparison operator",
        choice3: "c)Insertion operator",
        choice4: "d)Prefix++",
    
        answer:" 3",
        qid:"q15",
        link:""
    })
    P1.save()
}





// saveDoc1=()=>{
//     let p1=new problem({
 
//         question:"Constructors have _____ return type",
//         choice1:"void",
//         choice2:"char",
//         choice3:"no",
//         choice4:"int",
//         answer: "no"

//     })
//     p1.save()
// }
module.exports=saveDoc1



// let readdata=async()=>{
//     // let res=await problem.find()
//     let res=await problem.find({question:"When a copy constructor may be called?"})
//     // console.log(res({choice1}))

//     console.log(res)
// }

// module.exports=readdata
