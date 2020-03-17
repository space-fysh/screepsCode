var dedHarvester = require('class.dedHarvester');
var movers = require('role.mover')


var godSpawn = {
  spawnMiners: function() {
    for(spawn in Game.spawns){

      // var harvesters = (_.filter(Game.creeps, (creep) => creep.memory.role == 'harvester')).length;
      // var upgraders = (_.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader')).length;
      // var builders = (_.filter(Game.creeps, (creep) => creep.memory.role == 'builder')).length;
      // var repairers = (_.filter(Game.creeps, (creep) => creep.memory.role == 'repairer')).length;
      var miners = (_.filter(Game.creeps, (creep) => creep.memory.role == 'miner')).length;
      var movers = (_.filter(Game.creeps, (creep) => creep.memory.role == 'miner')).length;
      var energyAvaliable = spawn.room.energyCapacityAvailable
      //var noJobs = _.filter(Game.creeps, (creep) => creep.memory.role == '' || creep.memory.role == 'general');

      //check number of miners in room, produce one for each source
      if (miners < 2){
        dedHarvester.spawn(spawn.room);
      }
      if (movers < 3){
        movers.spawn(spawn.room);
      }
    }
  }
}
module.exports = godSpawn;
