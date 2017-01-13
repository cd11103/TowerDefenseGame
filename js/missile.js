function missile() {

    this.missileImage = new Image();
    this.targetCreep = null;
    this.missileImage.src = "image/fly.png";
    this.speed = 25.0; // pixels per tick
    this.damage = 0;
    this.level2 = false;
    this.level3 = false;
    this.x = 0;
    this.y = 0;
    this.radian = 0;
    this.hide = false;

    this.getCreepX = function() {
        return this.targetCreep.x;

    }
    this.getCreepY = function() {
        return this.targetCreep.y;
    }

    this.destroy = function() {
        for (var n = 0; n < fruitTD.missileList.length; n++) {
            if (this === fruitTD.missileList[n]) {
                //alert(n);
                fruitTD.missileList.splice(n, 1);
            }
        }

        this.hide = true;
    }

    this.seekCreep = function() {
        
        
        for (var j = 0; j < fruitTD.creepList.length; j++) 
        {
            
            
            if (fruitTD.creepList[j].healthPoint > 0) 
            {
                
                if(fruitTD.creepList[j].healthPoint > 0 && fruitTD.creepList[j].gameGridY==10 && fruitTD.creepList[j].gameGridX==20)
                {
                    
                    this.targetCreep = fruitTD.creepList[j+1];
                   // break;
                }else{
                    
                this.targetCreep = fruitTD.creepList[j];
                break;
                }
            }
        }
        
                
            


        if (j >= fruitTD.creepList.length) {
            this.targetCreep = null;
        }

        if (this.targetCreep == null) {
            this.destroy();
            return;
        } else {


            this.radian = Math.atan2(this.getCreepY() - this.y, this.getCreepX() - this.x);

            var dx = this.speed * Math.cos(this.radian);
            var dy = this.speed * Math.sin(this.radian);

            this.x = this.x + dx;
            this.y = this.y + dy;
            var d = Math.sqrt(((this.x - this.getCreepX()) ^ 2) + ((this.y - this.getCreepY()) ^ 2))
            if (d < 5) {
                this.x = this.getCreepX();
                this.y = this.getCreepY();
                this.destroy();
                for(var i = 0;i<fruitTD.towerList.length;i++)
                    {
                        this.damage=fruitTD.towerList[i].damage;
                    }
                
                this.targetCreep.healthPoint -= this.damage;
                
                if(this.targetCreep.healthPoint<=0)
                {
                    
                    console.log("killed");
                    fruitTD.gameTotalMoney+=this.targetCreep.money;
                    console.log(fruitTD.gameTotalMoney);
                    if(fruitTD.gameTotalMoney>=250)
                    {
                        fruitTD.towerbuildClickCondition= true;   
                    }
                }
                return;
            }



            (function(j) {
                return setTimeout(function() {
                    j.seekCreep();
                }, 1000 / 30);
            })(this);


        }
    }
}