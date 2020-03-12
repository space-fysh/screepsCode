var towerDefense = {

    defendRoom: function() {
        
        for(let roomName in Game.rooms) { //{console.log(Game.rooms[roomName].energyAvailable)}
            
            var hostiles = Game.rooms[roomName].find(FIND_HOSTILE_CREEPS);
            
            
        }
        if(hostiles.length > 0) {
                var username = hostiles[0].owner.username;
                Game.notify(`User ${username} spotted in room ${roomName}`);
                var towers = Game.rooms[roomName].find(
                    FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
                towers.forEach(tower => tower.attack(hostiles[0]));
            };
        
    }
}

module.exports = towerDefense;