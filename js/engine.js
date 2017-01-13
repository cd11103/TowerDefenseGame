var fruitTD = {
    currentStage: null,
    creepSpawnFinish: false,
    canvas: null,
    pathFinder: new PF.AStarFinder(),
    setContext: function(canvas) {
        this.canvas = canvas;

        canvas.width = 1260;
        canvas.height = 660;
        this.canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    },
   
    creepCount: 0,
    creepList: [],
    creepListUndraw: 0,
    unblockGridX: null,
    unblockGridY: null,
    unblockCreatedGridX: null,
    unblockCreatedGridY: null,
    unblockTowerPositionX : null,
    unblockTowerPositionY : null,
    towerList: [],
    missileList: [],
    id: null,
    towerCount: 0,
    stage: 0,
    drawCondition: true,
    gameStarted:false,
    towerCreatedList: [],
    gameTotalMoney: 1000,
    towerbuildClickCondition: true,
    life: 20,
    
   
    startGame: function() {
        this.creepList = [];
        this.id=null;
        this.stage++;
        this.setCurrentStage(this.stage);
        this.startStage();
        document.getElementById("dragPanell").style.display = "none";
        document.getElementById("toSpawnCreep").style.display = "none";
        
    },

    startStage: function() {
        this.creepCount = 0;
        this.spawnCreep();
        
        document.getElementById("fruitTD").style.display="block";
        
        for (var j = 0; j < fruitTD.towerList.length; j++) 
        {
            fruitTD.towerList[j].fireMissile();
        }
        for (var i = 0; i < fruitTD.towerList.length; i++) 
        {
            fruitTD.towerCreatedList.push(this.towerList[i]);
        }
        
        this.towerList = [];
        
        
       
        
    
        
        
    },
    
    setGridUnblock: function(){
     for(var i = 0;i<fruitTD.towerList.length;i++)
            {
                var upgradeTower = document.getElementById("upgradeTower");
                if(upgradeTower.style.top == fruitTD.towerList[i].towerPositionY+"px" && upgradeTower.style.left == fruitTD.towerList[i].towerPositionX+"px")
                {
                    fruitTD.unblockGridX = fruitTD.towerList[i].towerGridPositionX;
                   
                    fruitTD.unblockGridY = fruitTD.towerList[i].towerGridPositionY;
                    
                    
                    fruitTD.towerList.splice(i,1);
                }
                
                  
            }
            
    },

        
     
         
          
                
             
    
    setCurrentStage: function(stage) {
        if (stage == 1) {
            this.currentStage = window.stages.stage1
        } else if (stage == 2) {
            this.currentStage = window.stages.stage2
        } else if (stage == 3) {
            this.currentStage = window.stages.stage3
        } else if (stage == 4) {
            this.currentStage = window.stages.stage4
        } else if (stage == 5) {
            this.currentStage = window.stages.stage5
        } else if (stage == 6) {
            this.currentStage = window.stages.stage6
        } else if (stage == 7) {
            this.currentStage = window.stages.stage7
        } else if (stage == 8) {
            this.currentStage = window.stages.stage8
        } else if (stage == 9) {
            this.currentStage = window.stages.stage9
        } else if (stage == 10) {
            this.currentStage = window.stages.stage10
        }
    },




    buildTower: function(x, y) {

            
            var newTower;

            newTower = new arrowTower();
            newTower.towerImage.src = newTower.src;

            this.towerList.push(newTower);


            var xCoordinatePosition = 0;
            var yCoordinatePosition = 0;

            element = document.getElementById("arrowTower");

            xCoordinatePosition = (element.offsetLeft - element.scrollLeft + element.clientLeft);
            yCoordinatePosition = (element.offsetTop - element.scrollTop + element.clientTop);

            xCoordinatePosition = (xCoordinatePosition < 0) ? 0 : xCoordinatePosition;
            yCoordinatePosition = (yCoordinatePosition < 0) ? 0 : yCoordinatePosition;

            xCoordinatePosition = (xCoordinatePosition > 1260) ? 1260 : xCoordinatePosition;
            yCoordinatePosition = (yCoordinatePosition > 660) ? 660 : yCoordinatePosition;

            newTower.towerPositionX = ((x - (x % 60)));

            newTower.towerPositionY = ((y - (y % 60)));

            newTower.towerGridPositionX = ((x - (x % 60)) / 60);

            newTower.towerGridPositionY = ((y - (y % 60)) / 60);
            //left upper
            var grids = new Array();
        
            grids.push(newTower.towerGridPositionX);
            grids.push(newTower.towerGridPositionY);
            
            newTower.towerGrids.push(grids);
            
            //right upper
            var grids = new Array();
        
            grids.push(newTower.towerGridPositionX+1);
            grids.push(newTower.towerGridPositionY);
            
            newTower.towerGrids.push(grids);
        
        //left bottom
            var grids = new Array();
        
            grids.push(newTower.towerGridPositionX);
            grids.push(newTower.towerGridPositionY+1);
            
            newTower.towerGrids.push(grids);
        
        //right bottom
            var grids = new Array();
        
            grids.push(newTower.towerGridPositionX+1);
            grids.push(newTower.towerGridPositionY+1);
            
            newTower.towerGrids.push(grids);

            newTower.towerGridBlock();

            fruitTD.gameTotalMoney-=newTower.towerCost;
        
        console.log(fruitTD.towerbuildClickCondition);
        
       
        

    },

    spawnCreep: function() {

        var newCreep;


        if (this.creepList.length < this.currentStage.creepAmount) {

            switch (this.currentStage.creepType) {
                case "apple":
                    newCreep = new creepApple();
                    break;

                case "orange":
                    newCreep = new creepOrange();
                    break;

                case "strawberry":
                    newCreep = new creepStrawberry();
                    break;
                    
                    case "starFruit":
                    newCreep = new creepStarFruit();
                    break;

                    
                    case "banana":
                    newCreep = new creepBanana();
                    break;

                    
                    case "grape":
                    newCreep = new creepGrape();
                    break;

                    
                    case "mango":
                    newCreep = new creepMango();
                    break;

                    
                    case "watermelon":
                    newCreep = new creepWatermelon();
                    break;

                    
                    case "mangoesTeen":
                    newCreep = new creepMangoesTeen();
                    break;

                    
                    case "durian":
                    newCreep = new creepDurian();
                    break;


            }
            newCreep.creepID = this.creepCount++;
            newCreep.creepImage.src = newCreep.src;
            this.creepList.push(newCreep);
            this.id = this.creepList.length;
            // console.log(newCreep.creepID);
            newCreep.move();
            

            window.setTimeout(function() {
                fruitTD.spawnCreep()
            }, 500);
        }

    },




    render: function() {
        
        document.getElementById("displayTotalMoney").innerHTML="Gold : $"+fruitTD.gameTotalMoney.toString();
        
        document.getElementById("displayStage").innerHTML="Stage "+fruitTD.stage.toString();
        
        document.getElementById("displayLife").innerHTML="Life : "+fruitTD.life.toString();
        
        fruitTD.getContext().clearRect(0, 0, fruitTD.canvas.width, fruitTD.canvas.height);
        //render grid
        //this.drawGrid();


        //render creeps
        for (var i = 0; i < fruitTD.creepList.length; i++) {

            var creep = fruitTD.creepList[i];
            if (creep.hide == false && creep.healthPoint > 0) {
                fruitTD.getContext().drawImage(creep.creepImage, 0, 0, 222, 234, creep.x+10, creep.y+10, 40, 40);
                
                
                // Calculate health bar percent
    var percent = creep.healthPoint / creep.maxHealth;


    fruitTD.getContext().fillStyle = "#a7a7a7";
    fruitTD.getContext().fillRect(creep.x+5, creep.y+60, 50, 5);

    fruitTD.getContext().fillStyle = "#ff3b4a";
    fruitTD.getContext().fillRect(creep.x+5, creep.y+60, 50 * percent, 5);

            }

        }




        //render creep to transparent (reached)
        /*for(var k=0;k<fruitTD.creepListUndraw.length;k++)
	{
		var creep = fruitTD.creepList[fruitTD.creepListUndraw];
		fruitTD.getContext().drawImage(creep.creepImage,0,0,222,234,creep.x,creep.y,60,60);      
	}*/

        //render towers
        for (var j = 0; j < fruitTD.towerList.length; j++) {
            var tower = fruitTD.towerList[j];


            fruitTD.getContext().drawImage(tower.towerImage, 0, 0, 360, 360, tower.towerPositionX, tower.towerPositionY, 120, 120);
            
        }
        
        for (var k = 0; k < fruitTD.towerCreatedList.length; k++) {
            var tower = fruitTD.towerCreatedList[k];


            fruitTD.getContext().drawImage(tower.towerImage, 0, 0, 360, 360, tower.towerPositionX, tower.towerPositionY, 120, 120);
        }


        //render missile
        for (var i = 0; i < fruitTD.missileList.length; i++) {

            var missile = fruitTD.missileList[i];
            
            if (missile.hide == false && missile.level2 == false && missile.level3 == false) {
                fruitTD.getContext().drawImage(missile.missileImage, 0, 0, 221, 228, missile.x, missile.y, 40, 40);
            }
            else if(missile.hide == false && missile.level2 == true && missile.level3 == false)
            {
                fruitTD.getContext().drawImage(missile.missileImage, 0, 0, 221, 228, missile.x, missile.y, 60, 60);
            }
            else if(missile.hide == false && missile.level2 == false && missile.level3 == true)
            {
                fruitTD.getContext().drawImage(missile.missileImage, 0, 0, 221, 228, missile.x, missile.y, 80, 80);
            }

        }



        window.setTimeout(function() {
            requestAnimationFrame(fruitTD.render);
        }, 1000 / 30);
    },

    
    checkIfCreepExist: function(id) {

        for (var i = 0; i < fruitTD.creepList.length; i++) {

            if (fruitTD.creepList[i].creepID == id) {
                return true;
            }

        }
        return false;
    },

    getCreepByID: function(id) {

        for (var i = 0; i < fruitTD.creepList.length; i++) {

            if (fruitTD.creepList[i].creepID == id) {
                return fruitTD.creepList[i];
            }

        }
        return false;

    },


    drawGrid: function() {
        var bw = 1260;
        var bh = 660;
        var p = 0;
        var cw = bw + (p * 2) + 1;
        var ch = bh + (p * 2) + 1;

        for (var x = 0; x <= bw; x += 40) {
            this.getContext().moveTo(0.5 + x + p, p);
            this.getContext().lineTo(0.5 + x + p, bh + p);
        }


        for (var x = 0; x <= bh; x += 40) {
            this.getContext().moveTo(p, 0.5 + x + p);
            this.getContext().lineTo(bw + p, 0.5 + x + p);
        }

        this.getContext().strokeStyle = "black";
        this.getContext().stroke();
    },

    getContext: function() {
        return this.canvas.getContext("2d");
    }

};