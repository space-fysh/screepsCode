var spawnControl = {

    run: function() {
     for(var name in Memory.creeps) {
            if(!Game.creeps[name]) {
                delete Memory.creeps[name];
                console.log('Clearing non-existing creep memory:', name);
            }
        }

        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        var repairer = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');


        //console.log('Harvesters: ' + harvesters.length);
        //console.log('Upgraders: ' + upgraders.length);
        //console.log('Builders: ' + builders.length);
        //console.log('Repairers: ' + repairer.length);

        if(harvesters.length < 3) {
            var newName = 'Harvester' + Game.time;
            console.log('Spawning new harvester: ' + newName);
            Game.spawns['spo'].spawnCreep([WORK,CARRY,MOVE], newName,
                {memory: {role: 'harvester', class: 'bro', doing: ''}});
        }

        if(upgraders.length < 2) {
            var newName = 'Upgrader' + Game.time;
            console.log('Spawning new upgrader: ' + newName);
            Game.spawns['spo'].spawnCreep([WORK,CARRY,MOVE], newName,
                {memory: {role: 'upgrader', class: 'bro', doing: ''}});
        }

        if(builders.length < 2) {
            var newName = 'Builder' + Game.time;
            console.log('Spawning new builder: ' + newName);
            Game.spawns['spo'].spawnCreep([WORK,CARRY,MOVE], newName,
                {memory: {role: 'builder', class: 'bro', doing: ''}});
        }

        if(repairer.length < 2) {
            var newName = 'Repairer' + Game.time;
            console.log('Spawning new repairer: ' + newName);
            Game.spawns['spo'].spawnCreep([WORK,CARRY,MOVE], newName,
                {memory: {role: 'repairer', class: 'bro', doing: ''}});
        }

        if(Game.spawns['spo'].spawning) {
            var spawningCreep = Game.creeps[Game.spawns['spo'].spawning.name];
            Game.spawns['spo'].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns['spo'].pos.x + 1,
                Game.spawns['spo'].pos.y,
                {align: 'left', opacity: 0.8});
        }
    }
}
module.exports = spawnControl;
