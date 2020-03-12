var classBro = {
    
    costSmall: 200,
    costMedium: 300,
    costLarge: 450,
    minBros: 10,
    
    
    
    spawnin: function(size) {
        var energyAvaliable = 0;
        var energyCap = 0;
        
        for(let roomName in Game.rooms) { //{console.log(Game.rooms[roomName].energyAvailable)}
        
            energyAvaliable = Game.rooms[roomName].energyAvailable + energyAvaliable
            energyCap = Game.rooms[roomName].energyCapacityAvailable + energyCap
            console.log(roomName)
        }
        
             for(var name in Memory.creeps) {
                if(!Game.creeps[name]) {
                    delete Memory.creeps[name];
                    //console.log('Clearing non-existing creep memory:', name);
                }
            }
        
        const numBros =  (_.filter(Game.creeps, (creep) => creep.memory.class == 'bro')).length;
        console.log(numBros)
        
         if (numBros < classBro.minBros){   
             //console.log('trying to spawn a bro')
             //console.log('Energy avaliable: ' + energyAvaliable)
             
            //bro class can be harvesters, repairers, upgraders, or builders. Change job depending on need
            if((energyAvaliable >= classBro.costLarge) || (size== 'l')){
                classBro.spawnLarge();
            }
            else if((energyAvaliable >= classBro.costMedium) || (size== 'm')){
                classBro.spawnMedium();
            }
            else if((energyAvaliable >= classBro.costSmall) || (size== 's')){
                classBro.spawnSmall();
            }
         }
            
    },
    
    spawnLarge: function() {
            var newName = 'bro' + Game.time;
            console.log('Spawning new bro: ' + newName);
            if(!Game.spawns['spo'].spawnCreep([WORK,WORK,WORK,CARRY,MOVE,MOVE], newName, 
                {memory: {role: '', class: 'bro', working: false}})){
                    console.log('spawning a large bro')
        }
        else {
            console.log('Too low energy to spawn large bro')
        }
    },
    spawnMedium: function() {
            var newName = 'bro' + Game.time;
            
        console.log('Spawning new bro: ' + newName);
            if (!Game.spawns['spo'].spawnCreep([WORK,WORK,CARRY,MOVE], newName, 
                {memory: {role: '', class: 'bro', working: false}})){
        }
        else {
            console.log('Too low energy to spawn medium bro')
        }
        
    },
    spawnSmall: function() {
            var newName = 'bro' + Game.time;
            console.log('Spawning new bro: ' + newName);
            if (!Game.spawns['spo'].spawnCreep([WORK,CARRY,MOVE], newName, 
                {memory: {role: '', class: 'bro', working: false}})) {
        }
        else {
            console.log('Too low energy to spawn small bro')
        }
    }
    
};

module.exports = classBro;