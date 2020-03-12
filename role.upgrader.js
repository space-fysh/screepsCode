var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {

        //creep.memory['doing'] = 'Nothing'

        if(creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.working = false;
            creep.say('🔄 harvest');
            creep.memory['doing'] = 'Going to source'
	    }
	    if(!creep.memory.working && creep.store.getFreeCapacity() == 0) {
	        creep.memory.working = true;
	        creep.say('⚡ upgrade');
	        creep.memory['doing'] = 'Upgrading'
	    }

	    if(creep.memory.working) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
        else {
            //Check containers first, then harvest if empty. Maybe only go to container if it has enough resources

	        var containers = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_CONTAINER &&
                            structure.store[RESOURCE_ENERGY] >= creep.store.getCapacity());
                    }
                });

            //console.log('upgrader moving to container: ' + containers)
	        // harvest if no containers with energy
	        if (containers){
	            if(creep.withdraw(containers, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(containers, {visualizePathStyle: {stroke: '#00aaaa'}});
                }

	        }
	        else {
	            var sources = creep.pos.findClosestByPath(FIND_SOURCES);
                if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources, {visualizePathStyle: {stroke: '#ffaa00'}});
                }
	        }
        }
	}
};

module.exports = roleUpgrader;
