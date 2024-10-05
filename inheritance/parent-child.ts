class Parent{
    protected features:string;
    public constructor(features:string){
        this.features=features;
    }
    public showFeature(){
         console.log(`Parent has features ${this.features}`);
         
    }
    
}
class child extends Parent{
    private extraFeatures: string;
    public constructor(features: string,extraFeatures: string)
    {
        
        super(features);
        this.extraFeatures=extraFeatures;
    }

    public showFeature(){
        console.log(`Child's features are:${this.features} and ${this.extraFeatures}`);
        
    }
    
}
let p=new Parent("sing");
let c=new child("can sing","can dance");
p.showFeature();
c.showFeature();

