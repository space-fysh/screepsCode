var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

	    if(creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.working = false;
            creep.say('🔄 harvest');
            creep.memory['doing'] = 'Going to source'
	    }

	    if(!creep.memory.working && creep.store.getFreeCapacity() == 0) {
	        creep.memory.working = true;
	        creep.say('🚧 build');
	        creep.memory['doing'] = 'Building'
	    }

	    if(creep.memory.working) {
          var targets = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);

            if(targets) {
                if(creep.build(targets) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets, {visualizePathStyle: {stroke: '#ff0000', lineStyle: 'dashed'}});
                }
            }
            else {
                //change role
                console.log('nothing to build. changing to general')
                creep.memory.role = 'general'
            }
	    }
	    else {
	        //Check containers first, then harvest if empty.
	        var containers = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_CONTAINER &&
                            structure.store[RESOURCE_ENERGY] >= creep.store.getCapacity());
                    }
                });
	        // harvest if no containers with energy
	        if (containers){
	            if(creep.withdraw(containers, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(containers, {visualizePathStyle: {stroke: '#ff0000', lineStyle: 'dotted'}});
                }
	        }
	        else {
	            var sources = creep.pos.findClosestByPath(FIND_SOURCES);
                if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources, {visualizePathStyle: {stroke: '#ff0000', lineStyle: 'dotted'}});
                }
	        }
	    }
	}
};

module.exports = roleBuilder;
