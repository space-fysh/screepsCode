var dedHarvester = {

    spawnin: function(thisroom) {
        var listSources
        var claimedSources

        var newName = 'Harvester' + Game.time;
            console.log('Spawning dedicated harvester: ' + newName);
            if (!Game.spawns['spo'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,MOVE], newName,
                {memory: {role: 'dedHarvester', class: 'dedHarvester', working: false, sourceId: (Memory.sourceId.pop()).id, atSource: false}}))
        else {
            console.log('Too low energy to spawn a dedicated harvester')
        }
    },

    getSources: function(thisroom){
      //build a list of all sources in the room
      Memory.sourceLocations = Game.rooms[thisroom].find(FIND_SOURCES)

    },

    run: function(creep){


      if(!creep.harvest(source)){

        let source = Game.getObjectById(creep.memory.sourceId);

        let container = source.pos.findInRange(FIND_STRUCTURES, 1, {
            filter: s => s.structureType == STRUCTURE_CONTAINER
        })[0];

        creep.moveTo(container);

      }

    }
};

module.exports = dedHarvester;
