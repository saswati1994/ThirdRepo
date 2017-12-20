class Vehicle{
    
    constructor(num,dom){
        this.num=num;
        this.manufactureDate=dom
    }

    engine(){
        console.log("basic engine implementaion");
    }

}

class lambo extends Vehicle{

    constructor(num,dom){
        super(num,dom)
    }

    engine(){
        console.log("implementing engine for lambo");
    }

    static interior(){
        console.log("implementing interior of lambo using static method");
    }
    
    toString(){
        console.log(this.num,this.manufactureDate);
    }

}

class amg extends Vehicle{

    constructor(num,dom){
        super(num,dom)
    }

    engine(){
        console.log("implementing engine for amg");
    }

    static interior(){
        console.log("implementing interior of amg using static method");
    }
    
    toString(){
        console.log(this.num,this.manufactureDate);
    }

}



