'use strict';
module.exports = function(sequelize, DataTypes) {
  var tasks = sequelize.define('tasks', {
    task: DataTypes.STRING,
    isComplete: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getListTask: function(callback){
        tasks.findAll()
        .then((tasks) => {
          callback(tasks);
        })
        .catch((err) => {
          callback(err);
        })
      },
      addTask: function(task){
        tasks.create({'task': task,
                      'isComplete' : false})
        .then((task) => {
          console.log('Sukses !');
        })
        .catch((err) => {
          console.log('Data Tidak Dapat Ditambah');
        })
      },
      getTask: function(idTask, callback){
        tasks.findAll({
          where : {
            'id': idTask
          }
        })
        .then((task) => {
          callback(task);
        })
        .catch((err) => {
          console.log('Data Tidak Ditemukan');
        })
      },
      deleteTask: function(idTask){
        //  console.log('----------id: ', idTask);
        let id = idTask[0]
        tasks.destroy({
          where: {
            'id': id
          }
        })
        .then(status => {
          // console.log('-------task:', task);
          // console.log(`Berhasil menghapus data id ${id}`);
          if(status == 1){
            console.log(`Berhasil menghapus data id ${id}`);
          } else {
            console.log(`Data id ${id} tidak ditemukan`);
          }
        })
        .catch(err => {
          console.log('Data Tidak Ditemukan');
        })
      },
      completeTask: function(idTask){
        tasks.update({
          isComplete : true,
        }, {
          where: {
            id : idTask
          }
        })
        .then(status => {
          if(status == 1){
            console.log(`Data dengan ID ${idTask} complete`);
          } else {
            console.log('Data id ${id} tidak demukan');
          }
          // console.log(`----- ${task}`);
        })
        .catch(err => {
          console.log('Process complete gagal');
        })
      },
      uncompleteTask: function(idTask){
        tasks.update({
          isComplete: false,
        }, {
          where: {
            id : idTask
          }
        })
        .then(status => {
          // console.log(`Data : ${idTask} uncomplete`);
          if(status == 1){
            console.log(`Data dengan ID ${idTask} uncomplete`);
          } else {
            console.log('Data id ${id} tidak demukan');
          }
        })
        .catch(err => {
          console.log('Process uncomplete gagal');
        })
      }

    }
  });
  return tasks;
};


// getTask: function(idTask, callback){
//   tasks.findAll({
//     where : {
//       'id': idTask
//     }
//   })
//   .then((task) => {
//     callback(task);
//   })
//   .catch((err) => {
//     return 'Data Tidak Ditemukan';
//   })
// }
