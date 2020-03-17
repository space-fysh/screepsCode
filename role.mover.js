var roleMover = {

  spawnin: function(thisRoom) {
    var newName = 'Mover' + Game.time;
        console.log('Spawning mover: ' + newName);
        if (!Game.spawns['spo'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,MOVE], newName,
            {memory: {role: 'mover', class: 'mover', working: false}}))
            {
              // dunno
            }
        else {
            console.log('Too low energy to spawn mover')
        }
  },

  run: function(creep){
    if (!creep.memory.role)
    {
      creep.memory.role = 'mover';
    }

    if (creep.memory.container){
      roleMover.runContainer(creep)
    }
    else{
      roleMover.runDistribute(creep)
    }
  },
//movers have two roles: container mover, and distribute movers
//container movers move between outer and inner containers
//distribute movers move between inner containers and extensions or spawns
  runContainer: function(creep) {
      // if creep is bringing energy to a structure but has no energy left
      if (creep.memory.working == true && creep.carry.energy == 0) {
          // switch state
          creep.memory.working = false;
      }
      // if creep is harvesting energy but is full
      else if (creep.memory.working === false && creep.carry.energy === creep.carryCapacity) {
          // switch state
          creep.memory.working = true;
      }

      // if creep is supposed to transfer energy to a structure
      if (creep.memory.working === true) {
        //check if innerContainers have getCapacity
        for (container in Memory.innerContainers){
          if (container.getFreeCapacity() <= creep.store.getUsedCapacity()){
            //if innerContainers have space, then move to them and transfer
            if(creep.transfer(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(container, {visualizePathStyle: {stroke: '#00ffff', lineStyle: 'dotted'}});
                creep.memory['doing'] = 'Going to' + container
            }
          }
          else{
            //change to moving energy to extensions/spawns
            creep.memory.container = false
          }
        }
      }
      else{
        // if creep is not working, then it is going to gather energy from the outerContainers
        // check outerContainers if they have energy and go to the container if they do
        for (container in Memory.outerContainers){
          //check if container has enough energy
          if(container.store[RESOURCE_ENERGY] >= creep.store.getCapacity()){
            moveEnergy = true
            //withdraw or move to container
            if(creep.withdraw(containers, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                  creep.moveTo(containers, {visualizePathStyle: {stroke: '#0000ff', lineStyle: 'dotted'}});
              }
            }
            else{
              //change to moving energy to extensions/spawns
              creep.memory.container = false
            }
        }
      }
    },

    runDistribute: function(creep) {
      // if creep is bringing energy to a structure but has no energy left
      if (creep.memory.working == true && creep.carry.energy == 0) {
          // switch state
          creep.memory.working = false;
          // maybe check if outerContainers are full
          // switch role if full
          //creep.memory.container = true
      }
      // if creep is harvesting energy but is full
      else if (creep.memory.working === false && creep.carry.energy === creep.carryCapacity) {
          // switch state
          creep.memory.working = true;
      }

      if(creep.memory.working){
        //move energy from innerContainers to spawns, extensions
        //target extensions and spawns
        var target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) && // || structure.structureType == STRUCTURE_CONTAINER  //|| structure.structureType == STRUCTURE_SPAWN
                        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
        });

        if(target){
          if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
              creep.moveTo(target, {visualizePathStyle: {stroke: '#00ffff', lineStyle: 'dotted'}});
              creep.memory['doing'] = 'Going to' + target

        }
        else{
          //no structures to distribute energy to, so switch to container mover
          creep.memory.container = true
        }
      }
      else {
        //if not working, then gathering from a container
        var containers = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                  filter: (structure) => {
                      return (structure.structureType == STRUCTURE_CONTAINER &&
                          structure.store[RESOURCE_ENERGY] >= creep.store.getCapacity());
                  }
              });
        //move to and withdraw from containers
        if (containers){
            if(creep.withdraw(containers, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                  creep.moveTo(containers, {visualizePathStyle: {stroke: '#ff0000', lineStyle: 'dotted'}});
              }
        }
        else {
          //no structures to distribute energy to, so switch to container mover
          creep.memory.container = true
        }
      }
    }
};

module.exports = roleMover;
