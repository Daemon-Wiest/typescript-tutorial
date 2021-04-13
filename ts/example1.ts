const loaded = (): void=>{
    document.getElementById("header1").innerText="hello, typescript";
};
//"include":["ts/**/**"] put that inside the tsconfig.json file, at the bottom, before the full end bracket

class Friend{
name:string;
age:number;
email:string;
bff:boolean;
constructor(name:string, age:number, email:string, bff:boolean){
    this.name=name;
    this.age=age;
    this.email=email;
    this.bff=bff;
}

}
