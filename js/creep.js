function creepApple() {

    this.creepImage = new Image();
    this.healthPoint = 50;
    this.maxHealth = 50;
    this.src = "image/final_apple.png";
    this.x = 0;
    this.y = 0;
    this.gameGridX = 0;
    this.gameGridY = 0;
    this.previousGameGridX = null;
    this.previousGameGridY = null;
    this.destinationX = 20;
    this.destinationY = 10;
    this.creepID = null;
    this.hide = false;
    this.money = 50;


    
    

    this.move = function() {
        
        


        this.previousGameGridX = this.gameGridX;
        this.previousGameGridY = this.gameGridY;

        for (var i = 0; i < fruitTD.creepList.length; i++) {
            if(fruitTD.creepList[i].healthPoint>0)
            {
            gameGrid.grid.setWalkableAt(fruitTD.creepList[i].gameGridX, fruitTD.creepList[i].gameGridY, false);
            }
            else if(fruitTD.creepList[i].healthPoint<=0)
            {
                gameGrid.grid.setWalkableAt(fruitTD.creepList[i].gameGridX, fruitTD.creepList[i].gameGridY, true);
                //console.log("killed");
                
            }

            //THIS IS STARTING POINT
            if (this === fruitTD.creepList[i]) {
                gameGrid.grid.setWalkableAt(fruitTD.creepList[i].gameGridX, fruitTD.creepList[i].gameGridY, true);
            }
        }

        gameGrid.grid.setWalkableAt(this.destinationX, this.destinationY, true);



        //2nd clone
        gameGrid.gridClone = gameGrid.grid.clone();

        var path = null;

        if (this.creepID == 0) {
            path = fruitTD.pathFinder.findPath(this.gameGridX, this.gameGridY, this.destinationX, this.destinationY, gameGrid.gridClone);

        } else {
            if (fruitTD.checkIfCreepExist(this.creepID - 1)) {
                path = fruitTD.pathFinder.findPath(this.gameGridX, this.gameGridY, fruitTD.getCreepByID(this.creepID - 1).previousGameGridX, fruitTD.getCreepByID(this.creepID - 1).previousGameGridY, gameGrid.gridClone);

            }
        }

        //console.log(this.gameGridY);


        var nextStep = path[1];

        
        if(this.creepID==39 && this.gameGridX==20 && this.gameGridY==10)
        {
                    document.getElementById("dragPanell").style.display = "inline";
                    document.getElementById("toSpawnCreep").style.display = "inline";
                    document.getElementById("stageEnd").style.display="block";
                    document.getElementById("fruitTD").style.display="none";
                    setTimeout(function(){document.getElementById("stageEnd").style.display="none"},3000);
        }
        
        if (this.gameGridX == this.destinationX && this.gameGridY == this.destinationY) {
            if(this.healthPoint<=0)
            {
             this.hide=true;   
            }
            //alert(this.hide);
            if(this.hide==false)
            {
                fruitTD.life-=1;
            }
            this.hide = true;
            
            if(fruitTD.life==0)
            {
                document.getElementById("lose").style.display="block";
                setTimeout(function(){document.getElementById("lose").style.display="none"},3000); 
                setTimeout(function(){window.location='fruitTD.html'},5000); 
               // location.reload(); 
            }
            return;

        } else {

            this.setLocation(nextStep[0], nextStep[1]);


            (function(j) {
                return setTimeout(function() {
                    j.move();
                }, 200);
            })(this);
        }


    };

    this.setLocation = function(nodeX, nodeY) {
        this.x = gameGrid.nodePosition[nodeX][nodeY][0];
        this.y = gameGrid.nodePosition[nodeX][nodeY][1];
        this.gameGridX = nodeX;
        this.gameGridY = nodeY;
    }



}



function creepOrange() {

    this.creepImage = new Image();
    this.healthPoint = 200;
    this.maxHealth = 200;
    this.src = "image/final_orange.png";
    this.x = 0;
    this.y = 0;
    this.gameGridX = 0;
    this.gameGridY = 0;
    this.previousGameGridX = null;
    this.previousGameGridY = null;
    this.destinationX = 20;
    this.destinationY = 10;
    this.creepID = null;
    this.hide = false;
    this.money = 70;


    

    this.move = function() {


        this.previousGameGridX = this.gameGridX;
        this.previousGameGridY = this.gameGridY;

        for (var i = 0; i < fruitTD.creepList.length; i++) {
            if(fruitTD.creepList[i].healthPoint>0)
            {
            gameGrid.grid.setWalkableAt(fruitTD.creepList[i].gameGridX, fruitTD.creepList[i].gameGridY, false);
            }
            else if(fruitTD.creepList[i].healthPoint<=0)
            {
                gameGrid.grid.setWalkableAt(fruitTD.creepList[i].gameGridX, fruitTD.creepList[i].gameGridY, true);
            }

            //THIS IS STARTING POINT
            if (this === fruitTD.creepList[i]) {
                gameGrid.grid.setWalkableAt(fruitTD.creepList[i].gameGridX, fruitTD.creepList[i].gameGridY, true);
            }
        }

        gameGrid.grid.setWalkableAt(this.destinationX, this.destinationY, true);



        //2nd clone
        gameGrid.gridClone = gameGrid.grid.clone();

        var path = null;

        if (this.creepID == 0) {
            path = fruitTD.pathFinder.findPath(this.gameGridX, this.gameGridY, this.destinationX, this.destinationY, gameGrid.gridClone);

        } else {
            if (fruitTD.checkIfCreepExist(this.creepID - 1)) {
                path = fruitTD.pathFinder.findPath(this.gameGridX, this.gameGridY, fruitTD.getCreepByID(this.creepID - 1).previousGameGridX, fruitTD.getCreepByID(this.creepID - 1).previousGameGridY, gameGrid.gridClone);

            }
        }

        //console.log(this.gameGridY);
        if(this.creepID==39 && this.gameGridX==20 && this.gameGridY==10)
        {
                    document.getElementById("dragPanell").style.display = "inline";
                    document.getElementById("toSpawnCreep").style.display = "inline";
                    document.getElementById("stageEnd").style.display="block";
                       document.getElementById("fruitTD").style.display="none";
                    setTimeout(function(){document.getElementById("stageEnd").style.display="none"},3000);
        }

        var nextStep = path[1];

        if (this.gameGridX == this.destinationX && this.gameGridY == this.destinationY) {
            if(this.healthPoint<=0)
            {
             this.hide=true;   
            }
            //alert(this.hide);
            if(this.hide==false)
            {
                fruitTD.life-=1;
            }
            this.hide = true;
            
            if(fruitTD.life==0)
            {
                document.getElementById("lose").style.display="block";
                setTimeout(function(){document.getElementById("lose").style.display="none"},3000); 
                setTimeout(function(){window.location='fruitTD.html'},5000); 
            }
            return;

        } else {

            this.setLocation(nextStep[0], nextStep[1]);


            (function(j) {
                return setTimeout(function() {
                    j.move();
                }, 200);
            })(this);
        }


    };

    this.setLocation = function(nodeX, nodeY) {
        this.x = gameGrid.nodePosition[nodeX][nodeY][0];
        this.y = gameGrid.nodePosition[nodeX][nodeY][1];
        this.gameGridX = nodeX;
        this.gameGridY = nodeY;
    }


}

function creepStrawberry() {

    this.creepImage = new Image();
    this.healthPoint = 450;
    this.maxHealth = 450;
    this.src = "image/final_strawberry.png";
    this.x = 0;
    this.y = 0;
    this.gameGridX = 0;
    this.gameGridY = 0;
    this.previousGameGridX = null;
    this.previousGameGridY = null;
    this.destinationX = 20;
    this.destinationY = 10;
    this.creepID = null;
    this.hide = false;
    this.money = 80;


    

    this.move = function() {


        this.previousGameGridX = this.gameGridX;
        this.previousGameGridY = this.gameGridY;

        for (var i = 0; i < fruitTD.creepList.length; i++) {
            if(fruitTD.creepList[i].healthPoint>0)
            {
            gameGrid.grid.setWalkableAt(fruitTD.creepList[i].gameGridX, fruitTD.creepList[i].gameGridY, false);
            }
            else if(fruitTD.creepList[i].healthPoint<=0)
            {
                gameGrid.grid.setWalkableAt(fruitTD.creepList[i].gameGridX, fruitTD.creepList[i].gameGridY, true);
            }

            //THIS IS STARTING POINT
            if (this === fruitTD.creepList[i]) {
                gameGrid.grid.setWalkableAt(fruitTD.creepList[i].gameGridX, fruitTD.creepList[i].gameGridY, true);
            }
        }

        gameGrid.grid.setWalkableAt(this.destinationX, this.destinationY, true);



        //2nd clone
        gameGrid.gridClone = gameGrid.grid.clone();

        var path = null;

        if (this.creepID == 0) {
            path = fruitTD.pathFinder.findPath(this.gameGridX, this.gameGridY, this.destinationX, this.destinationY, gameGrid.gridClone);

        } else {
            if (fruitTD.checkIfCreepExist(this.creepID - 1)) {
                path = fruitTD.pathFinder.findPath(this.gameGridX, this.gameGridY, fruitTD.getCreepByID(this.creepID - 1).previousGameGridX, fruitTD.getCreepByID(this.creepID - 1).previousGameGridY, gameGrid.gridClone);

            }
        }

        //console.log(this.gameGridY);
        if(this.creepID==39 && this.gameGridX==20 && this.gameGridY==10)
        {
                    document.getElementById("dragPanell").style.display = "inline";
                    document.getElementById("toSpawnCreep").style.display = "inline";
                    document.getElementById("stageEnd").style.display="block";
                       document.getElementById("fruitTD").style.display="none";
                    setTimeout(function(){document.getElementById("stageEnd").style.display="none"},3000);
        }

        var nextStep = path[1];

        if (this.gameGridX == this.destinationX && this.gameGridY == this.destinationY) {
            if(this.healthPoint<=0)
            {
             this.hide=true;   
            }
            //alert(this.hide);
            if(this.hide==false)
            {
                fruitTD.life-=1;
            }
            this.hide = true;
            
            if(fruitTD.life==0)
            {
                document.getElementById("lose").style.display="block";
               setTimeout(function(){document.getElementById("lose").style.display="none"},3000); 
                setTimeout(function(){window.location='fruitTD.html'},5000);
            }
            return;

        } else {

            this.setLocation(nextStep[0], nextStep[1]);


            (function(j) {
                return setTimeout(function() {
                    j.move();
                }, 200);
            })(this);
        }


    };

    this.setLocation = function(nodeX, nodeY) {
        this.x = gameGrid.nodePosition[nodeX][nodeY][0];
        this.y = gameGrid.nodePosition[nodeX][nodeY][1];
        this.gameGridX = nodeX;
        this.gameGridY = nodeY;
    }


}

function creepStarFruit() {

    this.creepImage = new Image();
    this.healthPoint = 700;
    this.maxHealth = 700;
    this.src = "image/final_starFruit.png";
    this.x = 0;
    this.y = 0;
    this.gameGridX = 0;
    this.gameGridY = 0;
    this.previousGameGridX = null;
    this.previousGameGridY = null;
    this.destinationX = 20;
    this.destinationY = 10;
    this.creepID = null;
    this.hide = false;
    this.money = 80;


    

    this.move = function() {


        this.previousGameGridX = this.gameGridX;
        this.previousGameGridY = this.gameGridY;

        for (var i = 0; i < fruitTD.creepList.length; i++) {
            if(fruitTD.creepList[i].healthPoint>0)
            {
            gameGrid.grid.setWalkableAt(fruitTD.creepList[i].gameGridX, fruitTD.creepList[i].gameGridY, false);
            }
            else if(fruitTD.creepList[i].healthPoint<=0)
            {
                gameGrid.grid.setWalkableAt(fruitTD.creepList[i].gameGridX, fruitTD.creepList[i].gameGridY, true);
            }

            //THIS IS STARTING POINT
            if (this === fruitTD.creepList[i]) {
                gameGrid.grid.setWalkableAt(fruitTD.creepList[i].gameGridX, fruitTD.creepList[i].gameGridY, true);
            }
        }

        gameGrid.grid.setWalkableAt(this.destinationX, this.destinationY, true);



        //2nd clone
        gameGrid.gridClone = gameGrid.grid.clone();

        var path = null;

        if (this.creepID == 0) {
            path = fruitTD.pathFinder.findPath(this.gameGridX, this.gameGridY, this.destinationX, this.destinationY, gameGrid.gridClone);

        } else {
            if (fruitTD.checkIfCreepExist(this.creepID - 1)) {
                path = fruitTD.pathFinder.findPath(this.gameGridX, this.gameGridY, fruitTD.getCreepByID(this.creepID - 1).previousGameGridX, fruitTD.getCreepByID(this.creepID - 1).previousGameGridY, gameGrid.gridClone);

            }
        }
        
        //console.log(this.gameGridY);
        if(this.creepID==39 && this.gameGridX==20 && this.gameGridY==10)
        {
                    document.getElementById("dragPanell").style.display = "inline";
                    document.getElementById("toSpawnCreep").style.display = "inline";
                    document.getElementById("stageEnd").style.display="block";
                       document.getElementById("fruitTD").style.display="none";
                    setTimeout(function(){document.getElementById("stageEnd").style.display="none"},3000);
        }

        var nextStep = path[1];

       if (this.gameGridX == this.destinationX && this.gameGridY == this.destinationY) {
            if(this.healthPoint<=0)
            {
             this.hide=true;   
            }
            //alert(this.hide);
            if(this.hide==false)
            {
                fruitTD.life-=1;
            }
            this.hide = true;
            
            if(fruitTD.life==0)
            {
                document.getElementById("lose").style.display="block";
                setTimeout(function(){document.getElementById("lose").style.display="none"},3000); 
                setTimeout(function(){window.location='fruitTD.html'},5000);
            }
            return;

        } else {

            this.setLocation(nextStep[0], nextStep[1]);


            (function(j) {
                return setTimeout(function() {
                    j.move();
                }, 200);
            })(this);
        }


    };

    this.setLocation = function(nodeX, nodeY) {
        this.x = gameGrid.nodePosition[nodeX][nodeY][0];
        this.y = gameGrid.nodePosition[nodeX][nodeY][1];
        this.gameGridX = nodeX;
        this.gameGridY = nodeY;
    }


}

function creepBanana() {

    this.creepImage = new Image();
    this.healthPoint = 950;
    this.maxHealth = 950;
    this.src = "image/final_banana.png";
    this.x = 0;
    this.y = 0;
    this.gameGridX = 0;
    this.gameGridY = 0;
    this.previousGameGridX = null;
    this.previousGameGridY = null;
    this.destinationX = 20;
    this.destinationY = 10;
    this.creepID = null;
    this.hide = false;
    this.money = 80;


    

    this.move = function() {


        this.previousGameGridX = this.gameGridX;
        this.previousGameGridY = this.gameGridY;

        for (var i = 0; i < fruitTD.creepList.length; i++) {
            if(fruitTD.creepList[i].healthPoint>0)
            {
            gameGrid.grid.setWalkableAt(fruitTD.creepList[i].gameGridX, fruitTD.creepList[i].gameGridY, false);
            }
            else if(fruitTD.creepList[i].healthPoint<=0)
            {
                gameGrid.grid.setWalkableAt(fruitTD.creepList[i].gameGridX, fruitTD.creepList[i].gameGridY, true);
            }

            //THIS IS STARTING POINT
            if (this === fruitTD.creepList[i]) {
                gameGrid.grid.setWalkableAt(fruitTD.creepList[i].gameGridX, fruitTD.creepList[i].gameGridY, true);
            }
        }

        gameGrid.grid.setWalkableAt(this.destinationX, this.destinationY, true);



        //2nd clone
        gameGrid.gridClone = gameGrid.grid.clone();

        var path = null;

        if (this.creepID == 0) {
            path = fruitTD.pathFinder.findPath(this.gameGridX, this.gameGridY, this.destinationX, this.destinationY, gameGrid.gridClone);

        } else {
            if (fruitTD.checkIfCreepExist(this.creepID - 1)) {
                path = fruitTD.pathFinder.findPath(this.gameGridX, this.gameGridY, fruitTD.getCreepByID(this.creepID - 1).previousGameGridX, fruitTD.getCreepByID(this.creepID - 1).previousGameGridY, gameGrid.gridClone);

            }
        }

        //console.log(this.gameGridY);
        if(this.creepID==39 && this.gameGridX==20 && this.gameGridY==10)
        {
                    document.getElementById("dragPanell").style.display = "inline";
                    document.getElementById("toSpawnCreep").style.display = "inline";
                    document.getElementById("stageEnd").style.display="block";
                       document.getElementById("fruitTD").style.display="none";
                    setTimeout(function(){document.getElementById("stageEnd").style.display="none"},3000);
        }

        var nextStep = path[1];

        if (this.gameGridX == this.destinationX && this.gameGridY == this.destinationY) {
            if(this.healthPoint<=0)
            {
             this.hide=true;   
            }
            //alert(this.hide);
            if(this.hide==false)
            {
                fruitTD.life-=1;
            }
            this.hide = true;
            
            if(fruitTD.life==0)
            {
                document.getElementById("lose").style.display="block";
                setTimeout(function(){document.getElementById("lose").style.display="none"},3000); 
                setTimeout(function(){window.location='fruitTD.html'},5000);
            }
            return;

        } else {

            this.setLocation(nextStep[0], nextStep[1]);


            (function(j) {
                return setTimeout(function() {
                    j.move();
                }, 200);
            })(this);
        }


    };

    this.setLocation = function(nodeX, nodeY) {
        this.x = gameGrid.nodePosition[nodeX][nodeY][0];
        this.y = gameGrid.nodePosition[nodeX][nodeY][1];
        this.gameGridX = nodeX;
        this.gameGridY = nodeY;
    }


}

function creepGrape() {

    this.creepImage = new Image();
    this.healthPoint = 1150;
    this.maxHealth = 1150;
    this.src = "image/final_grape.png";
    this.x = 0;
    this.y = 0;
    this.gameGridX = 0;
    this.gameGridY = 0;
    this.previousGameGridX = null;
    this.previousGameGridY = null;
    this.destinationX = 20;
    this.destinationY = 10;
    this.creepID = null;
    this.hide = false;
    this.money = 80;


    

    this.move = function() {


        this.previousGameGridX = this.gameGridX;
        this.previousGameGridY = this.gameGridY;

        for (var i = 0; i < fruitTD.creepList.length; i++) {
            if(fruitTD.creepList[i].healthPoint>0)
            {
            gameGrid.grid.setWalkableAt(fruitTD.creepList[i].gameGridX, fruitTD.creepList[i].gameGridY, false);
            }
            else if(fruitTD.creepList[i].healthPoint<=0)
            {
                gameGrid.grid.setWalkableAt(fruitTD.creepList[i].gameGridX, fruitTD.creepList[i].gameGridY, true);
            }

            //THIS IS STARTING POINT
            if (this === fruitTD.creepList[i]) {
                gameGrid.grid.setWalkableAt(fruitTD.creepList[i].gameGridX, fruitTD.creepList[i].gameGridY, true);
            }
        }

        gameGrid.grid.setWalkableAt(this.destinationX, this.destinationY, true);



        //2nd clone
        gameGrid.gridClone = gameGrid.grid.clone();

        var path = null;

        if (this.creepID == 0) {
            path = fruitTD.pathFinder.findPath(this.gameGridX, this.gameGridY, this.destinationX, this.destinationY, gameGrid.gridClone);

        } else {
            if (fruitTD.checkIfCreepExist(this.creepID - 1)) {
                path = fruitTD.pathFinder.findPath(this.gameGridX, this.gameGridY, fruitTD.getCreepByID(this.creepID - 1).previousGameGridX, fruitTD.getCreepByID(this.creepID - 1).previousGameGridY, gameGrid.gridClone);

            }
        }

        //console.log(this.gameGridY);
        if(this.creepID==39 && this.gameGridX==20 && this.gameGridY==10)
        {
                    document.getElementById("dragPanell").style.display = "inline";
                    document.getElementById("toSpawnCreep").style.display = "inline";
                    document.getElementById("stageEnd").style.display="block";
                       document.getElementById("fruitTD").style.display="none";
                    setTimeout(function(){document.getElementById("stageEnd").style.display="none"},3000);
        }

        var nextStep = path[1];

        if (this.gameGridX == this.destinationX && this.gameGridY == this.destinationY) {
            if(this.healthPoint<=0)
            {
             this.hide=true;   
            }
            //alert(this.hide);
            if(this.hide==false)
            {
                fruitTD.life-=1;
            }
            this.hide = true;
            
            if(fruitTD.life==0)
            {
                document.getElementById("lose").style.display="block";
                setTimeout(function(){document.getElementById("lose").style.display="none"},3000); 
                setTimeout(function(){window.location='fruitTD.html'},5000);
            }
            return;

        } else {

            this.setLocation(nextStep[0], nextStep[1]);


            (function(j) {
                return setTimeout(function() {
                    j.move();
                }, 200);
            })(this);
        }


    };

    this.setLocation = function(nodeX, nodeY) {
        this.x = gameGrid.nodePosition[nodeX][nodeY][0];
        this.y = gameGrid.nodePosition[nodeX][nodeY][1];
        this.gameGridX = nodeX;
        this.gameGridY = nodeY;
    }


}

function creepMango() {

    this.creepImage = new Image();
    this.healthPoint = 1450;
    this.maxHealth = 1450;
    this.src = "image/final_mango.png";
    this.x = 0;
    this.y = 0;
    this.gameGridX = 0;
    this.gameGridY = 0;
    this.previousGameGridX = null;
    this.previousGameGridY = null;
    this.destinationX = 20;
    this.destinationY = 10;
    this.creepID = null;
    this.hide = false;
    this.money = 80;
    

    

    this.move = function() {


        this.previousGameGridX = this.gameGridX;
        this.previousGameGridY = this.gameGridY;

        for (var i = 0; i < fruitTD.creepList.length; i++) {
            if(fruitTD.creepList[i].healthPoint>0)
            {
            gameGrid.grid.setWalkableAt(fruitTD.creepList[i].gameGridX, fruitTD.creepList[i].gameGridY, false);
            }
            else if(fruitTD.creepList[i].healthPoint<=0)
            {
                gameGrid.grid.setWalkableAt(fruitTD.creepList[i].gameGridX, fruitTD.creepList[i].gameGridY, true);
            }

            //THIS IS STARTING POINT
            if (this === fruitTD.creepList[i]) {
                gameGrid.grid.setWalkableAt(fruitTD.creepList[i].gameGridX, fruitTD.creepList[i].gameGridY, true);
            }
        }

        gameGrid.grid.setWalkableAt(this.destinationX, this.destinationY, true);



        //2nd clone
        gameGrid.gridClone = gameGrid.grid.clone();

        var path = null;

        if (this.creepID == 0) {
            path = fruitTD.pathFinder.findPath(this.gameGridX, this.gameGridY, this.destinationX, this.destinationY, gameGrid.gridClone);

        } else {
            if (fruitTD.checkIfCreepExist(this.creepID - 1)) {
                path = fruitTD.pathFinder.findPath(this.gameGridX, this.gameGridY, fruitTD.getCreepByID(this.creepID - 1).previousGameGridX, fruitTD.getCreepByID(this.creepID - 1).previousGameGridY, gameGrid.gridClone);

            }
        }

        //console.log(this.gameGridY);
        if(this.creepID==39 && this.gameGridX==20 && this.gameGridY==10)
        {
                    document.getElementById("dragPanell").style.display = "inline";
                    document.getElementById("toSpawnCreep").style.display = "inline";
                    document.getElementById("stageEnd").style.display="block";
                       document.getElementById("fruitTD").style.display="none";
                    setTimeout(function(){document.getElementById("stageEnd").style.display="none"},3000);
        }
        
        var nextStep = path[1];

       if (this.gameGridX == this.destinationX && this.gameGridY == this.destinationY) {
            if(this.healthPoint<=0)
            {
             this.hide=true;   
            }
            //alert(this.hide);
            if(this.hide==false)
            {
                fruitTD.life-=1;
            }
            this.hide = true;
            
            if(fruitTD.life==0)
            {
                document.getElementById("lose").style.display="block";
                setTimeout(function(){document.getElementById("lose").style.display="none"},3000); 
                setTimeout(function(){window.location='fruitTD.html'},5000); 
            }
            return;

        } else {

            this.setLocation(nextStep[0], nextStep[1]);


            (function(j) {
                return setTimeout(function() {
                    j.move();
                }, 200);
            })(this);
        }


    };

    this.setLocation = function(nodeX, nodeY) {
        this.x = gameGrid.nodePosition[nodeX][nodeY][0];
        this.y = gameGrid.nodePosition[nodeX][nodeY][1];
        this.gameGridX = nodeX;
        this.gameGridY = nodeY;
    }


}

function creepWatermelon() {

    this.creepImage = new Image();
    this.healthPoint = 1650;
    this.maxHealth = 1650;
    this.src = "image/final_watermelon.png";
    this.x = 0;
    this.y = 0;
    this.gameGridX = 0;
    this.gameGridY = 0;
    this.previousGameGridX = null;
    this.previousGameGridY = null;
    this.destinationX = 20;
    this.destinationY = 10;
    this.creepID = null;
    this.hide = false;
    this.money = 80;


    

    this.move = function() {


        this.previousGameGridX = this.gameGridX;
        this.previousGameGridY = this.gameGridY;

        for (var i = 0; i < fruitTD.creepList.length; i++) {
            if(fruitTD.creepList[i].healthPoint>0)
            {
            gameGrid.grid.setWalkableAt(fruitTD.creepList[i].gameGridX, fruitTD.creepList[i].gameGridY, false);
            }
            else if(fruitTD.creepList[i].healthPoint<=0)
            {
                gameGrid.grid.setWalkableAt(fruitTD.creepList[i].gameGridX, fruitTD.creepList[i].gameGridY, true);
            }

            //THIS IS STARTING POINT
            if (this === fruitTD.creepList[i]) {
                gameGrid.grid.setWalkableAt(fruitTD.creepList[i].gameGridX, fruitTD.creepList[i].gameGridY, true);
            }
        }

        gameGrid.grid.setWalkableAt(this.destinationX, this.destinationY, true);



        //2nd clone
        gameGrid.gridClone = gameGrid.grid.clone();

        var path = null;

        if (this.creepID == 0) {
            path = fruitTD.pathFinder.findPath(this.gameGridX, this.gameGridY, this.destinationX, this.destinationY, gameGrid.gridClone);

        } else {
            if (fruitTD.checkIfCreepExist(this.creepID - 1)) {
                path = fruitTD.pathFinder.findPath(this.gameGridX, this.gameGridY, fruitTD.getCreepByID(this.creepID - 1).previousGameGridX, fruitTD.getCreepByID(this.creepID - 1).previousGameGridY, gameGrid.gridClone);

            }
        }

        //console.log(this.gameGridY);
        if(this.creepID==39 && this.gameGridX==20 && this.gameGridY==10)
        {
                    document.getElementById("dragPanell").style.display = "inline";
                    document.getElementById("toSpawnCreep").style.display = "inline";
                    document.getElementById("stageEnd").style.display="block";
                       document.getElementById("fruitTD").style.display="none";
                    setTimeout(function(){document.getElementById("stageEnd").style.display="none"},3000);
        }

        var nextStep = path[1];

        if (this.gameGridX == this.destinationX && this.gameGridY == this.destinationY) {
            if(this.healthPoint<=0)
            {
             this.hide=true;   
            }
            //alert(this.hide);
            if(this.hide==false)
            {
                fruitTD.life-=1;
            }
            this.hide = true;
            
            if(fruitTD.life==0)
            {
                document.getElementById("lose").style.display="block";
                setTimeout(function(){document.getElementById("lose").style.display="none"},3000); 
                setTimeout(function(){window.location='fruitTD.html'},5000); 
            }
            return;

        } else {

            this.setLocation(nextStep[0], nextStep[1]);


            (function(j) {
                return setTimeout(function() {
                    j.move();
                }, 200);
            })(this);
        }


    };

    this.setLocation = function(nodeX, nodeY) {
        this.x = gameGrid.nodePosition[nodeX][nodeY][0];
        this.y = gameGrid.nodePosition[nodeX][nodeY][1];
        this.gameGridX = nodeX;
        this.gameGridY = nodeY;
    }


}

function creepMangoesTeen() {

    this.creepImage = new Image();
    this.healthPoint = 2250;
    this.maxHealth = 2250;
    this.src = "image/final_mangoesTeen.png";
    this.x = 0;
    this.y = 0;
    this.gameGridX = 0;
    this.gameGridY = 0;
    this.previousGameGridX = null;
    this.previousGameGridY = null;
    this.destinationX = 20;
    this.destinationY = 10;
    this.creepID = null;
    this.hide = false;
    this.money = 80;


    

    this.move = function() {


        this.previousGameGridX = this.gameGridX;
        this.previousGameGridY = this.gameGridY;

        for (var i = 0; i < fruitTD.creepList.length; i++) {
            if(fruitTD.creepList[i].healthPoint>0)
            {
            gameGrid.grid.setWalkableAt(fruitTD.creepList[i].gameGridX, fruitTD.creepList[i].gameGridY, false);
            }
            else if(fruitTD.creepList[i].healthPoint<=0)
            {
                gameGrid.grid.setWalkableAt(fruitTD.creepList[i].gameGridX, fruitTD.creepList[i].gameGridY, true);
            }

            //THIS IS STARTING POINT
            if (this === fruitTD.creepList[i]) {
                gameGrid.grid.setWalkableAt(fruitTD.creepList[i].gameGridX, fruitTD.creepList[i].gameGridY, true);
            }
        }

        gameGrid.grid.setWalkableAt(this.destinationX, this.destinationY, true);



        //2nd clone
        gameGrid.gridClone = gameGrid.grid.clone();

        var path = null;

        if (this.creepID == 0) {
            path = fruitTD.pathFinder.findPath(this.gameGridX, this.gameGridY, this.destinationX, this.destinationY, gameGrid.gridClone);

        } else {
            if (fruitTD.checkIfCreepExist(this.creepID - 1)) {
                path = fruitTD.pathFinder.findPath(this.gameGridX, this.gameGridY, fruitTD.getCreepByID(this.creepID - 1).previousGameGridX, fruitTD.getCreepByID(this.creepID - 1).previousGameGridY, gameGrid.gridClone);

            }
        }

        //console.log(this.gameGridY);
        if(this.creepID==39 && this.gameGridX==20 && this.gameGridY==10)
        {
                    document.getElementById("dragPanell").style.display = "inline";
                    document.getElementById("toSpawnCreep").style.display = "inline";
                    document.getElementById("stageEnd").style.display="block";
                       document.getElementById("fruitTD").style.display="none";
                    setTimeout(function(){document.getElementById("stageEnd").style.display="none"},3000);
        }

        var nextStep = path[1];

        if (this.gameGridX == this.destinationX && this.gameGridY == this.destinationY) {
            if(this.healthPoint<=0)
            {
             this.hide=true;   
            }
            //alert(this.hide);
            if(this.hide==false)
            {
                fruitTD.life-=1;
            }
            this.hide = true;
            
            if(fruitTD.life==0)
            {
                document.getElementById("lose").style.display="block";
                setTimeout(function(){document.getElementById("lose").style.display="none"},3000); 
                setTimeout(function(){window.location='fruitTD.html'},5000);
            }
            
            return;

        } else {

            this.setLocation(nextStep[0], nextStep[1]);


            (function(j) {
                return setTimeout(function() {
                    j.move();
                }, 200);
            })(this);
        }


    };

    this.setLocation = function(nodeX, nodeY) {
        this.x = gameGrid.nodePosition[nodeX][nodeY][0];
        this.y = gameGrid.nodePosition[nodeX][nodeY][1];
        this.gameGridX = nodeX;
        this.gameGridY = nodeY;
    }


}

function creepDurian() {

    this.creepImage = new Image();
    this.healthPoint = 2400;
    this.maxHealth = 2400;
    this.src = "image/final_durian.png";
    this.x = 0;
    this.y = 0;
    this.gameGridX = 0;
    this.gameGridY = 0;
    this.previousGameGridX = null;
    this.previousGameGridY = null;
    this.destinationX = 20;
    this.destinationY = 10;
    this.creepID = null;
    this.hide = false;
    this.money = 80;


    

    this.move = function() {


        this.previousGameGridX = this.gameGridX;
        this.previousGameGridY = this.gameGridY;

        for (var i = 0; i < fruitTD.creepList.length; i++) {
            if(fruitTD.creepList[i].healthPoint>0)
            {
            gameGrid.grid.setWalkableAt(fruitTD.creepList[i].gameGridX, fruitTD.creepList[i].gameGridY, false);
            }
            else if(fruitTD.creepList[i].healthPoint<=0)
            {
                gameGrid.grid.setWalkableAt(fruitTD.creepList[i].gameGridX, fruitTD.creepList[i].gameGridY, true);
            }

            //THIS IS STARTING POINT
            if (this === fruitTD.creepList[i]) {
                gameGrid.grid.setWalkableAt(fruitTD.creepList[i].gameGridX, fruitTD.creepList[i].gameGridY, true);
            }
        }

        gameGrid.grid.setWalkableAt(this.destinationX, this.destinationY, true);



        //2nd clone
        gameGrid.gridClone = gameGrid.grid.clone();

        var path = null;

        if (this.creepID == 0) {
            path = fruitTD.pathFinder.findPath(this.gameGridX, this.gameGridY, this.destinationX, this.destinationY, gameGrid.gridClone);

        } else {
            if (fruitTD.checkIfCreepExist(this.creepID - 1)) {
                path = fruitTD.pathFinder.findPath(this.gameGridX, this.gameGridY, fruitTD.getCreepByID(this.creepID - 1).previousGameGridX, fruitTD.getCreepByID(this.creepID - 1).previousGameGridY, gameGrid.gridClone);

            }
        }

        //console.log(this.gameGridY);
        if(this.creepID==39 && this.gameGridX==20 && this.gameGridY==10)
        {
                    document.getElementById("dragPanell").style.display = "inline";
                    document.getElementById("toSpawnCreep").style.display = "inline";

        }

        var nextStep = path[1];

        if (this.gameGridX == this.destinationX && this.gameGridY == this.destinationY) {
            if(this.healthPoint<=0)
            {
             this.hide=true;   
            }
            //alert(this.hide);
            if(this.hide==false)
            {
                fruitTD.life-=1;
            }
            this.hide = true;
            
            if( fruitTD.life==0)
            {
                document.getElementById("lose").style.display="block";
                
                       document.getElementById("fruitTD").style.display="none";
                setTimeout(function(){document.getElementById("lose").style.display="none"},3000); 
                setTimeout(function(){window.location='fruitTD.html'},5000); 
            }else if(this.creepID==39 && fruitTD.life>0)
            {
                document.getElementById("win").style.display="block";
                setTimeout(function(){document.getElementById("win").style.display="none"},3000); 
                
                       document.getElementById("fruitTD").style.display="none";
                setTimeout(function(){window.location='fruitTD.html'},5000);
            }
            return;
        } else {

            this.setLocation(nextStep[0], nextStep[1]);


            (function(j) {
                return setTimeout(function() {
                    j.move();
                }, 200);
            })(this);
        }


    };

    this.setLocation = function(nodeX, nodeY) {
        this.x = gameGrid.nodePosition[nodeX][nodeY][0];
        this.y = gameGrid.nodePosition[nodeX][nodeY][1];
        this.gameGridX = nodeX;
        this.gameGridY = nodeY;
    }


}

