var dedHarvester = require('class.dedHarvester');
var movers = require('role.mover')


var godSpawn = {
  spawnMiners: function() {
    for(let spawn in Game.spawns){

      let room = Game.spawns[spawn].room

      console.log('spawning miners for Spawn: ' + spawn + " in room: " + room)
      // var harvesters = (_.filter(Game.creeps, (creep) => creep.memory.role == 'harvester')).length;
      // var upgraders = (_.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader')).length;
      // var builders = (_.filter(Game.creeps, (creep) => creep.memory.role == 'builder')).length;
      // var repairers = (_.filter(Game.creeps, (creep) => creep.memory.role == 'repairer')).length;
      var miners = (_.filter(Game.creeps, (creep) => creep.memory.role == 'miner')).length;
      var movers = (_.filter(Game.creeps, (creep) => creep.memory.role == 'miner')).length;
      var energyAvaliable = room.energyAvailable
      //var noJobs = _.filter(Game.creeps, (creep) => creep.memory.role == '' || creep.memory.role == 'general');



      //check number of miners in room, produce one for each source
      if (miners < 2){
        dedHarvester.spawnin(room);
      }
      if (movers < 3){
        movers.spawnin(room);
      }
    }
  }
}
module.exports = godSpawn;
