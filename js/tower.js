function arrowTower() {

    this.towerImage = new Image();

    this.src = "image/arrowTowerLevell1.png";

    this.towerGridPositionX = 0;

    this.upgradeLevel2Cost = 500;
    
    this.upgradeLevel3Cost = 1000;
    
    this.destroy = false;
    
    this.level = 1;
    
    this.towerID = null;
    
    this.targetCreep = null;
    
    this.towerGridPositionY = 0;
    
    this.towerGrids = [];

    this.damage = 25;
    
    this.timeOut = 1000;
    
    this.towerPositionX = 0;

    this.creepCountList = 0;

    this.towerPositionY = 0;

    this.towerCost = 250;

    this.attackInterval = 250;

    this.towerGridBlock = function() {

        for (var i = 0; i < fruitTD.towerList.length; i++) {
            gameGrid.grid.setWalkableAt(fruitTD.towerList[i].towerGridPositionX, fruitTD.towerList[i].towerGridPositionY, false);
            gameGrid.grid.setWalkableAt(fruitTD.towerList[i].towerGridPositionX + 1, fruitTD.towerList[i].towerGridPositionY + 1, false);
            gameGrid.grid.setWalkableAt(fruitTD.towerList[i].towerGridPositionX + 1, fruitTD.towerList[i].towerGridPositionY, false);
            gameGrid.grid.setWalkableAt(fruitTD.towerList[i].towerGridPositionX, fruitTD.towerList[i].towerGridPositionY + 1, false);
        }
    }
    
    
    
    
    this.showUpdateOrDeleteButton = function(){
         
      
        var upgradeTower = document.getElementById("upgradeTower");
        
        upgradeTower.style.top = this.towerPositionY+"px";
        
        upgradeTower.style.left = this.towerPositionX+"px";
        
        upgradeTower.style.display="block";
      

    }
    
   


    this.fireMissile = function() {

        
        if (fruitTD.creepList.length > 0) {
            var m = new missile();
            if(this.level==2)
            {
                m.level2=true;
                m.missileImage.src="image/flyLevel2.png";
            }
            else if(this.level==3)
            {
                m.level3 = true;
                m.level2 = false;
                m.missileImage.src="image/flyLevel3.png";
            }
            m.damage = this.damage;
            m.x = this.towerPositionX + 60;
            m.y = this.towerPositionY + 60;
            
            
            
            m.seekCreep();

            fruitTD.missileList.push(m);
            
           
            
            if(this.destroy==false)
            {
            (function(j) {
               
                return setTimeout(function() {
                    j.fireMissile();
                   
                }, 1000);
            })(this);
            }
        }
    }
}


/* 
iceTower: function()
{


        this.towerImage=new Image();
        alert("This is Ice Tower");
        this.src="image/iceTower.png";


}
};*/