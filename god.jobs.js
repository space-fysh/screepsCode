var godJobs = {

  simpleAssign: function(creep){
    const minHarvesters = 4;
    const minRepairers = 2;
    const minBuilders = 2;
    const minUpgraders = 2;

    const numHarvesters = (_.filter(Game.creeps, (c) => c.memory.role == 'harvester')).length;
    const numUpgraders = (_.filter(Game.creeps, (c) => c.memory.role == 'upgrader')).length;
    const numBuilders = (_.filter(Game.creeps, (c) => c.memory.role == 'builder')).length;
    const numRepairers = (_.filter(Game.creeps, (c) => c.memory.role == 'repairer')).length;

    if(creep.memory.role === 'general' || creep.memory.role === '' || !creep.memory.role){
      if(numHarvesters < minHarvesters){creep.memory.role = 'harvester'}
      else if(numBuilders < minBuilders){creep.memory.role = 'builder'}
      else if(numRepairers < minRepairers){creep.memory.role = 'repairer'}
      else if(numUpgraders < minUpgraders){creep.memory.role = 'upgrader'}

    }

  },

  assign: function(creep){
    const minHarvesters = 4;
    const minRepairers = 2;
    const minBuilders = 2;
    const minUpgraders = 2;

    const numHarvesters = (_.filter(Game.creeps, (c) => c.memory.role == 'harvester')).length;
    const numUpgraders = (_.filter(Game.creeps, (c) => c.memory.role == 'upgrader')).length;
    const numBuilders = (_.filter(Game.creeps, (c) => c.memory.role == 'builder')).length;
    const numRepairers = (_.filter(Game.creeps, (c) => c.memory.role == 'repairer')).length;

    const constructionSites = (creep.room.find(FIND_CONSTRUCTION_SITES)).length;
    const repairSites = (creep.pos.findClosestByPath(FIND_STRUCTURES, {
        filter: (s) => s.hits < (s.hitsMax * .8)  && s.hits < 7000
    })).length;

    if(creep.memory.role === 'general' || creep.memory.role === '' || !creep.memory.role){
      // make repairer if there is at least one repair site. assign 2 repairers
      if((repairSites > 0) && (numRepairers < minRepairers)){creep.memory.role = 'repairer'}
      // make builder if there is at least one construction site. assign 2 builders
      else if((constructionSites > 0) && (numBuilders < minBuilders)){creep.memory.role = 'builder'}
      // always want at least 2 harvesters
      else if (numHarvesters < minHarvesters){creep.memory.role = 'harvester'}
      
      else {creep.memory.role = 'upgrader'}

    }

  }


};

module.exports = godJobs;
