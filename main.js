var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var spawnControl = require('spawn.control');
var godInventory = require('god.inventory');
var classBro = require('class.bro');
var towerDefense = require('tower.defense');
var godJobs = require('god.jobs');


module.exports.loop = function () {

    var inventory_count = 5;


    if(Game.time % inventory_count === 0) {
        godInventory.count();
        classBro.spawnin('')

    }

    towerDefense.defendRoom;

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'general' || creep.memory.role == '' || !creep.memory.role){
          godJobs.simpleAssign(creep);
        }
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }

    }
}
