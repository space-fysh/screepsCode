var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
        //creep.memory['doing'] = 'nothing'
        
        //If it has capacity, then harvest or move towards source
	    if(creep.store.getFreeCapacity() > 0) {
            var sources = creep.pos.findClosestByPath(FIND_SOURCES);
            if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources, {visualizePathStyle: {stroke: '#00ffff', lineStyle: 'dashed'}});
                creep.memory['doing'] = 'Going to source'
            }
            else {
                creep.memory['doing'] = 'Harvesting source'
            }
        }
        else {
            var targets = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) && // || structure.structureType == STRUCTURE_CONTAINER  //|| structure.structureType == STRUCTURE_SPAWN
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
            });
            
            // fill containers only if the other structures are full
            if (!targets) {
                var targets = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_CONTAINER) &&
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
                });
            }
            
            
            //console.log(creep.memory.role, targets)
            
            if(targets) {
                if(creep.transfer(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets, {visualizePathStyle: {stroke: '#00ffff', lineStyle: 'dotted'}});
                    creep.memory['doing'] = 'Going to' + targets
                }
                
            }
            else {
                    //if no place to store, then change roles
                    console.log('nowhere to store, switching to general');
                    creep.memory['role'] = 'general'
                }
        }
	}
};

module.exports = roleHarvester;