	    
	    
var roleRepairer = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    // if creep is trying to repair something but has no energy left
	    if(creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
	        //switch working state
            creep.memory.working = false;
            creep.say('🔄 harvest');
            creep.memory['doing'] = 'Going to source'
	    }
	    
	    
	    if(!creep.memory.working && creep.store.getFreeCapacity() == 0) {
	        creep.memory.working = true;
	        creep.say('⚡ repairing');
	        creep.memory['doing'] = 'repairing'
	    }

        
        // if creep is supposed to repair something
        if (creep.memory.working == true) {
            // find closest structure with less than max hits
            // Exclude walls because they have way too many max hits and would keep
            // our repairers busy forever. We have to find a solution for that later.
            var structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                // the second argument for findClosestByPath is an object which takes
                // a property called filter which can be a function
                // we use the arrow operator to define it
                // for now, only repair up to 7000, otherwise would repain walls and ramparts forever
                filter: (s) => s.hits < s.hitsMax  && s.hits < 7000 // && s.structureType != STRUCTURE_WALL
            });

            // if we find one
            if (structure != undefined) {
                // try to repair it, if it is out of range
                if (creep.repair(structure) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(structure, {visualizePathStyle: {stroke: '#0000ff', lineStyle: 'dashed'}});
                }
            }
            // if we can't fine one
            else {
                
                var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_TOWER) && // || structure.structureType == STRUCTURE_CONTAINER  //|| structure.structureType == STRUCTURE_SPAWN
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                    }
            });
                
            if(targets) {
                
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#0000ff', lineStyle: 'dashed'}});
                    creep.memory['doing'] = 'Going to' + targets
                    console.log('filling tower')
                }
                else {
                    //if no place to store, then change roles
                    creep.memory['role'] = 'general'
                }
            }
                
                
                // change class if nothing to repair
                console.log('nothing to repair. changing to general')
                creep.memory['role'] = 'general'
            }
        }
        // if creep is supposed to harvest energy from source
        else {
	            //Check containers first, then harvest if empty. Maybe only go to container if it has enough resources
	        
	        var containers = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_CONTAINER &&
                            structure.store[RESOURCE_ENERGY] >= creep.store.getCapacity());
                    }
                });
                
                //console.log('builder moving to container: ' + containers)
	        // harvest if no containers with energy
	        if (containers){
	            if(creep.withdraw(containers, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(containers, {visualizePathStyle: {stroke: '#0000ff', lineStyle: 'dotted'}});
                }
    	   }
	        else {
	            var sources = creep.pos.findClosestByPath(FIND_SOURCES);
                if(creep.harvest(sources) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources, {visualizePathStyle: {stroke: '#0000ff', lineStyle: 'dotted'}});
                }
	        }
        }
    }
};



module.exports = roleRepairer;