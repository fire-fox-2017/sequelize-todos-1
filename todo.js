'use strict';

//write your code here
const model=require('./models/index.js');

var perintah= [];
process.argv.forEach((val, index) => {
  let hasil=[];
  if(index>1)
  {
    perintah.push(val)
  }
});

let processInput=()=>{
  var operasi = perintah[0];
  var input = perintah[1];
  if(operasi==='add'){

    insertTask(input);
  }
  else if(operasi==='list'){
    getAllData();
  }
  else if(operasi==='delete')
  {
    deleteTask(input);
  }
  else if(operasi==='update')
  {
    updateComplete(input);
  }
}

let insertTask = (task)=>{
  model.Task.create({'task':task,'complete':false,'completed_at':null})
  .then (Task => {
    console.log(`Task ${task} has been inserted`)
  })
  .catch (err =>{
    console.log(err.message);
  });
}

let getAllData=()=>{
  model.Task.getAllData(tasks =>{
    let i=1;
    console.log('\nALL TASKS:')
    tasks.forEach(task => {
      if(task.complete===true)
      console.log(`${i}. [X] (${task.id}) ${task.task} ${task.complete} `)
      else{
      console.log(`${i}. [ ] (${task.id}) ${task.task} ${task.complete}`)
      }
      i++;
    });
  });
}

let deleteTask = (id)=>{
  model.Task.destroy({where:{'id':id}})
  .then (hasil => {
    console.log(`Deleted Task with id ${id} from your TODO list...`)
  })
  .catch(err => {
    console.log(err.message);
  });
}

let updateComplete = (id)=>{
  model.Task.update({
    'complete':true,
  }, {
    where:{'id':id}
  })
  .then(hasil=>{
    console.log(`Task with id ${id} has been completed`)
  })
  .catch(err => {
    console.log(err.message);
  });
}


processInput();
