module.exports = function() {

  StructureSpawn.prototype.getBodyInfo =
    function (roleName, energy) {
        var bodyInfo = {};
        bodyInfo.role = roleName;

        let rcl = this.room.controller.level;
        if (buildingPlans[roleName] == undefined) {
            console.log("No building plans for " + roleName + " found!");
        }
        else if (buildingPlans[roleName][rcl - 1].minEnergy > energy && rcl > 1) {
            if (buildingPlans[roleName][rcl - 2].minEnergy > energy) {
                return null;
            }
            else {
                return buildingPlans[roleName][rcl - 2].body;
            }
        }
        else {
            return buildingPlans[roleName][rcl - 1].body;
        }
    };

    StructureSpawn.prototype.createCustomCreep =
      function (energyCapacity, roleName, spawnID) {

        let body = this.getBodyInfo(roleName, this.room.energyCapacityAvailable);

        if (body != null && this.createCreep(body, undefined, { dryRun: true }) == OK) {
                return this.createCreep(body, undefined, {
                    memory: {
                      class: roleName,
                      role: undefined,
                      working: false,
                      spawn: spawnID,
                      jobQueueTask: undefined,
                      homeroom: this.room.name,
                      boostList: boost
                  }});
      }
    }
};
