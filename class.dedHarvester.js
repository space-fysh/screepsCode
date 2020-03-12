var dedHarvester = {



    spawnin: function(thisroom) {
        var listSources
        var claimedSources

        var newName = 'Harvester' + Game.time;
            console.log('Spawning dedicated harvester: ' + newName);
            if (!Game.spawns['spo'].spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,MOVE], newName,
                {memory: {role: 'dedHarvester', class: 'dedHarvester', working: false, dedicatedSource: }})) {
        }
        else {
            console.log('Too low energy to spawn a dedicated harvester')
        }  
    }


};

module.exports = dedHarvester;
