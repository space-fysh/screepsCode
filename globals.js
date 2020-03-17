var globals = {

  const roles = {
    bro: ['builder', 'harvester','repairer','upgrader'],
    dedHarvester: ['miner'],
    mover: []

  }


  const buildingPlans = {
    bro: [
      {
        //Level 1 (max 300)
        minEnergy: 200,
        body: [MOVE, WORK, CARRY]

      },
      {
          //Level 2 (max 550)
          minEnergy: 350,
          body: [MOVE, MOVE, WORK, WORK, CARRY]
      },
      {
          //Level 3 (max 800)
          minEnergy: 700,
          body: [MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY]
      },
      {
          //Level 4 (max 1300)
          minEnergy: 700,
          body: [MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY]
      },
      {
        //Level 5 (max 1800)
          minEnergy: 700,
          body: [MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY]
      },
      {
        //Level 6 (max 2300)
          minEnergy: 700,
          body: [MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY]
      },
      {
        //Level 7 (max 5600)
          minEnergy: 700,
          body: [MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY]
      },
      {
        //Level 8 (max 12900)
          minEnergy: 700,
          body: [MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY]
      }],

    dedHarvester:[
        {
            //Level 1 (max 300)
            minEnergy: 300,
            body: [MOVE, WORK, WORK, CARRY]
        },
        {
            //Level 2 (max 550)
            minEnergy: 550,
            body: [MOVE, WORK, WORK, WORK, WORK, CARRY, CARRY]
        },
        {
            //Level 3 (max 800)
            minEnergy: 700,
            body: [MOVE, MOVE, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY]
        },
        {
            //Level 4 (max 1300)
            minEnergy: 950,
            body: [MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
        },
        {
            //Level 5 (max 1800)
            minEnergy: 950,
            body: [MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
        },
        {
            //Level 6 (max 2300)
            minEnergy: 950,
            body: [MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
        },
        {
            //Level 7 (max 5600)
            minEnergy: 950,
            body: [MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
        },
        {
            //Level 8 (max 12900)
            minEnergy: 950,
            body: [MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
        }],
        
        mover: [
        {
            //Level 1 (max 300)
            minEnergy: 250,
            body: [MOVE, MOVE, CARRY, CARRY, CARRY]
        },
        {
            //Level 2 (max 550)
            minEnergy: 450,
            body: [MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
        },
        {
            //Level 3 (max 800)
            minEnergy: 600,
            body: [MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY]
        },
        {
            //Level 4 (max 1300)
            minEnergy: 1050,
            body: [MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY]
        },
        {
            //Level 5 (max 1800)
            minEnergy: 1300,
            body: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
        },
        {
            //Level 6 (max 2300)
            minEnergy: 1300,
            body: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
        },
        {
            //Level 7 (max 5600)
            minEnergy: 1300,
            body: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
        },
        {
            //Level 8 (max 12900)
            minEnergy: 1300,
            body: [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY]
        }]
  }
};

module.exports = globals;
