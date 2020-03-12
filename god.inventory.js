var godInventory = {

    count: function() {
        console.log('counting');
        
        const harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        const upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        const builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        const repairer = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
        const noJobs = _.filter(Game.creeps, (creep) => creep.memory.role == '' || creep.memory.role == 'general');
        
        var energyAvaliable = 0;
        var energyCap = 0;
        
        for(let roomName in Game.rooms) { //{console.log(Game.rooms[roomName].energyAvailable)}
        
            energyAvaliable = Game.rooms[roomName].energyAvailable + energyAvaliable
            energyCap = Game.rooms[roomName].energyCapacityAvailable + energyCap
            console.log(roomName)
        }
        
        console.log('Harvesters: ' + harvesters.length);
        console.log('Upgraders: ' + upgraders.length);
        console.log('Builders: ' + builders.length);
        console.log('Repairers: ' + repairer.length);
        console.log('noJobs: ' + noJobs.length);
        console.log('energy: ' + energyAvaliable)
        
        


        //room.energyCapacityAvailable
        
        //room.energyAvailable
        
        //var sources = Game.rooms.find(FIND_SOURCES)
        
        //console.log(sources)
        
       // var energySupply = 
       
       // count number and type of screeps, store in memory
       // count roads
       // count extensions
       // count containers
       // 
       
        
    }
}

module.exports = godInventory;